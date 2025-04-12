'use client';
import { montserratAlternatesFont, latoFont } from "@/styles/fonts";
import React from 'react';

const BehindScenes = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:px-16">
      <div className="flex flex-col max-w-5xl mx-auto text-center items-center justify-center">
        <h2 className= {`${montserratAlternatesFont.className} text-3xl  font-bold mb-4 text-gray-800`}>
          Behind the Scenes
        </h2>
        <p className= {`${latoFont.className} "text-gray-600 mb-8 text-lg`}>
          Get a glimpse of the creativity, teamwork, and fun that goes into every shoot with our photography team.
        </p>
        
        <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/B8Ayp3Y76Rc?si=fUR0XBhl7jdKyBT-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BehindScenes;
