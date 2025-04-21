'use client'
 import Image from "next/image"
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div>
            <div className="flex justify-center items-center min-h-screen">
                  <div className="p-4">
                    <Image
                      src="https://www.queenlens.lk/images/logo/smLogo.png"
                      alt="Queenlens Loading..."
                      width={128}
                      height={128}
                      className="animate-pulse"
                    />
                  </div>
                  
                  
                </div>
        </div>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <div className="flex gap-4 justify-center mt-4">
          <button 
            onClick={() => reset()} 
            className="rounded-full px-4 py-2 bg-red-800 hover:bg-red-950 text-white transition-colors"
          >
            Try again
          </button>
          <button 
            onClick={() => window.history.back()} 
            className="rounded-full px-4 py-2 bg-gray-800 hover:bg-gray-950 text-white transition-colors"
          >
            Go Back
          </button>
        </div>

      </body>
    </html>
  )
}