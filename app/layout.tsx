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
  title: 'Resto Cucina | Cozinha italiana autêntica',
  description:
    'Viva a cozinha italiana autêntica, massas artesanais e uma hospitalidade atemporal no Resto Cucina.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Resto Cucina | Cozinha italiana autêntica',
    description:
      'Viva a cozinha italiana autêntica, massas artesanais e uma hospitalidade atemporal no Resto Cucina.',
    images: [
      {
        url: '/og.png',
        width: 1600,
        height: 900,
        alt: 'Preview social do Resto Cucina com massa, vinho e luz de velas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resto Cucina | Cozinha italiana autêntica',
    description:
      'Viva a cozinha italiana autêntica, massas artesanais e uma hospitalidade atemporal no Resto Cucina.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
