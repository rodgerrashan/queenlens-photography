
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Intro from '@/components/About/Intro';
import Slogen from '@/components/About/slogen';
import OurTeam from '@/components/About/OurTeam';
import Memories from '@/components/About/Memories';
import Why from '@/components/About/Why';
// import Image from 'next/image';

const AboutPage = () => {
    

    return (
        <div>
            <Header/>
            <Slogen/>
            <Intro/>
            <OurTeam/>
            <Memories/>
            <Why/>
            <Footer/>
            <Copyrights/>
            
        </div>
    );
};

export default AboutPage;



  