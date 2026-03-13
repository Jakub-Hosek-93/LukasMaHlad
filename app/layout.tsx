import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const InterFont = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Lukáš má hlad",
    description: "Webová stránka pro Lukáše V., který je plavec a má neustále hlad. Přispějte mu na bagetu s kuřecími řízečky.",
    keywords: "Lukáš Veselý, bageta, hlad, charita, plavec, přispět, kuřecí řízečky, webová stránka, PKHK, sportovec, jídlo, peníze, pomoc, podpora, crowdfunding",
    creator: 'Jakub Hošek',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.variable} ${InterFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
