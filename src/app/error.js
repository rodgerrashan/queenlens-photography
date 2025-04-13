'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
          <div className="p-4">
            <Image
              src={"https://www.queenlens.lk/images/logo/smLogo.png"}
              alt="Logo"
              width={128}
              height={128}
              className="animate-pulse"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-4 text-red-600">Something went wrong!</h2>
          <p className="mt-2 text-gray-600">{error?.message || 'Unexpected error occurred.'}</p>
          <button
            onClick={() => reset()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
