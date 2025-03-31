"use client"

import React,{useRef} from 'react';
import teamPhoto from '../../../public/images/team.png'; 
import Image from 'next/image';

const OurTeam = () => {
    const section2Ref = useRef<HTMLDivElement| null>(null);
    return (
        <section className="pt-8 bg-gray-100" ref = {section2Ref} id = "OurTeam">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-8">OUR TEAM</h2>
                <div className="flex justify-center items-center">
                    <Image
                        src={teamPhoto}
                        alt="Our Team"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
