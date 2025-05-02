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


import Seo from '@/components/Seo';

// import PromoPopup from '@/components/PromoPopUp';


type HomeProps = object;

const Gallery: React.FC<HomeProps> = () => {
  // interface GalleryImage {
  //   id: number;
  //   src: string;
  //   width: number;
  //   height: number;
  //   alt: string;
  //   blurDataURL: string;
  // }



  const title = "Queenlens Photography Gallery | Stunning Visuals";
  const description = "Explore the Queenlens Photography gallery showcasing breathtaking shots from weddings, events, portraits, and more. Let our visuals inspire you.";
  const keywords = "photography gallery, Queenlens photos, wedding gallery, event gallery, portrait gallery, professional photography showcase";


  return (
    <>

    <Seo title = {title} description={description} keywords={keywords}/>


    <main>
    <Header/>
    {/* <PromoPopup/> */}
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
      columnsCountBreakPoints={{ 350: 2,  900: 3}}
      gapSize={16}
      animateLoad={true}
    />
    </div>


    <section>
    <AdMsg 
  title="Capture Your Special Moments"
  description="Love what you see? Let’s create stunning, professional photos of your wedding, portraits, or special events. Share your vision, and let’s bring it to life through our lens!"
  button_text="Book Your Shoot Today"
  bg_image="/images/ads/ads-bg-2.jpg"
/>


    </section>


      <MoreShots/>
      <Footer/>
      <Copyrights/>
      <WhatsAppButton/>



    </main>
    
    </>
      

  );
};

export default Gallery;
