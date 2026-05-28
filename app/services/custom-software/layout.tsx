import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'App Developers in India | Build Your App With Us',
  description: 'We build custom iOS & Android apps for businesses. Fast delivery. Free consultation!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
