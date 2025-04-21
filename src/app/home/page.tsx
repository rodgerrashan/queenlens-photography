import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/home/Carosel';
import Portfolio from '@/components/home/Portfolio';
import BooksAreOpen from '@/components/home/BooksAreOpen';
import OurServices from '../../components/home/OurServices';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import InstaLink from '@/components/home/InstaLink';
import AboutAtHome from '@/components/home/AboutAtHome';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import WhatsAppButton from '@/components/Whatsapputton';
import Head from 'next/head';
import PromoPopup from '@/components/PromoPopUp';

type HomeProps = object;

const Home: React.FC<HomeProps> = () => {
  return (
    <>
    <Head>
    <title>QueenLens | Professional Photography Services in Sri Lanka</title>
        <meta
          name="description"
          content="QueenLens offers professional wedding, portrait, and event photography in Sri Lanka. Capture your best moments with a touch of elegance."
        />
        <meta name="keywords" content="QueenLens, Photography Sri Lanka, Wedding Photography, Event Photography, Portrait Photography, Professional Photographer, Birthday Shoots, Model shoots " />
        <meta name="author" content="QueenLens Photography" />

        {/* Open Graph for social media preview */}
        <meta property="og:title" content="QueenLens | Professional Photography Services in Sri Lanka" />
        <meta property="og:description" content="Capture your best moments with QueenLens – specializing in wedding, event, and portrait photography in Sri Lanka." />
        <meta property="og:image" content="https://www.queenlens.lk/images/logo/brand.png" />
        <meta property="og:url" content="https://www.queenlens.lk" />
        <meta property="og:type" content="website" />

        {/* Structured Data: Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "QueenLens",
              "url": "https://www.queenlens.lk",
              "logo": "https://www.queenlens.lk/images/logo/brand.png",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61562502455213&mibextid=ZbWKwL", 
                "https://www.instagram.com/queenlens_photography/profilecard/?igsh=ZHp4OWM0enJraDlv",
                "https://youtube.com/@queenlensphotography?si=JYjRN8jpF-EA9mZ4",
                "https://www.tiktok.com/@queenlens_photography",
                "https://wa.me/+94719991164",
                "tel:+94719991164",
              ]
            }),
          }}
        />

    </Head>
    <main>
    <Header/>
    <PromoPopup />
      <Carousel/>
      <Portfolio/>
      <BooksAreOpen/>
      <OurServices/>
      <TestimonialCarousel/>
      <InstaLink/>
      <AboutAtHome/>
      <Footer/>
      <Copyrights/>
      <WhatsAppButton/>

    </main>

      
      

      



    </>
  );
};

export default Home;
