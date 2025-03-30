"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slides from "../../../public/data/carouselSlides.json";
import Image from 'next/image'

import { cinzelFont } from "@/styles/fonts";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen  overflow-hidden">
      <div className="relative h-[400px] sm:h-[500px] md:h-[700px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].src}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 1,  }}
          >
            <Image
            src={slides[currentIndex].src}
            width={2000}
            height={5000}
            alt={slides[currentIndex].title}
                className="w-full h-full object-cover"
            />
            
            <div className={`${cinzelFont.className} absolute bottom-0 left-0 bg-gradient-to-t from-slate-50/100  via-white/60  to-transparent text-black p-4 sm:p-6 w-full`}>
              <h2 className="text-5xl sm:text-5xl md:text-8xl font-semibold max-w-6xl ps-3">{slides[currentIndex].title}</h2>
              <p className="text-lg sm:text-lg md:text-2xl max-w-5xl ps-2">{slides[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-gray-900" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
