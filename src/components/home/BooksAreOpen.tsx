import { loraFont, latoFont } from "@/styles/fonts";
import Link from "next/link";

export default function BooksAreOpen() {
    return (
        <section className="bg-gray-950 p-8 text-center text-gray-50">
        <h2 className={`${loraFont.className} text-2xl font-bold`}>Bookings Are Open!</h2>
        <p className={`${latoFont.className} mt-4 text-lg font-semibold`}>Capture Your Special Moments with Queenlens</p>
        <p className={`${latoFont.className} mt-4 max-w-2xl mx-auto`}>
        Whether it’s a wedding, birthday, or family session, let us help you make memories last. Our booking slots are open and filling up fast!
        </p>
        <div className="pt-4">
        <Link href="/about">
        <button className="border-2 rounded-3xl border-gray-50 bg-gray-950 hover:bg-gray-50 hover:text-gray-950 text-gray-50 px-4 py-2 shadow-md transition-colors duration-300">
        <p className="px-4 font-bold">Inquire</p>
        </button>
      </Link>
        </div>
        
        </section>
    );
}