import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/home/Carosel';
import Portfolio from '@/components/home/Portfolio';
import BooksAreOpen from '@/components/home/BooksAreOpen';
import OurServices from '../../components/home/OurServices';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import InstaLink from '@/components/home/InstaLink';
import AboutAtHome from '@/components/home/AboutAtHome';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';

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
      <Copyrights/>



    </div>
  );
};

export default Home;
