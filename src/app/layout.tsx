import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
  title: "Queenlens",
  description: "Explore Queenlens Photography for professional photography services that bring your memories to life. Specializing in weddings, portraits, events, and more."
  ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
