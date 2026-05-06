"use client";

import { useParams, notFound } from "next/navigation";
import { servicesData } from "@/app/data/services";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { useState, useRef, useEffect } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Send, CheckCircle2, Star, Quote, Code2, Smartphone, Cpu, ShoppingBag, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTAsection from "@/components/home/CTAsection";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z.string().min(1, { message: "Message is required." }),
  hp_n: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const iconMap: Record<string, any> = {
  Code2,
  Smartphone,
  Cpu,
  ShoppingBag,
  Layers,
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const startTime = useRef<number>(Date.now());

  if (!service) {
    notFound();
  }

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: `Inquiry about ${service.title}`,
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
        toast.error("Please complete the security check.");
        return;
      }

      const payload = {
        ...values,
        interest: service.title,
        turnstileToken,
        startTime: startTime.current,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        form.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-light">
      {/* 1. Hero with Browser Mockup */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl mb-6"
            >
              {service.hero.title}
              <span className="block italic text-gray-500">{service.hero.subtitle}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              {service.hero.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
            style={{ perspective: "2000px" }}
          >
            {/* Glow Aura */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-500/10 via-white/5 to-gray-500/10 blur-3xl opacity-50 rounded-[2rem]" />

            <motion.div
              whileHover={{ 
                rotateX: 2, 
                rotateY: -2,
                translateZ: 20,
                scale: 1.01
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative rounded-xl overflow-hidden shadow-2xl shadow-white/5"
            >
              {/* Browser Header */}
              <div className="bg-gradient-to-b from-gray-900 to-black border-t border-x border-gray-800 p-4 flex items-center justify-between backdrop-blur-md">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="flex-1 max-w-md px-4">
                  <div className="bg-black/50 border border-white/5 rounded-full py-1.5 px-4 text-[10px] text-gray-500 font-mono text-center truncate tracking-wider">
                    https://hynox.com/services/{slug}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-4 h-0.5 bg-gray-800 rounded-full" />
                  <div className="w-4 h-0.5 bg-gray-800 rounded-full" />
                </div>
              </div>

              {/* Browser Body / Image */}
              <div className="relative aspect-[16/10] overflow-hidden border-x border-b border-gray-800 bg-gray-950">
                <motion.img
                  src={service.hero.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 ease-in-out"
                />
                
                {/* Floating Badge Overlay */}
                <div className="absolute top-6 right-6">
                  <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 flex items-center gap-3 shadow-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-light text-gray-300">Active Deployment</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>

            {/* Decorative Shadow/Reflect */}
            <div className="absolute -bottom-10 left-10 right-10 h-20 bg-white/5 blur-3xl -z-10 rounded-full opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-20 border-y border-gray-900 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Core Features</h2>
            <div className="w-12 h-px bg-white mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, i) => {
              const Icon = iconMap[feature.icon] || Code2;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-gray-900/20 border border-gray-800 hover:border-gray-600 transition-all"
                >
                  <Icon className="w-10 h-10 mb-6 text-gray-400 font-light" strokeWidth={1} />
                  <h3 className="text-xl mb-4 font-light">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-light">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Case Study */}
      {service.caseStudy && (
        <section className="py-32 bg-gray-950/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <span className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4 block">Case Study</span>
                <h2 className="text-4xl md:text-5xl font-light">{service.caseStudy.title}</h2>
                <p className="text-gray-400 mt-6 max-w-2xl">{service.caseStudy.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-gray-800">
                <div className="bg-black p-10 lg:p-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-xs uppercase tracking-widest text-gray-500">The Challenge</span>
                  </div>
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed italic">
                    "{service.caseStudy.before}"
                  </p>
                </div>
                <div className="bg-black p-10 lg:p-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs uppercase tracking-widest text-gray-500">The Solution</span>
                  </div>
                  <p className="text-xl lg:text-2xl text-white leading-relaxed italic">
                    "{service.caseStudy.after}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Testimonials */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Client Experiences</h2>
            <div className="w-12 h-px bg-white mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {service.testimonials.map((t, i) => (
              <div key={i} className="relative p-10 bg-gray-900/10 border border-gray-900">
                <Quote className="absolute top-10 right-10 w-12 h-12 text-gray-800 opacity-50" />
                <p className="text-xl text-gray-400 mb-8 leading-relaxed italic font-light">
                  "{t.content}"
                </p>
                <div>
                  <div className="text-white font-light">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Form */}
      <CTAsection />
    </div>
  );
}
