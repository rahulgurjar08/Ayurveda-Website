import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "Ayurveda - Natural Healing & Wellness",
  description: "Authentic Ayurvedic healthcare, consultations, therapies and wellness wisdom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}