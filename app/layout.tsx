import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";


const inter = Inter({ subsets: ["latin"] });

let faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛠️</text></svg>`;
let faviconPng = `https://emojihack.com/api/faviconpng?emoji=${encodeURIComponent('🛠️')}`;

export const metadata: Metadata = {
  metadataBase: new URL('https://emojihack.com'),
  title: 'Emoji Hack',
  description: 'A project for every single emoji',
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`,
    shortcut: faviconPng,
    apple: faviconPng,
  },
  openGraph: {
    title: 'Emoji Hack',
    description: 'A project for every single emoji',
    url: 'https://emojihack.com',
    siteName: 'Emoji Hack',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Emoji Hack',
    card: 'summary_large_image',
  },
  verification: {
    google: '',
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased" >
        <Header />
        <main className="max-w-3xl mx-auto justify-center min-h-screen mb-10 px-4 py-10 md:py-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
