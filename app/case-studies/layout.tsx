import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HYNOX | Client Success Stories & Impact',
  description: 'Explore HYNOX client success stories and discover the impact of our innovative software solutions and cloud platforms on businesses across various industries.',
  keywords: 'HYNOX case studies, client success, software solutions, cloud platforms, digital transformation, business impact, user stories, technology partnerships',
  openGraph: {
    title: 'HYNOX | Client Success Stories & Impact',
    description: 'Explore HYNOX client success stories and discover the impact of our innovative software solutions and cloud platforms on businesses across various industries.',
    url: 'https://www.hynox.in/case-studies',
    siteName: 'HYNOX Case Studies',
    images: [
      {
        url: 'https://www.hynox.in/custom_software_cover.jpeg', // Using a relevant image from public folder
        width: 800,
        height: 600,
        alt: 'HYNOX Case Studies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HYNOX | Client Success Stories & Impact',
    description: 'Explore HYNOX client success stories and discover the impact of our innovative software solutions and cloud platforms on businesses across various industries.',
    creator: '@hynox_org',
    images: ['https://www.hynox.in/custom_software_cover.jpeg'], // Using a relevant image from public folder
  },
};

export default function CaseStudiesLayout({
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
