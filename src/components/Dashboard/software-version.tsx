"use client"
import React from 'react';
import { cinzelFont } from "@/styles/fonts";
import { useEffect, useState } from 'react';


interface VersionInfo {
    name: string;
    version: string;
    releaseDate: string;
    author: string;
}

const useVersionInfo = () => {
    const [versionInfo, setVersionInfo] = useState<VersionInfo>({
        name: '',
        version: '',
        releaseDate: '',
        author: ''
    });

    useEffect(() => {
        fetch('/version.json')
            .then(response => response.json())
            .then(data => setVersionInfo(data))
            .catch(error => console.error('Error loading version info:', error));
    }, []);

    return versionInfo;
};

const SoftwareVersion: React.FC = () => {
    const versionInfo = useVersionInfo();

    return (
        <>
            <div
                className="bg-gray-100  relative"
                
                  
            >
                <h1 className="text-2xl font-bold px-10 pb-4 md:pb-6">About</h1>

                <div className="flex items-center justify-center"
                style={{
                    backgroundImage: `
                      linear-gradient(150deg, rgba(243, 244, 246, 1),rgba(0, 0, 0, 0.1)), 
                      url('/images/backgrounds/version.jpg')
                    `,
                    backgroundBlendMode: 'normal',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                
                >

                    <div
                        className="flex flex-col items-start justify-center pt-5 p-8 px-20 pb-5 bg-cover bg-center mx-auto w-full"

                        style={{
                            backgroundImage: `
                              linear-gradient(180deg, rgba(243, 244, 246, 1) 0% ,
                              rgba(243, 244, 246, 0.75) 30% ,

                              rgba(243, 244, 246, 0.1))
                            `,
                            backgroundBlendMode: 'normal',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                    >
                        <h1 className={`text-4xl font-bold text-gray-800 mb-1 ${cinzelFont.className}`}>
                            {versionInfo.name}
                        </h1>
                        <div className="p-2 px-8 w-full">
                            <p className="text-gray-800 text-md mb-2">
                                <strong>Version:</strong> {versionInfo.version}
                            </p>
                            
                            <p className="text-gray-800 text-md mb-2">
                                <strong>Release Date:</strong> {versionInfo.releaseDate}
                            </p>
                            <p className="text-gray-800 text-md">
                                <strong>Author:</strong> {versionInfo.author}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SoftwareVersion;
