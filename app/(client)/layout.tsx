import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/general/Navbar";
import ScrollToTop from "@/components/general/ScrollToTop";
import Footer from "@/components/general/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen w-full px-20 pt-0 pb-10">
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
