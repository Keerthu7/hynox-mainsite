"use client";

import { motion } from "framer-motion";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import LustreText from "@/components/ui/lustretext";

export default function CTAsection() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-32 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Our team is here to help. Get in touch and we'll answer any questions you may have about our custom software solutions and digital services.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-block bg-white text-black px-8 py-3 font-light hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}