"use server"
import { NextResponse } from 'next/server';

export async function POST() {
  // Clear the token cookie
  const response = NextResponse.json({ message: "Logged out successfully" });
  response.cookies.set('token', '', { httpOnly: true, path: '/', maxAge: 0 });

  // Add logic to terminate server-side session if applicable
  const sessionId = response.cookies.get('sessionId')?.value;
  if (sessionId) {
    // Assuming you have a session store instance
    await sessionStorage.destroy(sessionId);
  }

  return response;
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}