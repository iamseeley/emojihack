import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import emojisOG from '../emojis/emojisOg.json';
import { headers } from "next/headers";
import { userAgent } from "next/server";

const inter = Inter({ subsets: ["latin"] });

// let faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛠️</text></svg>`;
// let faviconPng = `https://emojihack.com/api/faviconpng?emoji=${encodeURIComponent('🛠️')}`;


const faviconPngData = emojisOG['🛠️'];

let faviconSvgUrl = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛠️</text></svg>`
)}`;

// function getIconUrl(emoji: string) {
//   const headersObj = typeof headers === 'function' ? headers() : undefined;
//   const { device } = headersObj
//     ? userAgent({ headers: headersObj })
//     : { device: { type: undefined } };
//   const isIOSOrSafari =
//     device.type === 'mobile' || (headersObj && headersObj.get('user-agent')?.includes('Safari'));

//   const faviconPngData = emojisOG[emoji];
//   const faviconSvgUrl = `data:image/svg+xml,${encodeURIComponent(
//     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`
//   )}`;

//   return isIOSOrSafari ? faviconPngData : faviconSvgUrl;
// }


export const metadata: Metadata = {
  metadataBase: new URL('https://emojihack.com'),
  title: 'Emoji Hack',
  description: 'A project for every single emoji',
  icons: {
    icon: [
      { url: faviconSvgUrl, type: 'image/svg+xml' },
      { url: faviconPngData, type: 'image/png' },
    ],
    // icon: getIconUrl('🛠️'),
    shortcut: faviconPngData,
    apple: faviconPngData,
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
