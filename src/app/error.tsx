"use client"
import Image from "next/image";

export default function AppError(){

  return(
    <>
    <div className="flex justify-center items-center min-h-screen">
          <div className="p-4">
            <Image
              src="/Images/logo/smLogo.png"
              alt="Loading..."
              width={128}
              height={128}
              className="animate-pulse"
            />
          </div>
          
          
        </div>
    </>
  );
}
