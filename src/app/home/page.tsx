import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carosel';
import Portfolio from '@/components/Portfolio';
import BooksAreOpen from '@/components/BooksAreOpen';
type HomeProps = object;

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Portfolio/>
      <BooksAreOpen/>
      
      

    </div>
  );
};

export default Home;
