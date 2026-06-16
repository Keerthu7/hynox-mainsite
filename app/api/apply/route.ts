import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const resume = formData.get('resume') as File | null;
    const coverLetter = formData.get('coverLetter') as string;
    const additionalLinks = formData.get('additionalLinks') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const hp_n = formData.get('hp_n') as string;
    const startTime = formData.get('startTime') as string;
    const turnstileToken = formData.get('turnstileToken') as string;

    // --- SPAM PROTECTION ---

    // 1. Honeypot
    if (hp_n) {
      console.warn("Honeypot filled in careers form. Blocking.");
      return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
    }

    // 2. Timer
    if (startTime) {
      const duration = Date.now() - Number(startTime);
      if (duration < 3000) {
        return NextResponse.json({ message: 'Submission too fast.' }, { status: 400 });
      }
    }

    // 3. Turnstile
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (secretKey && turnstileToken) {
      const tFormData = new FormData();
      tFormData.append('secret', secretKey);
      tFormData.append('response', turnstileToken);

      // Validate IP
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
      tFormData.append('remoteip', ip);

      try {
        const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          body: tFormData,
        });
        const tData = await turnstileRes.json();
        if (!tData.success) {
          return NextResponse.json({ message: 'Security check failed.' }, { status: 400 });
        }
      } catch (err) {
        console.error("Turnstile error:", err);
        return NextResponse.json({ message: 'Security check error.' }, { status: 500 });
      }
    } else if (secretKey && !turnstileToken) {
      return NextResponse.json({ message: 'Security check missing.' }, { status: 400 });
    }

    // --- END SPAM PROTECTION ---

    if (!name || !email || !jobTitle) {
      return NextResponse.json({ message: 'Name, Email, and Job Title are required.' }, { status: 400 });
    }

    // Check Gmail credentials
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword || gmailAppPassword === 'your_gmail_app_password_here') {
      throw new Error('GMAIL_USER or GMAIL_APP_PASSWORD is not set correctly in environment variables');
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Prepare main email content
    const mainEmailHtmlContent = `
      <h2>New Job Application</h2>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Additional Links:</strong></p>
      <p>${additionalLinks || 'N/A'}</p>
      <p><strong>Cover Letter:</strong></p>
      <p>${coverLetter || 'N/A'}</p>
    `;

    const attachments: any[] = [];

    // Attach resume if provided
    if (resume) {
      const resumeBuffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: resumeBuffer,
      });
    }

    // Send main email via Gmail
    try {
      await transporter.sendMail({
        from: `"HYNOX Careers" <${gmailUser}>`,
        to: gmailUser, // Sending to yourself
        replyTo: email, // Reply to applicant
        subject: `New Job Application for ${jobTitle} from ${name}`,
        html: mainEmailHtmlContent,
        attachments: attachments.length > 0 ? attachments : undefined,
      });
      console.log('Main application email sent successfully via Gmail.');
    } catch (mainErr: any) {
      console.error('Error sending main email via Gmail:', mainErr);
      throw mainErr;
    }

    // Send confirmation email to applicant via Gmail
    if (email) {
      const confirmationEmailHtmlContent = `
        <p>Hi ${name},</p>

        <p>Thank you for applying for the <strong>${jobTitle}</strong> position at HYNOX.</p>
        <p>We've successfully received your application.</p>

        <p>The interview process will have 2 rounds:</p>
        <ul>
        <li>One to One Interview – Technical + HR</li>
          <li>Practical Task (Take-home) – 48 hours (Optional)</li>
        </ul>

        <p>If shortlisted, you will soon receive your first round assignment.</p>

        <p>Best regards,<br/>
        Team HYNOX<br/>
        thehynoxofficial@gmail.com<br/>
        +91 88705 24355</p>
      `;

      try {
        await transporter.sendMail({
          from: `"HYNOX Careers" <${gmailUser}>`,
          to: email,
          subject: `Application Received – ${jobTitle} @ HYNOX`,
          html: confirmationEmailHtmlContent,
        });
        console.log('Confirmation email sent to applicant via Gmail.');
      } catch (confErr) {
        console.error('Error sending confirmation email via Gmail:', confErr);
        // Do not throw here, as the main email was successful
      }
    }

    // --- Google Sheets Logic ---
    try {
      if (process.env.GOOGLE_SHEETS_CLIENT_EMAIL && process.env.GOOGLE_SHEETS_PRIVATE_KEY && process.env.GOOGLE_SHEET_CAREERS_ID) {
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const newRow = [jobTitle, name, email, phone || 'N/A', coverLetter || 'N/A', additionalLinks || 'N/A'];

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_CAREERS_ID,
          range: 'CAREERS_APPLICATIONS!A:F',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [newRow],
          },
        });

        console.log('Careers application data successfully saved to Google Sheet.');
      }
    } catch (sheetError) {
      console.error('Error saving careers application data to Google Sheet:', sheetError);
    }

    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}