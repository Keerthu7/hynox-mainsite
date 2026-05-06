import type React from "react"
import "../globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
// import { metadata } from "./metadata" // Import metadata from the new file
import { SiteHeader } from "@/components/site-header"
import { homePageStructuredData } from "./home-structured-data"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "react-hot-toast"
import { GoogleTagManager } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="_xQq_ort50z_J0gaZFTyUooHNRXbw8cB-lK269bioRw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homePageStructuredData),
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1129133012473322');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=1129133012473322&ev=PageView&noscript=1"
              />
            `,
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-KMLDP729" />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SiteHeader />
          {children}
          <Analytics />
          <SpeedInsights />
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
