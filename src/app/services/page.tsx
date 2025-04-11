import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Intro from '@/components/Services/Intro';
import Faq from '@/components/Services/Faq';
import WhatsAppButton from '@/components/Whatsapputton';




const ServicePage = () => {
    

  

    return (
        <div>
            <Header/>
            <Intro/>
            <section id="faq">
            <Faq/>
            
        
      </section>
           

            <Footer/>
            <Copyrights/>
            <WhatsAppButton/>
            
        </div>
    );
};

export default ServicePage;



  