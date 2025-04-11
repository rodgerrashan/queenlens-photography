import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
          <div className="p-4">
            <Image
              src="/Images/logo/smLogo.png"
              alt="Logo"
              width={128}
              height={128}
              className="animate-pulse"
            />
          </div>
          <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
          <p className="mt-2 text-gray-600">Sorry, the page you are looking for doesn&apos t exist.</p>
          <Link href="/" className="mt-4 px-4 py-2 bg-gray-950 text-white hover:bg-blue-900 transition rounded-full font-bold">
            Go to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
