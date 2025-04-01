import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhone, FaTiktok , FaTelegram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-200 py-10 px-4'>
      <footer className='container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {/* Section 01: Branding */}
        <div className='flex flex-col items-start justify-start mb-5'>
          <Link href='/home'>
            <Image
              src={'/images/logo/brand.png'}
              alt='QueenLens Photography'
              width={280}
              height={280}
            />
          </Link>
          <p className='mt-4 text-gray-700'>
            Ready to capture your story? Contact us today and start creating memories with QueenLens Photography.
          </p>
          <button className='mt-4 bg-black text-white py-2 px-4 rounded hover:bg-blue-950 transition'>Let&apos;s Talk</button>
        </div>

        {/* Section 02: Quick Links & Services */}
        <div className='flex flex-row justify-between space-y-0 md:space-y-0'>
          <div className='min-w-40'>
            <h3 className='text-xl font-bold mb-2'>Quick Links</h3>
            <ul className='space-y-2 text-gray-600'>
              {['Home','Gallery','About', 'Services', 'Contact', 'FAQ', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/ /g, '-')}`} className='hover:text-blue-950 transition'>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='min-w-36 mx-9'>
            <h3 className='text-xl font-bold mb-2'>Services</h3>
            <ul className='space-y-2 text-gray-600'>
              {['Wedding Shoots', 'Couple Memories', 'Casual Clicks', 'Birthday Moments', 'Baby Smiles', 'Graduation Frames'].map((service) => (
                <li key={service}>
                  <Link href={`/services/${service.toLowerCase().replace(/ /g, '-')}`} className='hover:text-blue-950 transition'>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 03: Follow Us & Get in Touch */}
        <div className='flex flex-col  space-y-8 md:flex-row md:space-y-0 md:space-x-8 lg:flex-col lg:space-y-8 lg:space-x-0'>
          <div>
            <h3 className='text-xl font-bold mb-2'>Follow Us</h3>
            <div className='flex space-x-4'>
              {[
                { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61562502455213&mibextid=ZbWKwL', color: 'text-blue-600' },
                { icon: FaInstagram, href: 'https://www.instagram.com/queenlens_photography/profilecard/?igsh=ZHp4OWM0enJraDlv', color: 'text-pink-600' },
                { icon: FaYoutube, href: 'https://youtube.com/@queenlensphotography?si=JYjRN8jpF-EA9mZ4', color: 'text-red-600' },
                { icon: FaTiktok, href: 'https://www.tiktok.com/@queenlens_photography', color: 'text-black' },
              ].map(({ icon: Icon, href, color }) => (
                <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
                  <Icon className={`${color} text-2xl hover:scale-110 transition`} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-2'>Get in Touch</h3>
            <div className='flex space-x-4'>
              {[
                { icon: FaWhatsapp, href: 'https://wa.me/+94719991164', color: 'text-green-600' },
                { icon: FaTelegram, href: 'https://t.me/+94719991164', color: 'text-blue-500' },
                { icon: FaEnvelope, href: 'mailto:dinukanipun2001@gmail.com', color: 'text-black' },
                { icon: FaPhone, href: 'tel:+94719991164', color: 'text-black' },
              ].map(({ icon: Icon, href, color }) => (
                <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
                  <Icon className={`${color} text-2xl hover:scale-110 transition`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
