import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, interest, message, hp_n, startTime, turnstileToken } = body;

    // --- SPAM PROTECTION ---

    // 1. Honeypot Check
    if (hp_n) {
      console.warn("Honeypot filled. Blocking spam submission.");
      // Return success to confuse bots
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    }

    // 2. Time-based Validation (Minimum 3 seconds)
    if (startTime) {
      const duration = Date.now() - Number(startTime);
      if (duration < 3000) { // 3 seconds
        console.warn(`Form submitted too quickly (${duration}ms). Blocking potential bot.`);
        return NextResponse.json({ message: 'Submission too fast. Please try again.' }, { status: 400 });
      }
    }

    // 3. Cloudflare Turnstile Verification
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (secretKey && turnstileToken) {
      const formData = new FormData();
      formData.append('secret', secretKey);
      formData.append('response', turnstileToken);

      // Validate IP (Optional but recommended)
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
      formData.append('remoteip', ip);

      try {
        const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          body: formData,
        });

        const turnstileData = await turnstileRes.json();
        if (!turnstileData.success) {
          console.error("Turnstile verification failed:", turnstileData);
          return NextResponse.json({ message: 'Security check failed. Please refresh and try again.' }, { status: 400 });
        }
      } catch (err) {
        console.error("Error verifying Turnstile:", err);
        // Fail open or closed? Let's fail closed for security.
        return NextResponse.json({ message: 'Security check error.' }, { status: 500 });
      }
    } else if (secretKey && !turnstileToken) {
      // If secret key is set but no token provided, block it.
      return NextResponse.json({ message: 'Security check missing.' }, { status: 400 });
    }

    // --- END SPAM PROTECTION ---

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Name, Email, Subject, and Message are required.' }, { status: 400 });
    }

    // Log API key for debugging (remove first/last few chars for security)
    const apiKey = process.env.BREVO_API_KEY;
    console.log('API Key exists:', !!apiKey);
    console.log('API Key length:', apiKey?.length);

    if (!apiKey) {
      throw new Error('BREVO_API_KEY is not set in environment variables');
    }

    // --- Email Sending Logic (Brevo) ---
    const apiInstance = new brevo.TransactionalEmailsApi();

    // Try setting API key using the authentications property directly
    try {
      apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);
    } catch (authError) {
      console.error('setApiKey failed, trying alternative method:', authError);
      // Alternative: Direct property access
      (apiInstance as any).authentications = {
        apiKey: {
          apiKey: apiKey
        }
      };
    }

    const contactEmailHtmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

    const companySendSmtpEmail = new brevo.SendSmtpEmail();
    companySendSmtpEmail.sender = { email: process.env.EMAIL_USER as string, name: "HYNOX Contact" };
    companySendSmtpEmail.to = [{ email: process.env.COMPANY_EMAIL as string }];
    companySendSmtpEmail.subject = `Contact Form: ${subject} (Interest: ${interest})`;
    companySendSmtpEmail.htmlContent = contactEmailHtmlContent;

    try {
      await apiInstance.sendTransacEmail(companySendSmtpEmail);
      console.log('Company contact email sent successfully via Brevo.');
    } catch (brevoErr: any) {
      console.error('Error sending company contact email via Brevo:', brevoErr);
      console.error('Error response:', brevoErr.response?.data);
      throw brevoErr;
    }

    // Send confirmation email to the user
    const confirmationEmailHtmlContent = `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to HYNOX.</p>
        <p>We have received your message regarding: <strong>${subject}</strong>.</p>
        <p>We will get back to you shortly.</p>
        <p>Best regards,<br/>
        Team HYNOX<br/>
        thehynoxofficial@gmail.com<br/>
        +91 88705 24355</p>
      `;

    const confirmationSendSmtpEmail = new brevo.SendSmtpEmail();
    confirmationSendSmtpEmail.sender = { email: process.env.EMAIL_USER as string, name: "HYNOX" };
    confirmationSendSmtpEmail.to = [{ email: email }];
    confirmationSendSmtpEmail.subject = `Thank you for contacting HYNOX`;
    confirmationSendSmtpEmail.htmlContent = confirmationEmailHtmlContent;

    try {
      await apiInstance.sendTransacEmail(confirmationSendSmtpEmail);
      console.log('Confirmation email sent to user via Brevo.');
    } catch (confErr) {
      console.error('Error sending confirmation email to user via Brevo:', confErr);
    }

    // --- Google Sheets Logic ---
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const newRow = [name, email, phone || 'N/A', subject, interest, message];

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'HYNOX_LEADS!A:F',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [newRow],
        },
      });

      console.log('Contact data successfully saved to Google Sheet.');

    } catch (sheetError) {
      console.error('Error saving contact data to Google Sheet:', sheetError);
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
