"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Bot, Atom, Globe, Cloud, Brain, 
  Apple, TabletSmartphone, Triangle, Box, Database, Flame, CreditCard, Figma,
  MessageSquare, Target, Search, BarChart, Mic, Workflow, Code
} from 'lucide-react';
import CTAsection from '@/components/home/CTAsection';
import './styles.css';

export default function MobileApplicationsPage() {
  useEffect(() => {
    // Scroll reveal
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => obs.observe(el));

    return () => {
      revealElements.forEach((el) => obs.unobserve(el));
    };
  }, []);

  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget.parentElement;
    if (item) {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }
  };

  return (
    <>
      <div className="mobile-app-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="hero-dots"></div>

        <div className="hero-content" style={{ marginTop: '4rem' }}>
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            <div className="hero-badge-line"></div>
            App Development — HYNOX
          </div>

          <h1 className="hero-title" style={{ fontSize: '5.5rem', lineHeight: '1.1' }}>
            Apps That <em>Scale</em><br/>
            Businesses,<br/>
            Not Just Look Good
          </h1>

          <div className="hero-meta">
            <p className="hero-desc" style={{ fontSize: '1rem', maxWidth: '90%' }}>
              HYNOX designs and builds high-performance mobile and web applications — from concept to App Store. Powered by AI, built for scale, delivered on time.
            </p>
            
            <div className="hero-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', alignItems: 'flex-start' }}>
              <a href="/#work" className="btn-primary" style={{ fontSize: '1.05rem', padding: '12px 28px', whiteSpace: 'nowrap', width: 'fit-content', textAlign: 'center' }}>See Our Works</a>
              <a href="/contact" className="btn-ghost" style={{ fontSize: '1.05rem', padding: '12px 28px', whiteSpace: 'nowrap', width: 'fit-content', textAlign: 'center' }}>Free Consultation</a>
            </div>
          </div>
        </div>

        {/* INGE MAATHAVUM: marginTop add panni phone image-a konjam keela move pannirukom */}
        <div className="hero-visual" style={{ marginTop: '5rem' }}>
          <motion.div 
            className="hero-phone"
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{
              height: '580px',
              backgroundColor: '#050505',
              borderRadius: '45px',
              border: '14px solid #1a1a1a',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 80px rgba(79, 70, 229, 0.15)',
              position: 'relative',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transform: 'rotate(2deg)',
            }}
          >
            {/* Phone Notch */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '28px', backgroundColor: '#1a1a1a', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ width: '40px', height: '6px', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
            </div>

            {/* App Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Code size={20} color="#8b5cf6" />
              </div>
              <div style={{ width: '80px', height: '12px', borderRadius: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
            </div>

            {/* Main Gradient Card */}
            <div style={{ width: '100%', height: '180px', borderRadius: '24px', background: 'linear-gradient(135deg, #4F46E5, #9333EA)', padding: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontFamily: "'Space Mono', monospace" }}>Total Users</div>
              <div style={{ color: '#fff', fontSize: '2.8rem', fontWeight: 'bold', marginTop: '4px', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '1px' }}>842.5K</div>
              <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '60px', background: 'linear-gradient(transparent, rgba(255,255,255,0.15))' }}></div>
              {/* Decorative circle */}
              <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '100px', height: '100px', borderRadius: '50%', border: '20px solid rgba(255,255,255,0.1)' }}></div>
            </div>

            {/* List Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '4px', fontWeight: 500 }}>Recent Activity</div>
              {[1, 2, 3].map((item) => (
                <div key={item} style={{ width: '100%', padding: '14px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '4px', backgroundColor: item === 1 ? '#10B981' : item === 2 ? '#3B82F6' : '#F59E0B' }}></div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ width: '70%', height: '8px', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}></div>
                    <div style={{ width: '40%', height: '6px', borderRadius: '3px', backgroundColor: 'rgba(255,255,255,0.15)' }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Element 1 (Left - Status) */}
            <motion.div 
              animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              style={{ position: 'absolute', top: '140px', left: '-60px', backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 18px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 12px #10B981' }}></div>
              <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 'bold', fontFamily: "'Space Mono', monospace" }}>0 Bugs</span>
            </motion.div>

            {/* Floating Element 2 (Right - AI) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              style={{ position: 'absolute', bottom: '120px', right: '-70px', backgroundColor: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(147, 51, 234, 0.3)', padding: '18px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', zIndex: 30 }}
            >
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Engine</div>
              <div style={{ color: '#c084fc', fontSize: '1.3rem', fontWeight: 'bold' }}>Automated</div>
            </motion.div>

            {/* Floating Element 3 (Top Right Icon) */}
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }}
              style={{ position: 'absolute', top: '-20px', right: '-20px', backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '50%', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 30 }}
            >
              <div style={{ color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Brain size={32} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          <div className="ticker-item">◈ <b>iOS App Development</b></div>
          <div className="ticker-item">◈ <b>Android Development</b></div>
          <div className="ticker-item">◈ <b>React Native</b></div>
          <div className="ticker-item">◈ <b>Flutter</b></div>
          <div className="ticker-item">◈ <b>Web Apps</b></div>
          <div className="ticker-item">◈ <b>AI-Powered Apps</b></div>
          <div className="ticker-item">◈ <b>SaaS Platforms</b></div>
          <div className="ticker-item">◈ <b>API Development</b></div>
          <div className="ticker-item">◈ <b>HYNOX</b></div>
          <div className="ticker-item">◈ <b>iOS App Development</b></div>
          <div className="ticker-item">◈ <b>Android Development</b></div>
          <div className="ticker-item">◈ <b>React Native</b></div>
          <div className="ticker-item">◈ <b>Flutter</b></div>
          <div className="ticker-item">◈ <b>Web Apps</b></div>
          <div className="ticker-item">◈ <b>AI-Powered Apps</b></div>
          <div className="ticker-item">◈ <b>SaaS Platforms</b></div>
          <div className="ticker-item">◈ <b>API Development</b></div>
          <div className="ticker-item">◈ <b>HYNOX</b></div>
        </div>
      </div>

      {/* INTRO */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>01 — About This Service</div>
        <div className="s-title reveal">We Build Apps<br/>That Work Hard</div>
        <div className="intro-grid">
          <div className="intro-text reveal">
            <p>Most app agencies build apps that look great in a demo and <b>fall apart in production.</b> At HYNOX, we engineer apps from the ground up — performant, scalable, and built to handle real users at real scale.</p>
            <p>We combine <b>modern development stacks</b> with our AI expertise to deliver apps that don't just function — they actively improve your business through intelligent automation, data insights and seamless user experiences.</p>
            <p>Whether you need a <b>consumer mobile app, a SaaS platform, or a complex enterprise system</b> — HYNOX scopes it, designs it, builds it and ships it.</p>
          </div>
          <div className="intro-numbers reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="in-item">
              <span className="in-num">48h</span>
              <span className="in-label">Prototype Delivered</span>
            </div>
            <div className="in-item">
              <span className="in-num">4.9★</span>
              <span className="in-label">Avg. App Store Rating</span>
            </div>
            <div className="in-item">
              <span className="in-num">99%</span>
              <span className="in-label">Uptime Guaranteed</span>
            </div>
            <div className="in-item">
              <span className="in-num">AI</span>
              <span className="in-label">Built Into Every App</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="build-section" id="build">
        <div className="build-header">
          <div>
            <div className="s-label reveal"><span className="s-label-line"></span>02 — App Types</div>
            <div className="s-title reveal">What We<br/>Build</div>
          </div>
          <p className="reveal">From native iOS & Android apps to complex SaaS platforms — we cover every type of application with the same commitment to quality and performance.</p>
        </div>
        <div className="build-grid">
          <div className="build-card reveal">
            <div className="bc-num">01</div>
            <span className="bc-icon"><Smartphone size={32} /></span>
            <div className="bc-name">iOS App Development</div>
            <div className="bc-desc">Native Swift apps built to Apple's guidelines — fast, fluid and polished for the App Store. From MVP to enterprise-grade.</div>
            <div className="bc-tags"><span className="bc-tag">Swift</span><span className="bc-tag">SwiftUI</span><span className="bc-tag">Xcode</span><span className="bc-tag">App Store</span></div>
          </div>
          <div className="build-card reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="bc-num">02</div>
            <span className="bc-icon"><Bot size={32} /></span>
            <div className="bc-name">Android App Development</div>
            <div className="bc-desc">Native Kotlin apps built for performance across the Android ecosystem — all screen sizes, all devices, all versions.</div>
            <div className="bc-tags"><span className="bc-tag">Kotlin</span><span className="bc-tag">Jetpack</span><span className="bc-tag">Material</span><span className="bc-tag">Play Store</span></div>
          </div>
          <div className="build-card reveal" style={{ transitionDelay: '0.16s' }}>
            <div className="bc-num">03</div>
            <span className="bc-icon"><Atom size={32} /></span>
            <div className="bc-name">Cross-Platform Apps</div>
            <div className="bc-desc">One codebase, two platforms. React Native and Flutter apps that look and feel native on both iOS and Android — faster and cheaper to build.</div>
            <div className="bc-tags"><span className="bc-tag">React Native</span><span className="bc-tag">Flutter</span><span className="bc-tag">Expo</span></div>
          </div>
          <div className="build-card reveal">
            <div className="bc-num">04</div>
            <span className="bc-icon"><Globe size={32} /></span>
            <div className="bc-name">Web Applications</div>
            <div className="bc-desc">Full-stack web apps — dashboards, portals, admin panels and progressive web apps built with React, Next.js and Node.js.</div>
            <div className="bc-tags"><span className="bc-tag">React</span><span className="bc-tag">Next.js</span><span className="bc-tag">Node.js</span><span className="bc-tag">PWA</span></div>
          </div>
          <div className="build-card reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="bc-num">05</div>
            <span className="bc-icon"><Cloud size={32} /></span>
            <div className="bc-name">SaaS Platform Development</div>
            <div className="bc-desc">Multi-tenant SaaS products with subscription billing, role-based access, analytics dashboards and API-first architecture built to scale to millions of users.</div>
            <div className="bc-tags"><span className="bc-tag">SaaS</span><span className="bc-tag">Multi-tenant</span><span className="bc-tag">Stripe</span><span className="bc-tag">Auth</span></div>
          </div>
          <div className="build-card reveal" style={{ transitionDelay: '0.16s' }}>
            <div className="bc-num">06</div>
            <span className="bc-icon"><Brain size={32} /></span>
            <div className="bc-name">AI-Powered Applications</div>
            <div className="bc-desc">Apps with intelligence built in — AI chatbots, recommendation engines, voice assistants, image recognition and natural language features powered by Claude & OpenAI.</div>
            <div className="bc-tags"><span className="bc-tag">Claude API</span><span className="bc-tag">OpenAI</span><span className="bc-tag">ML</span><span className="bc-tag">NLP</span></div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>03 — Platforms</div>
        <div className="s-title reveal">Every Platform.<br/>One Team.</div>
        <div className="platform-row reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="plat-item">
            <span className="plat-icon"><Apple size={32} style={{ margin: '0 auto' }} /></span>
            <div className="plat-name">iOS</div>
            <div className="plat-desc">iPhone, iPad and Apple Watch apps — native Swift, published to the App Store</div>
          </div>
          <div className="plat-item">
            <span className="plat-icon"><Bot size={32} style={{ margin: '0 auto' }} /></span>
            <div className="plat-name">Android</div>
            <div className="plat-desc">Kotlin-native apps for all Android devices — published to Google Play Store</div>
          </div>
          <div className="plat-item">
            <span className="plat-icon"><Globe size={32} style={{ margin: '0 auto' }} /></span>
            <div className="plat-name">Web</div>
            <div className="plat-desc">Responsive web apps and PWAs that work on any browser and any device</div>
          </div>
          <div className="plat-item">
            <span className="plat-icon"><Cloud size={32} style={{ margin: '0 auto' }} /></span>
            <div className="plat-name">Cloud</div>
            <div className="plat-desc">AWS, GCP and Vercel deployments — auto-scaling, secure and globally distributed</div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--grey-dark)' }} id="process">
        <div className="s-label reveal"><span className="s-label-line"></span>04 — How We Work</div>
        <div className="s-title reveal">Our Development<br/>Process</div>
        <div className="process-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="proc-row">
            <div className="proc-num">01</div>
            <div className="proc-content">
              <h3>Discovery & Scoping</h3>
              <p>We map your idea into a clear product spec — user flows, feature list, tech stack and a fixed project scope. No vague estimates. No surprises.</p>
              <div className="proc-tools"><span className="proc-tool">User Research</span><span className="proc-tool">Feature Map</span><span className="proc-tool">Tech Scoping</span><span className="proc-tool">Timeline</span></div>
            </div>
          </div>
          <div className="proc-row">
            <div className="proc-num">02</div>
            <div className="proc-content">
              <h3>UI/UX Design</h3>
              <p>Wireframes, user flows and high-fidelity prototypes designed for conversion and retention — every screen is intentional. You sign off before a single line of code is written.</p>
              <div className="proc-tools"><span className="proc-tool">Figma</span><span className="proc-tool">Prototyping</span><span className="proc-tool">UX Audit</span><span className="proc-tool">Design System</span></div>
            </div>
          </div>
          <div className="proc-row">
            <div className="proc-num">03</div>
            <div className="proc-content">
              <h3>Agile Development</h3>
              <p>2-week sprints with regular builds delivered for your review. You see real progress every fortnight — not just a final reveal after months of silence.</p>
              <div className="proc-tools"><span className="proc-tool">Git</span><span className="proc-tool">Sprints</span><span className="proc-tool">CI/CD</span><span className="proc-tool">Jira</span></div>
            </div>
          </div>
          <div className="proc-row">
            <div className="proc-num">04</div>
            <div className="proc-content">
              <h3>Testing & QA</h3>
              <p>Manual and automated testing across devices, OS versions and edge cases. Security audits, performance profiling and load testing before every release.</p>
              <div className="proc-tools"><span className="proc-tool">Jest</span><span className="proc-tool">Detox</span><span className="proc-tool">Firebase Test Lab</span><span className="proc-tool">Load Testing</span></div>
            </div>
          </div>
          <div className="proc-row">
            <div className="proc-num">05</div>
            <div className="proc-content">
              <h3>Launch & Deployment</h3>
              <p>App Store and Play Store submission handled by us. Full deployment to production cloud infrastructure. Domain, SSL, monitoring and alerting configured from day one.</p>
              <div className="proc-tools"><span className="proc-tool">App Store Connect</span><span className="proc-tool">Play Console</span><span className="proc-tool">AWS</span><span className="proc-tool">Vercel</span></div>
            </div>
          </div>
          <div className="proc-row">
            <div className="proc-num">06</div>
            <div className="proc-content">
              <h3>Post-Launch & Maintenance</h3>
              <p>Ongoing support plans for bug fixes, OS updates, new feature builds and performance optimisation. We're a long-term partner, not a one-time vendor.</p>
              <div className="proc-tools"><span className="proc-tool">Bug Fixes</span><span className="proc-tool">OS Updates</span><span className="proc-tool">Analytics</span><span className="proc-tool">CRO</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>06 — Technology</div>
        <div className="s-title reveal">Our Tech Stack</div>
        <div className="tech-grid reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="tech-item"><span className="tech-icon"><Atom size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">React Native</div></div>
          <div className="tech-item"><span className="tech-icon"><TabletSmartphone size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Flutter</div></div>
          <div className="tech-item"><span className="tech-icon"><Apple size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Swift</div></div>
          <div className="tech-item"><span className="tech-icon"><Bot size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Kotlin</div></div>
          <div className="tech-item"><span className="tech-icon"><Triangle size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Next.js</div></div>
          <div className="tech-item"><span className="tech-icon"><Box size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Node.js</div></div>
          <div className="tech-item"><span className="tech-icon"><Database size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">PostgreSQL</div></div>
          <div className="tech-item"><span className="tech-icon"><Flame size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Firebase</div></div>
          <div className="tech-item"><span className="tech-icon"><Cloud size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">AWS</div></div>
          <div className="tech-item"><span className="tech-icon"><Brain size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Claude AI</div></div>
          <div className="tech-item"><span className="tech-icon"><CreditCard size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Razorpay</div></div>
          <div className="tech-item"><span className="tech-icon"><Figma size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Figma</div></div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="showcase-section">
        <div className="s-label reveal"><span className="s-label-line"></span>07 — Portfolio</div>
        <div className="s-title reveal">Apps We've Built</div>
        <div className="showcase-grid reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="show-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/JpApp_works.png")', backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
            <div className="show-category" style={{ color: '#eee' }}>Interior & Aluminium Works</div>
            <div className="show-name">JP Aluminium Interior</div>
            <div className="show-tags"><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Custom App</span><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Automation</span></div>
            <div className="show-overlay"><span>View Project</span><p>Business Automation Platform</p></div>
          </div>
          <div className="show-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/team3-logo-white.png")', backgroundSize: 'cover, contain', backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'center, center', aspectRatio: '16/9' }}>
            <div className="show-category" style={{ color: '#eee' }}>Architectural & Interior</div>
            <div className="show-name">Team3</div>
            <div className="show-tags"><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Architecture</span><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Interior Design</span></div>
            <div className="show-overlay"><span>View Project</span><p>Architectural & Interior Designs</p></div>
          </div>
          <div className="show-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/aharraa_web.png")', backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
            <div className="show-category" style={{ color: '#eee' }}>Food Delivery App</div>
            <div className="show-name">Aharraa</div>
            <div className="show-tags"><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Custom App</span><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Delivery</span></div>
            <div className="show-overlay"><span>View Project</span><p>On-demand Food Delivery Service</p></div>
          </div>
          <div className="show-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/teerex_web.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
            <div className="show-category" style={{ color: '#eee' }}>E-Commerce Platform</div>
            <div className="show-name">Teerex</div>
            <div className="show-tags"><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>E-Commerce</span><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Custom Features</span></div>
            <div className="show-overlay"><span>View Project</span><p>E-Commerce platform with custom features</p></div>
          </div>
          <div className="show-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/kido_care_web.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
            <div className="show-category" style={{ color: '#eee' }}>Childcare Platform</div>
            <div className="show-name">Kido Care</div>
            <div className="show-tags"><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>iOS/Android</span><span className="show-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Healthcare</span></div>
            <div className="show-overlay"><span>View Project</span><p>Pediatric Care App</p></div>
          </div>
          <div className="show-item" style={{ background: 'var(--grey-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.8rem', textAlign: 'center', padding: '2rem', aspectRatio: '16/9' }}>
            <div style={{ fontFamily: "'Bebas Neue'", fontSize: '1.8rem', letterSpacing: '2px', lineHeight: 1.1 }}>Your App<br/>Could Be Here</div>
            <a href="/contact" style={{ fontFamily: "'Space Mono'", fontSize: '0.5rem', letterSpacing: '2px', color: 'var(--white)', border: '1px solid var(--border-light)', padding: '8px 16px', textDecoration: 'none', textTransform: 'uppercase' }}>Start a Project →</a>
          </div>
        </div>
      </section>

      {/* AI EDGE */}
      <section className="ai-section" id="ai">
        <div className="s-label reveal"><span className="s-label-line"></span>08 — AI Edge</div>
        <div className="s-title reveal">Every App We Build<br/>Has AI Inside</div>
        <div className="ai-grid">
          <div className="ai-list">
            <div className="ai-item reveal">
              <div className="ai-icon-wrap"><MessageSquare size={24} /></div>
              <div className="ai-text">
                <h4>Conversational AI Chatbot</h4>
                <p>Embed a Claude-powered assistant directly into your app — answers questions, guides users, handles support 24/7 without any human needed.</p>
              </div>
            </div>
            <div className="ai-item reveal" style={{ transitionDelay: '0.08s' }}>
              <div className="ai-icon-wrap"><Target size={24} /></div>
              <div className="ai-text">
                <h4>Smart Recommendations</h4>
                <p>AI that learns user behaviour and surfaces the right product, content or action at the right moment — boosting engagement and revenue.</p>
              </div>
            </div>
            <div className="ai-item reveal" style={{ transitionDelay: '0.16s' }}>
              <div className="ai-icon-wrap"><Search size={24} /></div>
              <div className="ai-text">
                <h4>Natural Language Search</h4>
                <p>Users type how they think — and your app finds exactly what they need. No keyword matching. No filters. Just results.</p>
              </div>
            </div>
            <div className="ai-item reveal" style={{ transitionDelay: '0.24s' }}>
              <div className="ai-icon-wrap"><BarChart size={24} /></div>
              <div className="ai-text">
                <h4>Predictive Analytics</h4>
                <p>AI-generated insights built into your admin dashboard — churn prediction, revenue forecasting and anomaly alerts before problems become problems.</p>
              </div>
            </div>
            <div className="ai-item reveal" style={{ transitionDelay: '0.32s' }}>
              <div className="ai-icon-wrap"><Mic size={24} /></div>
              <div className="ai-text">
                <h4>Voice Interface</h4>
                <p>Add voice commands and speech-to-text capabilities — let users interact with your app hands-free, in any language.</p>
              </div>
            </div>
            <div className="ai-item reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="ai-icon-wrap"><Workflow size={24} /></div>
              <div className="ai-text">
                <h4>Workflow Automation</h4>
                <p>AI agents that trigger actions based on user events — auto-send emails, update records, notify teams — with zero manual intervention.</p>
              </div>
            </div>
          </div>
          <div className="ai-visual reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="ai-visual-title">AI Features Included</div>
            <div className="ai-feature-list">
              <div className="ai-feature"><span className="ai-feature-name">AI Chatbot Integration</span><span className="ai-feature-badge badge-included">Included</span></div>
              <div className="ai-feature"><span className="ai-feature-name">Smart Push Notifications</span><span className="ai-feature-badge badge-included">Included</span></div>
              <div className="ai-feature"><span className="ai-feature-name">Behaviour Analytics</span><span className="ai-feature-badge badge-included">Included</span></div>
              <div className="ai-feature"><span className="ai-feature-name">Recommendation Engine</span><span className="ai-feature-badge badge-addon">Growth+</span></div>
              <div className="ai-feature"><span className="ai-feature-name">Natural Language Search</span><span className="ai-feature-badge badge-addon">Growth+</span></div>
              <div className="ai-feature"><span className="ai-feature-name">Voice Interface</span><span className="ai-feature-badge badge-addon">Enterprise</span></div>
              <div className="ai-feature"><span className="ai-feature-name">Predictive Analytics</span><span className="ai-feature-badge badge-addon">Enterprise</span></div>
              <div className="ai-feature"><span className="ai-feature-name">Custom AI Agent</span><span className="ai-feature-badge badge-addon">Enterprise</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why-section">
        <div className="s-label reveal"><span className="s-label-line"></span>09 — Why HYNOX</div>
        <div className="s-title reveal">Why Choose Us<br/>Over Others</div>
        <div className="why-cols reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="why-col">
            <div className="why-col-title">Other App Agencies</div>
            <div className="why-item"><div className="why-check">✗</div><p>Over-promise on timeline, under-deliver on quality</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>Build and disappear — no ownership after launch</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>No AI integration capability — just basic CRUD apps</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>Offshore teams with no communication or accountability</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>Scope creep and hidden costs inflate final invoice</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>One-size-fits-all approach with recycled templates</p></div>
          </div>
          <div className="why-col">
            <div className="why-col-title">HYNOX</div>
            <div className="why-item"><div className="why-check">✓</div><p>Fixed delivery timelines with milestone-based updates</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>Long-term partners — retainer plans for continuous growth</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>AI built into every app we deliver — it's our core strength</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>Direct communication with your dedicated developer</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>Transparent fixed pricing — what we quote is what you pay</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>Custom-engineered for your specific business needs</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="s-label reveal"><span className="s-label-line"></span>10 — FAQ</div>
        <div className="s-title reveal">Frequently Asked<br/>Questions</div>
        <div className="faq-list reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>How long does it take to build an app?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>An MVP takes 4–6 weeks. A full-featured Growth app takes 8–14 weeks. Enterprise projects are scoped individually. We give fixed delivery dates upfront with milestone breakdowns so you always know where we are.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Do I own the source code?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>100% yes. Upon final payment, all source code, design files, and assets are transferred to you completely. You have full ownership with no licensing fees or lock-in whatsoever.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>React Native or native — which should I choose?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>For most business apps, React Native is ideal — it gives you iOS and Android from one codebase at lower cost with near-native performance. Native Swift/Kotlin is recommended for apps with heavy hardware usage, complex animations, or maximum performance requirements.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Can you integrate AI into my existing app?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Absolutely. We can add AI features to any existing app regardless of the tech stack — chatbots, recommendations, search, automation and more. We do a technical audit first and provide a clear integration plan.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Do you handle App Store submission?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Yes — App Store (iOS) and Google Play Store (Android) submission is handled by us. We prepare all metadata, screenshots, descriptions and handle the review process. Most apps are approved within 2–5 days.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>What happens after the app launches?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>All packages include a post-launch support window for bug fixes. After that, we offer monthly retainer plans from ₹15,000/month — covering OS compatibility updates, new features, performance monitoring and crash reporting.</p></div>
          </div>
        </div>
      </section>

      </div>
      <CTAsection />
    </>
  );
}