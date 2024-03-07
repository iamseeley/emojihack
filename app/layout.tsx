import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emoji Hack",
  description: "A project for every single emoji.",
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col antialiased " >
        <Header />
        <main className="flex flex-col max-w-3xl mx-auto justify-center min-h-screen mb-10 px-4 py-10 md:py-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
