import nodemailer from "nodemailer";


export async function SendEmail(email: string) { // Changed String to string
  if (!process.env.INFO_SERVICES_EMAIL_PASS || !process.env.INFO_SERVICES_EMAIL_USER) {
    throw new Error('SMTP credentials are not defined in environment variables');
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Added explicit host (adjust if using another service)
      port: 465, // Explicit port for secure connection
      secure: true, // Secure connection (port 465)
      auth: {
        user: process.env.INFO_SERVICES_EMAIL_USER,
        pass: process.env.INFO_SERVICES_EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: `"QueenLens Photography" <${process.env.INFO_SERVICES_EMAIL_USER}>`,
      to: email, // Use email directly, no need for recipient variable
      subject: '🎉 Your QueenLens.lk Account is Ready!',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
          <h2 >Welcome to <span>QueenLens.lk</span></h2>
          <p>Hi <strong>${email}</strong>,</p>
          <p>We are excited to let you know that your account has been successfully created on <strong>QueenLens.lk</strong>! 🎉</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-left: 4px solid #7c3aed; margin: 20px 0;">
            <p><strong>📧 Username (Email):</strong> ${email}</p>
            <p><strong>🔐 Password:</strong> Please contact site admin.</p>
          </div>
          <p>You can now log in and explore our services through the client portal.</p>
          <a href="https://queenlens.lk/login" style="
            display: inline-block;
            padding: 12px 24px;
            margin-top: 10px;
            font-size: 16px;
            background-color: #7c3aed;
            color: white;
            text-decoration: none;
            border-radius: 8px;
          ">Login to Your Account</a>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 40px 0;">
          <p style="font-size: 12px; color: #999; margin-top: 20px;">
            This is an automated message from <strong>QueenLens Photography</strong>. Please do not reply directly to this email.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);

  } catch{
    // console.error('Error in contact API:', error);
  }
}
