import { cinzelFont, latoFont, montserratAlternatesFont } from "@/styles/fonts";
import {
  Heart,
  Users,
  Cake,
  Camera,
  Baby,
  Calendar,
  GraduationCap
} from "lucide-react";

import rawServices from '../../../public/data/ourservices.json';
import Link from "next/link";

// Step 1: Define the icon map
const iconMap = {
  Heart,
  Users,
  Cake,
  Camera,
  Baby,
  Calendar,
  GraduationCap
};

// Step 2: Define types
type IconName = keyof typeof iconMap;

interface Service {
  title: string;
  description: string;
  link: string;
  icon: IconName;
}

// Safely type the imported JSON
const services: Service[] = rawServices.map((service) => ({
  ...service,
  icon: service.icon as IconName, // Explicitly casting the icon to IconName
}));

export default function Intro() {
  return (
    <>
      <div>
        <div>
          <h2 className={`${cinzelFont.className} pt-6 text-3xl font-bold text-center text-gray-950 px-8`}>
            Queenlens Photography Services
          </h2>
          <p className={`${latoFont.className} mt-4 max-w-2xl mx-auto text-center text-gray-950 px-8 pb-3`}>
            Capture the beauty of every moment with Queenlens Photography. We offer a variety of services designed to preserve your most precious memories in timeless images. Find the perfect fit below and let’s create something unforgettable together.
          </p>
        </div>
      </div>

      <div>
        <div className="py-10 px-5 max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-1 py-2">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon]; // Safe now

                return (
                  <Link key={index} href={service.link}>
                    <div className="text-center max-w-md py-5 border-2 border-blue-950 p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-gray-950 hover:text-gray-50">
                      {Icon && (
                        <Icon className="mx-auto mb-3 h-10 w-10  transition-colors duration-300" />
                      )}
                      <h2 className={`${montserratAlternatesFont.className} text-2xl font-semibold mb-2 px-2`}>
                        {service.title}
                      </h2>
                      <p className={`${latoFont.className} text-sm px-2`}>
                        {service.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-col'>
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </>
  );
}
