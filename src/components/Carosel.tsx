"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'

import { cinzelFont } from "@/styles/fonts";

const slides = [
  { src: "/images/carosel/img1.jpg", title: "Capturing Love’s Grandest Moments", description: "Your big day with timeless shots that tell the story of your love. Every glance, every embrace, forever cherished." },
  { src: "/images/carosel/img2.jpg", title: "Moments Before ‘I Do’", description: "Elegant and intimate pre-wedding photos that capture the excitement and love leading up to your special day." },
  { src: "/images/carosel/img3.jpg", title: "Love, Framed Perfectly", description: "Showcasing the joy, laughter, and intimacy of your relationship in a series of beautifully candid shots." },
  { src: "/images/carosel/img4.jpg", title: "Making Birthdays Last Forever", description: "Life’s milestones with fun, colorful captures that bring out the spirit of your special day." },
  { src: "/images/carosel/img5.jpg", title: "Little Moments, Big Memories", description: "Heartwarming portraits that preserve the innocence and joy of your little one’s early days." },
  { src: "/images/carosel/img6.jpg", title: "Bring Your Brand to Life", description: "Showcase your products with professional shots that highlight every detail, bringing out the best of your brand." },
];

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
