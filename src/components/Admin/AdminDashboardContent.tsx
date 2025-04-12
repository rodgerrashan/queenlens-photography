"use client"
import { useState, useEffect, Key } from "react";
import { useSearchParams } from 'next/navigation';
import Router from "next/router";
import { cinzelFont } from "@/styles/fonts";
import HelloworldHeader from "@/components/HelloWorld/HelloworldHeader";
import UserCard from "@/components/Dashboard/userCard";


export default function AdminDashboardContent() {

  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  
  interface User {
    _id: Key | null | undefined;
    email: string;
    role: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch current user data
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
          getUserData(userId!);
          console.log("Current user:", data.user);
          // Only fetch all users if the current user fetch was successful
          fetchAllUsers();
        } else {
          Router.push("/login");
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        Router.push("/login");
      });
  }, [userId]);

  const getUserData = async (id: string) => {
    try {
      const response = await fetch(`/api/user/get-user/${id}`);
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error("Failed to fetch user data");
        Router.push("/login");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      Router.push("/login");
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await fetch("/api/admin/get-users");
      if (response.ok) {
        const data = await response.json();
        console.log("All users:", data);
        setAllUsers(data);
      } else {
        console.error("Failed to fetch all users");
      }
    } catch (error) {
      console.error("Error fetching all users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  async function handleDeleteUser(id: string): Promise<void> {
    console.log("Deleting user with ID:", id);
    const userConfirmed = confirm("Are you sure you want to delete this user?");
    if (!userConfirmed) return;

    try {
      const response = await fetch(`/api/admin/delete-user/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert("User deleted successfully!");
          // Refresh the user list
          fetchAllUsers();
        } else {
          alert(data.message || "Failed to delete user.");
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user.");
    }
  }

  if (!user) return <><p>Redirecting...</p></>;

  return (
    <>
      <div className = "bg-gray-100 ">
        <HelloworldHeader />
        <div className="min-h-screen">
        <div className="bg-gray-100  flex flex-col items-start justify-center py-2 px-10">
          <h1 className={`${cinzelFont.className} text-3xl font-bold mt-5`}>
            Welcome to the Dashboard!
          </h1>
          </div>
          <div className="p-2 ml-5 ">
            <UserCard 
            role={user.role}
            email={user.email} userId={""}              
            />
          </div>

        
        

        <div className="mx-auto px-10 py-8 ">
          <h2 className={`${cinzelFont.className} text-2xl font-bold mb-6`}>User Management</h2>
          
          <div className="bg-white p-6 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold mb-4">Add New User</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const newUser = {
                  email: formData.get("email"),
                  role: formData.get("role"),
                  password: formData.get("password"),
                };

                const response = await fetch("/api/admin/create-user", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newUser),
                });

                if (response.ok) {
                  alert("User added successfully!");
                  fetchAllUsers(); 
                  
                } else {
                  const data = await response.json();
                  alert(data.message || "Failed to add user.");
                }
              }}
              className="space-y-4"
            >
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="border p-2 rounded-full" 
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Role:</label>
                <select 
                  name="role" 
                  required 
                  className="border p-2 rounded-full appearance-none"
                  defaultValue="admin"
                >
                  <option value="site-admin">Site Admin</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Password:</label>
                <input 
                  type="password" 
                  name="password" 
                  required 
                  className="border p-2 rounded-full" 
                />
              </div>
              <div>
                <button 
                  type="submit" 
                  className="bg-gray-950 text-white py-2 px-4 rounded-full hover:bg-blue-900"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
          
          <div className="bg-white p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6">All Users</h3>
            {isLoading ? (
  <div className="flex items-center space-x-2">
    <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
    <span className="text-sm text-gray-600 ml-2">Loading users...</span>
  </div>
) :allUsers && allUsers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">Email</th>
                      <th className="border p-2 text-left">Role</th>
                      <th className="border p-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm font-normal">
  {allUsers.map((u) => (
    <tr key={u._id} className="hover:bg-gray-50 border-b border-gray-200">
      <td className="border p-2">{u.email}</td>
      <td className="border p-2">{u.role}</td>
      <td className="border p-2 space-x-2">
        {u._id !== userId && (
          <button
            onClick={() => handleDeleteUser(u._id as string)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs ml-2"
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  ))}
</tbody>

                </table>
              </div>
            ) : (
              <p>No users found.</p>
            )}
          </div>
        </div>
        </div>
      </div>
      
    </>
  );
}


