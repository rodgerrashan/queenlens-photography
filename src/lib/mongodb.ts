// lib/mongodb.ts
import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development, use a single MongoClient instance
  if (!globalThis._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalThis._mongoClientPromise = client.connect();
  }
  clientPromise = globalThis._mongoClientPromise!;
} else {
  // In production, create a new MongoClient instance
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
