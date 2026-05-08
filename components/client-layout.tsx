"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEcommercePage = pathname === "/services/ecommerce-support";

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {!isEcommercePage && <SiteHeader />}
      {children}
      {!isEcommercePage && <SiteFooter />}
      {!isEcommercePage && <WhatsAppButton />}
      <Toaster />
    </ThemeProvider>
  );
}
