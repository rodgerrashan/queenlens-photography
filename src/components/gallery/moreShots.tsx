import { latoFont, montserratAlternatesFont } from "@/styles/fonts";
// import Link from "next/link";

export default function MoreShots() {
    return (
        <section className="w-full bg-blue-950 p-4 text-center text-gray-50 display flex flex-col justify-center items-center mt-10">
          <div className=" mb-1 max-w-xs sm:max-w-2xl md:max-w-3xl py-5 mx-auto">
            <h2 className={`${montserratAlternatesFont.className} text-2xl font-bold`}>Interested in More Shots?</h2>
            <p className={`${latoFont.className} mt-4 text-lg font-mono`}>Explore our full portfolio and see the latest captures on Instagram! Stay inspired by following us and see more moments from recent sessions.</p>
        <div className="pt-4">
        <div className="inset-0 flex items-center justify-center">
        <div className="bg-slate-100  w-auto h-auto px-5 py-1 rounded-2xl">
          <div className="text-blue-950 text-md md:text-xl text-center  font-bold">
            <a href="https://www.instagram.com/queenlens_photography/profilecard/?igsh=ZHp4OWM0enJraDlv" className="hover:underline"  
    target="_blank" 
    rel="noopener noreferrer">@instagram.com/queenlens_photography/</a>
          </div>
        </div>
      </div>
        
        </div>
          </div>
        
        
        </section>
    );
}