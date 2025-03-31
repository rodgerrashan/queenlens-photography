import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Intro from '@/components/Services/Intro';
import Faq from '@/components/Services/Faq';

import { cinzelFont, latoFont } from "@/styles/fonts";




const ServicePage = () => {
    

  

    return (
        <div>
            <Header/>
            <Intro/>
            <Faq/>
            

            <Footer/>
            <Copyrights/>
            
        </div>
    );
};

export default ServicePage;



  