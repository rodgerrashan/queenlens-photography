"use client"
// components/TestimonialCarousel.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { openSansFont,montserratAlternatesFont, latoFont} from '@/styles/fonts';
import { motion, AnimatePresence } from "framer-motion";
import testimonials from '../../../public/data/testimonals.json';

export default function Memories(){
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

    return(
        <>
        <section className="p-8  text-center">
          <h2 className={`${montserratAlternatesFont.className} text-3xl font-bold`}>Memories We’ve Captured</h2>
          <p className= {`${latoFont.className}  mt-4 max-w-2xl mx-auto`}>
          Our clients’ words speak volumes about what it’s like to work with Queenlens. Here are a few stories from those who’ve trusted us to capture their most special moments.
          </p>
        </section >

        <section>
        <div className="relative w-full max-w-6xl mx-auto p-4 mt-1 mb-1">
      <div className="flex items-center justify-center">
        <button onClick={handlePrev} className="absolute left-0 p-4">
          <span className="sr-only">Previous</span>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <AnimatePresence mode= "wait">
          <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center space-x-4"
          >
            
        <div className="flex flex-col lg:flex-row items-center space-x-4">
          {/* Image Section */}
          <div className="relative w-[300px] h-[300px] m-20">
            {/* Rectangle Layers */}
            <div className="w-[300px] h-[300px] bg-gray-300 absolute transform -rotate-12 "></div>
            <div className="w-[300px] h-[300px] bg-gray-200 absolute transform -rotate-6 "></div>

            {/* Image */}
            <Image
              alt="Testimonial"
              src={testimonials[currentIndex].image}
              width={280}
              height={280}
              className="absolute z-20  shadow-lg -rotate-3"
              style={{
                top: "0px",
                left: "10px",
              }}
            />
          </div>

          {/* Text Section */}
          <div className="p-2 max-w-md z-20 px-8 h-48 overflow-y-visible">
  <h3 className="text-xl font-semibold mb-2 px-2">{testimonials[currentIndex].title}</h3>
  <p className={`${openSansFont.className} text-left mb-4 px-2`}>
    {testimonials[currentIndex].text}
  </p>
  <p className="mt-2 font-bold text-right px-3">— {testimonials[currentIndex].author}</p>
</div>

        </div>
            
          </motion.div>

        </AnimatePresence>
        
        <button onClick={handleNext} className="absolute right-0 p-4">
          <span className="sr-only">Next</span>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      
    </div>
        </section>
        <div className='items-center justify-center flex flex-col'>
        <div className="w-32 h-1 bg-gray-300  rounded-full"></div>
        

        </div>
        



        
        
        </>

        






    );
}