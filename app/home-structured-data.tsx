import { type WithContext, type WebSite, type Organization } from 'schema-dts';

export const homePageStructuredData: WithContext<WebSite | Organization>[] = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HYNOX | Empowering Businesses with Digital Innovation",
    "url": "https://www.hynox.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.hynox.in/search?q={search_term_string}"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HYNOX | Empowering Businesses with Digital Innovation",
    "url": "https://www.hynox.in",
    "logo": "https://www.hynox.in/hynox_logo.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210", // Replace with actual contact number
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/hynox", // Replace with actual social media links
      "https://twitter.com/hynox_org",
      "https://www.linkedin.com/company/hynox"
    ]
  }
];
