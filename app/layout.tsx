import './globals.css';
import type { Metadata } from 'next';
import '@fontsource/winky-sans';
import { Inter } from "next/font/google";

import { theme } from "@/data/site";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sahoo's Kitchen - Authentic Indian Cloud Kitchen",
    template: "%s | Sahoo's Kitchen"
  },
  description: "Discover authentic Indian cuisine from our cloud kitchen. Order fresh, homemade meals, weekly combos, and breakfast subscriptions delivered to your doorstep.",
  keywords: ["Indian food", "cloud kitchen", "food delivery", "weekly meal plans", "homemade food", "breakfast subscription"],
  authors: [{ name: "Sahoo's Kitchen" }],
  creator: "Sahoo's Kitchen",
  publisher: "Sahoo's Kitchen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahooskitchen.com",
    title: "Sahoo's Kitchen - Authentic Indian Cloud Kitchen",
    description: "Authentic Indian cuisine delivered to your doorstep. Weekly combos and breakfast subscriptions available.",
    siteName: "Sahoo's Kitchen",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Sahoo's Kitchen - Delicious Indian food"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahoo's Kitchen - Authentic Indian Cloud Kitchen",
    description: "Authentic Indian cuisine delivered to your doorstep. Weekly combos and breakfast subscriptions available.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: theme.colors.primary,
  category: "Food & Dining",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Sahoos Kitchen',
              description: 'Experience the authentic taste of traditional cuisine in a modern setting.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Food Street',
                addressLocality: 'Foodville',
                addressRegion: 'FC',
                postalCode: '12345',
                addressCountry: 'US',
              },
              servesCuisine: ['Indian', 'Traditional'],
              priceRange: '$$',
              openingHours: 'Mo-Su 11:00-23:00',
            }),
          }}
        />
      </head>
      <body className={inter.className} style={{
        fontFamily: theme.fonts.heading,
        color: theme.colors.primary,
      }}>
        <Navbar />
        <main className="min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}