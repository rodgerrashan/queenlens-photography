import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // Prevent TypeScript from complaining on hot reload
  var mongoose: MongooseCache | undefined;
}

// Initialize cache
let cached = global.mongoose ?? { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) {
    return { conn: cached.conn, db: cached.conn.connection.db };
  }

  if (!cached.promise) {
    // Ensure the URI includes the correct database name
    const fullUri = MONGODB_URI && MONGODB_URI.includes("/") 
      ? MONGODB_URI 
      : `${MONGODB_URI}/users`;

    cached.promise = mongoose
      .connect(fullUri, {
        dbName: "users", // Redundant fallback for some URI setups
      })
      .then((mongoose) => {
        console.log("✅ Connected to MongoDB - Users DB");
        return mongoose;
      })
      .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return { conn: cached.conn, db: cached.conn.connection.db };
}

export default dbConnect;
