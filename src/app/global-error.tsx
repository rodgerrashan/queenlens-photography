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
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}