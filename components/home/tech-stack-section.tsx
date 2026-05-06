"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TechStackSection() {
  return (
    <section id="tech-stack" data-section className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Tech Stack Header */}
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
            Tech
            <span className="block text-gray-400 italic">Stack</span>
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
            Modern tools for exceptional results
          </motion.p>
        </motion.div>

        {/* Technologies Minimal Grid */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-12 max-w-6xl mx-auto">
            {[
              {
                name: "React",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Next.js",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              },
              {
                name: "Node.js",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "TypeScript",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              },
              {
                name: "MongoDB",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                name: "AWS",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
              },
              {
                name: "Docker",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              },
              {
                name: "Firebase",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
              },
              {
                name: "Python",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "PostgreSQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
              },
              {
                name: "Figma",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col items-center space-y-3"
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain group-hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
                <span className="text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-center font-light">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-5"
        >
          <motion.h3
            className="text-4xl md:text-6xl font-light mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Digital
            <span className="block text-gray-400 italic">Presence</span>
          </motion.h3>

          <motion.div
            className="w-10 h-px bg-gray-600 mx-auto mb-16"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Marketing Platforms Minimal Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-16 max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                name: "YouTube",
                logo: "https://www.svgrepo.com/show/13671/youtube.svg",
              },
              {
                name: "Instagram",
                logo: "https://www.svgrepo.com/show/303154/instagram-2016-logo.svg",
              },
              {
                name: "LinkedIn",
                logo: "https://www.svgrepo.com/show/448234/linkedin.svg",
              },
              {
                name: "Facebook",
                logo: "https://www.svgrepo.com/show/448224/facebook.svg",
              },
              {
                name: "TikTok",
                logo: "https://www.svgrepo.com/show/452114/tiktok.svg",
              },
              {
                name: "Hotstar",
                logo: "/hotstar-svgrepo.png",
              },
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center space-y-3"
              >
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-full h-full object-contain group-hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-light">
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-gray-500 mb-8 font-light leading-relaxed">
              Comprehensive solutions from development to digital marketing
            </p>

            <Link href="/marketing">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button
                  variant="outline"
                  className="border-gray-600 text-black hover:border-gray-400 hover:text-black px-8 py-3 rounded-none font-light"
                >
                  View Marketing Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
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
            backgroundSize: "120px 120px",
          }}
        />
      </div>
    </section>
  );
}
