import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

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

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ message: 'Name, Email, Phone, Subject, and Message are required.' }, { status: 400 });
    }

    // Check Gmail credentials
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword || gmailAppPassword === 'your_gmail_app_password_here') {
      throw new Error('GMAIL_USER or GMAIL_APP_PASSWORD is not set correctly in environment variables');
    }

    // --- Email Sending Logic (Nodemailer with Gmail) ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const contactEmailHtmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Interest:</strong> ${interest || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

    try {
      // Send the email to the company
      await transporter.sendMail({
        from: `"HYNOX Website" <${gmailUser}>`,
        to: gmailUser, // Sending to the same email address
        replyTo: email, // Reply to the user who filled the form
        subject: `New Lead: ${subject} (Interest: ${interest || 'N/A'})`,
        html: contactEmailHtmlContent,
      });
      console.log('Company contact email sent successfully via Gmail.');
    } catch (mailErr: any) {
      console.error('Error sending company contact email via Gmail:', mailErr);
      throw mailErr;
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

    try {
      await transporter.sendMail({
        from: `"HYNOX Team" <${gmailUser}>`,
        to: email,
        subject: `Thank you for contacting HYNOX`,
        html: confirmationEmailHtmlContent,
      });
      console.log('Confirmation email sent to user via Gmail.');
    } catch (confErr) {
      console.error('Error sending confirmation email to user via Gmail:', confErr);
      // We don't throw here, because the main lead email was already sent successfully
    }

    // --- Google Sheets Logic ---
    try {
      if (process.env.GOOGLE_SHEETS_CLIENT_EMAIL && process.env.GOOGLE_SHEETS_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
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
      }
    } catch (sheetError) {
      console.error('Error saving contact data to Google Sheet:', sheetError);
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
