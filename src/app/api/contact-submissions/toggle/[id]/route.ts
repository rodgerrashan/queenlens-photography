// app/api/contact-submissions/toggle/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

import { MongoClient } from "mongodb";

const clientPromise: Promise<MongoClient> = client.connect();

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await the params object before destructuring
    const { id } = await params;
    console.log("Extracted user ID:", id);
    
    const body = await request.json();
    const currentReadStatus = body.read;
    console.log("Current read status:", currentReadStatus);
    
    const client = await clientPromise;
    const db = client.db("contact");
    
    // Toggle the read status
    const newReadStatus = currentReadStatus;
    console.log("New read status:", newReadStatus);
    
    const result = await db.collection("contacts").updateOne(
      { _id: new  ObjectId(id) },
      { $set: { read: newReadStatus } }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { success: true, newReadStatus },
      { status: 200 }
    );


  } catch (error) {
    console.error("Error updating contact read status:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as Error).message },
      { status: 500 }
    );
  }
}