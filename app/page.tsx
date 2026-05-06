import { Metadata } from 'next'
import HomeClient from './home-client'
import { homePageStructuredData } from './home-structured-data';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'HYNOX | Custom Software & Cloud Solutions for Business Growth',
  description: 'HYNOX delivers bespoke software development, cutting-edge IT solutions, and efficient manufacturing services. Elevate your business with our innovative and reliable technology partnerships.',
  keywords: 'HYNOX, software development, IT solutions, custom software, web application development, mobile app development, enterprise software, cloud solutions, data analytics, AI development, machine learning, digital transformation, technology consulting, manufacturing services, product engineering, quality assurance, cybersecurity, IT infrastructure, managed IT services, blockchain development, IoT solutions, UI/UX design, full-stack development, frontend development, backend development, DevOps, agile development, custom CRM, custom ERP, e-commerce solutions, SaaS development, startup technology partner, innovation, reliability, scalable solutions, modern technology, expert developers, digital strategy, business process automation, system integration, API development, database management, software architecture, technical support, IT outsourcing, offshore development, nearshore development, global IT services, technology partnership, future-proof solutions, advanced analytics, intelligent automation, secure software, high-performance computing, digital innovation, strategic IT, business growth, technology leadership',
  openGraph: {
    title: 'HYNOX | Custom Software & Cloud Solutions for Business Growth',
    description: 'HYNOX delivers bespoke software development, cutting-edge IT solutions, and efficient manufacturing services. Elevate your business with our innovative and reliable technology partnerships.',
    url: 'https://www.hynox.in',
    siteName: 'HYNOX',
    images: [
      {
        url: 'https://www.hynox.in/hynox_logo.jpg',
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
    title: 'HYNOX | Custom Software & Cloud Solutions for Business Growth',
    description: 'HYNOX delivers bespoke software development, cutting-edge IT solutions, and efficient manufacturing services. Elevate your business with our innovative and reliable technology partnerships.',
    creator: '@hynox_org',
    images: ['https://www.hynox.in/hynox_logo.jpg'],
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
