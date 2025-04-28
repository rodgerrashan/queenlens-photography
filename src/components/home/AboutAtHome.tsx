import {montserratFont, openSansFont} from '@/styles/fonts';
import Link from 'next/link';

export default function AboutAtHome() {
    return (
      <div className="py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto p-8">
          <h1 className= {`${montserratFont.className} text-3xl font-bold mb-6 `}>About Queenlens Photography</h1>
          <p className= {`${openSansFont.className} text-lg leading-relaxed text-gray-800` }>
          At Queenlens Photography, we transform life&apos;s precious moments into enduring art. Built on the pillars of creativity, professionalism, and heartfelt storytelling, we excel in a wide range of photography services, including <span className='font-bold'>wedding photography, family portraits, model photography, and event photography.</span>  Our diverse team of skilled artists ensures that your unique vision is beautifully brought to life. </p>
          <Link href= '/about'>
          <button className="transform transition-all border-2 duration-300 border-gray-950 mt-8 bg-slate-50 hover:bg-gray-950 text-gray-950 hover:text-gray-50 text-lg font-medium py-1 px-6 rounded-3xl   focus:ring-blue-400">
            About Us
          </button>
          </Link>
          
          <p className="mt-3 text-gray-900 font-bold">
            Ready to tell your story?{' '}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </a>{' '}
            to book your session today.
          </p>
        </div>
      </div>
    );
  }