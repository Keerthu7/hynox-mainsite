import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Tiruppur | Android & iOS App Company',
  description: 'Professional mobile app development company in Tiruppur offering Android, iOS, ecommerce, and business automation apps for startups and industries.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
