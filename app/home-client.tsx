"use client";

import HeroSection from "@/components/home/hero-section";
import GlobalServiceSection from "@/components/home/global-service-section";
import TechStackSection from "@/components/home/tech-stack-section";
import ProductsSection from "@/components/home/products-section";
import ServicesSection from "@/components/home/services-section";
import WorkSection from "@/components/home/work-section";
import ClientsSection from "@/components/home/clients-section";
import AboutSection from "@/components/home/about-section";
import FaqSection from "@/components/home/faq-section";

export default function HomeClient() {
  return (
    <div className="bg-black text-white relative">

      <HeroSection />
      <GlobalServiceSection />
      <TechStackSection />
      <ProductsSection />
      <ServicesSection />
      <WorkSection />
      <ClientsSection />
      <AboutSection />
      <FaqSection />
    </div>
  );
}
