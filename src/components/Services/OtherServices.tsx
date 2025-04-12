"use client";
import { motion } from "framer-motion";
import {
  Palette,
  Video,
  Brush,
  Megaphone
} from "lucide-react";

const services = [
  {
    title: "Color Grading",
    description: "Enhance colors with cinematic tones.",
    icon: <Palette className="w-12 h-12 text-pink-400" />,
  },
  {
    title: "Advertising Content",
    description: "Create stunning visuals for promotions.",
    icon: <Megaphone className="w-12 h-12 text-blue-400" />,
  },
  {
    title: "Photo Editing",
    description: "Refine every detail to perfection.",
    icon: <Brush className="w-12 h-12 text-yellow-400" />,
  },
  {
    title: "Video Editing",
    description: "Capture moments in motion with professional quality.",
    icon: <Video className="w-12 h-12 text-purple-400" />,
  },
];

export default function OtherServices() {
  return (
    <section className="relative py-10 px-5 bg-gray-950 text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10">Other Services</h2>

      {/* Animated Background Shapes */}
      <motion.div
        className="absolute w-52 h-52 bg-pink-500 rounded-full opacity-30 top-10 left-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-blue-400 opacity-20 rotate-45 top-32 right-0"
        animate={{ rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-yellow-300 opacity-10 bottom-10 left-10 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Service Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-5 rounded-2xl shadow-md backdrop-blur-sm flex flex-row sm:flex-col items-center justify-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="p-3 pr-5 sm:pr-3">{service.icon}</div>
            <div className=" sm:text-center">
            <h3 className="text-xl font-semibold mb-1 ">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>

            </div>
            
          </motion.div>
        ))}
      </div>

      {/* Contact Button */}
      <div className="relative z-10 mt-12 flex justify-center">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 border-slate-50 border-2 hover:bg-slate-50 hover:text-gray-950 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}
