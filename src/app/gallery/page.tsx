import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import SubHeading from '@/components/gallery/subheading';
import AdMsg from '@/components/gallery/adMsg';
import MasonryGallery from '@/components/gallery/masonryGallery';
// import Image from 'next/image';
import MoreShots from '@/components/gallery/moreShots';
import WhatsAppButton from '@/components/Whatsapputton';




type HomeProps = object;

const Gallery: React.FC<HomeProps> = () => {
  interface GalleryImage {
    id: number;
    src: string;
    width: number;
    height: number;
    alt: string;
    blurDataURL: string;
  }
  
  
  

  const section1_images: GalleryImage[] =[
    {id: 1,src: `/images/gallery/section1/image(1).jpg`, width:800, height:600, alt:"Image 1", blurDataURL: "/images/gallery/section1/image(1).jpg"},
    {id: 2,src: `/images/gallery/section1/image(2).jpg`, width:1000, height:1200, alt:"Image 2", blurDataURL: "/images/gallery/section1/image(2).jpg"},
    {id: 3,src: `/images/gallery/section1/image(3).jpg`, width:800, height:600, alt:"Image 3", blurDataURL: "/images/gallery/section1/image(3).jpg"},
    {id: 4,src: `/images/gallery/section1/image(4).jpg`, width:800, height:600, alt:"Image 4", blurDataURL: "/images/gallery/section1/image(4).jpg"},
    {id: 5,src: `/images/gallery/section1/image(5).jpg`, width:800, height:600, alt:"Image 5", blurDataURL: "/images/gallery/section1/image(5).jpg"},
    {id: 6,src: `/images/gallery/section1/image(6).jpg`, width:800, height:600, alt:"Image 6", blurDataURL: "/images/gallery/section1/image(6).jpg"},
    {id: 7,src: `/images/gallery/section1/image(7).jpg`, width:800, height:600, alt:"Image 7", blurDataURL: "/images/gallery/section1/image(7).jpg"},
    {id: 8,src: `/images/gallery/section1/image(8).jpg`, width:800, height:600, alt:"Image 8", blurDataURL: "/images/gallery/section1/image(8).jpg"},
  ]
 
  return (
    <>
    <Header/>
    <SubHeading/>
{/* Section 01 */}
    <div className = "container mx-auto py-2 px-4 max-w-5xl ">
    <MasonryGallery
      images={section1_images}
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4}}
      gapSize={16}
      animateLoad={true}
    />
    </div>
    <section>
    <AdMsg 
        title="Inspired? Let’s Create Your Story!"
        description="Found a style that resonates? Let’s chat about how we can capture your unique moments just like these."
        button_text="Inquire Now"
        bg_image="/images/ads/ads-bg-1.jpg"
      />

    </section>

{/* Section 02 */}
    <div className = "container mx-auto py-2 px-4 max-w-5xl ">
    <MasonryGallery
      images={section1_images}
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4}}
      gapSize={16}
      animateLoad={true}
    />
    </div>


    <section>
    <AdMsg 
        title="Let’s Make Magic Together!"
        description="Loving what you see? Imagine your own memories, beautifully captured. Let’s talk about your vision!"
        button_text="Let’s Talk"
        bg_image="/images/ads/ads-bg-1.jpg"
      />

    </section>
{/* Section 03 */}

    <div className = "container mx-auto py-2 px-4 max-w-5xl ">
    <MasonryGallery
      images={section1_images}
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4}}
      gapSize={16}
      animateLoad={true}
    />
    </div>

    <section>
    <AdMsg 
        title="Meet the Team Behind the Lens"
        description="Get to know the passionate artists who create these beautiful shots. Our team is ready to make your moments unforgettable."
        button_text="Meet the Team"
        bg_image="/images/ads/ads-bg-1.jpg"
      />

    </section>

{/* Section 04  */}
    <div className = "container mx-auto py-2 px-4 max-w-5xl ">
    <MasonryGallery
      images={section1_images}
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4}}
      gapSize={16}
      animateLoad={true}
    />
    </div>


      <MoreShots/>
      <Footer/>
      <Copyrights/>
      <WhatsAppButton/>
    </>
      

  );
};

export default Gallery;
