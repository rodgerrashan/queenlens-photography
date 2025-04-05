"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaEnvelopeOpen, FaPhone, FaWhatsapp } from "react-icons/fa";

// Define the Submission interface
interface Submission {
  _id:string,
  firstName: string;
  lastName: string;
  email: string;
  phone: string
  service: string;
  message: string;
  createdAt: string;
  read:boolean;

}

let submissions: Submission[] = [];

export default function Submissions() {
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
      <h1 className="text-3xl font-bold mb-6">Customer Services</h1>
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
      <h1 className="text-xl font-bold mb-6">Contact Form Submissions</h1>

      <div className="overflow-x-auto">

      <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr className="bg-gray-200 text-left">
            <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Service</th>
              <th className="py-3 px-6 text-left">Message</th>
              <th className="py-3 px-6 text-center">Actions</th>
              <th className="py-3 px-6 text-center">Mark as Read</th>

              
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-medium">
            {contactSubmissions?.map((submission) => (
              <tr key={submission._id} className="border-b hover:bg-gray-50">
                <td className="p-3 ">{new Date(submission.createdAt).toLocaleDateString()}</td>
                <td className="p-3 ">{submission.email}</td>
                <td className="p-3 ">{submission.firstName}</td>
                <td className="p-3 ">{submission.lastName}</td>
                <td className="p-3 ">{submission.phone}</td>
                <td className="p-3">{submission.service}</td>
                <td className="p-3">{submission.message}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center space-x-4">
                    

                    {[
                                    { icon: FaWhatsapp, href: `https://wa.me/+94${submission.phone}`, color: 'text-green-600' },
                                    { icon: FaEnvelopeOpen, href: `mailto:${submission.email}`, color: 'text-blue-400' },
                                    { icon: FaPhone, href: `tel:${submission.phone}`, color: 'text-black' },
                                  ].map(({ icon: Icon, href, color }) => (
                                    <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
                                      <Icon className={`${color} text-2xl hover:scale-110 transition`} />
                                    </a>
                                  ))}
                  </div>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={async () => {
                      try {
                        const response = await fetch(`/api/contact-submissions/${submission._id}/mark-as-read`, {
                          method: "PATCH",
                        });
                        if (!response.ok) {
                          throw new Error("Failed to mark as read");
                        }
                        setContactSubmissions((prev) =>
                          prev.map((item) =>
                            item._id === submission._id ? { ...item, read: true } : item
                          )
                        );
                      } catch (error) {
                        console.error("Error marking as read:", error);
                      }
                    }}
                    className={`px-4 py-2 rounded ${
                      submission.read ? "bg-gray-300 text-gray-600" : "bg-green-500 text-white"
                    }`}
                    disabled={submission.read}
                  >
                    {submission.read ? "Read" : "Mark as Read"}
                  </button>
                </td>
                

              </tr>
            ))}
          </tbody>
        </table>

      </div>
        
      </div>
    </div>
  );
}
