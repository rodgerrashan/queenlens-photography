import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carosel';
import Portfolio from '@/components/Portfolio';
import BooksAreOpen from '@/components/BooksAreOpen';
import OurServices from '../../components/OurServices';
import TestimonialCarousel from '@/components/TestimonialCarousel';
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

    </div>
  );
};

export default Home;
