import React from 'react';
import BackButton from '@/components/BackButton';
import { cinzelFont, latoFont } from "@/styles/fonts";
import Link from 'next/link';
import Copyrights from '@/components/Copyrights';
import Image from 'next/image';
import { IoCall, IoMail } from 'react-icons/io5';
import WhatsAppButton from '@/components/Whatsapputton';

// Common styles
const commonParagraphStyles = `${latoFont.className} mt-4 max-w-2xl mx-auto text-center text-gray-950`;
const commonHeading1Styles = `${cinzelFont.className} text-3xl font-bold text-center text-gray-950`;
const commonHeading2Styles = `${cinzelFont.className} text-2xl text-center font-semibold mt-16 text-gray-950`;
const commonListStyles = `list-disc list-inside mt-4 max-w-2xl mx-auto text-gray-950 text-left`;

const TermsAndConditions: React.FC = () => {
    return (
        <>
            <BackButton />

            {/* Main content */}
            <div className='max-w-5xl mx-auto px-12 py-10'>
                <h1 className={commonHeading1Styles}>
                    Privacy Policy
                </h1>
                <p className={commonParagraphStyles}>
                    Last updated: 2025-04-15
                </p>
                <p className={commonParagraphStyles}>
                At Queenlens Photography, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.

                </p>
                
                <h2 className={commonHeading2Styles}>What We Collect</h2>
                <p className={commonParagraphStyles}>
                We may collect the following personal information when you interact with us Name, Contact information (email address, phone number), Event details, including dates and locations for photography services

                </p>

                <h2 className={commonHeading2Styles}>How We Use Your Information</h2>
                <p className={commonParagraphStyles}>
                We use your information for the following purposes:
                </p>
                <ul className={commonListStyles}>
                    <li>To provide and manage our photography services</li>
                    <li>To improve our website and services based on user feedback</li>
                    <li>To communicate with you regarding your bookings and inquiries</li>
                    
                    <li>To send promotional materials, if you have opted in to receive them</li>
                </ul>

                <h2 className={commonHeading2Styles}>Sharing Your Information</h2>
                
                <p className={commonParagraphStyles}>
                We do not sell, trade, or rent your personal information to third parties.

                </p>

                <h2 className={commonHeading2Styles}>Data Retention                </h2>
                
                <p className={commonParagraphStyles}>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Once data is no longer needed, it will be securely deleted or anonymized.

                </p>

                <h2 className={commonHeading2Styles}>Changes to This Privacy Policy
                </h2>
                
                <p className={commonParagraphStyles}>
                We may update our Privacy Policy periodically. Any changes will be posted on this page, and the effective date will be updated. We encourage you to review this policy periodically to stay informed about how we protect your data.

                </p>


                <h2 className={commonHeading2Styles}>Contact Us</h2>
                <p className={commonParagraphStyles}>
                    If you have any questions about this Privacy Policy, your data, or our practices, please feel free to reach out to us.
                </p>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-2 py-2 mb-5 px-2'>
            <div className="text-2xl pb-5 font-bold md:pb-0" >
                <Link href="/home">
            <Image
              src="/images/logo/brand.png"
              alt="QueenLens Photography"
              width={240}
              height={240}
            />
          </Link>
          

        </div>
        <div className = 'flex flex-col items-center md:items-start justify-center gap-2 '>
            <a href='mailto:dinukanipun2001@gmail.com'>
                            <div className='flex flex-row px-5 pb-2 items-center'>
                                <IoMail className='h-6 w-6'/>
                                <p className='text-lg pl-2 font-bold'>contact@queenlensphotography.com</p>
                            </div>
            
                            </a>
            
                            <a href='tel:+94719991164'>
            
                            <div className='flex flex-row px-5 pb-2 items-center' >
                                <IoCall className='h-6 w-6'/>
                                <p className='text-lg pl-2 font-bold'>+94 (71) 999 11 64</p>
                            </div>
            
                            </a>   


          </div>

            </div>
           <Copyrights/>
           <WhatsAppButton/>
            
        </>
    );
};

export default TermsAndConditions;
