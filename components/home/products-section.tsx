"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const sections = [
    {
      title: "END-TO-END ECOMMERCE SUPPORT",
      subtitle: "Website Development (Shopify / Custom)",
      description: "From idea to revenue — we handle everything.",
      features: [
        "Store Setup & Optimization",
        "Performance Marketing (Meta & Google Ads)",
        "Sales Funnel & Conversion Optimization",
        "Social Media Marketing & Management",
        "Product Shoots & UGC Video Creation",
        "Analytics, Tracking & Growth Monitoring",
      ],
      cta: "Scale Your Brand",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2000",
    },
    {
      title: "ENTERPRISE SYSTEMS & AUTOMATION",
      subtitle: "Intelligent, Scalable Business Systems",
      description: "A complete system to run, track, and scale your business.",
      features: [
        "Custom ERP & Business Platforms",
        "Workflow Automation & Process Control",
        "Inventory, Orders & Financial Systems",
        "Real-time Analytics & Monitoring",
        "System Integration & API Infrastructure",
      ],
      cta: "Optimize Operations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    },
  ];

  return (
    <section id="products" data-section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-light mb-6 text-white"
          >
            Core
            <span className="block text-gray-400 italic">Solutions</span>
          </motion.h2>

          <motion.div
            className="w-12 h-px bg-white mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Big Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-gray-900/10 border border-gray-800/50 hover:border-gray-600 transition-all duration-500 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 pr-6">
                  <h3 className="text-2xl font-light text-white tracking-tight leading-tight">
                    {section.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="mb-6">
                  <p className="text-gray-300 font-light text-base mb-1 italic">
                    {section.subtitle}
                  </p>
                  <p className="text-[10px] text-gray-500 font-light uppercase tracking-[0.2em]">
                    {section.description}
                  </p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-grow">
                  {section.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-gray-400 group/item">
                      <CheckCircle2 className="w-4 h-4 text-gray-700 mt-0.5 group-hover/item:text-white transition-colors" />
                      <span className="font-light text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="w-full">
                  <Button 
                    className="w-full h-12 bg-white text-black hover:bg-gray-200 rounded-none text-xs font-light tracking-[0.2em] group/btn transition-all duration-300"
                  >
                    {section.cta}
                    <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "200px 200px",
          }}
        />
      </div>
    </section>
  );
}
