"use client"
import { useState, useEffect, Key } from "react";
import { useSearchParams } from 'next/navigation';
import Router from "next/router";
import { cinzelFont } from "@/styles/fonts";
import HelloworldCopyrights from "@/components/HelloWorld/HelloworldCopyrights";
import HelloworldHeader from "@/components/HelloWorld/HelloworldHeader";
import UserCard from "@/components/Dashboard/userCard";
import Submissions from "@/components/Dashboard/submissions";


export default function Dashboard() {

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
  }, []);

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

  

  

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <div className = "bg-gray-100 ">
        <HelloworldHeader />
        <div className="bg-gray-100  flex flex-col items-start justify-center py-2 px-10">
          <h1 className={`${cinzelFont.className} text-3xl font-bold mt-5`}>
            Welcome to the Dashboard!
          </h1>
          </div>

          <div className = "p-2 ml-5">
            <UserCard 
              role={user.role} 
              email={user.email} 
              
            />
          </div>

        
      </div>
      <div className="bg-gray-100 flex flex-col items-start justify-center py-2 px-10">
        
        <Submissions />
      </div>

      <HelloworldCopyrights />
    </>
  );
}


