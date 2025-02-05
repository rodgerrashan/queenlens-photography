import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carosel';
import Portfolio from '@/components/Portfolio';
import BooksAreOpen from '@/components/BooksAreOpen';
import OurServices from '../../components/OurServices';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import InstaLink from '@/components/InstaLink';
import AboutAtHome from '@/components/AboutAtHome';
import Footer from '@/components/Footer';

type HomeProps = object;

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Portfolio/>
      <BooksAreOpen/>
      <OurServices/>
      <TestimonialCarousel/>
      <InstaLink/>
      <AboutAtHome/>
      <Footer/>



    </div>
  );
};

export default Home;
