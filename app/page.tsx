import { Metadata } from 'next'
import HomeClient from './home-client'
import { homePageStructuredData } from './home-structured-data';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Custom App Development | iOS & Android App Experts. We build custom iOS & Android apps for businesses. Fast delivery. Free consultation!',
  description: 'We build custom iOS & Android apps for businesses. Fast delivery. Free consultation!',
  keywords: 'web design company in Tiruppur, web design company in Tirupur, website development Tiruppur, website development Tirupur, app development Tiruppur, app development Tirupur, Shopify store Tiruppur, Shopify store Tirupur, custom software Tiruppur, custom software Tirupur, ERP software Tiruppur, ERP software Tirupur, software company in Tiruppur, software company in Tirupur, web development company Tamil Nadu, mobile app development Tamil Nadu, best IT company Tiruppur, best IT company Tirupur, website company near me, Shopify developer Tamil Nadu, ecommerce website Tiruppur, ecommerce website Tirupur, garment ERP software Tiruppur, garment ERP software Tirupur, textile software company Tiruppur, textile software company Tirupur, HYNOX, hynox.in',
  openGraph: {
    title: 'Custom App Development | iOS & Android App Experts. We build custom iOS & Android apps for businesses. Fast delivery. Free consultation!',
    description: 'We build custom iOS & Android apps for businesses. Fast delivery. Free consultation!',
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
    title: 'Custom App Development | iOS & Android App Experts. We build custom iOS & Android apps for businesses. Fast delivery. Free consultation!',
    description: 'We build custom iOS & Android apps for businesses. Fast delivery. Free consultation!',
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
