import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
// @ts-ignore Swiper CSS is bundled at runtime and does not provide TypeScript declarations.
import "swiper/css";
// @ts-ignore Swiper CSS is bundled at runtime and does not provide TypeScript declarations.
import "swiper/css/pagination";
// @ts-ignore Swiper CSS is bundled at runtime and does not provide TypeScript declarations.
import "swiper/css/scrollbar";

import NavBar from "@/components/navbar";
import Header from "@/components/header";
import { LanguageProvider } from "@/context/language-context"; // 👈 IMPORT NUEVO

import LanguageToggle from "@/components/language-toggle";

<LanguageToggle />

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Nicolás Santone | Portfolio",
  description: "Portfolio de desarrollador web full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${urbanist.variable} h-full antialiased`}
    >
      <body className={urbanist.className}>
        <LanguageProvider> {/* 👈 ENVUELVE TODO */}
          <NavBar />
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}