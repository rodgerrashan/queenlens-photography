"use server";

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { findUser } from "../../../../../../models/Users";

export async function POST(req: Request) {
  try {
    const { userId, email } = await req.json();

    if (!userId || !email) {
      return NextResponse.json({ message: "Missing email or password" }, { status: 400 });
    }

    const secret_user = await findUser(email);

    if (!secret_user || secret_user._id === userId) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Generate a reset token
    const token = jwt.sign({ userId: secret_user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    // Create a reset link
    const resetLink = `http://localhost:3000/user/reset-password?token=${token}`;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.RESET_EMAIL_USER, 
        pass: process.env.RESET_EMAIL_PASS, 
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"QueenLens Photography" <${process.env.RESET_EMAIL_USER}>`,
      to: secret_user.email,
      subject: "Queenlens Password Reset",
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #555;">Password Reset Request</h2>
        <p>Hi ${secret_user.name || "User"},</p>
        <img src="https://queenlens.lk/public/images/logo/brand.png" alt="QueenLens Photography" style="width: 150px; margin-top: 20px;">
        <p>We received a request to reset your password. Click the button below to reset it:</p>
        <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; margin: 10px 0; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>
        <p>If you did not request this, please ignore this email. This link will expire in 1 hour.</p>


        <p style="margin-top: 20px;">Best regards,</p>
        <img src="https://queenlens.lk/public/images/helloWorld/HelloWorld.png" alt="helloworld" style="width: 150px; margin-top: 20px;">
        <p><strong>.Helloworld dev team</strong></p>
      </div>
      `,
    });

    return NextResponse.json(
      { message: "Reset link has been sent, Check your inbox" },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
