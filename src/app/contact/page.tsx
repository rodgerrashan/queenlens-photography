

"use client";
import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Intro from '@/components/About/Intro';
import Slogen from '@/components/About/slogen';
import OurTeam from '@/components/About/OurTeam';
import Memories from '@/components/About/Memories';
import Why from '@/components/About/Why';
import ContactIntro from '@/components/contact/ContactIntro';
import ContactForm from '@/components/contact/ContactForm';
// import Image from 'next/image';




const ContactPage = () => {
    const section2Ref = useRef<HTMLDivElement | null>(null);

  const scrollToSection = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div>
            <Header/>
            <ContactIntro/>
            <ContactForm/>


            <Footer/>
            <Copyrights/>
            
        </div>
    );
};

export default ContactPage;



  