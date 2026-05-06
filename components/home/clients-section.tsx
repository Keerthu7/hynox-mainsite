"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const row1Clients = [
  { title: "SugarStar", category: "Textile", image: "/sugarstar_logo.jpg" },
  { title: "JP Aluminium", category: "Interiors", image: "/jpnets_logo.jpg" },
  { title: "Team3", category: "Technology", image: "/team3-logo-white.png" },
  { title: "Aharraa", category: "Food", image: "/aharraa_logo.jpg" },
  { title: "Teerex", category: "Textile", image: "/teerex_logo.jpg" },
  { title: "Twinstar", category: "Textile", image: "/twinstar_logo.jpg" },
  { title: "Kyto", category: "Textile", image: "/kyto_logo.jpg" },
  { title: "NSK", category: "Textile", image: "/nsk_logo.jpg" },
];

const row2Clients = [
  { title: "Mallika Garments", category: "Textile", image: "/mallika_garments_logo.jpg" },
  { title: "NP Global Exports", category: "Textile", image: "/npglobal_logo.jpg" },
  { title: "Zyden", category: "Textile", image: "/zyden_logo.jpg" },
  { title: "Graaps", category: "Textile", image: "/graasp_logo.jpg" },
  { title: "Kores Fabrics", category: "Textile", image: "/kores_logo.jpg" },
  { title: "Kido Care", category: "Textile", image: "/kido_care_logo.png" },
  { title: "Sun Holidays", category: "Travel", image: "/sun_holidays_logo.png" },
  { title: "Livinza", category: "Textile", image: "/livinza_logo.png" },
];

function ClientCard({ client }: { client: { title: string; category: string; image: string } }) {
  return (
    <div className="group flex-shrink-0 flex flex-col items-center space-y-3 mx-6 md:mx-8">
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        <div className="w-full h-full overflow-hidden border border-gray-700 group-hover:border-gray-500 transition-colors duration-300 bg-gray-900/20 rounded-lg">
          <img
            src={client.image}
            alt={client.title}
            className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300 pointer-events-none rounded-lg" />
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-sm md:text-base font-light text-gray-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
          {client.title}
        </h3>
        <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300 font-light tracking-wider">
          {client.category}
        </span>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section id="clients" data-section className="py-32 bg-black relative overflow-hidden">
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
            <span className="block text-gray-400 italic">Clients</span>
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
            Trusted by businesses across industries
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-16 mb-24">
        {/* Row 1 — RIGHT SCROLL (Moving to Right) */}
        <div className="relative flex overflow-hidden py-4">
          <motion.div
            className="flex flex-row flex-nowrap"
            animate={{
              x: ["-33.33%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {[...row1Clients, ...row1Clients, ...row1Clients].map((client, i) => (
              <ClientCard key={`r1-${i}`} client={client} />
            ))}
          </motion.div>
          {/* Fading Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </div>

        {/* Row 2 — LEFT SCROLL (Moving to Left) */}
        <div className="relative flex overflow-hidden py-4">
          <motion.div
            className="flex flex-row flex-nowrap"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {[...row2Clients, ...row2Clients, ...row2Clients].map((client, i) => (
              <ClientCard key={`r2-${i}`} client={client} />
            ))}
          </motion.div>
          {/* Fading Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Industry Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            {
              category: "Textile & Fashion",
              count: "9",
              description: "Leading textile manufacturers and fashion brands",
            },
            {
              category: "Interiors",
              count: "1",
              description: "Industrial and interior solution providers",
            },
            {
              category: "Food Delivery",
              count: "1",
              description: "Food Delivery Partner that connects the Home Cooks"
            }
          ].map((industry, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-light text-white">
                  {industry.count}
                </div>
                <div className="text-lg md:text-xl font-light text-gray-300">
                  {industry.category}
                </div>
                <div className="w-8 h-px bg-gray-700 mx-auto" />
              </div>
              <p className="text-sm text-gray-500 font-light max-w-xs mx-auto leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Testimonial Quote */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <div className="text-lg md:text-xl text-gray-400 font-light italic leading-relaxed">
              "Working with diverse clients across industries has strengthened
              our expertise and ability to deliver tailored solutions."
            </div>
            <div className="w-16 h-px bg-gray-600 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <p className="text-lg text-gray-500 mb-8 font-light">
            Ready to join our growing list of satisfied clients?
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
                Become a Client
              </Button>
            </motion.div>
          </Link>
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
            backgroundSize: "200px 200px",
          }}
        />
      </div>
    </section>
  );
}
