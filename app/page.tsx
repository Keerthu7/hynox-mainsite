import { Metadata } from 'next'
import HomeClient from './home-client'
import { homePageStructuredData } from './home-structured-data';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Best Web, App & Software Company in Tiruppur | Hynox.in',
  description: 'Looking for the best web design, app development, Shopify, ERP & custom software company in Tiruppur, Tamil Nadu? Hynox delivers premium digital solutions.',
  keywords: 'web design company in Tiruppur, website development Tiruppur, app development Tiruppur, Shopify store Tiruppur, custom software Tiruppur, ERP software Tiruppur, software company in Tiruppur, web development company Tamil Nadu, mobile app development Tamil Nadu, best IT company Tiruppur, website company near me, Shopify developer Tamil Nadu, ecommerce website Tiruppur, garment ERP software Tiruppur, textile software company Tiruppur, HYNOX, hynox.in, IT services Tiruppur, software developers Tiruppur',
  openGraph: {
    title: 'Best Web, App & Software Company in Tiruppur | Hynox.in',
    description: 'Looking for the best web design, app development, Shopify, ERP & custom software company in Tiruppur, Tamil Nadu? Hynox delivers premium digital solutions.',
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
    title: 'Best Web, App & Software Company in Tiruppur | Hynox.in',
    description: 'Looking for the best web design, app development, Shopify, ERP & custom software company in Tiruppur, Tamil Nadu? Hynox delivers premium digital solutions.',
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
