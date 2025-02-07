import {montserratFont, openSansFont} from '@/styles/fonts';

export default function AboutAtHome() {
    return (
      <div className="py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto p-8">
          <h1 className= {`${montserratFont.className} text-3xl font-bold mb-6 `}>About Queenlens Photography</h1>
          <p className= {`${openSansFont.className} text-lg leading-relaxed text-gray-700` }>
            At Queenlens Photography, we’re passionate about turning life’s beautiful moments into timeless art. Founded on the principles of creativity, professionalism, and heartfelt storytelling, we specialize in capturing everything from weddings and family portraits to product and event photography. Our dedicated team of artists brings diverse expertise to each session, ensuring your vision is beautifully realized.
          </p>
          <button className="transform transition-all border-2 duration-300 border-gray-950 mt-8 bg-slate-50 hover:bg-gray-950 text-gray-950 hover:text-gray-50 text-lg font-medium py-1 px-6 rounded-3xl   focus:ring-blue-400">
            About Us
          </button>
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