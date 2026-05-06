"use client";

import { motion } from "framer-motion";

export default function GlobalServiceSection() {
  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-light mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Global
            <span className="block text-gray-400 italic">Reach</span>
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
            Delivering solutions across continents with local expertise and
            global standards
          </motion.p>
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          className="flex justify-around md:gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            {
              name: "India",
              flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
              code: "IN",
            },
            {
              name: "United Kingdom",
              flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
              code: "UK",
            },
            {
              name: "Finland",
              flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
              code: "FI",
            },
          ].map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className="text-center space-y-6"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Flag Container */}
                <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24">
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden border border-gray-700 group-hover:border-gray-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} Flag`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Country Info */}
                <div className="space-y-2">
                  <h3 className="text-white text-lg md:text-xl font-light">
                    {country.name}
                  </h3>
                  <p className="text-gray-500 text-sm tracking-widest font-mono">
                    {country.code}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Trusted by businesses worldwide for innovative technology solutions
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="w-1 h-1 bg-gray-600 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="w-2 h-px bg-gray-700" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.8 }}
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
            backgroundSize: "100px 100px",
          }}
        />
      </div>
    </section>
  );
}
