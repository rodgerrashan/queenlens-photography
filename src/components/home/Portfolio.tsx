import { cinzelFont, latoFont } from "@/styles/fonts";
import Image from 'next/image';


export default function Portfolio() {
  return (
    <>
        <section className="p-8  text-center">
          <h2 className={`${cinzelFont.className} text-3xl font-bold`}>Through the Lens</h2>
          <p className={`${cinzelFont.className} mt-4`}>QUEENLENS SHOWCASE</p>
          <p className= {`${latoFont.className}  mt-4 max-w-2xl mx-auto text-lg`}>
            At QueenLens Photography, every image tells a unique story. We believe in capturing not just moments, but emotions and memories that last a lifetime. Explore our portfolio which highlights the artistry, passion, and dedication we bring to every session, whether it&apos;s a heartfelt wedding, a joyful birthday, or a professional product shoot. Discover how our lens can transform moments into extraordinary memories and find inspiration for your next unforgettable photobook.&quot;
          </p>
        </section>
       

<section className="max-w-4xl  flex flex-col md:flex-row justify-center mx-auto px-4">
  <div className="flex flex-col justify-center items-center">
    <div className="flex flex-row justify-center">
    <div className="m-1 ">
      <Image 
        src="/images/portfolio/img (1).jpg" 
        alt="Image 1" 
        width={400} 
        height={400}
        className="rounded-lg h-48 object-cover "
      />
    </div>
    <div className="m-1">
      <Image 
        src="/images/portfolio/img (8).jpg" 
        alt="Image 2" 
        width={400} 
        height={400}
        className="rounded-lg h-48 object-cover"
      />
    </div>

    </div>
    <div className="m-1">
      <Image 
        src="/images/portfolio/img (3).jpg" 
        alt="Image 4" 
        width={600} 
        height={400}
        className="rounded-lg h-54 object-cover"
      />
    </div>

  </div>

  <div className="flex flex-col justify-center items-center md:pt-8 ">
  <div className="m-1">
      <Image 
        src="/images/portfolio/img (2).jpg" 
        alt="Image 4" 
        width={600} 
        height={400}
        className="rounded-lg h-54 object-cover"
      />
    </div>
  <div className="flex flex-row justify-center">
    <div className="m-1">
      <Image 
        src="/images/portfolio/img (7).jpg" 
        alt="Image 1" 
        width={400} 
        height={400}
        className="rounded-lg h-48 object-cover"
      />
    </div>
    <div className="m-1">
      <Image 
        src="/images/portfolio/img (5).jpg" 
        alt="Image 2" 
        width={400} 
        height={400}
        className="rounded-lg h-48 object-cover"
      />
    </div>

    </div>
    


  </div>



</section>
<section className="p-8 text-center">
  <p className="text-blue-500 hover:text-blue-950">View all</p>
</section>

        </>
  );
}