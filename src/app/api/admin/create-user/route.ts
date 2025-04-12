import { createUser } from "../../../../models/Users";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { SendEmail } from "./SendMail";

export async function POST(req: NextRequest) {

  console.log("Request method:", req.method);
  const body = await req.json();
  console.log("Request body:", body);
  if (req.method !== "POST") return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });

  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decoded !== "object" || decoded === null || !("role" in decoded)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { role } = decoded as jwt.JwtPayload;
    if (role !== "site-admin") return NextResponse.json({ message: "Forbidden" }, { status: 403 });

    const { email, password } = body;
    await createUser(email, password, role);
    await SendEmail(email);
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
