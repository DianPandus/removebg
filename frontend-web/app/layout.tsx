// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HapusBG - AI Background Remover",
  description:
    "Hapus latar belakang gambar secara otomatis, cepat, dan gratis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-gray-200`}>
        <Navbar />
        <main className="pt-20">
          {" "}
          {/* Padding top agar konten tidak tertutup Navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
