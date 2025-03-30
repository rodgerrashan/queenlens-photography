import { cinzelFont } from "@/styles/fonts";


export default function Slogen(){


    return(
        <>
        <div className="bg-gray-950 py-14 px-5 flex items-center flex-col">
            <h1 className={`${cinzelFont.className} text-slate-100 text-5xl sm:text-5xl md:text-8xl font-semibold max-w-6xl ps-3`}>Capturing Moments,</h1>
            <h2 className={`${cinzelFont.className} text-slate-100 text-5xl sm:text-5xl md:text-8xl font-semibold max-w-6xl ps-3`}>Creating Memories</h2>

        </div>
        
        </>
    );
}