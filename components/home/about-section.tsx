"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" data-section className="py-32 bg-black relative">
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
            <span className="block text-gray-400 italic">Approach</span>
          </motion.h2>

          <motion.div
            className="w-12 h-px bg-white mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <img
                  src="/strategy_svg.svg"
                  alt="Our Approach"
                  className="w-full h-full object-cover filter hover:grayscale-1 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-300" />
              </motion.div>

              {/* Decorative border elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-gray-600" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-gray-600" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <motion.p
                className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Strategic thinking meets creative execution for exceptional
                digital experiences
              </motion.p>

              <motion.div
                className="w-16 h-px bg-gray-600"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "Understanding your business, goals, and audience",
                },
                {
                  number: "02",
                  title: "Strategy",
                  description:
                    "Tailored approach for your specific objectives",
                },
                {
                  number: "03",
                  title: "Development",
                  description: "Beautiful, functional solutions that perform",
                },
                {
                  number: "04",
                  title: "Launch",
                  description: "Smooth deployment with ongoing optimization",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="group flex items-start gap-6"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center border border-gray-700 group-hover:border-gray-500 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-sm font-light text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-grow space-y-2 pt-1">
                    <h3 className="text-lg md:text-xl font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line */}
                  {index < 3 && (
                    <motion.div
                      className="absolute left-[54px] mt-12 w-px h-8 bg-gray-800"
                      initial={{ height: 0 }}
                      whileInView={{ height: 32 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="mt-32 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Philosophy
            </h3>

            <motion.div
              className="w-12 h-px bg-gray-600 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 2.4 }}
            />

            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed italic">
              "Every project is an opportunity to create something meaningful.
              We believe in building not just software, but lasting
              partnerships that drive real business value."
            </p>
          </motion.div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          {[
            { number: "4", label: "Step Process" },
            { number: "15+", label: "Projects Delivered" },
            { number: "3", label: "Countries" },
            { number: "99%", label: "Client Success" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.8 + index * 0.1 }}
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

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-40 right-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <div className="w-1 h-1 bg-gray-700 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <div className="w-2 h-px bg-gray-700" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-24"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 3.4 }}
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
            backgroundSize: "220px 220px",
          }}
        />
      </div>
    </section>
  );
}
