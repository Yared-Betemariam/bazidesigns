import type { Metadata } from "next";
import "./globals.css";
import { font } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BaziDesgins - Best Graphics Design and Video Editing Agency",
    template: "%s | Bazi Designs",
  },
  description:
    "We specialize in bringing your ideas to life through a combination of creative graphic design and expert video editing services",
  icons: [
    {
      rel: "icon",
      url: "/l.png",
    },
  ],
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
