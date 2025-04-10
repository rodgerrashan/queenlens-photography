import { loraFont, latoFont } from "@/styles/fonts";
import Link from "next/link";


import { Metadata } from 'next';
     
export const metadata: Metadata = {
  title: 'Book Your Photography Session | QueenLens Photography',
  description: 'Capture unforgettable moments with QueenLens Photography. Book your wedding, birthday, or family session today – slots are filling fast!',
};

export default function BooksAreOpen() {
    return (
        <section className="bg-gray-950 p-8 text-center text-gray-50">
        <h2 className={`${loraFont.className} text-2xl font-bold`}>Bookings Are Open!</h2>
        <p className={`${latoFont.className} mt-4 text-lg font-semibold`}>Capture Your Special Moments with Queenlens</p>
        <p className={`${latoFont.className} mt-4 max-w-2xl mx-auto`}>
        Capture your special moments with <span className="font-bold">QueenLens Photography</span>. Whether it’s a <span className="font-bold">wedding</span>, 
    <span className="font-bold">birthday</span>, or <span className="font-bold">family session</span>, let us help you preserve memories that last a lifetime. 
    Our booking slots are open and filling up fast – don’t miss your chance to work with our professional photographers!
        </p>
        <div className="pt-4">
        <Link href="/contact">
        <button className="border-2 rounded-3xl border-gray-50 bg-gray-950 hover:bg-gray-50 hover:text-gray-950 text-gray-50 px-4 py-2 shadow-md transition-colors duration-300">
        <p className="px-4 font-bold">Inquire Now</p>
        </button>
      </Link>
        </div>
        
        </section>
    );
}