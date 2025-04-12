// test-mongodb.js
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '../.env.local' });

async function testConnection() {
  const uri = process.env.MONGODB_URI;
  // console.log("Connecting to:", uri);
  
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // console.log("Connected successfully");
    await client.close();
  } catch (err) {
    console.error("Connection error:", err);
  }
}

testConnection();