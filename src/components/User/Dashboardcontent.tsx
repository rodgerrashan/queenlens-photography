"use client";
import { useState, useEffect} from "react";
import { useSearchParams } from 'next/navigation';
import Router from "next/router";
import { cinzelFont } from "@/styles/fonts";
import HelloworldCopyrights from "@/components/HelloWorld/HelloworldCopyrights";
import HelloworldHeader from "@/components/HelloWorld/HelloworldHeader";
import UserCard from "@/components/Dashboard/userCard";
import Submissions from "@/components/Dashboard/submissions";
import SoftwareVersion from "@/components/Dashboard/software-version";
import Notifications from "@/components/Dashboard/notifications";
import Image from "next/image";


export default function Dashboardcontent() {

  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  

  interface User {
    _id?: string;
    email: string;
    role: string;
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch current user data
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
          getUserData(userId!);
          console.log("Current user:", data.user);
          
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

  if (!user) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4">
        <Image
          src="/Images/logo/smLogo.png"
          alt="Loading..."
          width={128}
          height={128}
          className="animate-pulse"
        />
      </div>
      
      
    </div>
  );

  return (
    <div className="bg-gray-100">
      <div className = "bg-gray-100 ">
        <HelloworldHeader />
        <div className="min-h-screen">
        <div className="bg-gray-100  flex flex-col items-start justify-center py-2 px-10">
          <h1 className={`${cinzelFont.className} text-3xl font-bold mt-5`}>
            Welcome to the Dashboard!
          </h1>
          </div>

          <div className="p-2 ml-5">
  {user ? (
    <UserCard
      role={user.role}
      email={user.email}
      userId={userId || ''}
    />
  ) : (
    <div className="flex items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
        <span className="text-sm text-gray-600 ml-2">Loading user...</span>
      </div>
  )}
</div>
          <Notifications/>

      <Submissions />
      <div className="bg-gray-100 flex flex-col items-start justify-center py-2 px-10">
        
        
      </div>


      <SoftwareVersion />

        
      </div>
      


        </div>
        
      <HelloworldCopyrights />
    </div>
  );
}


