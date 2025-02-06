"use client"
// components/TestimonialCarousel.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { openSansFont,montserratAlternatesFont} from '@/styles/fonts';
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    image: '/images/testimonals/Theekshani.jpg',
    title: 'Our outdoor shoot in the wild are breathtaking!',
    text: "You perfectly captured the raw beauty of the surroundings and made the entire experience so enjoyable. The natural light, the candid moments, and your attention to detail truly set these photos apart. I can’t wait to frame these!",
    author: "Miss. Theekshani Promodya",
  },
  {
    image: '/images/testimonals/Ovini.jpg',
    title: 'I’m so happy with the portraits you took!',
    text: "You captured my personality perfectly, and the photos look so natural and effortless. The session was relaxed, and your creative ideas made all the difference. These are definitely the best pictures I’ve ever had taken!",
    author: 'Miss. Ovini Wijesooriya',
  },
  {
    image: '/images/testimonals/Vindya.jpg',
    title: 'The casual shoot was amazing!',
    text: "You, Queenlens made the whole experience so much fun, and the photos turned out fantastic. The natural lighting and relaxed vibe you created really brought out the best moments. I’ll definitely book you again for future shoots!",
    author: 'Miss. Vindya Yapa',
  },
  {
    image: '/images/testimonals/Dilini.jpg',
    title: "We’ll cherish these memories forever!",
    text: "Thank you so much Queenlens for capturing my birthday so beautifully! The photos are vibrant and full of life, perfectly showcasing the joy and excitement of the day. You were so patient and great with us.",
    author: 'Mrs. Dilini Wikramasinghe',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4 mt-10 mb-20">
      <h2 className= {`${montserratAlternatesFont.className} text-center text-3xl font-bold mb-2 `}>What Our Clients Say</h2>
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
              width={300}
              height={300}
              className="absolute z-20  shadow-lg -rotate-3"
              style={{
                top: "0px",
                left: "10px",
              }}
            />
          </div>

          {/* Text Section */}
          <div className="p-2 max-w-md z-20 px-8 h-48 overflow-y-visible">
  <h3 className="text-xl font-semibold mb-2">{testimonials[currentIndex].title}</h3>
  <p className={`${openSansFont.className} text-left mb-4`}>
    {testimonials[currentIndex].text}
  </p>
  <p className="mt-2 font-bold text-right">— {testimonials[currentIndex].author}</p>
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
  );
}
