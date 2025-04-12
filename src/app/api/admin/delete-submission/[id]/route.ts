"use server"
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb"; 

// route.ts
export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim() ?? "";


    console.log("Extracted _id: for deletion", id);

    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Valid _id is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    if (!client) {
      return new Response(JSON.stringify({ error: "Database connection failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const db = client.db("contact"); 
    const contactsCollection = db.collection("contacts");

    // Check if user exists
    const userExists = await contactsCollection.findOne({ _id: new ObjectId(id) });
    if (!userExists) {
      console.log("sumission cannot found");
      return new Response(JSON.stringify({ error: "Submission not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Delete user
    const result = await contactsCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Failed to delete submission" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Submission deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });

  } catch (error) {
    console.error("Error deleting submission:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
