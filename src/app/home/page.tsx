import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carosel';
type HomeProps = object;

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Header/>
      <Carousel/>

    </div>
  );
};

export default Home;
