"use client";
import React, { useEffect, useState } from "react";
import {FaEnvelopeOpen, FaPhone, FaWhatsapp } from "react-icons/fa";

// Define the Submission interface
interface Submission {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
  read: boolean;
}


async function toggleSubmissionReadStatus(id: string, read: boolean) {
  // console.log("Toggling submission read status:", id, read);
  try {
    const response = await fetch(`/api/contact-submissions/toggle/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ read }),
    });

    if (!response.ok) {
      throw new Error("Failed to update submission status");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // console.error("Error updating submission status:", error);
  }
}

export default function Submissions() {
  const [contactSubmissions, setContactSubmissions] = useState<Submission[]>([]);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

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
        // console.error("Error fetching contact submissions:", error);
      }
    };
    fetchSubmissions();
  }, []);

  const toggleRowExpansion = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="bg-gray-100 px-10">
      <h1 className="text-2xl  font-bold mb-4 md:mb-6">Customer Services</h1>
      <div className="bg-white rounded-2xl shadow p-3 md:p-4">
        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact Form Submissions</h2>

        {/* Desktop Table - Hidden on mobile */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 text</div>-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Service</th>
                <th className="py-3 px-4 text-left">Message</th>
                <th className="py-3 px-4 text-center">Actions</th>
                <th className="py-3 px-4 text-center">Chaecked</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-md">
              {contactSubmissions.map((submission) => (
                <tr
                  key={submission._id}
                  className={`border-b hover:bg-gray-50 ${
                    submission.read ? "font-medium" : "font-semibold"
                  }`}
                >
                  <td className="py-2 px-4">{new Date(submission.createdAt).toLocaleDateString()}</td>
                  <td className="py-2 px-4">{submission.email}</td>
                  <td className="py-2 px-4">{`${submission.firstName} ${submission.lastName}`}</td>
                  <td className="py-2 px-4">{submission.phone}</td>
                  <td className="py-2 px-4">{submission.service}</td>
                  <td className="py-2 px-4">
                    {submission.message.length > 30
                      ? `${submission.message.substring(0, 30)}...`
                      : submission.message}
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex justify-center space-x-5">
                      {[
                        { icon: FaWhatsapp, href: `https://wa.me/+94${submission.phone}`, color: 'text-green-600' },
                        { icon: FaEnvelopeOpen, href: `mailto:${submission.email}`, color: 'text-blue-400' },
                        { icon: FaPhone, href: `tel:${submission.phone}`, color: 'text-black' },
                      ].map(({ icon: Icon, href, color }) => (
                        <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
                          <Icon className={`${color} text-xl hover:scale-110 transition`} />
                        </a>
                      ))}
                    </div>
                  </td>
                    <td className="py-2 px-4 text-center">
                    <div className="flex justify-center">
                      <input
                      type="checkbox"
                      checked={submission.read ?? false}
                      onChange={async (e) => {
                        const newReadStatus = e.target.checked;
                        const updatedSubmission = await toggleSubmissionReadStatus(submission._id, newReadStatus);
                        if (updatedSubmission) {
                        setContactSubmissions((prevSubmissions) =>
                          prevSubmissions.map((s) =>
                          s._id === submission._id ? { ...s, read: newReadStatus } : s
                          )
                        );
                        }
                      }}
                      className="w-4 h-4 text-gray-950 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden">
          {contactSubmissions.map((submission) => (
            <div 
              key={submission._id} 
              className={`mb-4 border rounded-lg overflow-hidden ${
                submission.read ? "border-gray-200" : "border-blue-300"
              }`}
            >
              <div 
                className={`p-3 flex justify-between items-center cursor-pointer ${
                  submission.read ? "bg-white" : "bg-blue-50"
                }`}
                onClick={() => toggleRowExpansion(submission._id)}
              >
                <div className="flex-1">
                  <div className={`${submission.read ? "font-medium" : "font-bold"}`}>
                    {`${submission.firstName} ${submission.lastName}`}
                  </div>
                  <div className="text-sm text-gray-600">
                    {new Date(submission.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                <input
                      type="checkbox"
                      checked={submission.read ?? false}
                      onChange={async (e) => {
                        const newReadStatus = e.target.checked;
                        const updatedSubmission = await toggleSubmissionReadStatus(submission._id, newReadStatus);
                        if (updatedSubmission) {
                        setContactSubmissions((prevSubmissions) =>
                          prevSubmissions.map((s) =>
                          s._id === submission._id ? { ...s, read: newReadStatus } : s
                          )
                        );
                        }
                      }}
                      className="w-4 h-4 text-gray-950 border-gray-300 rounded focus:ring-blue-500"
                      />
                  <div className="text-gray-400">
                    {expandedRow === submission._id ? "▲" : "▼"}
                  </div>
                </div>
              </div>
              
              {expandedRow === submission._id && (
                <div className="p-3 border-t border-gray-200 bg-gray-50">
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <span className="font-medium">Email:</span> {submission.email}
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span> {submission.phone}
                    </div>
                    <div>
                      <span className="font-medium">Service:</span> {submission.service}
                    </div>
                    <div>
                      <span className="font-medium">Message:</span> {submission.message}
                    </div>
                    <div className="flex justify-start space-x-4 mt-2">
                      {[
                        { icon: FaWhatsapp, href: `https://wa.me/+94${submission.phone}`, color: 'text-green-600' },
                        { icon: FaEnvelopeOpen, href: `mailto:${submission.email}`, color: 'text-blue-400' },
                        { icon: FaPhone, href: `tel:${submission.phone}`, color: 'text-black' },
                      ].map(({ icon: Icon, href, color }) => (
                        <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
                          <Icon className={`${color} text-3xl hover:scale-110 transition p-2`} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}