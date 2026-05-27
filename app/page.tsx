import { Metadata } from 'next'
import HomeClient from './home-client'
import { homePageStructuredData } from './home-structured-data';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Best Web, App & Software Company in Tiruppur / Tirupur | Hynox.in',
  description: 'Looking for the best web design, app development, Shopify, ERP & custom software company in Tiruppur / Tirupur, Tamil Nadu? Hynox delivers premium IT solutions.',
  keywords: 'web design company in Tiruppur, web design company in Tirupur, website development Tiruppur, website development Tirupur, app development Tiruppur, app development Tirupur, Shopify store Tiruppur, Shopify store Tirupur, custom software Tiruppur, custom software Tirupur, ERP software Tiruppur, ERP software Tirupur, software company in Tiruppur, software company in Tirupur, web development company Tamil Nadu, mobile app development Tamil Nadu, best IT company Tiruppur, best IT company Tirupur, website company near me, Shopify developer Tamil Nadu, ecommerce website Tiruppur, ecommerce website Tirupur, garment ERP software Tiruppur, garment ERP software Tirupur, textile software company Tiruppur, textile software company Tirupur, HYNOX, hynox.in',
  openGraph: {
    title: 'Best Web, App & Software Company in Tiruppur / Tirupur | Hynox.in',
    description: 'Looking for the best web design, app development, Shopify, ERP & custom software company in Tiruppur / Tirupur, Tamil Nadu? Hynox delivers premium IT solutions.',
    url: 'https://hynox.in',
    siteName: 'HYNOX',
    images: [
      {
        url: 'https://hynox.in/hynox_logo.jpg',
        width: 800,
        height: 600,
        alt: 'HYNOX Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Web, App & Software Company in Tiruppur / Tirupur | Hynox.in',
    description: 'Looking for the best web design, app development, Shopify, ERP & custom software company in Tiruppur / Tirupur, Tamil Nadu? Hynox delivers premium IT solutions.',
    images: ['https://hynox.in/hynox_logo.jpg'],
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Tiruppur',
    'geo.position': '11.1085;77.3411',
    'ICBM': '11.1085, 77.3411',
  },
}


export default function HomePage() {
  return (
    <>
      <Script
        id="json-ld-home-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageStructuredData) }}
      />
      <HomeClient />
    </>
  );
}
