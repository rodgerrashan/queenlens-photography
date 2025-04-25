'use client';

import Image from 'next/image';

export default function Error({ 
  error,
  reset 
}: { 
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
      <div className="p-4">
        <Image
          src="https://www.queenlens.lk/images/logo/smLogo.png"
          alt="Logo"
          width={128}
          height={128}
          className="animate-pulse"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-4 text-red-600">Something went wrong!</h2>
      <p className="mt-2 text-gray-600">Unexpected error occurred.</p>
      <p className="mt-2 text-sm text-gray-500">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-950 transition"
      >
        Try Again
      </button>
    </div>
  );
}
