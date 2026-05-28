import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affordable App Solutions | Get Your App Built Today',
  description: 'We build custom iOS & Android apps for businesses. Fast delivery. Free consultation!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
