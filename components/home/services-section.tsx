"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  image: string;
  title: string;
  description: string;
  category: string;
  viewMoreLink?: string;
  isLogo?: boolean; // Optional property
}

export default function ServicesSection() {
  return (
    <section id="services" data-section className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-light mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our
            <span className="block text-gray-400 italic">Services</span>
          </motion.h2>

          <motion.div
            className="w-12 h-px bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Digital solutions tailored for your success
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
          {[
            {
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
              title: "Web Applications",
              description: "Scalable web solutions for modern businesses",
              category: "Development",
              viewMoreLink: "/services/web-applications",
            },
            {
              image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2426",
              title: "Mobile Applications",
              description: "Native and cross-platform mobile experiences",
              category: "Development",
              viewMoreLink: "/services/mobile-applications",
            },
            {
              image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2426",
              title: "Custom Software",
              description: "Bespoke solutions for unique business needs",
              category: "Development",
              viewMoreLink: "/services/custom-software",
            },
            {
              image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2426",
              title: "AI/ML Solutions",
              description: "Intelligent automation and predictive analytics",
              category: "AI/ML",
              viewMoreLink: "/services/ai-ml-solutions",
            },
            {
              image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2070&auto=format&fit=crop",
              title: "Shopify Store Development",
              description: "Create your own E-commerce store with us",
              category: "Development",
              viewMoreLink: "/services/shopify-store-development",
            },
            {
              image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2426",
              title: "UGC Video Creation",
              description: "Authentic content that builds trust and drives sales",
              category: "Content",
              viewMoreLink: "/services/ugc-video-creation",
            },
            {
              image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=2426",
              title: "Social Media Marketing",
              description: "Strategic growth and community management",
              category: "Marketing",
              viewMoreLink: "/services/social-media-marketing",
            },
            {
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2426",
              title: "Performance Marketing",
              description: "ROI-focused Meta and Google ad campaigns",
              category: "Marketing",
              viewMoreLink: "/services/performance-marketing",
            },
          
          ].map((service: ServiceItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={service.viewMoreLink || "#"}
                className="block h-full"
              >
                {/* Service Card */}
                <div className="relative h-full overflow-hidden bg-gray-900/20 border border-gray-800 group-hover:border-gray-600 transition-all duration-300 flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-32 overflow-hidden flex-shrink-0">
                    {service.isLogo ? (
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-12 h-12 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300"
                        />
                      </div>
                    ) : (
                      <>
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                      </>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] text-gray-300 font-light tracking-wider bg-black/50 px-2 py-0.5 backdrop-blur-sm">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-base font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Action Indicator */}
                    <motion.div className="flex items-center justify-between pt-3 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                      <span className="text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors duration-300 font-light">
                        {service.viewMoreLink ? "Learn More" : "Coming Soon"}
                      </span>

                      {service.viewMoreLink && (
                        <motion.div
                          className="w-3 h-px bg-gray-600 group-hover:bg-gray-400 transition-colors duration-300"
                          whileHover={{ scaleX: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service Categories Summary */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { category: "Development", count: "4" },
            { category: "AI/ML", count: "2" },
            { category: "Content", count: "1" },
            { category: "Marketing", count: "2" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-light text-white">
                {item.count}
              </div>
              <div className="text-sm text-gray-500 font-light">
                {item.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg text-gray-500 mb-8 font-light">
            Ready to discuss your project?
          </p>

          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                variant="outline"
                className="border-gray-600 text-black hover:border-gray-400 hover:text-black px-8 py-3 rounded-none font-light"
              >
                Start Conversation
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-32 left-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-1 h-1 bg-gray-700 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="w-2 h-px bg-gray-700" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-24"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="w-px h-3 bg-gray-700" />
        </motion.div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
          linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
        `,
            backgroundSize: "160px 160px",
          }}
        />
      </div>
    </section>
  );
}
