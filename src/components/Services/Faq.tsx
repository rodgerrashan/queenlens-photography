"use client";
import { useState } from "react";
import {latoFont,cinzelFont } from "@/styles/fonts";
import { ChevronDown, ChevronUp } from "lucide-react";
import services from "../../../public/data/faq.json";
import { motion } from "framer-motion";
import { IoHelpCircle } from "react-icons/io5";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="p-8 text-center">
        <h2 className={`${cinzelFont.className} text-3xl font-bold`}>
        Frequently Asked Questions
        </h2>
      </section>

      <section>
        <div className="pt-5 pb-10 px-5 max-w-md lg:max-w-lg xl:max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-4 px-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-2 border-blue-950 p-2 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:bg-blue-950 hover:text-gray-50"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDescription(index)}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <IoHelpCircle className=" w-8 h-8 md:w-10 md:h-10" />
                    <h2
                      className={`${latoFont.className} text-lg md:text-xl font-bold max-w-56  md:max-w-60 lg:max-w-80`}
                    >
                      {service.title}
                    </h2>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 mr-5" />
                  ) : (
                    <ChevronDown className="w-6 h-6 mr-5" />
                  )}
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className={`${latoFont.className} mt-4 px-5 pb-2`}>{service.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
