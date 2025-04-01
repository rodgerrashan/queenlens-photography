// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.firstName || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Connect to MongoDB
    const client = new MongoClient(uri as string);
    await client.connect();
    
    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection('contacts');
    
    // Add timestamp
    const contactData = {
      ...body,
      createdAt: new Date(),
    };
    
    // Insert data
    await collection.insertOne(contactData);
    
    // Close connection
    await client.close();
    
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}