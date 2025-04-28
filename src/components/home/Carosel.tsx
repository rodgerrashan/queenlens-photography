"use client";

import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import slides from "../../../public/data/carouselSlides.json";
import Image from "next/image";

import { cinzelFont } from "@/styles/fonts";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload all images
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });

    // Auto-slide interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % slides.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });



  return (
    <div className="relative w-screen overflow-hidden" {...swipeHandlers}>
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] touch-pan-y">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].src}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 , ease: "easeInOut"}}
          >
            <Image
              src={slides[currentIndex].src}
              width={2000}
              height={3000}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-cover"
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 2000px"
              draggable={false}
            />

            <div
              className={`${cinzelFont.className} absolute bottom-0 left-0 bg-gradient-to-t from-slate-50/100 via-white/60 to-transparent text-black p-4 sm:p-6 w-full`}
            >
              <h2 className="text-5xl sm:text-5xl md:text-8xl font-semibold max-w-6xl ps-3">
                {slides[currentIndex].title}
              </h2>
              <p className="text-lg sm:text-lg md:text-2xl max-w-5xl ps-3">
                {slides[currentIndex].description}
              </p>
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