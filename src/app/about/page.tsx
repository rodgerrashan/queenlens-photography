
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
import Seo from '@/components/Seo';

// import PromoPopup from '@/components/PromoPopUp';

const AboutPage = () => {
    
    const title = "About Queenlens Photography | Passionate Storytellers";
    const description = "Learn about Queenlens Photography's journey and dedication to capturing your special moments with creativity and professionalism.";
    const keywords = "about Queenlens Photography, photography team, professional photographers, creative storytelling";

    return (
        <div>

            <Seo title={title} description={description} keywords={keywords}/>
            <main>
            <Header/>
            {/* <PromoPopup/> */}
            <Slogen/>
            <Intro/>
            <BehindScenes/>
            {/* <OurTeam/> */}
            
            <Why/>
            <Footer/>
            <Copyrights/>
            <WhatsAppButton/>

            </main>
            
            
        </div>
    );
};

export default AboutPage;



  