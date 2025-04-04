"use client";
import React, { useEffect, useState } from "react";

// Define the Submission interface
interface Submission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
  createdAt: string;
}

// Dummy contact form data
let submissions: Submission[] = [];

export default function AdminDashboard() {
  const [contactSubmissions, setContactSubmissions] = useState<Submission[]>(submissions);

    useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch("/api/contact-submissions");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContactSubmissions(data);
        
      } catch (error) {
        console.error("Error fetching contact submissions:", error);
      }
      };
      fetchSubmissions();
    }, []);
    
  return (


    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Form Submissions</h1>
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Message</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {contactSubmissions?.map((submission) => (
              <tr key={submission.id} className="border-b hover:bg-gray-50">
                <td className="p-3 whitespace-nowrap">{submission.id}</td>
                <td className="p-3 whitespace-nowrap">{submission.email}</td>
                <td className="p-3">{submission.message}</td>
                <td className="p-3 whitespace-nowrap">{submission.createdAt}</td>
                <td className="p-3 whitespace-nowrap">{submission.firstName}</td>
                <td className="p-3 whitespace-nowrap">{submission.lastName}</td>
                <td className="p-3 whitespace-nowrap">{submission.service}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
