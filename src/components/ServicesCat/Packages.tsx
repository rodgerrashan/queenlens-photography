'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Package {
    title: string;
    description: string;
    details: string[];
    price: string;
    highlight?: boolean;
}

interface PackagesProps {
    packages: Package[];
}

export default function Packages({ packages }: PackagesProps) {
    return (
        <div className="flex flex-col max-w-sm md:max-w-3xl lg:max-w-5xl md:flex-row justify-center items-center gap-6 p-6 mx-auto">
            {packages.map((pkg, index) => (
                <Link href="/contact" key={index} className={`w-full md:w-1/3 `}>
                    
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                    className={`w-full p-6 rounded-2xl shadow-lg border border-gray-200 ${pkg.highlight ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 '}`}
                >
                    <h3 className="text-xl font-bold mb-2 text-center">{pkg.title}</h3>
                    <p className="text-sm text-center mb-4">{pkg.description}</p>
                    <ul className="text-sm mb-4 space-y-2">
                        {pkg.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-green-500 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                {detail}
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg font-semibold text-center">Starts at <span className={`${pkg.highlight? 'text-yellow-500': 'text-blue-700'} pl-1`}>{pkg.price}</span></p>
                </motion.div>
                </Link>
                    
              
                
            ))}
        </div>
    );
}
