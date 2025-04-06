'use client';


import HelloworldCopyrights from '@/components/HelloWorld/HelloworldCopyrights';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';




export default function ChangeCredentials() {


    const searchParams = useSearchParams();
    const userId = searchParams.get('userId');



    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/user/settings/credentials/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId,email }),
    });
    const data = await res.json();
    console.log(res);
    if (res.ok) {
        setMessage(data.message); 
    } 
  };


    return(

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
      <h2 className="text-xl font-semibold mb-1">RESET PASSWORD</h2>
      <p className="text-gray-600 mb-4">Please enter your email to continue.</p>
      <form onSubmit={handleSubmit} className="w-full px-5" >
        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 pl-5 border rounded-full focus:outline-0 focus:ring focus:ring-gray-900"
          required
        />
        </div>

        
        <button
        type="submit"
        className="font-semibold w-full bg-gray-950 text-white py-2 rounded-full hover:bg-blue-950 transition duration-200"
        >
        Reset 
        </button>
      </form>

    {message && (
        <div className="mt-4 text-center flex items-center justify-center space-x-2">
            <FaCheck className="text-green-700" />
            <p className="text-sm text-green-700 font-medium">{message}</p>
        </div>
    )}

      <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">By resetting, you agree to our</p>
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