import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Created by Syed Daniyal Shah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
        {children}
        </Providers>
        </body>
    </html>
    </ClerkProvider>
  );
}
