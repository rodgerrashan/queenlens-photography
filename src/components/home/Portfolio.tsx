import { cinzelFont, latoFont } from "@/styles/fonts";
import Image from 'next/image';
import Link from "next/link";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QueenLens Photography Showcase',
  description: 'Explore QueenLens Photography’s portfolio of stunning wedding, birthday, and professional product shoots.',
};


export default function Portfolio() {
  return (
    <>
        <section className="p-8  text-center">
          <h1 className={`${cinzelFont.className} text-3xl font-bold`}>Through the Lens</h1>
          <h2 className={`${cinzelFont.className} mt-4`}>QUEENLENS Photography Showcase</h2>
          <p className={`${latoFont.className} mt-4 max-w-2xl mx-auto text-lg`}>
  At QueenLens Photography, every image tells a unique story, capturing not just moments, but emotions and memories that last a lifetime. Explore our portfolio of 
  <span className="font-bold px-1"> wedding photography, birthday celebrations, and professional product shoots</span>, highlighting the artistry, passion, and dedication we bring to every session. Discover how our lens can transform moments into extraordinary memories and find inspiration for your next unforgettable photobook or photo album.
</p>

        </section>
       

<section className="max-w-4xl  flex flex-col md:flex-row justify-center mx-auto px-4">
  <div className="flex flex-col justify-center items-center">
    <div className="flex flex-row justify-center">
    <div className=" ">
      <Image 
        src="/images/portfolio/img (1).jpg" 
        alt="Image 1" 
        width={400} 
        height={400}
        className="rounded-xl h-48 object-cover  transition-transform duration-500 ease-in-out hover:scale-105 p-1"
      />
    </div>
    <div className="">
      <Image 
        src="/images/portfolio/img (5).jpg" 
        alt="Image 2" 
        width={400} 
        height={400}
        className="rounded-xl h-48 object-cover  transition-transform duration-500 ease-in-out hover:scale-105 p-1"
      />
    </div>

    </div>
    <div className="m-1">
      <Image 
        src="/images/portfolio/img (3).jpg" 
        alt="Image 4" 
        width={600} 
        height={400}
        className="rounded-xl h-54 object-cover  transition-transform duration-500 ease-in-out hover:scale-105 p-1"
      />
    </div>

  </div>

  <div className="flex flex-col justify-center items-center md:pt-24 ">
  <div className="m-1">
      <Image 
        src="/images/portfolio/img (2).jpg" 
        alt="Image 4" 
        width={600} 
        height={400}
        className="rounded-xl h-54 object-cover  transition-transform duration-500 ease-in-out hover:scale-105 p-1"
      />
    </div>
  <div className="flex flex-row justify-center">
    <div className="">
      <Image 
        src="/images/portfolio/img (7).jpg" 
        alt="Image 1" 
        width={400} 
        height={400}
        className="rounded-xl h-48 object-cover  transition-transform duration-500 ease-in-out hover:scale-105 p-1"
      />
    </div>
    <div className="">
      <Image 
        src="/images/portfolio/img (4).jpg" 
        alt="Image 2" 
        width={400} 
        height={400}
        className="rounded-xl h-48 object-cover  transition-transform duration-500 ease-in-out hover:scale-105 p-1"
      />
    </div>

    </div>
    


  </div>



</section>
<section className="p-8 text-center">
<div className="pt-6 text-center">
        <Link href="/gallery" className="text-blue-500 hover:underline text-lg font-semibold"><p>See the Gallery</p></Link>
  
</div>



  
</section>

        </>
  );
}