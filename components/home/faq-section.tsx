"use client"

import React from 'react';
import { motion } from "framer-motion";
import { ChevronDown, Search, HelpCircle, Settings, Code, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CTAsection from './CTAsection';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const allFaqs = [
    {
      category: "General Questions",
      question: "What services does Hynox offer?",
      answer: "Hynox provides custom software development, web applications, mobile app development (Flutter/React Native), cloud solutions, ERP systems (like Hynox Campus for educational institutions), AI/ML integrations (Hynox Voice), Shopify e-commerce solutions, and digital marketing services. We specialize in building tailored solutions that drive real business value across various industries including textile, manufacturing, education, and hospitality."
    },
    {
      category: "General Questions",
      question: "How can I request a quote or consultation?",
      answer: "You can request a free consultation by visiting our Contact page at hynox.in/contact and filling out the inquiry form. We typically respond within 24 hours. You can also reach us directly at thehynoxofficial@gmail.com or call +91 88705 24355. Our team will understand your requirements and provide a customized proposal."
    },
    {
      category: "General Questions",
      question: "Which industries does Hynox serve?",
      answer: "We serve diverse industries including textile manufacturers and fashion brands (like Zyden Clothing, NSK Tex), educational institutions (schools and colleges using Hynox Campus ERP), interior and industrial solution providers (like JP Aluminium), hospitality and travel agencies (Sun Holidays), and e-commerce businesses. Our solutions are customized to meet the specific challenges of each industry."
    },
    {
      category: "General Questions",
      question: "Does Hynox work with international clients?",
      answer: "Yes, Hynox delivers solutions across continents with local expertise and global standards. We have active operations in India (IN), United Kingdom (UK), and Finland (FI), serving clients worldwide while maintaining high-quality standards and effective communication across time zones."
    },
    {
      category: "General Questions",
      question: "What is Hynox's project approach and delivery timeline?",
      answer: "We follow a strategic 4-phase approach: Discovery (understanding your business, goals, and audience), Strategy (tailored approach for your specific objectives), Design & Development (beautiful, functional solutions that perform), and Launch & Optimize (smooth deployment with ongoing optimization). Timelines vary based on project complexity, but we maintain transparent communication and regular updates throughout the development lifecycle."
    },
    {
      category: "Technical Questions",
      question: "What technologies does Hynox specialize in?",
      answer: "We specialize in modern web technologies including Next.js, React, Node.js for web applications; Flutter and React Native for cross-platform mobile apps; AI/ML implementations using OpenAI, Google Speech-to-Text; cloud platforms like AWS, Supabase; and e-commerce platforms like Shopify. We use the MERN stack (MongoDB, Express, React, Node.js) extensively and integrate with various third-party services and CRMs."
    },
    {
      category: "Technical Questions",
      question: "Can Hynox integrate with our existing systems and CRM?",
      answer: "Absolutely. We specialize in seamless integrations with existing CRM systems, payment gateways (like Razorpay), third-party APIs, and business tools. Our solutions like Hynox Voice demonstrate real-time CRM integration capabilities, and we've successfully integrated booking systems, inventory management, and customer databases for various clients."
    },
    {
      category: "Technical Questions",
      question: "Do you provide mobile app development for both iOS and Android?",
      answer: "Yes, we build cross-platform mobile applications using Flutter and React Native that work seamlessly on both iOS and Android with a single codebase. This approach reduces development time and costs while maintaining native performance. Hynox Campus, for example, includes mobile apps for Android and iOS for students, teachers, and parents."
    },
    {
      category: "Technical Questions",
      question: "Does Hynox offer ongoing support and maintenance after project completion?",
      answer: "Yes, we provide comprehensive post-launch support and maintenance services. This includes 24/7 customer support, security updates, performance optimization, bug fixes, feature enhancements, and regular system health monitoring. We offer both subscription-based SaaS models and one-time setup with optional care plans depending on your needs."
    },
    {
      category: "Technical Questions",
      question: "What is Hynox Voice and how can it benefit my business?",
      answer: "Hynox Voice is our ultimate AI Voice Assistant that transforms voice data into actionable intelligence. It offers real-time transcription and summaries, multilingual support (20+ languages), retrieval-augmented AI responses, smart CRM integration, and enterprise-grade security. It's ideal for customer support, sales automation, scheduling, and improving customer experiences while reducing response times and operational costs."
    },
    {
      category: "Technical Questions",
      question: "What is Hynox Campus and who is it for?",
      answer: "Hynox Campus is our all-in-one ERP solution designed for schools, colleges, and educational institutions. It manages student and teacher databases, attendance and leave tracking, timetables, homework assignments, exam reports and progress cards, syllabus tracking, parent communication, and announcements. It's available as a affordable SaaS subscription or one-time implementation, scalable from small schools to large universities with mobile apps included."
    },
    {
      category: "Services & Solutions",
      question: "Can Hynox help with e-commerce setup and marketing?",
      answer: "Yes, we provide end-to-end e-commerce solutions including Shopify store setup, custom web platforms, payment gateway integration, inventory management, and performance-driven digital marketing. Our case studies with brands like Zyden Clothing and NSK Tex showcase how we've helped clients achieve profitable international sales, reduce return rates, eliminate fake COD orders, and optimize marketing spend for Gen Z audiences."
    },
    {
      category: "Services & Solutions",
      question: "Does Hynox provide cloud hosting and security?",
      answer: "Yes, we provide secure cloud hosting solutions with enterprise-grade security, data encryption, compliance management, and 24/7 monitoring. Hynox Campus and other platforms are hosted on secure cloud infrastructure with automatic backups, scalability, and robust security measures to protect your business data."
    },
    {
      category: "Services & Solutions",
      question: "Can you build custom software tailored to our specific business needs?",
      answer: "Absolutely. Custom software development is our core expertise. We've built bespoke solutions for tour package management (Sun Holidays), lead and quotation management systems (JP Aluminium Interior), clothing brand subscription models (Zyden), and educational ERP systems (Hynox Campus). We analyze your unique challenges and create software that solves your specific operational problems."
    },
    {
      category: "Pricing & Process",
      question: "How does Hynox pricing work?",
      answer: "Our pricing is project-specific and depends on scope, complexity, and requirements. We offer flexible models including SaaS subscriptions (monthly/yearly), one-time implementations with optional care plans, and custom packages. We provide free consultations to understand your needs and deliver tailored proposals. Contact us for a personalized quote based on your specific requirements."
    },
    {
      category: "Pricing & Process",
      question: "What information do you need to provide an accurate project quote?",
      answer: "To provide an accurate quote, we need details about your business goals, target audience, required features and functionalities, existing systems or integrations needed, timeline expectations, and any specific design preferences. The more detailed your requirements, the more accurate our proposal will be. We'll guide you through this during our free consultation."
    }
  ];

  const howToGuides = [
    {
      title: "How to Get Started with Hynox for Your Digital Project",
      steps: [
        {
          heading: "Step 1: Initial Consultation",
          content: "Contact us through our website form, email (thehynoxofficial@gmail.com), or phone (+91 88705 24355). Share your business challenges, goals, and vision for your digital solution."
        },
        {
          heading: "Step 2: Discovery & Requirements Gathering",
          content: "Our team will schedule a detailed discovery call to understand your business processes, target audience, technical requirements, and success metrics. We'll analyze your existing systems and identify integration needs."
        },
        {
          heading: "Step 3: Proposal & Planning",
          content: "Receive a customized proposal with project scope, timeline, technology stack recommendations, and transparent pricing. Once approved, we'll create a detailed project roadmap with milestones."
        },
        {
          heading: "Step 4: Design & Development",
          content: "Our team begins designing wireframes and mockups for your approval. After design sign-off, development starts with regular progress updates and demo sessions to ensure alignment with your vision."
        },
        {
          heading: "Step 5: Testing & Quality Assurance",
          content: "Rigorous testing across devices, browsers, and scenarios ensures your solution is bug-free and performs optimally. User acceptance testing (UAT) allows you to verify all features meet requirements."
        },
        {
          heading: "Step 6: Launch & Deployment",
          content: "We handle smooth deployment to production environments, configure hosting and security, and provide training to your team on how to manage and use the new system effectively."
        },
        {
          heading: "Step 7: Ongoing Support & Optimization",
          content: "Receive continued support with regular updates, performance monitoring, security patches, and feature enhancements based on user feedback and evolving business needs."
        }
      ]
    },
    {
      title: "How to Choose the Right Technology Stack for Your Project",
      steps: [
        {
          heading: "Step 1: Define Your Project Requirements",
          content: "Identify whether you need a web application, mobile app, or both. Consider factors like expected user load, data complexity, real-time features, and integration requirements with existing systems."
        },
        {
          heading: "Step 2: Evaluate Platform Needs",
          content: "Determine if you need cross-platform mobile apps (Flutter/React Native work on both iOS and Android) or web-based solutions (Next.js, React for modern, fast websites). Consider your target audience's device preferences."
        },
        {
          heading: "Step 3: Consider Scalability Requirements",
          content: "For growing businesses, cloud-based solutions (AWS, Supabase) offer better scalability. SaaS models like our Hynox Campus platform grow with your user base without infrastructure concerns."
        },
        {
          heading: "Step 4: Budget & Timeline Assessment",
          content: "Cross-platform frameworks reduce costs by 40-60% compared to native development. MERN stack and modern frameworks offer faster development cycles. Discuss budget constraints with our team for optimal recommendations."
        },
        {
          heading: "Step 5: Integration & Security Needs",
          content: "Identify third-party services you need (payment gateways, CRM, analytics). Our team recommends technologies with robust APIs and security features suitable for your industry compliance requirements."
        },
        {
          heading: "Step 6: Consult with Hynox Experts",
          content: "Schedule a free technical consultation where our architects review your requirements and recommend the optimal technology stack. We explain trade-offs and help you make informed decisions aligned with your business goals."
        }
      ]
    },
    {
      title: "How to Implement Hynox Campus ERP in Your Educational Institution",
      steps: [
        {
          heading: "Step 1: Initial Assessment & Demo",
          content: "Contact our team for a personalized demo of Hynox Campus. We'll assess your institution's size, current management challenges, and specific requirements for students, teachers, and administrative staff."
        },
        {
          heading: "Step 2: Choose Your Deployment Model",
          content: "Select between SaaS subscription (monthly/yearly) for hassle-free cloud hosting or one-time implementation with optional care plans. SaaS includes automatic updates and 24/7 support."
        },
        {
          heading: "Step 3: Data Migration & Setup",
          content: "Our team helps migrate existing student records, teacher databases, and academic data into Hynox Campus. We configure timetables, syllabus structures, grading systems, and fee management according to your institution's policies."
        },
        {
          heading: "Step 4: Customization & Branding",
          content: "Customize the platform with your institution's logo, colors, and specific workflows. We can add custom modules for hostel management, library systems, or transport tracking based on your needs."
        },
        {
          heading: "Step 5: Staff Training & Onboarding",
          content: "Comprehensive training sessions for administrators, teachers, and staff on how to use the admin panel, manage attendance, create assignments, generate reports, and communicate with parents."
        },
        {
          heading: "Step 6: Mobile App Distribution",
          content: "Distribute mobile apps to students, parents, and teachers. Apps are available for both Android and iOS, allowing access to attendance, homework, grades, announcements, and real-time communication."
        },
        {
          heading: "Step 7: Go Live & Continuous Support",
          content: "Launch Hynox Campus across your institution with our technical support. Receive ongoing assistance, regular feature updates, performance optimization, and dedicated support channels for any issues."
        }
      ]
    }
  ];

  const filteredFaqs = allFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const generalFaqs = filteredFaqs.filter(
    (faq) => faq.category === "General Questions"
  );
  const technicalFaqs = filteredFaqs.filter(
    (faq) => faq.category === "Technical Questions"
  );
  const servicesFaqs = filteredFaqs.filter(
    (faq) => faq.category === "Services & Solutions"
  );
  const pricingFaqs = filteredFaqs.filter(
    (faq) => faq.category === "Pricing & Process"
  );

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-black text-white relative">
        {/* Hero Section */}
        <section className="py-32 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-light text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Frequently Asked
                <span className="block text-gray-400 italic">Questions</span>
              </motion.h1>
              
              <motion.div
                className="w-16 h-px bg-white mx-auto mb-12"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              <motion.p
                className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Find answers to common questions about our custom software solutions, cloud platforms, and digital services
              </motion.p>

              {/* Search Bar */}
              <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-900/20 border border-gray-800 text-white placeholder-gray-500 px-12 py-4 font-light focus:outline-none focus:border-gray-600 transition-colors"
                    aria-label="Search FAQs"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content - Two Columns with Proper Headings */}
        <section className="py-16 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* General Questions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-gray-500" aria-hidden="true" />
                  <h2 className="text-3xl font-light text-white">General Questions</h2>
                </div>

                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                  {generalFaqs.length > 0 ? (
                    generalFaqs.map((faq, index) => (
                      <Card
                        key={index}
                        className="bg-gray-900/20 border-gray-800 text-white overflow-hidden hover:border-gray-600 transition-colors duration-300"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full text-left"
                          aria-expanded={openIndex === index}
                          aria-controls={`faq-answer-${index}`}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-light text-white pr-4" itemProp="name">
                                {faq.question}
                              </h3>
                              <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                              </motion.div>
                            </div>
                            <motion.div
                              id={`faq-answer-${index}`}
                              initial={false}
                              animate={{
                                height: openIndex === index ? "auto" : 0,
                                opacity: openIndex === index ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                              itemScope
                              itemProp="acceptedAnswer"
                              itemType="https://schema.org/Answer"
                            >
                              <p className="text-gray-400 font-light leading-relaxed mt-4" itemProp="text">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </CardContent>
                        </button>
                      </Card>
                    ))
                  ) : (
                    searchQuery && (
                      <p className="text-gray-500 font-light text-center py-8">
                        No general questions found for "{searchQuery}"
                      </p>
                    )
                  )}
                </div>
              </motion.div>

              {/* Technical Questions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-8 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-gray-500" aria-hidden="true" />
                  <h2 className="text-3xl font-light text-white">Technical Questions</h2>
                </div>

                <div className="space-y-4">
                  {technicalFaqs.length > 0 ? (
                    technicalFaqs.map((faq, index) => {
                      const faqIndex = generalFaqs.length + index;
                      return (
                        <Card
                          key={faqIndex}
                          className="bg-gray-900/20 border-gray-800 text-white overflow-hidden hover:border-gray-600 transition-colors duration-300"
                        >
                          <button
                            onClick={() => toggleAccordion(faqIndex)}
                            className="w-full text-left"
                            aria-expanded={openIndex === faqIndex}
                            aria-controls={`faq-answer-${faqIndex}`}
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-light text-white pr-4">
                                  {faq.question}
                                </h3>
                                <motion.div
                                  animate={{ rotate: openIndex === faqIndex ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                                </motion.div>
                              </div>
                              <motion.div
                                id={`faq-answer-${faqIndex}`}
                                initial={false}
                                animate={{
                                  height: openIndex === faqIndex ? "auto" : 0,
                                  opacity: openIndex === faqIndex ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-gray-400 font-light leading-relaxed mt-4">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            </CardContent>
                          </button>
                        </Card>
                      );
                    })
                  ) : (
                    searchQuery && (
                      <p className="text-gray-500 font-light text-center py-8">
                        No technical questions found for "{searchQuery}"
                      </p>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section className="py-16 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Services & Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8 flex items-center gap-3">
                  <Code className="w-6 h-6 text-gray-500" aria-hidden="true" />
                  <h2 className="text-3xl font-light text-white">Services & Solutions</h2>
                </div>

                <div className="space-y-4">
                  {servicesFaqs.length > 0 ? (
                    servicesFaqs.map((faq, index) => {
                      const faqIndex = generalFaqs.length + technicalFaqs.length + index;
                      return (
                        <Card
                          key={faqIndex}
                          className="bg-gray-900/20 border-gray-800 text-white overflow-hidden hover:border-gray-600 transition-colors duration-300"
                        >
                          <button
                            onClick={() => toggleAccordion(faqIndex)}
                            className="w-full text-left"
                            aria-expanded={openIndex === faqIndex}
                            aria-controls={`faq-answer-${faqIndex}`}
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-light text-white pr-4">
                                  {faq.question}
                                </h3>
                                <motion.div
                                  animate={{ rotate: openIndex === faqIndex ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                                </motion.div>
                              </div>
                              <motion.div
                                id={`faq-answer-${faqIndex}`}
                                initial={false}
                                animate={{
                                  height: openIndex === faqIndex ? "auto" : 0,
                                  opacity: openIndex === faqIndex ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-gray-400 font-light leading-relaxed mt-4">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            </CardContent>
                          </button>
                        </Card>
                      );
                    })
                  ) : (
                    searchQuery && (
                      <p className="text-gray-500 font-light text-center py-8">
                        No services questions found for "{searchQuery}"
                      </p>
                    )
                  )}
                </div>
              </motion.div>

              {/* Pricing & Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-8 flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-gray-500" aria-hidden="true" />
                  <h2 className="text-3xl font-light text-white">Pricing & Process</h2>
                </div>

                <div className="space-y-4">
                  {pricingFaqs.length > 0 ? (
                    pricingFaqs.map((faq, index) => {
                      const faqIndex = generalFaqs.length + technicalFaqs.length + servicesFaqs.length + index;
                      return (
                        <Card
                          key={faqIndex}
                          className="bg-gray-900/20 border-gray-800 text-white overflow-hidden hover:border-gray-600 transition-colors duration-300"
                        >
                          <button
                            onClick={() => toggleAccordion(faqIndex)}
                            className="w-full text-left"
                            aria-expanded={openIndex === faqIndex}
                            aria-controls={`faq-answer-${faqIndex}`}
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-light text-white pr-4">
                                  {faq.question}
                                </h3>
                                <motion.div
                                  animate={{ rotate: openIndex === faqIndex ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                                </motion.div>
                              </div>
                              <motion.div
                                id={`faq-answer-${faqIndex}`}
                                initial={false}
                                animate={{
                                  height: openIndex === faqIndex ? "auto" : 0,
                                  opacity: openIndex === faqIndex ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-gray-400 font-light leading-relaxed mt-4">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            </CardContent>
                          </button>
                        </Card>
                      );
                    })
                  ) : (
                    searchQuery && (
                      <p className="text-gray-500 font-light text-center py-8">
                        No pricing questions found for "{searchQuery}"
                      </p>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How-to Guides Section - SEO Optimized */}
        <section className="py-32 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                How-to Guides
              </h2>
              <p className="text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                Step-by-step instructions to help you get the most out of Hynox services
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-24">
              {howToGuides.map((guide, guideIndex) => (
                <motion.article
                  key={guideIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: guideIndex * 0.1 }}
                  itemScope
                  itemType="https://schema.org/HowTo"
                >
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-12" itemProp="name">
                    {guide.title}
                  </h3>

                  <div className="space-y-8">
                    {guide.steps.map((step, stepIndex) => (
                      <Card
                        key={stepIndex}
                        className="bg-gray-900/20 border-gray-800 text-white hover:border-gray-600 transition-colors duration-300"
                        itemProp="step"
                        itemScope
                        itemType="https://schema.org/HowToStep"
                      >
                        <CardContent className="p-8">
                          <div className="flex gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 border border-gray-700 flex items-center justify-center">
                                <span className="text-gray-400 font-light" itemProp="position">
                                  {stepIndex + 1}
                                </span>
                              </div>
                            </div>
                            <div className="flex-grow">
                              <h4 className="text-xl font-light text-white mb-3" itemProp="name">
                                {step.heading}
                              </h4>
                              <p className="text-gray-400 font-light leading-relaxed" itemProp="text">
                                {step.content}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

      <CTAsection />

        {/* Decorative Elements */}
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
    </>
  );
};

export default FaqSection;
