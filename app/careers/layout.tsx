import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HYNOX | Your Next Career Step Starts Here',
  description: 'Explore exciting career opportunities at HYNOX. Join our innovative team and build your future in software development, cloud solutions, and digital transformation.',
  keywords: 'HYNOX careers, software jobs, cloud jobs, tech jobs, IT careers, internship, full-time, job opportunities, digital innovation, software development, cloud platform, career growth',
  openGraph: {
    title: 'HYNOX | Your Next Career Step Starts Here',
    description: 'Explore exciting career opportunities at HYNOX. Join our innovative team and build your future in software development, cloud solutions, and digital transformation.',
    url: 'https://www.hynox.in/careers',
    siteName: 'HYNOX Careers',
    images: [
      {
        url: 'https://www.hynox.in/corporate.png', // Using a relevant image from public folder
        width: 800,
        height: 600,
        alt: 'HYNOX Careers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HYNOX | Your Next Career Step Starts Here',
    description: 'Explore exciting career opportunities at HYNOX. Join our innovative team and build your future in software development, cloud solutions, and digital transformation.',
    creator: '@hynox_org',
    images: ['https://www.hynox.in/corporate.png'], // Using a relevant image from public folder
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
