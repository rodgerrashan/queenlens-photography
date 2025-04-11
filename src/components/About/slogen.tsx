
"use client"
import { cinzelFont } from "@/styles/fonts";


export default function Slogen(){


    return(
        <>
        <div className="bg-gray-950 py-14 px-5 flex items-center flex-col justify-center">
            <h1 className={`${cinzelFont.className} text-slate-100 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold max-w-xl ps-3 `}>Capturing Moments,</h1>
            <h2 className={`${cinzelFont.className} text-slate-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold max-w-6xl ps-3`}>Creating Memories</h2>
            {/* <button  onClick={() => {}} className=" text-slate-100 font-bold py-2 px-4 rounded-full mt-4 hover:bg-slate-50 hover:text-gray-950 transition duration-300 ease-in-out border-2 border-slate-100 hover:border-gray-950">
                Meet the team
            </button> */}

        </div>
        
        </>
    );
}


