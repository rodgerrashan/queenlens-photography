"use client";
import { loraFont, latoFont } from "@/styles/fonts";
import Link from "next/link";
import { Metadata } from 'next';
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: 'Special 10% OFF Photography Sessions | QueenLens Photography',
  description: 'Limited-time offer: Get 10% OFF all photography packages when you book before May 14th! Capture unforgettable moments with QueenLens Photography. Reserve your session today – slots are filling fast!',
};

export default function Discounts() {
  // State for remaining days calculation
  const [daysRemaining, setDaysRemaining] = useState<number>(0);
  
  // Calculate time remaining until deadline
  useEffect(() => {
      const calculateTimeRemaining = () => {
          const deadline = new Date('2025-05-15T23:59:59');
          const now = new Date();
          const timeDiff = deadline.getTime() - now.getTime();
          
          // Calculate days and hours
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          
          setDaysRemaining(days);
      };
      
      // Initial calculation
      calculateTimeRemaining();
      
      // Update the countdown every hour
      const timer = setInterval(calculateTimeRemaining, 1000 * 60 * 60);
      
      // Cleanup on unmount
      return () => clearInterval(timer);
  }, []);
    return (
        <section className={`${latoFont.className } bg-gradient-to-b from-gray-950 to-gray-950 p-8 text-center text-gray-50 relative overflow-hidden`}>
            
            {/* Main content */} 
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className={`${loraFont.className} text-3xl md:text-4xl font-bold mb-2`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">10% OFF</span> All Photography Packages!
                </h2>
                
                <p className={`${latoFont.className} mt-2 text-xl font-semibold text-blue-400`}>Book Before May 15th and Save with QueenLens</p>
                
                <div className="my-6 py-4 px-6 border border-purple-400 border-dashed rounded-lg bg-gray-900 bg-opacity-70 max-w-2xl mx-auto">
                    <p className={`${latoFont.className} text-lg`}>
                        Capture your special moments with <span className="font-bold text-white">QueenLens Photography</span>. Whether it&apos;s a <span className="font-bold text-blue-400">wedding</span>,{" "}
                        <span className="font-bold text-blue-400">birthday</span>,{" "}<span className="font-bold text-blue-400">family session</span>, or <span className="font-bold text-blue-400">almost anything</span>, let us help you preserve memories that last a lifetime.
                    </p>
                    
                    <p className={`${latoFont.className} mt-4 font-semibold text-white`}>
                        Use code <span className="mx-2 bg-blue-700 text-white px-3 py-1 rounded-md font-mono">SAVE10</span> when you book before <span className="underline decoration-blue-400">May 15th, 2025</span>!
                    </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
                    <div className="text-gray-300 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>Only <span className="text-blue-400 font-bold"> {daysRemaining} days</span> left to claim your discount!</span>
                    </div>
                    
                    <Link href="/contact?refcode=save10">
                        <button className="group relative px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            Book Your Session Now
                        </button>
                    </Link>
                </div>
                
                <p className={`${latoFont.className} mt-5 text-sm text-gray-400`}>
                    This exclusive offer expires on May 15th, 2025. Our booking slots are filling up fast – secure your date and discount today!
                </p>
            </div>
        </section>
    );
}