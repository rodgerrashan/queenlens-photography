import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import SubHeading from '@/components/gallery/subheading';
import GalleryLayout1 from '@/components/gallery/galleryLayout1';
import AdMsg from '@/components/gallery/adMsg';

type HomeProps = object;

const Gallery: React.FC<HomeProps> = () => {
  return (
    <div>
      <Header/>
      <SubHeading/>
      <GalleryLayout1/>
      <AdMsg 
        title="Advertise with us!"
        description="Contact us"
        button_text="Contact Us"
        bg_image="bg-image.jpg"
      />
      <Footer/>
      <Copyrights/>



    </div>
  );
};

export default Gallery;
