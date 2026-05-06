"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const ShippingDeliveryPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8">
              Shipping &
              <span className="block text-gray-400 italic">Delivery Policy</span>
            </h1>
            
            <motion.div
              className="w-16 h-px bg-white mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <p className="text-gray-400 font-light">
              Last updated on Sep 29 2025
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900/20 border border-gray-800 p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within Not Applicable or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. THE BLACK CREST is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within Not Applicable rom the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 8870524355 or hello.hynox@gmail.com
            </p>
          </motion.div>
        </motion.div>
      </main>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-16"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-2 h-px bg-gray-700" />
      </motion.div>

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
    </div>
  );
};

export default ShippingDeliveryPolicyPage;
