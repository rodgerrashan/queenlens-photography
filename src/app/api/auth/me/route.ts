// src/app/api/auth/me/route.js

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("token");

    if (!token) {
      return Response.json({ user: null, error: "No token found" }, { status: 401 });
    }

    const decoded = jwt.verify(token.value, JWT_SECRET);

    return Response.json({ user: decoded }, { status: 200 });

  } catch (err) {
    return Response.json({ user: null, error: "Invalid token" }, { status: 401 });
  }
}
