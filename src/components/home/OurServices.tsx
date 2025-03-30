// pages/services.js
import Link from 'next/link';
import {montserratAlternatesFont,latoFont} from '@/styles/fonts';
import services from'../../../public/data/ourservices.json';
export default function OurServices() {
    return(
      <div className = "bg-slate-100">
        <div className=" py-10 px-5 max-w-5xl mx-auto">
      <h1 className= {`${montserratAlternatesFont.className} text-center text-3xl font-bold mb-10`}>Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-2 border-blue-950 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-blue-950 hover:text-gray-50"
          >
            <h2 className= {`${montserratAlternatesFont.className} text-2xl font-bold mb-4 `}>{service.title}</h2>
            <p className= {`${latoFont.className} mb-4`}>{service.description}</p>
            <Link href={service.link}>
              <p className="text-blue-500 hover:underline">Explore More</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="pt-6 text-center">
  <p className="text-blue-500 hover:text-blue-950">See more</p>
</div>
    </div>

      </div>
        
    );
}