// lib/mongodb.js
import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI; // Check your .env file
const options = {};

if (!uri) {
  throw new Error("Please add your Mongo URI to .env");
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so that the value is preserved across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri as string, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, avoid using a global variable
  client = new MongoClient(uri as string, options);
  clientPromise = client.connect();
}

export default clientPromise;
