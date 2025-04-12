"use server"
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';
import { findAllUsers } from '@/models/Users';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const infoEmailUser = process.env.INFO_SERVICES_EMAIL_USER;
const infoEmailPass = process.env.INFO_SERVICES_EMAIL_PASS;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment variable');
}

if (!infoEmailUser || !infoEmailPass) {
  throw new Error('Please define the EMAIL_USER and EMAIL_PASS environment variables');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const users = await findAllUsers();
    const emails = users.map(user => user.email).filter(email => !!email);

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
      status: 'unread', 
    };

    // Insert data
    await collection.insertOne(contactData);

    // Close connection
    await client.close();

    // Send email to the customer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Added explicit host (adjust if using another service)
      port: 465, // Explicit port for secure connection
      secure: true, 
      service: 'gmail',
      auth: {
        user: infoEmailUser,
        pass: infoEmailPass,
      },
    });

    const customerMailOptions = {
      
      from: `"QueenLens Photography" <${infoEmailUser}>`,
      to: body.email,
      subject: 'Thank You for Contacting QueenLens Photography!',
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #007bff;">Hi ${body.firstName},</h2>
      <p>Thank you for reaching out to us regarding <strong>${body.service}</strong>. We have received your message and our team will get back to you shortly.</p>


      
      <p>Best regards,</p>
      <p><strong>QueenLens Photography Team</strong></p>
      

      <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
      <a href="https://wa.me/+94719991164" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" style="width: 32px; height: 32px; padding:5px;">
      </a>
      <a href="https://t.me/+94719991164" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" style="width: 32px; height: 32px; padding:5px;">
      </a>
      <a href="mailto:dinukanipun2001@gmail.com" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" style="width: 32px; height: 32px; padding:5px;">
      </a>
      <a href="tel:+94719991164" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
        <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" style="width: 32px; height: 32px; padding:5px;">
      </a>
      </div>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            
      <p style="font-size: 12px; color: #999; margin-top: 20px;">This is an automated message. Please do not reply directly to this email.</p>

      </div>
      `,
    };

    await transporter.sendMail(customerMailOptions);

    for (const email of emails){
      await transporter.sendMail(
        {
          from: `"QueenLens Photography" <${infoEmailUser}>`,
          to: email,
          subject: 'New Contact Form Submission',
          html: `
          <p>A new message has been submitted:</p>
          <ul>
            <li><strong>Name:</strong> ${body.firstName}</li>
            <li><strong>Service:</strong> ${body.service}</li>
          </ul>
          <p>Please check the admin panel for more details:</p>
          <a href="http://localhost:3000/user/dashboard/" style="
            display: inline-block;
            padding: 10px 20px;
            margin-top: 10px;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 5px;
          ">Go to Admin Portal</a>
    
    
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                
          <p style="font-size: 12px; color: #999; margin-top: 20px;">This is an automated message. Please do not reply directly to this email.</p>
    
          `,
        }

      );

    }

    

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch {
    // console.error('Error in contact API:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}