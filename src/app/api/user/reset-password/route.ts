"use server";

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { updateUserPassword, findUserById } from "../../../../models/Users";

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json();
    // console.log(newPassword);

    if (!token || !newPassword) {
      return NextResponse.json({ message: "Missing token or password" }, { status: 400 });
    }

    // Verify the token
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
    } catch {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
    }

    const { userId } = decodedToken as { userId: string };

    // Find the user by ID
    const user = await findUserById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    await updateUserPassword(userId, hashedPassword);

    return NextResponse.json({ message: "Password has been reset successfully" }, { status: 200 });
  } catch {
    // console.error("Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
