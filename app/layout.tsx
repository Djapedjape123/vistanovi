import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from '@/components/LanguageContext';
import SplashScreen from "@/components/SplashScreen";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vista Novi | Vikendica",
  description: "Vikendica Vista Novi je savršeno mjesto za odmor i bijeg od svakodnevnog stresa. Smještena u prirodnom okruženju, nudi udobnost, privatnost i nezaboravno iskustvo za sve posjetitelje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >


      <body className="min-h-full flex flex-col">
           <LanguageProvider>
              <Navbar />
               <SplashScreen/>
                  {children}
                <WhatsAppButton/>
               <Footer/>
            </LanguageProvider>
      </body>


    </html>
  );
}
