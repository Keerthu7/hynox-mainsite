import type React from "react"
import "../globals.css"
import { Inter } from "next/font/google"
import { homePageStructuredData } from "./home-structured-data"
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import ClientLayout from "@/components/client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Software Company in Tiruppur | ERP, Ecommerce & Web Development',
  description: 'HYNOX is a leading software company in Tiruppur offering ERP software, ecommerce development, web design, mobile app development, and Shopify solutions for textile, garment, and growing businesses across Tamil Nadu.',
}

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
        {/* End Meta Pixel Code */}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1129133012473322&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <GoogleTagManager gtmId="GTM-KMLDP729" />
        <GoogleAnalytics gaId="G-SQRXLH7ZZ8" />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
