"use server"

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { findUser, verifyPassword } from "../../../../models/Users";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // const newUser = await createUser(email,password,"admin");

    if (!email || !password) {
      return NextResponse.json({ message: "Missing email or password" }, { status: 400 });
    }

    const user = await findUser(email);
    if (!user || !(await verifyPassword(password, user.password))) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    if (!token) {
      return NextResponse.json({ message: "Token generation failed" }, { status: 500 });
    }

    console.log(user._id, user.role, token, user.email);

    return NextResponse.json(
      { message: "Login successful", token, id: user._id, role: user.role },
      {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly; Path=/; SameSite=Strict`,
      },
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
