import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Company in Tirupur | IT & Business Solutions',
  description: 'Leading software company in Tirupur offering ERP software, web development, ecommerce, mobile apps, and digital business solutions across Tamil Nadu.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
