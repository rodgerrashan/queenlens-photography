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
const commonHeading3Styles = `${cinzelFont.className} text-xl text-center font-medium mt-4 text-gray-950`;
const commonListStyles = `list-disc list-inside mt-4 max-w-2xl mx-auto text-gray-950 text-left`;

const TermsAndConditions: React.FC = () => {
    return (
        <>
            <BackButton />

            {/* Main content */}
            <div className='max-w-5xl mx-auto px-12 py-10'>
                <h1 className={commonHeading1Styles}>
                    Terms and Conditions
                </h1>
                <p className={commonParagraphStyles}>
                    Last updated: 2023-10-01
                </p>
                <p className={commonParagraphStyles}>
                    Welcome to Queenlens Photography! By accessing our website or booking our services, you agree to comply with these Terms and Conditions. Please read these terms carefully as they govern your use of our site and services.
                </p>
                <p className={commonParagraphStyles}>
                    These Terms and Conditions apply to all visitors, users, and others who access or use our services. If you do not agree with any part of these terms, you must not use our website or services.
                </p>
                <h2 className={commonHeading2Styles}>Acceptance of Terms</h2>
                <p className={commonParagraphStyles}>
                    By using our website or engaging in our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.
                </p>

                <h2 className={commonHeading2Styles}>Booking and Payment Terms</h2>
                <h3 className={commonHeading3Styles}>a. Booking Confirmation</h3>
                <p className={commonParagraphStyles}>
                    Your booking is only confirmed once we receive a signed contract and the required deposit or full payment (as outlined in your agreement with us).
                </p>
                <h3 className={commonHeading3Styles}>b. Deposit and Payment</h3>
                <p className={commonParagraphStyles}>
                    A deposit of 30% is required at the time of booking to secure the date. The remaining balance is due on or before the event date.
                </p>
                <h3 className={commonHeading3Styles}>c. Cancellation Policy</h3>
                <p className={commonParagraphStyles}>
                    If you need to cancel or reschedule your booking, please notify us as soon as possible. Cancellation terms are as follows:
                </p>
                <ul className={commonListStyles}>
                    <li>70% refund if canceled 30 days prior to the event</li>
                    <li>No refund if canceled within 7 days prior to the event</li>
                </ul>

                <h2 className={commonHeading2Styles}>Photography Services</h2>
                <h3 className={commonHeading3Styles}>a. Service Guarantee</h3>
                <p className={commonParagraphStyles}>
                    We are committed to providing high-quality photography services. However, specific outcomes may vary depending on factors such as weather, lighting, and cooperation of subjects. We do not guarantee exact duplication of sample images.
                </p>
                <h3 className={commonHeading3Styles}>b. Client Responsibilities</h3>
                <p className={commonParagraphStyles}>
                    It is the client&aposs responsibility to inform us of any special requirements or specific shots desired before the session or event. We recommend sharing a list of must-have shots to ensure we capture your key moments.
                </p>
                <h3 className={commonHeading3Styles}>c. Post-Production and Editing</h3>
                <p className={commonParagraphStyles}>
                    Queenlens Photography retains discretion in the style and selection of photos edited for final delivery. Minor retouching is included in our packages; additional edits may incur an extra fee.
                </p>

                <h2 className={commonHeading2Styles}>Intellectual Property and Usage Rights</h2>
                <h3 className={commonHeading3Styles}>a. Ownership of Images</h3>
                <p className={commonParagraphStyles}>
                    All images captured by Queenlens Photography are the intellectual property of Queenlens Photography. We retain the right to use these images for promotional purposes, unless explicitly agreed otherwise.
                </p>
                <h3 className={commonHeading3Styles}>b. Client Usage Rights</h3>
                <p className={commonParagraphStyles}>
                    Upon delivery, clients receive non-exclusive, personal usage rights for the images.
                </p>
                <h3 className={commonHeading3Styles}>c. Restrictions</h3>
                <p className={commonParagraphStyles}>
                    Clients may not sell, license, or alter images without written permission from Queenlens Photography.
                </p>

                <h2 className={commonHeading2Styles}>Website Usage</h2>
                <h3 className={commonHeading3Styles}>a. Prohibited Activities</h3>
                <p className={commonParagraphStyles}>While using our website, you agree not to:</p>
                <ul className={commonListStyles}>
                    <li>Violate any laws or regulations</li>
                    <li>Misrepresent information or impersonate others</li>
                    <li>Engage in activities that harm our website’s functionality, such as uploading malicious software</li>
                </ul>
                <h3 className={commonHeading3Styles}>b. Intellectual Property</h3>
                <p className={commonParagraphStyles}>
                    All content on the Queenlens Photography website, including images, text, and design, is protected by copyright laws. Users may not reproduce, distribute, or modify this content without our consent.
                </p>

                <h2 className={commonHeading2Styles}>Limitation of Liability</h2>
                <p className={commonParagraphStyles}>
                    Queenlens Photography is not liable for any:
                </p>
                <ul className={commonListStyles}>
                    <li>Damages resulting from delays, cancellations, or circumstances beyond our control (e.g., weather, emergencies)</li>
                    <li>Losses arising from the use of or inability to use our website</li>
                    <li>Any indirect or consequential damages related to our services or website use</li>
                </ul>
                <p className={commonParagraphStyles}>
                    In cases of unforeseen issues affecting our ability to perform services, we will make every effort to reschedule or offer alternative solutions.
                </p>

                <h2 className={commonHeading2Styles}>Privacy Policy</h2>
                <p className={commonParagraphStyles}>
                    Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By agreeing to these Terms and Conditions, you acknowledge that you have read and agree to our Privacy Policy.
                </p>

                <h2 className={commonHeading2Styles}>Governing Law and Disputes</h2>
                <p className={commonParagraphStyles}>
                    These Terms and Conditions are governed by the laws of Sri Lanka. Any disputes arising from these terms or our services will be resolved in the courts.
                </p>

                <h2 className={commonHeading2Styles}>Changes to Terms and Conditions</h2>
                <p className={commonParagraphStyles}>
                    We may update these Terms and Conditions periodically to reflect changes in our policies or legal requirements. Any changes will be posted on this page, and your continued use of our website or services constitutes acceptance of these modifications.
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
