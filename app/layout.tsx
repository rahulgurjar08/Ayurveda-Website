import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/page";

export const metadata: Metadata = {
  title: "Ayurveda Website",
  description: "Ayurveda healthcare and wellness website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}