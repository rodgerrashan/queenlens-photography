import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    console.log("Extracted contact ID:", id);

    const body = await request.json();
    const currentReadStatus = body.read;
    console.log("Current read status:", currentReadStatus);

    const client = await clientPromise;
    const db = client.db("contact");

    // Toggle or update read status
    const result = await db.collection("contacts").updateOne(
      { _id: new ObjectId(id) },
      { $set: { read: currentReadStatus } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, newReadStatus: currentReadStatus },
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
