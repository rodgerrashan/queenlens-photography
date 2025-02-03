"use client"
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = ({ statusCode = 404 }: { statusCode?: number }) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold">{statusCode === 404 ? "404" : "Error"}</h1>
      <p className="mt-4 text-lg">
        {statusCode === 404 ? "Page not found." : "An unexpected error occurred."}
      </p>
      <p className="mt-2 text-sm">Redirecting to the homepage in 5 seconds...</p>
      <button
        className="mt-6 rounded border border-white px-4 py-2 hover:bg-white hover:text-black"
        onClick={() => router.push("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Error;
