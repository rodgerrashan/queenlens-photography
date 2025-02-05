// pages/index.js
import Image from 'next/image';

export default function InstaLink() {
  return (
    <div className="relative min-h-56 bg-blue-950 mt-8">
      <div className="absolute inset-0">
        <Image
          src="/images/instaLink/imgBg.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 w-auto h-auto px-5 py-1 rounded-2xl z-0">
        <div className=" text-white text-xl text-center neon-text z-10 font-bold">
        <a href="">@instagram.com/queenlens_photography/</a> 
      </div>
        </div>
      </div>
      
    </div>
  );
}
