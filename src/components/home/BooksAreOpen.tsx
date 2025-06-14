import { loraFont, latoFont } from "@/styles/fonts";
import Link from "next/link";

import { Metadata } from 'next';
     
export const metadata: Metadata = {
  title: 'Professional Photography Services in Sri Lanka | QueenLens Photography',
  description: 'Award-winning QueenLens Photography captures your most precious moments across Sri Lanka. Specializing in weddings, portraits, events & family sessions. Book your session today!',
  keywords: 'photography Sri Lanka, wedding photographer Sri Lanka, portrait photography, event photography, family photography, professional photographer, QueenLens',
  openGraph: {
    title: 'Professional Photography Services in Sri Lanka | QueenLens Photography',
    description: 'Award-winning QueenLens Photography captures your most precious moments across Sri Lanka. Book your session today!',
    type: 'website',
  },
};

export default function BooksAreOpen() {
    return (
        <section className="bg-black p-8 text-center text-gray-50 relative overflow-hidden">
            
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-gray-800/50 rounded-full text-sm font-medium text-gray-300 border border-gray-700">
                        🌟 Award-Winning Photography
                    </span>
                </div>
                
                <h2 className={`${loraFont.className} text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-50 to-gray-300 bg-clip-text text-transparent`}>
                    Bookings Are Now Open!
                </h2>
                
                <p className={`${latoFont.className} text-xl font-semibold text-gray-300 mb-6`}>
                    Capture Life&apos;s Most Beautiful Moments with QueenLens
                </p>
                
                {/* <div className="bg-gray-900/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-800/50 mb-6">
                    <p className={`${latoFont.className} text-lg leading-relaxed max-w-3xl mx-auto text-gray-200`}>
                        Transform your precious moments into timeless memories with <span className="font-bold text-white">QueenLens Photography</span>. 
                        From intimate <span className="font-bold text-white">weddings</span> and joyful <span className="font-bold text-white">birthday celebrations</span> 
                        to heartwarming <span className="font-bold text-white">family portraits</span> and corporate events – we bring your vision to life 
                        with artistic excellence and professional expertise.
                    </p>
                </div> */}
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Available Anywhere in Sri Lanka</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Professional Equipment</span>
                    </div>
                </div>
                
                <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-4 mb-6 border border-red-800/30">
                    <p className={`${latoFont.className} text-orange-200 font-semibold`}>
                        ⚡ Limited Slots Available - Our calendar is filling up fast for the upcoming season!
                    </p>
                </div>
                
                <div className="pt-2">
                    <Link href="/contact">
                        <button className="group relative border-2 rounded-full border-gray-50 bg-black hover:bg-gray-50 hover:text-black text-gray-50 px-8 py-3 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center gap-2">
                                <span className="px-2 font-bold text-lg">Book Your Session</span>
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </Link>
                </div>
                
                <p className={`${latoFont.className} text-sm text-gray-400 mt-4`}>
                    Serving Colombo, Kandy, Galle, and all provinces across Sri Lanka
                </p>
            </div>
        </section>
    );
}