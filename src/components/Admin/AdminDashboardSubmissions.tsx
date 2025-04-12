"use client";
import React, { useEffect, useState } from "react";

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

async function handleDeleteSubmissions(
  id: string,
  setContactSubmissions: React.Dispatch<React.SetStateAction<Submission[]>>
) {
  // console.log("Attempting to delete submission with ID:", id);
  const userConfirmed = confirm("Are you sure you want to delete this submission?");
  if (!userConfirmed) return;

  try {
    const response = await fetch(`/api/admin/delete-submission/${id}`, {
      method: "DELETE",
    });

    // console.log("Delete API response status:", response.status);

    if (response.ok) {
      const data = await response.json();
      // console.log("Delete API response data:", data);
      if (data.success) {
        alert("Submission deleted successfully!");
        // Update state immutably
        setContactSubmissions((prev) => {
          const newSubmissions = prev.filter((submission) => submission._id !== id);
          // console.log("Updated submissions after delete:", newSubmissions);
          return newSubmissions;
        });
      } else {
        alert(data.message || "Failed to delete submission.");
      }
    } else {
      const errorData = await response.json();
      alert(errorData.message || "Failed to delete submission.");
    }
  } catch  {
    // console.error("Error deleting submission:", error);
    alert("An error occurred while deleting the submission.");
  }
}

export default function AdminDashboardSubmissions() {
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
        // console.log("Fetched submissions:", data);
        setContactSubmissions(data);
      } catch  {
        // console.error("Error fetching contact submissions:", error);
      }
    };
    fetchSubmissions();
  }, []);

  const toggleRowExpansion = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // Log state changes for debugging
  useEffect(() => {
    // console.log("Current contactSubmissions state:", contactSubmissions);
  }, [contactSubmissions]);

  return (
    <div className="bg-gray-100 px-10">
      <h1 className="text-2xl font-bold mb-4 md:mb-6">Customer Services</h1>
      <div className="bg-white rounded-2xl shadow p-3 md:p-4">
        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact Form Submissions</h2>

        {/* Desktop Table - Hidden on mobile */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Service</th>
                <th className="py-3 px-4 text-center">Action</th>
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
                  <td className="py-2 px-4">{submission.service}</td>
                  <td className="py-2 px-4 text-center">
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleDeleteSubmissions(submission._id, setContactSubmissions)}
                        className="py-2 px-5 rounded-lg bg-red-600 hover:bg-red-800 text-slate-50"
                      >
                        Delete
                      </button>
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
                    <div>
                      <button
                        onClick={() => handleDeleteSubmissions(submission._id, setContactSubmissions)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs ml-2"
                      >
                        Delete
                      </button>
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