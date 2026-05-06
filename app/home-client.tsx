"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

import HeroSection from "@/components/home/hero-section";
import GlobalServiceSection from "@/components/home/global-service-section";
import TechStackSection from "@/components/home/tech-stack-section";
import ProductsSection from "@/components/home/products-section";
import ServicesSection from "@/components/home/services-section";
import WorkSection from "@/components/home/work-section";
import ClientsSection from "@/components/home/clients-section";
import AboutSection from "@/components/home/about-section";
import FaqSection from "@/components/home/faq-section";

// Utility function to throttle scroll events
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  let lastResult: any;
  return function (this: any) {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
      lastResult = func.apply(context, args);
    }
    return lastResult;
  };
};

export default function HomeClient() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(true);

  const handleScroll = useCallback(
    throttle(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setShowScrollToTop(scrollTop > 100);
      setShowScrollToBottom(scrollTop + clientHeight < scrollHeight - 100);
    }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white relative">
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 p-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
        {showScrollToBottom && !showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToBottom}
            className="fixed bottom-4 right-4 z-50 p-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <HeroSection />
      <GlobalServiceSection />
      <TechStackSection />
      <ProductsSection />
      <ServicesSection />
      <WorkSection />
      <ClientsSection />
      <AboutSection />
      <FaqSection />
    </div>
  );
}
