import { montserratAlternatesFont, latoFont } from "@/styles/fonts";
import Image from "next/image";


export default function Intro(){


    return(
        <div className="">
        <section className="p-8  text-center">
          <h2 className={`${montserratAlternatesFont.className} text-3xl font-bold`}>Our Journey</h2>
          <p className= {`${latoFont.className}  mt-4 max-w-2xl mx-auto`}>
          Founded with a passion for photography and a vision to capture life’s most cherished memories, Queenlens Photography has become a trusted name in <span className="font-bold"> professional event photography </span>. Specializing in <span className="font-bold">wedding photography, birthday shoots, engagement sessions, and family portraits </span>, we are dedicated to delivering timeless images that tell your unique story. Whether it’s a grand celebration or an intimate gathering, we’re here to frame your special moments with creativity and care.</p>
        </section >
        

 
        <div className="flex flex-col sm:flex-row  mb-8 items-center justify-center  w-2/3  sm:w-1/3 mx-auto p-2"> 
          
        <Image 
                src="/images/behind-scenes/queenlens-behind-scenes-photography-1.jpg" 
                alt="queenlens photography behind scenes photoshooting" 
                width={400} 
                height={400}
                className="rounded-lg object-cover m-1"
              />
        <Image 
                src="/images/behind-scenes/queenlens-behind-scenes-photography-2.jpg" 
                alt="queenlens photography behind scenes " 
                width={400} 
                height={400}
                className="rounded-lg  object-cover m-1"
              />
        <Image 
                src="/images/behind-scenes/queenlens-behind-scenes-photography-3.jpg" 
                alt="queenlens photography behind scenes photoshooting" 
                width={400} 
                height={400}
                className="rounded-lg object-cover m-1"
              />

        </div>

        
        
        </div>

        






    );
}