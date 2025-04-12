import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Intro from '@/components/Services/Intro';
import Faq from '@/components/Services/Faq';
import WhatsAppButton from '@/components/Whatsapputton';
import OtherServices from '@/components/Services/OtherServices';
import Head from 'next/head';




const ServicePage = () => {

    return (
        <>
<Head>
        <title>Photography Services |Color Grading, Videography & More</title>
        <meta name="description" content="Explore our photography-related services including color grading, video production, advertising content, and editing." />
        <meta name="keywords" content="photography, color grading, videography, content creation, photo editing" />
      </Head>
      <main>
      <div>
            <Header/>
            <Intro/>
            <OtherServices />
           
            <section id="faq">
            <Faq/>
            
        
      </section>
           

            <Footer/>
            <Copyrights/>
            <WhatsAppButton/>
            
        </div>
        
        
      </main>
      
        
        </>
        
    );
};

export default ServicePage;



  