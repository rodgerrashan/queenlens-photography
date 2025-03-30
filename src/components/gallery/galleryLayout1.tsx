"use client";
import Image from "next/image";
import images from "@/data/galleryLayout1.json";
import { motion } from "framer-motion";

export default function GalleryLayout1() {
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col justify-center items-center">
        {/* Upper section */}
        <div className="flex flex-col md:flex-row">
          <div className="m-1 bg-slate-500 p-2 rounded-lg">
            <div className="flex flex-col">
              {/* Upper section column images */}
              {images.slice(0, 2).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    alt={image.alt}
                    src={image.src}
                    width={400}
                    height={400}
                    className="rounded-xl object-cover p-2 hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="m-1 bg-red-900 p-2 rounded-lg">
            <div className="flex flex-col">
              <div className="m-1 flex flex-col md:flex-row">
                {/* Upper section up two images */}
                {images.slice(2, 4).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      alt={image.alt}
                      src={image.src}
                      width={400}
                      height={400}
                      className="rounded-xl object-cover p-2 hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
              {/* Upper section bottom big image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  alt={images[4].alt}
                  src={images[2].src}
                  width={400}
                  height={400}
                  className="rounded-xl object-cover p-2 hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Lower section */}
        <div className="flex flex-col md:flex-row m-2 " >
          {images.slice(5, 7).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                alt={image.alt}
                src={image.src}
                width={400}
                height={400}
                className="rounded-xl object-cover p-2 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}