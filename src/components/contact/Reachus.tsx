import React from 'react';
import {latoFont } from "@/styles/fonts";
import { IoCall, IoLogoWhatsapp, IoMail } from 'react-icons/io5';


export default function Reachus() {

    return(
        <div 
        id='contactBox'
        className = "bg-gray-200 flex flex-col items-center my-10 px-8 py-4 ">
            <div className = "max-w-3xl ">
                <h2 className={`${latoFont.className} pt-6 text-3xl font-bold text-left text-gray-950  `}>Prefer to Speak with Us Directly?</h2>
                <p className={`${latoFont.className} mt-4 max-w-2xl mx-auto text-left  text-gray-950  px-4 pb-3`}>
                We’re just a call or email away! Whether you want to chat about your ideas or need guidance choosing the perfect package, we’re here to make the process smooth and enjoyable.
                </p>
                <div className='pl-5'>

                <a href='mailto:dinukanipun2001@gmail.com'>
                <div className='flex flex-row px-5 pb-2'>
                    <IoMail className='h-8 w-8'/>
                    <p className='text-xl pl-2 font-bold'>contact@queenlensphotography.com</p>
                </div>

                </a>

                <a href='tel:+94719991164'>

                <div className='flex flex-row px-5 pb-2' >
                    <IoCall className='h-8 w-8'/>
                    <p className='text-xl pl-2 font-bold'>+94 (71) 999 11 64</p>
                </div>

                </a>

                <a href='https://wa.me/+94719991164'>
                <div className='flex flex-row px-5 pb-2' >
                    <IoLogoWhatsapp className='h-8 w-8'/>
                    <p className='text-xl pl-2 font-bold'>+94 (71) 999 11 64</p>
                </div>
                </a>
                </div>
                
                <p className={`${latoFont.className} mt-4 max-w-2xl mx-auto text-left  text-gray-950  px-4 pb-3`}>
                Let’s start planning your unforgettable photoshoot experience!
                </p>
            </div>
        </div>

    );

}
