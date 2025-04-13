'use client';

import Image from 'next/image';

export default function Loading() {

  return (
    <html>
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
          <div className="p-4">
            <Image
              src="https://www.queenlens.lk/images/logo/smLogo.png"
              alt="Queenlens Brand Logo"
              width={128}
              height={128}
              className="animate-pulse"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
