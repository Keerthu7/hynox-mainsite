import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Textile Software Company Tiruppur | ERP & Automation',
  description: 'Textile software company in Tiruppur providing ERP, automation, inventory management, and production software for textile manufacturers.',
}

export default function TextileSoftwareCompanyTiruppurPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
          Textile Software Company in Tiruppur
        </h1>
      </div>
    </div>
  )
}
