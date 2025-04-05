"use server"
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_NOTIFY;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable');
}


// Get all notifications
export async function GET() {
  try {
    // Connect to MongoDB
    const client = new MongoClient(uri as string);
    await client.connect();

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection('notifications');

    // Fetch all notifications
    const notifications = await collection.find({}).sort({ createdAt: -1 }).toArray();

    // Close connection
    await client.close();

    return NextResponse.json(notifications, { status: 200 });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Add a new notification
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, time } = body;

    if (!message || !time) {
      return NextResponse.json({ success: false, error: 'Message, and time are required' }, { status: 400 });
    }

    // Connect to MongoDB
    const client = new MongoClient(uri as string);
    await client.connect();

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection('notifications');

    // Add timestamp
    const contactData = {
      ...body,
      createdAt: new Date(),
    };

    // Insert data
    await collection.insertOne(contactData);

    // Check the number of records and delete the oldest ones if necessary
    const count = await collection.countDocuments();
    if (count > 15) {
      const oldestRecords = await collection
        .find({})
        .sort({ createdAt: 1 }) // Sort by createdAt in ascending order
        .limit(count - 15) // Get the excess records
        .toArray();

      const oldestIds = oldestRecords.map(record => record._id);
      await collection.deleteMany({ _id: { $in: oldestIds } });
    }

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
