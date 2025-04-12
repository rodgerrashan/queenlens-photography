import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("contact");
    const contacts = await db.collection("contacts").find({}).sort({ _id: -1 }).toArray();

    return new Response(JSON.stringify(contacts), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    // console.error("Error fetching contacts:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
