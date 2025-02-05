// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhone, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
        <div className='flex flex-col px-4 md:flex-row'>
            {/* Section 01 */}
            <div className="w-full md:w-64 mb-4 md:mb-0 items-start px-5">
                <Link href="/home">
                <Image
                src={"/images/logo/brand.png"}
                alt="QueenLens Photography"
                width={150}
                height={150}
                />
                </Link>
                
                <p className="mt-2">Ready to capture your story? Contact us today and start creating memories with QueenLens Photography.</p>
                <button className="mt-4 bg-black text-white py-2 px-4 rounded">Let&apos;s Talk</button>
            </div>

            {/* Section 02 */}
            <div className='flex flex-col md:flex-row px-2'>
                <div className="w-full md:w-64 mb-6 md:mb-0">
                <h3 className="text-xl font-bold">Quick Links</h3>
                <ul className="mt-2">
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                </ul>
            </div>
            <div className="w-full md:w-64 mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="mt-2">
              <li>Wedding Photography</li>
              <li>Preshoot Sessions</li>
              <li>Couple Shoots</li>
              <li>Birthday Photography</li>
              <li>Graduation Photography</li>
              <li>Baby Photography</li>
              <li>Product Photography</li>
            </ul>
          </div>

            </div>
            
            
        </div>
        <div className='flex flex-col w-64 sm:flex-row lg:flex-col'>
            <div className="justify-between mt-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-6">
            <h3 className="text-xl font-bold pb-3">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-blue-600 text-4xl" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-pink-600 text-4xl" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-red-600 text-4xl" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaTiktok className="text-red-600 text-4xl" /></a>

            </div>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-6">
            <h3 className="text-xl font-bold pb-3">Get in Touch</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-green-600 text-4xl" /></a>
              <a href="mailto:youremail@example.com"><FaEnvelope className="text-black text-4xl" /></a>
              <a href="tel:+1234567890"><FaPhone className="text-black text-4xl" /></a>
            </div>
          </div>
        </div>

            </div>
      
    </footer>
  );
};

export default Footer;
