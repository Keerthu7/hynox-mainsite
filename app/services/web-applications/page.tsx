"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, Building2, Monitor, Cloud, ShoppingBag, Network,
  FileText, Zap, Puzzle, Smartphone, Bot,
  Triangle, Atom, Palette, Box, Database, Layers, Brain, Flame, FileEdit, CreditCard, Figma,
  Search, Lock
} from 'lucide-react';
import CTAsection from '@/components/home/CTAsection';
import './styles.css';


export default function WebApplicationsPage() {
  useEffect(() => {
    // Nav scroll removed

    // Scroll reveal + score bar animation
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.score-fill').forEach((bar) => {
            const htmlBar = bar as HTMLElement;
            if (htmlBar.dataset.width) {
              htmlBar.style.width = htmlBar.dataset.width;
            }
          });
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
    <div className="web-app-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* CURSOR REMOVED */}

      <div className="grain-overlay"></div>

      {/* NAV REMOVED */}

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-dot"></div>
            <div className="badge-line"></div>
            Web Development — HYNOX
          </div>

          <h1 className="hero-title">
            Websites That<br />
            <em>Work</em> As Hard<br />
            As You Do
          </h1>

          <div className="hero-meta">
            <p className="hero-desc">HYNOX builds blazing-fast, conversion-optimised websites and web apps — from landing pages to full SaaS platforms. Clean code, pixel-perfect design, built to scale.</p>
            
            {/* INGE MAATHAVUM: flex column add panni onnuku keela onnu kondu vanthurukom */}
            <div className="hero-actions">
              <a href="/#work" className="btn-p">See Our Works</a>
              <a href="/contact" className="btn-g">Free Consultation</a>
            </div>

          </div>
        </div>

        <div className="hero-visual">
          {/* animated code backdrop */}
          <div className="hero-code-bg" aria-hidden="true">
            <span className="hl-keyword">const</span> <span className="hl-fn">Hynox</span> = <span className="hl-tag">{'{'}</span><br />
            &nbsp;&nbsp;<span className="hl-attr">mission</span>: <span className="hl-str">"build the web"</span>,<br />
            &nbsp;&nbsp;<span className="hl-attr">stack</span>: [<span className="hl-str">"Next.js"</span>, <span className="hl-str">"React"</span>],<br />
            &nbsp;&nbsp;<span className="hl-attr">speed</span>: <span className="hl-str">"&lt; 1s"</span>,<br />
            &nbsp;&nbsp;<span className="hl-attr">score</span>: <span className="hl-str">100</span>,<br />
            &nbsp;&nbsp;<span className="hl-fn">launch</span>: () <span className="hl-keyword">=&gt;</span> <span className="hl-tag">{'{'}</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="hl-fn">deploy</span>(<span className="hl-str">"production"</span>);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="hl-fn">scale</span>(<span className="hl-str">"∞"</span>);<br />
            &nbsp;&nbsp;<span className="hl-tag">{'}'}</span><br />
            <span className="hl-tag">{'}'};</span><br />
            <span className="hl-fn">Hynox</span>.<span className="hl-fn">launch</span>(); <span className="cursor-blink"></span>
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
          {[...Array(20)].map((_, i) => {
            const items = [
              "Landing Pages", "Corporate Websites", "Web Applications",
              "SaaS Platforms", "E-Commerce", "Headless CMS",
              "API Development", "AI Integration", "SEO Optimisation", "HYNOX"
            ];
            return (
              <div className="ticker-item" key={i}>◈ <b>{items[i % items.length]}</b></div>
            );
          })}
        </div>
      </div>

      {/* INTRO */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>01 — About This Service</div>
        <div className="s-title reveal">The Web Done<br />Properly</div>
        <div className="intro-grid">
          <div className="intro-text reveal">
            <p>Most web agencies hand you a <b>WordPress template with a fresh coat of paint</b> and call it a custom website. HYNOX builds from the ground up — hand-coded, performance-first, and designed specifically for your business goals.</p>
            <p>We treat every website as a <b>revenue-generating asset</b> — not a digital brochure. Every layout decision, every CTA placement, every millisecond of load time is engineered to convert visitors into customers.</p>
            <p>Whether you need a <b>high-converting landing page</b>, a full corporate site, a complex web application or a SaaS platform — HYNOX has the expertise and the process to deliver it on time and on budget.</p>
          </div>
          <div className="intro-stats reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="is-item">
              <span className="is-num">&lt;1s</span>
              <span className="is-label">Average Load Time</span>
            </div>
            <div className="is-item">
              <span className="is-num">100</span>
              <span className="is-label">PageSpeed Score</span>
            </div>
            <div className="is-item">
              <span className="is-num">3×</span>
              <span className="is-label">Avg. Conversion Boost</span>
            </div>
            <div className="is-item">
              <span className="is-num">7d</span>
              <span className="is-label">Landing Page Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="srv-header">
          <div>
            <div className="s-label reveal"><span className="s-label-line"></span>02 — What We Build</div>
            <div className="s-title reveal">Our Web<br />Services</div>
          </div>
          <p className="reveal">From simple landing pages to complex web platforms — every project is scoped clearly, designed beautifully and delivered with clean, maintainable code.</p>
        </div>
        <div className="srv-grid">
          <div className="srv-card reveal">
            <div className="sc-num">01</div>
            <span className="sc-icon"><Rocket size={32} /></span>
            <div className="sc-name">Landing Pages</div>
            <div className="sc-desc">High-converting single-page sites built to capture leads and drive sales. Optimised headlines, social proof, CTAs and A/B test-ready structure.</div>
            <div className="sc-tags"><span className="sc-tag">Next.js</span><span className="sc-tag">CRO</span><span className="sc-tag">A/B Ready</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="sc-num">02</div>
            <span className="sc-icon"><Building2 size={32} /></span>
            <div className="sc-name">Corporate Websites</div>
            <div className="sc-desc">Multi-page business websites with CMS integration, blog, team pages and full SEO setup — built to establish authority and generate inbound leads.</div>
            <div className="sc-tags"><span className="sc-tag">Next.js</span><span className="sc-tag">Sanity</span><span className="sc-tag">SEO</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.16s' }}>
            <div className="sc-num">03</div>
            <span className="sc-icon"><Monitor size={32} /></span>
            <div className="sc-name">Web Applications</div>
            <div className="sc-desc">Full-stack web apps with authentication, databases, admin panels and complex user flows — built for performance at any scale.</div>
            <div className="sc-tags"><span className="sc-tag">React</span><span className="sc-tag">Node.js</span><span className="sc-tag">PostgreSQL</span></div>
          </div>
          <div className="srv-card reveal">
            <div className="sc-num">04</div>
            <span className="sc-icon"><Cloud size={32} /></span>
            <div className="sc-name">SaaS Platforms</div>
            <div className="sc-desc">Multi-tenant SaaS products with subscription billing, role management, usage analytics and API-first architecture built to serve thousands of users.</div>
            <div className="sc-tags"><span className="sc-tag">SaaS</span><span className="sc-tag">Stripe</span><span className="sc-tag">Auth</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="sc-num">05</div>
            <span className="sc-icon"><ShoppingBag size={32} /></span>
            <div className="sc-name">E-Commerce</div>
            <div className="sc-desc">Custom-built online stores with product management, cart, payments and AI-powered recommendations — not just another Shopify theme.</div>
            <div className="sc-tags"><span className="sc-tag">Next.js</span><span className="sc-tag">Razorpay</span><span className="sc-tag">AI Search</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.16s' }}>
            <div className="sc-num">06</div>
            <span className="sc-icon"><Network size={32} /></span>
            <div className="sc-name">API & Backend</div>
            <div className="sc-desc">REST and GraphQL APIs, third-party integrations, webhooks and backend systems — scalable infrastructure for any web or mobile product.</div>
            <div className="sc-tags"><span className="sc-tag">REST</span><span className="sc-tag">GraphQL</span><span className="sc-tag">AWS</span></div>
          </div>
        </div>
      </section>

      {/* EXPERTISE TYPES */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>03 — Expertise</div>
        <div className="s-title reveal">Every Type of<br />Web Project</div>
        <div className="expertise-strip reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="exp-item">
            <span className="exp-icon"><FileText size={32} style={{ margin: '0 auto' }} /></span>
            <div className="exp-name">Static</div>
            <div className="exp-desc">Ultra-fast static sites via Next.js SSG or Astro</div>
          </div>
          <div className="exp-item">
            <span className="exp-icon"><Zap size={32} style={{ margin: '0 auto' }} /></span>
            <div className="exp-name">Dynamic</div>
            <div className="exp-desc">Server-rendered apps with real-time data and auth</div>
          </div>
          <div className="exp-item">
            <span className="exp-icon"><Puzzle size={32} style={{ margin: '0 auto' }} /></span>
            <div className="exp-name">Headless</div>
            <div className="exp-desc">CMS-powered with Sanity, Contentful or Strapi</div>
          </div>
          <div className="exp-item">
            <span className="exp-icon"><Smartphone size={32} style={{ margin: '0 auto' }} /></span>
            <div className="exp-name">PWA</div>
            <div className="exp-desc">Progressive web apps with offline and push support</div>
          </div>
          <div className="exp-item">
            <span className="exp-icon"><Bot size={32} style={{ margin: '0 auto' }} /></span>
            <div className="exp-name">AI-Powered</div>
            <div className="exp-desc">Websites with Claude AI chatbots and automation</div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--grey-dark)' }} id="process">
        <div className="s-label reveal"><span className="s-label-line"></span>04 — How We Work</div>
        <div className="s-title reveal">Our Development<br />Process</div>
        <div className="process-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="proc-row">
            <div className="proc-num">01</div>
            <div className="proc-content">
              <h3>Discovery & Strategy</h3>
              <p>We audit your brand, understand your audience and map your goals into a clear sitemap and content strategy before touching design or code.</p>
              <div className="proc-tools"><span className="proc-tool">Brand Audit</span><span className="proc-tool">Sitemap</span><span className="proc-tool">Content Strategy</span></div>
            </div>
            <div className="proc-duration">Days 1–2</div>
          </div>
          <div className="proc-row">
            <div className="proc-num">02</div>
            <div className="proc-content">
              <h3>UI/UX Design</h3>
              <p>Wireframes and high-fidelity Figma designs built for conversion — every section, layout and call-to-action is intentional. You approve before we code.</p>
              <div className="proc-tools"><span className="proc-tool">Figma</span><span className="proc-tool">Wireframes</span><span className="proc-tool">Design System</span></div>
            </div>
            <div className="proc-duration">Days 3–6</div>
          </div>
          <div className="proc-row">
            <div className="proc-num">03</div>
            <div className="proc-content">
              <h3>Development</h3>
              <p>Clean, semantic, accessible code built to industry best practices. Mobile-first, cross-browser, CMS integration and all third-party connections wired up.</p>
              <div className="proc-tools"><span className="proc-tool">Next.js</span><span className="proc-tool">Tailwind</span><span className="proc-tool">Node.js</span><span className="proc-tool">APIs</span></div>
            </div>
            <div className="proc-duration">Days 7–18</div>
          </div>
          <div className="proc-row">
            <div className="proc-num">04</div>
            <div className="proc-content">
              <h3>Speed & SEO</h3>
              <p>Core Web Vitals optimisation, image compression, lazy loading and full on-page SEO setup — schema markup, meta tags, sitemap and robots.txt.</p>
              <div className="proc-tools"><span className="proc-tool">Lighthouse</span><span className="proc-tool">Schema</span><span className="proc-tool">GTmetrix</span></div>
            </div>
            <div className="proc-duration">Days 19–21</div>
          </div>
          <div className="proc-row">
            <div className="proc-num">05</div>
            <div className="proc-content">
              <h3>QA & Testing</h3>
              <p>Full device, browser and accessibility testing. Forms, payments and integrations verified. A round of client feedback and revisions included.</p>
              <div className="proc-tools"><span className="proc-tool">BrowserStack</span><span className="proc-tool">Accessibility</span><span className="proc-tool">Forms QA</span></div>
            </div>
            <div className="proc-duration">Days 22–24</div>
          </div>
          <div className="proc-row">
            <div className="proc-num">06</div>
            <div className="proc-content">
              <h3>Launch & Handover</h3>
              <p>DNS setup, SSL, deployment to Vercel or your server, analytics connected, CMS training and full documentation so you own your site completely.</p>
              <div className="proc-tools"><span className="proc-tool">Vercel</span><span className="proc-tool">GA4</span><span className="proc-tool">Training</span><span className="proc-tool">Docs</span></div>
            </div>
            <div className="proc-duration">Day 25–28</div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>06 — Technology</div>
        <div className="s-title reveal">Our Tech Stack</div>
        <div className="tech-grid reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="tech-item"><span className="tech-icon-lg"><Triangle size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Next.js</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><Atom size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">React</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><Palette size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Tailwind CSS</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><Box size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Node.js</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><Database size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">PostgreSQL</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><Layers size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Redis</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><Brain size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Claude AI</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><Flame size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Firebase</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><Cloud size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Vercel / AWS</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><FileEdit size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Sanity CMS</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><CreditCard size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Razorpay</div></div>
          <div className="tech-item"><span className="tech-icon-lg"><Figma size={24} style={{ margin: '0 auto' }} /></span><div className="tech-name">Figma</div></div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="port-section" id="portfolio">
        <div className="s-label reveal"><span className="s-label-line"></span>07 — Portfolio</div>
        <div className="s-title reveal">Recent Web Projects</div>
        <div className="port-grid reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/sugarstar_web.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="port-category" style={{ color: '#eee' }}>Shopify Development</div>
            <div className="port-name">SugarStar</div>
            <div className="port-tags"><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Shopify</span><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Online Store</span></div>
            <div className="port-overlay"><span>View Project</span><p>Premium Confectionery Online Store</p></div>
          </div>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/team3_logo.png")', backgroundSize: 'cover, contain', backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'center, center' }}>
            <div className="port-category" style={{ color: '#eee' }}>Architectural & Interior</div>
            <div className="port-name">Team3</div>
            <div className="port-tags"><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Architecture</span><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Interior Design</span></div>
            <div className="port-overlay"><span>View Project</span><p>Architectural & Interior Designs</p></div>
          </div>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/JpWeb_works.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="port-category" style={{ color: '#eee' }}>Interior & Aluminium Works</div>
            <div className="port-name">JP Aluminium Interior</div>
            <div className="port-tags"><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Custom App</span><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Automation</span></div>
            <div className="port-overlay"><span>View Project</span><p>Business Automation Platform</p></div>
          </div>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/sun_holidays_web.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="port-category" style={{ color: '#eee' }}>Tours & Travels</div>
            <div className="port-name">Sun Holidays</div>
            <div className="port-tags"><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Web App</span><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Booking</span></div>
            <div className="port-overlay"><span>View Project</span><p>Tours and Travels Booking Platform</p></div>
          </div>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("/malika-garments_web.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="port-category" style={{ color: '#eee' }}>Fashion Retail</div>
            <div className="port-name">Mallika Garments</div>
            <div className="port-tags"><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Custom Dev</span><span className="port-tag" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>E-Commerce</span></div>
            <div className="port-overlay"><span>View Project</span><p>Fashion Retail Business Solution</p></div>
          </div>
          <div className="port-item" style={{ background: 'var(--grey-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.8rem', textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontFamily: "'Bebas Neue'", fontSize: '1.8rem', letterSpacing: '2px', lineHeight: 1.1 }}>Your Site<br />Could Be Here</div>
            <a href="/contact" style={{ fontFamily: "'Space Mono'", fontSize: '0.5rem', letterSpacing: '2px', color: 'var(--white)', border: '1px solid var(--border-light)', padding: '8px 16px', textDecoration: 'none', textTransform: 'uppercase', cursor: 'none' }}>Start a Project →</a>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="perf-section">
        <div className="s-label reveal"><span className="s-label-line"></span>08 — Performance</div>
        <div className="s-title reveal">Built Fast.<br />Stays Fast.</div>
        <div className="perf-grid">
          <div className="perf-text reveal">
            <h3>Every Site We Build Scores 90+ on Google PageSpeed</h3>
            <p>Performance isn't a feature we add at the end — it's baked into how we write code from day one. Every HYNOX website is optimised for Core Web Vitals, accessibility and SEO before it goes live.</p>
            <div className="score-list">
              <div className="score-item">
                <div className="score-header"><span className="score-label">Performance</span><span className="score-val">99 / 100</span></div>
                <div className="score-bar"><div className="score-fill" data-width="99%" style={{ width: 0 }}></div></div>
              </div>
              <div className="score-item">
                <div className="score-header"><span className="score-label">Accessibility</span><span className="score-val">97 / 100</span></div>
                <div className="score-bar"><div className="score-fill" data-width="97%" style={{ width: 0 }}></div></div>
              </div>
              <div className="score-item">
                <div className="score-header"><span className="score-label">Best Practices</span><span className="score-val">100 / 100</span></div>
                <div className="score-bar"><div className="score-fill" data-width="100%" style={{ width: 0 }}></div></div>
              </div>
              <div className="score-item">
                <div className="score-header"><span className="score-label">SEO</span><span className="score-val">98 / 100</span></div>
                <div className="score-bar"><div className="score-fill" data-width="98%" style={{ width: 0 }}></div></div>
              </div>
            </div>
          </div>
          <div className="perf-features reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="perf-feat">
              <div className="perf-feat-icon"><Zap size={24} /></div>
              <div>
                <h4>Sub-Second Load Times</h4>
                <p>Image optimisation, lazy loading, code splitting and CDN delivery combine to hit sub-1s load times on every project.</p>
              </div>
            </div>
            <div className="perf-feat">
              <div className="perf-feat-icon"><Smartphone size={24} /></div>
              <div>
                <h4>Mobile-First Always</h4>
                <p>Every design starts on mobile. We test on 20+ real devices before any site goes live — not just browser dev tools.</p>
              </div>
            </div>
            <div className="perf-feat">
              <div className="perf-feat-icon"><Search size={24} /></div>
              <div>
                <h4>Technical SEO Baked In</h4>
                <p>Structured data, canonical tags, sitemap, robots.txt and semantic HTML — all configured so Google can index and rank your site properly.</p>
              </div>
            </div>
            <div className="perf-feat">
              <div className="perf-feat-icon"><Lock size={24} /></div>
              <div>
                <h4>Security & Uptime</h4>
                <p>HTTPS enforced, headers secured, dependencies audited and Vercel's global edge network keeping your site up 99.99% of the time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why-section">
        <div className="s-label reveal"><span className="s-label-line"></span>09 — Why HYNOX</div>
        <div className="s-title reveal">Why Choose Us<br />Over Others</div>
        <div className="why-cols reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="why-col">
            <div className="why-col-title">Generic Web Agencies</div>
            <div className="why-item"><div className="why-mark">✗</div><p>Sell you a WordPress template at custom prices</p></div>
            <div className="why-item"><div className="why-mark">✗</div><p>Slow timelines — months for a simple website</p></div>
            <div className="why-item"><div className="why-mark">✗</div><p>No performance or SEO knowledge after launch</p></div>
            <div className="why-item"><div className="why-mark">✗</div><p>Lock you into proprietary CMS systems</p></div>
            <div className="why-item"><div className="why-mark">✗</div><p>Zero AI or automation integration capability</p></div>
            <div className="why-item"><div className="why-mark">✗</div><p>You never meet the actual developer</p></div>
          </div>
          <div className="why-col">
            <div className="why-col-title">HYNOX</div>
            <div className="why-item"><div className="why-mark">✓</div><p>100% custom code — no templates, no page builders</p></div>
            <div className="why-item"><div className="why-mark">✓</div><p>Landing pages in 7 days, full sites in 4 weeks</p></div>
            <div className="why-item"><div className="why-mark">✓</div><p>90+ PageSpeed score delivered on every project</p></div>
            <div className="why-item"><div className="why-mark">✓</div><p>Open-source stack — you own everything, fully portable</p></div>
            <div className="why-item"><div className="why-mark">✓</div><p>AI chatbots and automation built into every project</p></div>
            <div className="why-item"><div className="why-mark">✓</div><p>Direct access to your developer from day one</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="s-label reveal"><span className="s-label-line"></span>11 — FAQ</div>
        <div className="s-title reveal">Frequently Asked<br />Questions</div>
        <div className="faq-list reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>How long does a website take to build?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>A landing page takes 5–7 days. A full business website takes 3–4 weeks. A web application or SaaS platform takes 6–12 weeks depending on complexity. We always give a fixed delivery date with milestone breakdowns upfront.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Will I be able to update the website myself?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Yes. For content-heavy sites we integrate Sanity CMS — a simple, user-friendly editor. We provide a full training session and video walkthrough so you can update text, images and blog posts without touching code.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Do you use WordPress or page builders?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>No. We build everything with Next.js, React and Node.js — clean, hand-coded and production-grade. No WordPress, no Wix, no Webflow. You get a faster, more secure and fully custom website that you actually own.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>What about hosting — do you handle that?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Yes. We deploy to Vercel (recommended) or your preferred hosting provider. Domain configuration, SSL setup and performance monitoring are all included in every package. Vercel's free tier covers most business websites at zero hosting cost.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Can you add an AI chatbot to my website?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Absolutely — it's one of our most requested features. We build Claude API-powered chatbots trained on your business data, FAQs and product info. They handle support queries, capture leads and book meetings — 24/7, automatically.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Do you offer ongoing website maintenance?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Yes. After the support window included in your package, we offer monthly retainer plans from ₹5,000/month — covering updates, security patches, speed monitoring, new features and conversion rate improvements.</p></div>
          </div>
        </div>
      </section>

      <CTAsection />
    </div>
  );
}