"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Hexagon, Layout, Building2, Network, ArrowRightLeft, Gauge, Bot,
  ShoppingBag, Zap, Droplet, Atom, Figma, Package, Link, Mail, BarChart, Brain, RefreshCw, Rocket 
} from 'lucide-react';
import './styles.css';


export default function ShopifyDevelopmentPage() {
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
    <div className="shopify-dev-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-grid-bg"></div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            <div className="hero-badge-line"></div>
            Shopify Development — HYNOX
          </div>

          <h1 className="hero-title">
            Shopify Stores<br/>
            That <em>Sell</em><br/>
            Not Just Look Good
          </h1>

          <div className="hero-meta">
            <p className="hero-desc">We build high-converting, blazing-fast Shopify stores for brands that want to dominate online. From custom theme development to full AI-powered automation — HYNOX delivers stores built to scale.</p>
            
            <div className="hero-actions">
              <a href="/#work" className="btn-primary">See Our Works</a>
              <a href="/contact" className="btn-ghost">Free Consultation</a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-shopify-icon">
            <img 
              src="/shopify_v10.png" 
              alt="Shopify Logo" 
              className="hero-logo-img" 
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Custom Theme Development</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Shopify Plus</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>App Integration</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Speed Optimisation</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>AI-Powered Stores</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Headless Commerce</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Migration to Shopify</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>HYNOX</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Custom Theme Development</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Shopify Plus</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>App Integration</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Speed Optimisation</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>AI-Powered Stores</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Headless Commerce</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>Migration to Shopify</b></div>
          <div className="ticker-item"><Hexagon size={14} className="inline-block" /> <b>HYNOX</b></div>
        </div>
      </div>

      {/* INTRO */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>01 — About This Service</div>
        <div className="s-title reveal">Shopify Done<br/>Differently</div>
        <div className="intro-split">
          <div className="intro-text reveal">
            <p>Most Shopify agencies give you a <b>templated store that looks like everyone else's.</b> At HYNOX, we build from the ground up — custom-coded, conversion-optimised, and built to handle real scale.</p>
            <p>We combine <b>deep Shopify expertise</b> with our AI capabilities to deliver stores that don't just look great — they actively work to grow your revenue through smart automation, personalisation and performance.</p>
            <p>Whether you're <b>launching your first store</b> or migrating from WooCommerce, Magento or any other platform — we handle every pixel, every line of code, and every integration.</p>
          </div>
          <div className="intro-stats reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="i-stat">
              <span className="i-stat-num">48h</span>
              <span className="i-stat-label">Avg. First Build Delivered</span>
            </div>
            <div className="i-stat">
              <span className="i-stat-num">3×</span>
              <span className="i-stat-label">Avg. Conversion Increase</span>
            </div>
            <div className="i-stat">
              <span className="i-stat-num">99%</span>
              <span className="i-stat-label">Google PageSpeed Score</span>
            </div>
            <div className="i-stat">
              <span className="i-stat-num">∞</span>
              <span className="i-stat-label">Scalable Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="services-header">
          <div>
            <div className="s-label reveal"><span className="s-label-line"></span>02 — What We Build</div>
            <div className="s-title reveal">Our Shopify<br/>Services</div>
          </div>
          <p className="reveal">Every service is delivered with clean, documented code, mobile-first design, and a focus on measurable business results — not just aesthetics.</p>
        </div>
        <div className="services-grid">
          <div className="srv-card reveal">
            <div className="srv-num">01</div>
            <span className="srv-icon"><Layout size={32} /></span>
            <div className="srv-name">Custom Theme Development</div>
            <div className="srv-desc">Pixel-perfect Shopify themes built from scratch or heavily customised from a base. Unique, brand-aligned, and impossible to copy.</div>
            <div className="srv-tags"><span>Liquid</span><span>CSS</span><span>JavaScript</span><span>Sections</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="srv-num">02</div>
            <span className="srv-icon"><Building2 size={32} /></span>
            <div className="srv-name">Shopify Plus Development</div>
            <div className="srv-desc">Enterprise-grade Shopify Plus builds with checkout extensibility, B2B features, custom scripts and advanced automation flows.</div>
            <div className="srv-tags"><span>Checkout UI</span><span>B2B</span><span>Flow</span><span>Scripts</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.16s' }}>
            <div className="srv-num">03</div>
            <span className="srv-icon"><Network size={32} /></span>
            <div className="srv-name">App & API Integration</div>
            <div className="srv-desc">Connect your store to any tool — ERP, CRM, 3PL, payment gateways, loyalty apps, email platforms and more via Shopify APIs.</div>
            <div className="srv-tags"><span>REST API</span><span>GraphQL</span><span>Webhooks</span><span>Custom Apps</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.0s' }}>
            <div className="srv-num">04</div>
            <span className="srv-icon"><ArrowRightLeft size={32} /></span>
            <div className="srv-name">Platform Migration</div>
            <div className="srv-desc">Seamless migration from WooCommerce, Magento, BigCommerce or Wix to Shopify — zero data loss, zero downtime, full SEO preservation.</div>
            <div className="srv-tags"><span>WooCommerce</span><span>Magento</span><span>BigCommerce</span><span>SEO</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="srv-num">05</div>
            <span className="srv-icon"><Gauge size={32} /></span>
            <div className="srv-name">Performance & Speed</div>
            <div className="srv-desc">Core Web Vitals optimisation, image compression, lazy loading, code splitting and CDN setup to get your store to sub-2s load times.</div>
            <div className="srv-tags"><span>Core Web Vitals</span><span>LCP</span><span>CLS</span><span>CDN</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.16s' }}>
            <div className="srv-num">06</div>
            <span className="srv-icon"><Bot size={32} /></span>
            <div className="srv-name">AI-Powered Commerce</div>
            <div className="srv-desc">Add intelligent product recommendations, AI chatbots, automated inventory alerts, and personalised shopping experiences to your store.</div>
            <div className="srv-tags"><span>AI Chatbot</span><span>Personalisation</span><span>Automation</span></div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="s-label reveal"><span className="s-label-line"></span>03 — How We Work</div>
        <div className="s-title reveal">Our Development<br/>Process</div>
        <div className="process-wrap reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="process-row">
            <div className="proc-num">01</div>
            <div className="proc-content">
              <h3>Discovery & Strategy</h3>
              <p>We start with a deep-dive into your brand, target audience, competitors and business goals. This shapes every design and development decision that follows.</p>
              <div className="proc-tools"><span className="proc-tool">Brand Audit</span><span className="proc-tool">Competitor Research</span><span className="proc-tool">Tech Scoping</span></div>
            </div>
          </div>
          <div className="process-row">
            <div className="proc-num">02</div>
            <div className="proc-content">
              <h3>Design & Wireframing</h3>
              <p>High-fidelity wireframes and interactive prototypes designed for conversion — every CTA, layout and user flow is intentional and data-backed.</p>
              <div className="proc-tools"><span className="proc-tool">Figma</span><span className="proc-tool">UX Research</span><span className="proc-tool">Mobile-First</span></div>
            </div>
          </div>
          <div className="process-row">
            <div className="proc-num">03</div>
            <div className="proc-content">
              <h3>Development & Integration</h3>
              <p>Clean, commented Liquid + JavaScript built to Shopify's best practices. All apps, APIs and third-party tools integrated and tested before going live.</p>
              <div className="proc-tools"><span className="proc-tool">Liquid</span><span className="proc-tool">Shopify CLI</span><span className="proc-tool">Git</span><span className="proc-tool">APIs</span></div>
            </div>
          </div>
          <div className="process-row">
            <div className="proc-num">04</div>
            <div className="proc-content">
              <h3>QA, Speed & SEO Testing</h3>
              <p>Full device and browser testing. PageSpeed and Core Web Vitals verified. On-page SEO structure, schema markup and meta setup completed.</p>
              <div className="proc-tools"><span className="proc-tool">Lighthouse</span><span className="proc-tool">GTmetrix</span><span className="proc-tool">Schema</span><span className="proc-tool">Sitemap</span></div>
            </div>
          </div>
          <div className="process-row">
            <div className="proc-num">05</div>
            <div className="proc-content">
              <h3>Launch & Handover</h3>
              <p>Smooth go-live with zero downtime. Full training session, video walkthrough and documentation so you can manage your store confidently from day one.</p>
              <div className="proc-tools"><span className="proc-tool">DNS Setup</span><span className="proc-tool">Training</span><span className="proc-tool">Documentation</span></div>
            </div>
          </div>
          <div className="process-row">
            <div className="proc-num">06</div>
            <div className="proc-content">
              <h3>Ongoing Support & Growth</h3>
              <p>Monthly retainer plans for updates, new features, A/B testing and conversion rate optimisation. We grow with your store, not just build it.</p>
              <div className="proc-tools"><span className="proc-tool">CRO</span><span className="proc-tool">A/B Testing</span><span className="proc-tool">Analytics</span><span className="proc-tool">Updates</span></div>
            </div>
          </div>
        </div>
      </section>



      {/* TECH STACK */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>05 — Technology</div>
        <div className="s-title reveal">Our Tech Stack</div>
        <div className="tech-grid reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="tech-item"><span className="tech-icon"><ShoppingBag size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Shopify</div></div>
          <div className="tech-item"><span className="tech-icon"><Zap size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Shopify Plus</div></div>
          <div className="tech-item"><span className="tech-icon"><Droplet size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Liquid</div></div>
          <div className="tech-item"><span className="tech-icon"><Atom size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Hydrogen</div></div>
          <div className="tech-item"><span className="tech-icon"><Figma size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Figma</div></div>
          <div className="tech-item"><span className="tech-icon"><Package size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">GraphQL</div></div>
          <div className="tech-item"><span className="tech-icon"><Link size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">REST APIs</div></div>
          <div className="tech-item"><span className="tech-icon"><Mail size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Klaviyo</div></div>
          <div className="tech-item"><span className="tech-icon"><BarChart size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">GA4</div></div>
          <div className="tech-item"><span className="tech-icon"><Brain size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Claude AI</div></div>
          <div className="tech-item"><span className="tech-icon"><RefreshCw size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Make.com</div></div>
          <div className="tech-item"><span className="tech-icon"><Rocket size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Vercel</div></div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section style={{ background: 'var(--grey-dark)' }}>
        <div className="s-label reveal"><span className="s-label-line"></span>06 — Portfolio</div>
        <div className="s-title reveal">Recent Builds</div>
        <div className="portfolio-grid reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/sugarstar_web.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
            <div className="port-tag" style={{ color: '#eee' }}>Confectionery</div>
            <div className="port-name">SugarStar</div>
            <div className="port-overlay"><span>View Project</span><p>Shopify Dev · Fast FMCG</p></div>
          </div>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/teerex_web.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
            <div className="port-tag" style={{ color: '#eee' }}>E-Commerce Store</div>
            <div className="port-name">Teerex</div>
            <div className="port-overlay"><span>View Project</span><p>Shopify Plus · B2C</p></div>
          </div>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/zydenn_web.png")', backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
            <div className="port-tag" style={{ color: '#eee' }}>Clothing Brand</div>
            <div className="port-name">Zendenn</div>
            <div className="port-overlay"><span>View Project</span><p>Shopify Store · Fashion</p></div>
          </div>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/twinstar_web.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
            <div className="port-tag" style={{ color: '#eee' }}>Apparel</div>
            <div className="port-name">TwinStar</div>
            <div className="port-overlay"><span>View Project</span><p>Shopify Dev · Clothing</p></div>
          </div>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/graaps_web.png")', backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '16/9' }}>
            <div className="port-tag" style={{ color: '#eee' }}>Global Clothing</div>
            <div className="port-name">Graaps</div>
            <div className="port-overlay"><span>View Project</span><p>Shopify · International</p></div>
          </div>
          <div className="port-item" style={{ background: 'var(--grey-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem', textAlign: 'center', aspectRatio: '16/9' }}>
            <div style={{ fontFamily: "'Bebas Neue'", fontSize: '2rem', letterSpacing: '2px' }}>Your Store Next?</div>
            <a href="/contact" style={{ fontFamily: "'Space Mono'", fontSize: '0.55rem', letterSpacing: '2px', color: 'var(--white)', border: '1px solid var(--border-light)', padding: '8px 16px', textDecoration: 'none', textTransform: 'uppercase' }}>Start a Project →</a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why-section">
        <div className="s-label reveal"><span className="s-label-line"></span>07 — Why HYNOX</div>
        <div className="s-title reveal">Why Choose Us<br/>Over Others</div>
        <div className="why-cols reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="why-col">
            <div className="why-col-title">Other Agencies</div>
            <div className="why-item"><div className="why-check">✗</div><p>Use generic templates and call it \"custom\"</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>Disappear after launch with no support</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>No understanding of conversion optimisation</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>Slow delivery — weeks to get a simple change</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>No AI or automation capabilities</p></div>
            <div className="why-item"><div className="why-check">✗</div><p>Hidden fees and scope creep</p></div>
          </div>
          <div className="why-col">
            <div className="why-col-title">HYNOX</div>
            <div className="why-item"><div className="why-check">✓</div><p>100% custom code, built for your brand only</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>Ongoing retainer plans for continuous growth</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>CRO-first approach — every element earns its place</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>Fast turnarounds with clear delivery timelines</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>AI-powered features built directly into your store</p></div>
            <div className="why-item"><div className="why-check">✓</div><p>Fixed transparent pricing — no surprises</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="s-label reveal"><span className="s-label-line"></span>08 — FAQ</div>
        <div className="s-title reveal">Frequently Asked<br/>Questions</div>
        <div className="faq-list reveal" style={{ transitionDelay: '0.2s', maxWidth: '760px' }}>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>How long does a Shopify store take to build?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>A Starter store typically takes 5–7 days. A Growth custom build takes 2–4 weeks. Enterprise projects are scoped individually. We always give a fixed delivery date upfront.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Do I need a Shopify subscription to get started?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Yes, you'll need a Shopify plan (starting from $39/month). We can help you choose the right plan and even start your free trial before the build begins.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Can you migrate my existing store to Shopify?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Absolutely. We migrate from WooCommerce, Magento, BigCommerce, Wix and more — including all products, customer data, order history and SEO redirects. Zero data loss guaranteed.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Will my store be mobile-friendly?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Every store we build is mobile-first by default. We design and test on multiple screen sizes and devices before launch. Mobile accounts for 70%+ of traffic — we never compromise on it.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>What AI features can you add to my Shopify store?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>We can add AI chatbots for customer support, intelligent product recommendation engines, automated inventory alerts, AI-generated product descriptions and personalised shopping experiences based on user behaviour.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Do you offer post-launch support?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Yes — all packages include a post-launch support window. After that, we offer monthly retainer plans starting from ₹8,000/month for updates, new features, speed monitoring and CRO improvements.</p></div>
          </div>
        </div>
      </section>

    </div>
  );
}