const { MongoClient } = require("mongodb");
require("dotenv").config();


const MONGODB_URI = "mongodb+srv://rodrasjay2:Swetha%4020032003@cluster0.j4nfbaa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
            console.error("Failed to connect to the database:", error);
            throw error;
        }
    }
    return { db, client };
}

module.exports = userDbConnect;