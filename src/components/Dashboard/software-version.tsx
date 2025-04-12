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
        <div className='w-full flex flex-col mt-20 p-5 items-center justify-center'>
        <p className={`text-xl font-bold text-gray-800 mb-1 ${cinzelFont.className}`}>{versionInfo.name}<span className="text-gray-800 text-sm mb-2 pl-2">{versionInfo.version}</span></p>
        
         <p className="text-gray-800 text-sm mb-2">{versionInfo.releaseDate} </p>
        <p className="text-gray-800 text-sm">{versionInfo.author}</p>
                            
                        
                        

        </div>
            
                        
        </>
    );
};

export default SoftwareVersion;
