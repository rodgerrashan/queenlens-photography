import { montserratAlternatesFont, latoFont } from "@/styles/fonts";
import services from'../../../public/data/whyChoosUs.json';



export default function Why(){


    return(
        <>
        <section className="p-8  text-center">
          <h2 className={`${montserratAlternatesFont.className} text-3xl font-bold`}>Why Queenlens Photography?</h2>
          
        </section >

        <section>
        <div className=" py-10 px-5 max-w-4xl mx-auto">
      <div className="grid grid-cols-1  gap-4 px-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-2 border-blue-950 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-blue-950 hover:text-gray-50"
          >
            <h2 className= {`${montserratAlternatesFont.className} text-2xl font-bold mb-4 `}>{service.title}</h2>
            <p className= {`${latoFont.className} mb-4`}>{service.description}</p>
          </div>
        ))}
      </div>
      
    </div>

      
        </section>
        



        
        
        </>

        






    );
}