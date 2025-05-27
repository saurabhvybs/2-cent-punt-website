import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/sections/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://2centpunt.com'),
  title: '2 Cent & Punt - Software Solutions for Startups',
  description: '2 Cent & Punt helps startups grow faster with AI-powered notification services, customer targeting, and analytics. Perfect for non-tech founders.',
  keywords: 'startup software, notification service, AI analytics, customer targeting, startup growth, software solutions',
  authors: [{ name: '2 Cent & Punt' }],
  creator: '2 Cent & Punt',
  publisher: '2 Cent & Punt',
  robots: 'index, follow',
  openGraph: {
    title: '2 Cent & Punt - Software Solutions for Startups',
    description: 'Empowering startups with intelligent software solutions. We handle the complexity so you can focus on growth.',
    url: 'https://2centpunt.com',
    siteName: '2 Cent & Punt',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '2 Cent & Punt - Software Solutions for Startups',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2 Cent & Punt - Software Solutions for Startups',
    description: 'Empowering startups with intelligent software solutions.',
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}