import Image from "next/image";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function HelloworldHeader() {
    return (
        <header className="sticky bg-gray-950  w-full  py-1 px-10 flex flex-row items-center justify-between text-slate-100">

            <div className="text-2xl font-bold mb-1">
        
        <Image
          src={"/images/helloWorld/HelloWorld.png"}
          alt="HelloWorld Logo"
          width={120}
          height={100}
        />
        
        
        
      </div>
      <div>
            <div className="flex space-x-4">
                 <div className='flex space-x-4'>
                              {[
                                { icon: FaWhatsapp, href: 'https://wa.me/+94788428664', color: 'text-slate-50' },
                                { icon: FaEnvelope, href: 'mailto:rodrasjay@gmail.com', color: 'text-slate-50' },
                                { icon: FaPhone, href: 'tel:+94788428664', color: 'text-slate-50' },
                              ].map(({ icon: Icon, href, color }) => (
                                <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
                                  <Icon className={`${color} text-xl hover:scale-110 transition`} />
                                </a>
                              ))}
                            </div>
            </div>
        </div>
            
        </header>
    );
}