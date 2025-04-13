import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Intro from '@/components/Services/Intro';
import Faq from '@/components/Services/Faq';
import WhatsAppButton from '@/components/Whatsapputton';
import OtherServices from '@/components/Services/OtherServices';
import Seo from '@/components/Seo';





const ServicePage = () => {

  const title = "Photography Services | Queenlens Professional Shoots";
    const description = "Discover Queenlens Photography services including weddings, couples shoots, baby shoots, graduation shoots, and more. Tailored packages available.";
    const keywords = "photography services, wedding shoots, couple shoots, baby photography, graduation photography, event photography, model shoots";

    return (
        <>
        <Seo title = {title} description={description} keywords={keywords}/>

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



  