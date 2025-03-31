import { cinzelFont, latoFont, montserratAlternatesFont } from "@/styles/fonts";

import services from'../../../public/data/ourservices.json';

export default function Intro() {
    return (
        <>
        <div className = 'pb-10'>
                    <div >
                    <h2 className= {`${cinzelFont.className} pt-6 text-3xl font-bold text-center text-gray-950 px-4`}>Queenlens Photography Services</h2>
                    <p className= {`${latoFont.className}  mt-4 max-w-2xl mx-auto text-center  text-gray-950  px-4 pb-3`}>
                    Capture the beauty of every moment with Queenlens Photography. We offer a variety of services designed to preserve your most precious memories in timeless images. Find the perfect fit below and let’s create something unforgettable together.
                    </p>
        
                </div>
        
                </div>

                <div>
        <div className=" py-10 px-5 max-w-5xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-center border-2 border-blue-950 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-gray-950 hover:text-gray-50"
          >
            <h2 className= {`${montserratAlternatesFont.className} text-3xl font-semibold mb-4 `}>{service.title}</h2>
            
          </div>
        ))}
      </div>
      
    </div>

      </div>
        
        </>
    );
}