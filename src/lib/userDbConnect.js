import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();



const MONGODB_URI = process.env.MONGODB_URI;

let client;
let db;

async function userDbConnect() {
    if (!client || !client.isConnected()) {
        try {
            client = new MongoClient(MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            await client.connect();
            db = client.db("users"); 
        } catch (error) {
            // console.error("Failed to connect to the database:", error);
            throw error;
        }
    }
    return { db, client };
}

export default userDbConnect;