
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import ThankYou from '@/components/Thanku/ThankYou';
import WhatsAppButton from '@/components/Whatsapputton';
// import BackButton from '@/components/BackButton';
import Seo from '@/components/Seo';



const ContactPage = () => {
    const title = "Thank you for contacting Queenlens Photography | Queenlens Photography";
    const description = "Thank you for reaching out to us. We appreciate your interest in our photography services and will respond to your inquiry as soon as possible.";
    const keywords = "Queenlens Photography, photography services";

    return (
        <>

<Seo title = {title} description={description} keywords={keywords}/>
        <main>
            <div>
            <Header/>
            {/* <BackButton/> */}
            <ThankYou/>

            <Footer/>
            <Copyrights/>
            <WhatsAppButton/>
            
        </div>

        </main>
        
        </>

        
        
    );
};

export default ContactPage;



  