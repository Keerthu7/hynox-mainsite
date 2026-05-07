"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WorkSection() {
  return (
    <section id="work" data-section className="py-24 bg-black relative">
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
            className="text-4xl md:text-6xl font-light mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our
            <span className="block text-gray-400 italic">Work</span>
          </motion.h2>

          <motion.div
            className="w-12 h-px bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Featured projects and client success stories
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "SugarStar",
              category: "Shopify Development",
              image: "/sugarstar_web.jpeg?height=400&width=600",
              description: "Premium confectionery online store",
            },
            {
              title: "JP Interiors App",
              category: "App Development",
              image: "/JpApp_works.png?height=400&width=600",
              description: "Custom business automation and project management app",
            },
            {
              title: "Team3 Associates",
              category: "Custom Development",
              image: "/team3_works.png",
              description: "Interior Design and Project Execution",
            },
            {
              title: "JP Interiors Web",
              category: "Web Development",
              image: "/JpWeb_works.png?height=400&width=600",
              description: "Interior design portfolio and service showcase",
            },
            {
              title: "Food delivery app",
              category: "Custom Development",
              image: "/aharraa_web.png?height=400&width=600",
              description: "On-demand food delivery service",
            },
            {
              title: "Teerex",
              category: "Custom Development",
              image: "/teerex_web.jpeg?height=400&width=600",
              description: "E-commerce platform with custom features",
            },
            {
              title: "Mallika Garments",
              category: "Custom Development",
              image: "/malika-garments_web.jpg?height=400&width=600",
              description: "Fashion retail business solution",
            },
            {
              title: "Graaps",
              category: "Clothing Brand",
              image: "/graaps_web.png?height=400&width=600",
              description: "Online clothing store",
            },
            {
              title: "Zydenn",
              category: "Clothing Brand",
              image: "/zydenn_web.png?height=400&width=600",
              description: "Online clothing store",
            },
            {
              title: "Kores Fabrics",
              category: "Clothing Brand",
              image: "/kores_web.png?height=400&width=600",
              description: "Online clothing Wholesale Store",
            },
            {
              title: "Kido Care",
              category: "Kids Clothing Brand",
              image: "/kido_care_web.jpg?height=400&width=600",
              description: "Online clothing store",
            },
            {
              title: "Sun Holidays",
              category: "Tours and Travel Agency",
              image: "/sun_holidays_web.png?height=400&width=600",
              description: "Travel Agency Portfolio",
            },
            {
              title: "Twinstar",
              category: "Clothing Brand",
              image: "/twinstar_web.jpeg?height=400&width=600",
              link: "https://www.twinstar.world",
              description: "Online clothing store",
            },
            {
              title: "Livinza",
              category: "Interior Business",
              image: "/livinza_web.png?height=400&width=600",
              description: "Interior Business Portfolio",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="block h-full"
              >
                {/* Project Card */}
                <div className="relative h-full overflow-hidden bg-gray-900/20 border border-gray-800 group-hover:border-gray-600 transition-all duration-300 flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs text-gray-300 font-light tracking-wider bg-black/50 px-2 py-1 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* External Link Indicator */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        className="w-6 h-6 border border-gray-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 border-t border-r border-gray-400"
                          style={{ transform: "rotate(45deg)" }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-500 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Visit Link */}
                    <motion.div className="flex items-center justify-between pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                      <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300 font-light">
                        Visit Live Site
                      </span>

                      <motion.div
                        className="w-4 h-px bg-gray-600 group-hover:bg-gray-400 transition-colors duration-300"
                        whileHover={{ scaleX: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "15+", label: "Projects Delivered" },
            { number: "3", label: "Countries Served" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-light text-white">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg text-gray-500 mb-8 font-light">
            Ready to create something amazing together?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-none font-light">
                  Start Your Project
                </Button>
              </motion.div>
            </Link>

            <Link href="/#work">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button
                  variant="outline"
                  className="border-gray-600 bg-black text-gray-400 hover:border-gray-400 hover:text-black px-8 py-3 rounded-none font-light"
                >
                  View All Projects
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-40 left-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-1 h-1 bg-gray-700 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="w-2 h-px bg-gray-700" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-24"
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
            backgroundSize: "180px 180px",
          }}
        />
      </div>
    </section>
  );
}
