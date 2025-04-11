import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import SubHeading from '@/components/gallery/subheading';
import AdMsg from '@/components/gallery/adMsg';
import MasonryGallery from '@/components/gallery/masonryGallery';
// import Image from 'next/image';
import MoreShots from '@/components/gallery/moreShots';
import WhatsAppButton from '@/components/Whatsapputton';

import section1_images from '../../../public/data/gallery/galleryLayout1.json';
import section2_images from '../../../public/data/gallery/galleryLayout2.json';
import section3_images from '../../../public/data/gallery/galleryLayout3.json';


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
  return (
    <>
    <Header/>
    <SubHeading/>
{/* Section 01 */}
    <div className = "container mx-auto py-2 px-4 max-w-5xl ">
    <MasonryGallery
      images={section1_images}
      columnsCountBreakPoints={{ 350: 2, 900: 3}}
      gapSize={12}
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
      images={section2_images}
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
      images={section3_images}
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
