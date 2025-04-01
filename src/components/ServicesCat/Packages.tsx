'use client';

import { motion } from 'framer-motion';

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
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`w-full md:w-1/3 p-6 rounded-2xl shadow-lg border border-gray-200 
                    ${pkg.highlight ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                >
                    <h3 className="text-xl font-bold mb-2 text-center">{pkg.title}</h3>
                    <p className="text-sm text-center mb-4">{pkg.description}</p>
                    <ul className="text-sm mb-4 space-y-2">
                        {pkg.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">• {detail}</li>
                        ))}
                    </ul>
                    <p className="text-lg font-semibold text-center">Starts at <span className="text-blue-600">{pkg.price}</span></p>
                </motion.div>
            ))}
        </div>
    );
}
