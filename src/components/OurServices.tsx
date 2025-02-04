// pages/services.js
import Link from 'next/link';
import {montserratAlternatesFont,latoFont} from '@/styles/fonts';

const services = [
  {
    title: 'Wedding Photography',
    description: 'From the ceremony to the reception, we document every moment of your special day with elegance and attention to detail.',
    link: '/wedding-photography',
  },
  {
    title: 'Couple Pre shoot',
    description: 'Celebrate your love with stunning portraits, perfect for engagements, anniversaries, or simply because.',
    link: '/couple-pre-shoot',
  },
  {
    title: 'Graduation Shoots',
    description: 'Celebrations to graduation moments, with vibrant and heartfelt photography.',
    link: '/graduation-shoots',
  },
  {
    title: 'Baby Photography',
    description: 'Preserve the innocence and wonder of your little ones, as well as the bonds that make your family unique.',
    link: '/baby-photography',
  },
  {
    title: 'Birthday Photography',
    description: 'Our birthday photography service is crafted to preserve the laughter, surprises, and cherished memories of your celebration.',
    link: '/birthday-photography',
  },
  {
    title: 'Product Photography',
    description: 'Showcase your products in the best light, whether for e-commerce or promotional purposes, with high-quality, attention-grabbing images.',
    link: '/product-photography',
  },

];
export default function OurServices() {
    return(
        <div className="bg-slate-100 py-10 px-5 max-w-5xl mx-auto">
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
      {/* <div className="p-8 text-center">
  <p className="text-blue-500 hover:text-blue-950">View all</p>
</div> */}
    </div>
    );
}