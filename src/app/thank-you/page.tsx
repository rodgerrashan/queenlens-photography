
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import ThankYou from '@/components/Thanku/ThankYou';
import WhatsAppButton from '@/components/Whatsapputton';
// import BackButton from '@/components/BackButton';



const ContactPage = () => {
    

    return (
        <div>
            <Header/>
            {/* <BackButton/> */}
            <ThankYou/>

            <Footer/>
            <Copyrights/>
            <WhatsAppButton/>
            
        </div>
    );
};

export default ContactPage;



  