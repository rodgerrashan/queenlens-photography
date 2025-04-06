"use server"
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb"; 

export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop().trim(); // Extract _id from the URL

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

    const db = client.db("users"); // Change to your actual DB name
    const usersCollection = db.collection("users");

    // Check if user exists
    const userExists = await usersCollection.findOne({ _id: new ObjectId(id) });
    if (!userExists) {
      console.log("user cannot found");
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Delete user
    const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Failed to delete user" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "User deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });

  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
