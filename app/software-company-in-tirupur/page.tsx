import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Company in Tirupur | IT & Business Solutions',
  description: 'Leading software company in Tirupur offering ERP software, web development, ecommerce, mobile apps, and digital business solutions across Tamil Nadu.',
}

export default function SoftwareCompanyInTirupurPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
          Software Company in Tirupur
        </h1>
      </div>
    </div>
  )
}
