"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Globe, MapPin, Calendar, Sun } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8">
              Privacy
              <span className="block text-gray-400 italic">Policy</span>
            </h1>
            
            <motion.div
              className="w-16 h-px bg-white mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <p className="text-gray-400 font-light">
              Last Updated: July 2026
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="bg-gray-900/20 border border-gray-800 p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              <span className="text-white font-normal">Company:</span> The Black Crest (operating as "HYNOX")
              <br /><br />
              Your privacy is important to us. This Privacy Policy explains how The Black Crest, also operating under the name HYNOX, collects, uses, shares, and protects your information when you use our website, services, apps, and subscription-based platforms — including our clothing subscription service.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                1. Information We Collect
              </h2>
              <p className="text-gray-400 font-light mb-8 leading-relaxed">
                We collect the following categories of information to provide and improve our services:
              </p>

              <div className="space-y-8">
                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-xl font-light text-white mb-4">1.1 Personal Info</h3>
                  <ul className="space-y-2 text-gray-400 font-light">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Name & Email address
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Phone number
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Billing & shipping address
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Account credentials
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-xl font-light text-white mb-4">1.2 Payment Info</h3>
                  <ul className="space-y-2 text-gray-400 font-light">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Card or UPI details
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Secure third-party gateways
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Subscription billing details
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-xl font-light text-white mb-4">1.3 Usage Data</h3>
                  <ul className="space-y-2 text-gray-400 font-light">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      IP address & browser type
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Operating system info
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      Pages visited & time spent
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                2. How We Use Your Data
              </h2>
              <div className="bg-gray-900/10 border border-gray-800 p-6">
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    <strong>Service Delivery:</strong> Provide services, fulfill product or software orders.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    <strong>Subscriptions:</strong> Manage subscription plans and send monthly clothing boxes.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    <strong>Support:</strong> Respond to customer support and service requests.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    <strong>Communication:</strong> Send transactional emails, reminders, and promotional offers (you can opt out anytime).
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    <strong>Optimization:</strong> Improve platform features and overall user experience.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                3. Leave Policy (Internal)
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                The following leave entitlements apply to all full-time employees of HYNOX:
              </p>
              
              <div className="overflow-x-auto mb-8 border border-gray-800 rounded-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900/50 border-b border-gray-800">
                      <th className="p-4 font-normal text-white">Leave Type</th>
                      <th className="p-4 font-normal text-white">Days Per Year</th>
                      <th className="p-4 font-normal text-white">Carry Forward</th>
                      <th className="p-4 font-normal text-white">Paid / Unpaid</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400 font-light">
                    <tr className="border-b border-gray-800/50">
                      <td className="p-4">Casual Leave (CL)</td>
                      <td className="p-4">12 days</td>
                      <td className="p-4">No — lapses at year end</td>
                      <td className="p-4">Paid</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="p-4">Sick Leave (SL)</td>
                      <td className="p-4">12 days</td>
                      <td className="p-4">No — lapses at year end</td>
                      <td className="p-4">Paid</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="p-4">Earned Leave (EL)</td>
                      <td className="p-4">15 days</td>
                      <td className="p-4">Yes — up to 30 days</td>
                      <td className="p-4">Paid</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="p-4">Maternity Leave</td>
                      <td className="p-4">180 days (6 months)</td>
                      <td className="p-4">Not applicable</td>
                      <td className="p-4">Paid</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="p-4">Paternity Leave</td>
                      <td className="p-4">5 days</td>
                      <td className="p-4">Not applicable</td>
                      <td className="p-4">Paid</td>
                    </tr>
                    <tr>
                      <td className="p-4">Emergency Leave</td>
                      <td className="p-4">3 days</td>
                      <td className="p-4">Not applicable</td>
                      <td className="p-4">Paid</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-lg font-light text-white mb-4">Casual Leave (CL) Rules</h3>
                  <ul className="space-y-2 text-gray-400 font-light text-sm">
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />12 days credited on January 1st</li>
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Max 3 consecutive days at a time</li>
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Apply at least 1 day in advance</li>
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Lapses at year end (no carry forward)</li>
                  </ul>
                </div>
                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-lg font-light text-white mb-4">Sick Leave (SL) Rules</h3>
                  <ul className="space-y-2 text-gray-400 font-light text-sm">
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />12 days credited on January 1st</li>
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Medical certificate mandatory for 2+ days</li>
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Cannot be planned in advance</li>
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Lapses at year end (no carry forward)</li>
                  </ul>
                </div>
                <div className="bg-gray-900/10 border border-gray-800 p-6">
                  <h3 className="text-lg font-light text-white mb-4">Earned Leave (EL) Rules</h3>
                  <ul className="space-y-2 text-gray-400 font-light text-sm">
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Accrued 1.25 days per month worked</li>
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Apply at least 7 days in advance</li>
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Minimum 3 consecutive days must be taken</li>
                    <li className="flex items-start gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />Carry forward up to 30 days maximum</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                4. Public Holidays
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                HYNOX observes mandatory public holidays as declared by the Government of Tamil Nadu, including:
              </p>
              <div className="bg-gray-900/10 border border-gray-800 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-gray-400 font-light">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  Republic Day — 26 January
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-light">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  Independence Day — 15 August
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-light">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  Gandhi Jayanti — 2 October
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-light">
                  <Sun className="w-4 h-4 text-gray-500" />
                  Pongal
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-light">
                  <Sun className="w-4 h-4 text-gray-500" />
                  Tamil New Year
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-light">
                  <Sun className="w-4 h-4 text-gray-500" />
                  Diwali
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-light">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  Christmas — 25 December
                </div>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                5. Your Rights
              </h2>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                As a user, you have the right to:
              </p>
              <div className="bg-gray-900/10 border border-gray-800 p-6 mb-6">
                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Access and review your personal data.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Update or correct any inaccurate information.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Request data deletion (subject to legal or business constraints).
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
                    Opt out of marketing communications at any time.
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 font-light">
                To exercise these rights, please contact us at: <span className="text-white">hello.hynox@gmail.com</span>
              </p>
            </motion.section>

            {/* Section 6 - Contact Us */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8 pb-4 border-b border-gray-800">
                6. Contact Us
              </h2>
              <div className="bg-gray-900/20 border border-gray-800 p-8">
                <h3 className="text-xl font-light text-white mb-6">The Black Crest (HYNOX)</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-400 font-light">thehynoxofficial@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-400 font-light">www.hynox.in</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-400 font-light">3rd Floor, Sri Govindaraj Tower, 38/4, Father Randy St, R.S. Puram, Coimbatore, Tamil Nadu 641002</span>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </main>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-16 z-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 z-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-2 h-px bg-gray-700" />
      </motion.div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none z-0">
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
  )
}
