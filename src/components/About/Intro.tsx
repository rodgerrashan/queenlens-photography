import { montserratAlternatesFont, latoFont } from "@/styles/fonts";
import Image from "next/image";


export default function Intro(){


    return(
        <>
        <section className="p-8  text-center">
          <h2 className={`${montserratAlternatesFont.className} text-3xl font-bold`}>Our Journey</h2>
          <p className= {`${latoFont.className}  mt-4 max-w-2xl mx-auto`}>
          Founded with a passion for photography and a vision to capture life’s most cherished memories, Queenlens Photography has become a trusted name in <span className="font-bold"> professional event photography </span>. Specializing in <span className="font-bold">wedding photography, birthday shoots, engagement sessions, and family portraits </span>, we are dedicated to delivering timeless images that tell your unique story. Whether it’s a grand celebration or an intimate gathering, we’re here to frame your special moments with creativity and care.</p>
        </section >
        


        <section className="flex flex-col md:flex-row max-w-2xl mx-auto mb-8 items-center justify-center"> 
        <Image 
                src="/images/portfolio/img (5).jpg" 
                alt="Image 2" 
                width={400} 
                height={400}
                className="rounded-lg h-48 object-cover m-1"
              />
        <Image 
                src="/images/portfolio/img (5).jpg" 
                alt="Image 2" 
                width={400} 
                height={400}
                className="rounded-lg h-48 object-cover m-1"
              />
        <Image 
                src="/images/portfolio/img (5).jpg" 
                alt="Image 2" 
                width={400} 
                height={400}
                className="rounded-lg h-48 object-cover m-1"
              />

        </section>

        
        
        </>

        






    );
}