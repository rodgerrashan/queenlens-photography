import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Intro from '@/components/About/Intro';
import Slogen from '@/components/About/slogen';
// import Image from 'next/image';


const AboutPage = () => {
    return (
        <div>
            <Header/>
            <Slogen/>
        
            {/* <Image
                src="/images/team.jpg"
                alt="About Us"
                width={1000}
                height={400}
                className="w-full max-h-none object-cover"
            /> */}

            <Intro/>
            
            <h1>About Us</h1>
            <p>Welcome to Queenlens Photography! We are passionate about capturing your precious moments.</p>




            <Footer/>
            <Copyrights/>
            
        </div>
    );
};

export default AboutPage;