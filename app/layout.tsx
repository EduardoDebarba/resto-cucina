import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'Casa Bellini | Authentic Italian Cuisine',
  description:
    'Experience authentic Italian cuisine, handmade pasta and timeless hospitality at Casa Bellini.',
  openGraph: {
    title: 'Casa Bellini | Authentic Italian Cuisine',
    description:
      'Experience authentic Italian cuisine, handmade pasta and timeless hospitality at Casa Bellini.',
    images: [
      {
        url: '/og.png',
        width: 1600,
        height: 900,
        alt: 'Casa Bellini social preview with pasta, wine and candlelight',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Bellini | Authentic Italian Cuisine',
    description:
      'Experience authentic Italian cuisine, handmade pasta and timeless hospitality at Casa Bellini.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
