
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Intro from '@/components/About/Intro';
import Slogen from '@/components/About/slogen';
// import OurTeam from '@/components/About/OurTeam';
import Why from '@/components/About/Why';
import WhatsAppButton from '@/components/Whatsapputton';
import BehindScenes from '@/components/About/BehindScene';
// import Image from 'next/image';

const AboutPage = () => {
    

    return (
        <div>
            <Header/>
            <Slogen/>
            <Intro/>
            <BehindScenes/>
            {/* <OurTeam/> */}
            
            <Why/>
            <Footer/>
            <Copyrights/>
            <WhatsAppButton/>
            
        </div>
    );
};

export default AboutPage;



  