
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




const ContactPage = () => {

  

    return (
        <div>
            <Header/>
            <ContactIntro/>
            <ContactForm/>

            <section id='reachus'>
            <Reachus/>

            </section>
            
            <FinalNotes/>


            <Footer/>
            <Copyrights/>
            <WhatsAppButton/>
            
        </div>
    );
};

export default ContactPage;



  