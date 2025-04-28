
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import ContactIntro from '@/components/contact/ContactIntro';
import ContactForm from '@/components/contact/ContactForm';
import Reachus from '@/components/contact/Reachus';
import FinalNotes from '@/components/contact/FinalNotes';
import WhatsAppButton from '@/components/Whatsapputton';
// import Image from 'next/image';
import Seo from '@/components/Seo';
import PromoPopup from '@/components/PromoPopUp';




const ContactPage = () => {

    const title = "Contact Queenlens Photography | Let's Work Together";
    const description = "Get in touch with Queenlens Photography for inquiries or bookings. We're here to bring your vision to life through stunning imagery.";
    const keywords = "contact Queenlens Photography, photography booking, professional photographers contact";

  

    return (
        <div>
            <Seo title = {title} description={description} keywords={keywords}/>


            <main>
            <Header/>
            <PromoPopup/>
            <ContactIntro/>
            <ContactForm/>

            <section id='reachus'>
            <Reachus/>

            </section>
            
            <FinalNotes/>


            <Footer/>
            <Copyrights/>
            <WhatsAppButton/>


            </main>
            
            
        </div>
    );
};

export default ContactPage;



  