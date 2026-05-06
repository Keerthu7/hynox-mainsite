"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const CancellationRefundPolicyPage = () => {
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
              Cancellation &
              <span className="block text-gray-400 italic">Refund Policy</span>
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
              THE BLACK CREST believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
            </p>
          </motion.div>

          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                Policy Details
              </h2>
              <div className="bg-gray-900/10 border border-gray-800 p-6">
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Cancellations will be considered only if the request is made within 7 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    THE BLACK CREST does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 days of receipt of the products.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    In case of any Refunds approved by the THE BLACK CREST, it'll take Not Applicable for the refund to be processed to the end customer.
                  </li>
                </ul>
              </div>
            </motion.section>
          </div>
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

export default CancellationRefundPolicyPage;
