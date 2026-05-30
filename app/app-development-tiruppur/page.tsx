import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile App Development Tiruppur | Android & iOS App Company',
  description: 'Professional mobile app development company in Tiruppur offering Android, iOS, ecommerce, and business automation apps for startups and industries.',
}

export default function AppDevelopmentTiruppurPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
          Mobile App Development Company in Tiruppur
        </h1>
      </div>
    </div>
  )
}
