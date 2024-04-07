import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { font } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bazi Desgins",
    template: "%s | Bazi Designs",
  },
  description: "We are a professional Video editors and graphics designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="squared fixed inset-0 -z-20"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
