import { Metadata } from 'next'
import AboutClient from '../about-client'

export const metadata: Metadata = {
  title: 'HYNOX | About Us: Our Story & Mission',
  description: 'Discover the story behind HYNOX. Learn about our mission to deliver innovative software solutions and cloud platforms, and our commitment to client success.',
  keywords: 'HYNOX about, about us, our story, mission, vision, values, software company, cloud solutions, digital innovation, technology partner',
  openGraph: {
    title: 'HYNOX | About Us: Our Story & Mission',
    description: 'Discover the story behind HYNOX. Learn about our mission to deliver innovative software solutions and cloud platforms, and our commitment to client success.',
    url: 'https://www.hynox.in/about',
    siteName: 'HYNOX About',
    images: [
      {
        url: 'https://www.hynox.in/corporate.png', // Using a relevant image from public folder
        width: 800,
        height: 600,
        alt: 'HYNOX About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HYNOX | About Us: Our Story & Mission',
    description: 'Discover the story behind HYNOX. Learn about our mission to deliver innovative software solutions and cloud platforms, and our commitment to client success.',
    creator: '@hynox_org',
    images: ['https://www.hynox.in/corporate.png'], // Using a relevant image from public folder
  },
};

export default function AboutPage() {
  return <AboutClient />
}
