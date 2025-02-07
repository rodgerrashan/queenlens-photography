import { cinzelFont, latoFont } from "@/styles/fonts";

export default function SubHeading() {
    return(
        <div className = ''>
            <div >
            <h2 className= {`${cinzelFont.className} pt-6 text-3xl font-bold text-center text-gray-950 px-4`}>Gallery of Memories</h2>
            <p className= {`${latoFont.className}  mt-4 max-w-2xl mx-auto text-center  text-gray-950  px-4 pb-3`}>
            Our passion is to transform fleeting moments into cherished memories. Here’s a glimpse of the stories we&apos;ve had the honor to capture—from grand celebrations to quiet, intimate scenes. Each photo tells its own story, revealing the essence of life, love, and joy.
            </p>
        </div>

        </div>
        
    );
}