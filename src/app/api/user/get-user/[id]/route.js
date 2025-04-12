"use server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export async function GET(request) {
    // console.log("GET request received for user details");
    try {
        const url = new URL(request.url);
        const id = url.pathname.split("/").pop();
        // console.log("Extracted user ID:", id);

        if (!ObjectId.isValid(id)) {
            return new Response(JSON.stringify({ error: "Invalid user ID" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const client = await clientPromise;
        const db = client.db("users");

        // Convert id to ObjectId
        const objectId = new ObjectId(id);

        // Find the user by id
        const user = await db.collection("users").findOne({ _id: objectId });

        if (!user) {
            return new Response(JSON.stringify({ error: "User not found" }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        // Return email and role
        const { email, role } = user;
        return new Response(JSON.stringify({ email, role }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch {
        // console.error("Error fetching user:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
        });
    }
}
