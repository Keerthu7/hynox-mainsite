import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Company in Tiruppur | Ecommerce & Business Websites',
  description: 'HYNOX is a leading web design company in Tiruppur creating responsive business websites, ecommerce stores, and SEO-friendly web solutions for textile and garment industries.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
