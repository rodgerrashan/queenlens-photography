import { latoFont } from "@/styles/fonts";
import Link from "next/link";

interface ReachoutProps {
    heading: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

export default function Reachout({ heading, description, buttonText, buttonLink }: ReachoutProps) {
    return (
        <div className="bg-gray-950 text-slate-100 flex flex-col items-center justify-center p-10">
            <div className="max-w-2xl">
                <h2 className={`${latoFont.className} font-bold text-2xl pb-5`}>{heading}</h2>
                <p className={`${latoFont.className} font-medium text-lg pb-1`}>{description}</p>
                <Link href={buttonLink}>
                    <button className="text-slate-100 font-bold py-2 px-4 rounded-full mt-4 hover:bg-slate-50 hover:text-gray-950 transition duration-300 ease-in-out border-2 border-slate-100 hover:border-gray-950">
                        {buttonText}
                    </button>
                </Link>
            </div>
        </div>
    );
}
