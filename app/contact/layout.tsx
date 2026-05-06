import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HYNOX | Get in Touch with Our Team',
  description: 'Contact HYNOX for innovative software solutions, cloud platforms, and digital transformation services. Reach out to our team for expert consultation and support.',
  keywords: 'HYNOX contact, contact us, get in touch, software solutions, cloud platforms, digital transformation, IT services, support, inquiry',
  openGraph: {
    title: 'HYNOX | Get in Touch with Our Team',
    description: 'Contact HYNOX for innovative software solutions, cloud platforms, and digital transformation services. Reach out to our team for expert consultation and support.',
    url: 'https://www.hynox.in/contact',
    siteName: 'HYNOX Contact',
    images: [
      {
        url: 'https://www.hynox.in/corporate.png', // Using a relevant image from public folder
        width: 800,
        height: 600,
        alt: 'HYNOX Contact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HYNOX | Get in Touch with Our Team',
    description: 'Contact HYNOX for innovative software solutions, cloud platforms, and digital transformation services. Reach out to our team for expert consultation and support.',
    creator: '@hynox_org',
    images: ['https://www.hynox.in/corporate.png'], // Using a relevant image from public folder
  },
};

export default function ContactLayout({
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
