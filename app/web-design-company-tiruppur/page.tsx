import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Company in Tiruppur | Ecommerce & Business Websites',
  description: 'HYNOX is a leading web design company in Tiruppur creating responsive business websites, ecommerce stores, and SEO-friendly web solutions for textile and garment industries.',
}

export default function WebDesignCompanyTiruppurPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
          Web Design Company in Tiruppur
        </h1>
      </div>
    </div>
  )
}
