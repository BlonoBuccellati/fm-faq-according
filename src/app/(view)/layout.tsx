import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Image from "next/image";

import { imageBackgroundDesktop, imageBackgroundMobile } from "@/shared/assets";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ According",
  description: "FAQ According",
  icons: "favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        <picture className="absolute inline-block h-[clamp(14.5rem,9.252rem+22.39vw,20rem)] w-full">
          <source
            media="(min-width:768px)"
            srcSet={imageBackgroundDesktop.src}
          />
          <Image
            className="-z-50 h-[clamp(14.5rem,9.252rem+22.39vw,20rem)] object-cover"
            alt=""
            fill
            src={imageBackgroundMobile}
          />
        </picture>
        {children}
      </body>
    </html>
  );
}
