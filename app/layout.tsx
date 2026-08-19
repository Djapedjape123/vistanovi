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

///

export const metadata: Metadata = {
  metadataBase: new URL("https://vistanovi.com"),
  title: {
    default: "Vista Novi | Vikendica na Fruškoj gori",
    template: "%s | Vista Novi",
  },
  description:
    "Vista Novi je privatna vikendica u Ledincima na Fruškoj gori. Opuštanje, priroda, bazen, WiFi i savršen boravak za odmor u Srbiji.",
  keywords: [
    "Vista Novi",
    "vikendica Fruška Gora",
    "Ledinci smeštaj",
    "odmor Fruška Gora",
    "privatni bazen Fruška Gora",
    "vikendica Srbija",
    "iznajmljivanje vikendice",
    "vikendica sa bazenom",
    "odmor u prirodi",
    "vikendica Novi Sad",
    "smeštaj Fruška Gora",
  ],
  applicationName: "Vista Novi",
  authors: [{ name: "Vista Novi" }],
  creator: "Vista Novi",
  publisher: "Vista Novi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vista Novi | Vikendica na Fruškoj gori",
    description:
      "Privatna vikendica Vista Novi u Ledincima, Fruška Gora - odmor u prirodi sa bazenom i pogledom.",
    url: "https://vistanovi.rs",
    siteName: "Vista Novi",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/duomot4hp/image/upload/v1785149684/ChatGPT_Image_27._%D1%98%D1%83%D0%BB_2026._13_03_26_z5djuf.png",
        width: 1200,
        height: 630,
        alt: "Vista Novi vikendica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vista Novi",
    description:
      "Vikendica Vista Novi u Ledincima, Fruška Gora - privatni bazen, priroda i mir.",
    images: [
      "https://res.cloudinary.com/duomot4hp/image/upload/v1785149684/ChatGPT_Image_27._%D1%98%D1%83%D0%BB_2026._13_03_26_z5djuf.png",
    ],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Vista Novi",
    description:
      "Privatna vikendica Vista Novi na Fruškoj gori, smeštena u Ledincima, Srbija.",
    url: "https://vistanovi.rs",
    telephone: "+381 64 582 4612",
    email: "emilijagolubov@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ledinci, Fruška Gora",
      addressLocality: "Ledinci",
      addressCountry: "RS",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Privatni bazen",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Odmor u prirodi",
      },
    ],
  };

  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <SplashScreen />
          {children}
          <WhatsAppButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>

  );
}
