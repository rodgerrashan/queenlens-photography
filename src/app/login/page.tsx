"use client";
import { useState } from "react";
import HelloworldCopyrights from "@/components/HelloWorld/HelloworldCopyrights";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      if(data.role === "site-admin"){
        window.location.href = `/admin/dashboard?userId=${data.id}`;
      }else if(data.role === "admin"){
        window.location.href = `/user/dashboard?userId=${data.id}`;
      }
    } else {
      alert(data.message);
    }
    setIsLoading(false);
    };



  return (
    <>
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6"
      style={{
      backgroundImage: "url('/images/backgrounds/loginbg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}
    >

      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm flex flex-col items-center justify-center ">
      <div className="text-2xl font-bold mb-4">
        <Link href="/home">
        <Image
          src={"/images/logo/brand.png"}
          alt="QueenLens Photography"
          width={200}
          height={100}
        />
        </Link>
      </div>
      <h2 className="text-xl font-semibold mb-1">Welcome back!</h2>
      <p className="text-gray-600 mb-4">Please enter your credentials to continue.</p>
      <form onSubmit={handleSubmit} className="w-full px-5" >
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 px-4 border rounded-full focus:outline-0 focus:ring focus:ring-gray-900"
          required
        />
        </div>
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 px-4 border rounded-full focus:outline-none focus:ring focus:ring-gray-900"
          required
        />
        </div>
        <button
        type="submit"
        className="font-medium w-full bg-gray-950 text-white py-2 rounded-full hover:bg-blue-950 transition duration-200"
        disabled={isLoading}
        >
        {isLoading ? 'Signing in...' : 'Login'}
        </button>
      </form>

      <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">By logging in, you agree to our</p>
      <a href="/terms-&-conditions" className="text-blue-600 hover:underline">
        Terms of Service
      </a>{" "}
      <span className="text-sm text-gray-600"> and </span>
      <a href="/privacy-policy" className="text-blue-600 hover:underline">
        Privacy Policy
      </a>
      </div>

      <div className="mt-2 text-center">
      <p className="text-sm text-gray-600">Need help? Contact us</p>
      </div>
      </div>

      

      
    </div>
    <HelloworldCopyrights />

    </>
    
  );
}
