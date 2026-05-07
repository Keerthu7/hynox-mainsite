"use client";

import React, { useEffect } from 'react';
import { 
  Factory, Users, Cloud, Bot, Link as LinkIcon, BarChart, Landmark, Settings, Shield,
  Hospital, ShoppingBag, Building2, GraduationCap, Truck, Zap,
  Atom, Server, Code2, Coffee, Database, Leaf, Layers, Box, Brain, Package, Wrench,
  Puzzle, Plug, TrendingUp,
  Pin, RefreshCcw,
  ClipboardCheck, Key, Rocket, ShieldCheck
} from 'lucide-react';
import CTAsection from '@/components/home/CTAsection';
import './styles.css';

export default function CustomSoftwarePage() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08 });

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
      <div className="custom-software-page">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

        {/* HERO */}
        <section className="hero" id="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot"></div>
              <div className="badge-line"></div>
              Custom Software Development — HYNOX
            </div>

            <h1 className="hero-title">
              Software Built<br/>
              For <em>Your</em><br/>
              Exact Problem
            </h1>

            <div className="hero-meta">
              <p className="hero-desc">
                HYNOX engineers bespoke software solutions from the ground up — ERP systems, CRM platforms, automation tools, SaaS products and AI-powered enterprise applications. No off-the-shelf. No compromises.
              </p>
              
              <div className="hero-actions">
                <a href="/#work" className="btn-p">See Our Works</a>
                <a href="#contact" className="btn-g">Free Consultation</a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            {/* Terminal mockup */}
            <div className="hero-terminal">
              <div className="terminal-frame">
                <div className="terminal-bar">
                  <div className="t-dot r"></div>
                  <div className="t-dot y"></div>
                  <div className="t-dot g"></div>
                  <div className="terminal-title">hynox — build.sh</div>
                </div>
                <div className="terminal-body">
                  <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd"> hynox init --project="ClientERP"</span></div>
                  <div className="t-output">✓ Scoping requirements...</div>
                  <div className="t-output">✓ Architecture designed</div>
                  <div className="t-output success">✓ Tech stack selected</div>
                  <div className="t-line" style={{ marginTop: '6px' }}><span className="t-prompt">$</span><span className="t-cmd"> hynox build --sprint=1</span></div>
                  <div className="t-output">✓ Sprint 1 delivered</div>
                  <div className="t-output">✓ Client review passed</div>
                  <div className="t-output success">✓ Deployed to staging</div>
                  <div className="t-line" style={{ marginTop: '6px' }}><span className="t-prompt">$</span><span className="t-cmd"> hynox deploy --env=production</span></div>
                  <div className="t-output info">⟳ Running final tests...</div>
                  <div className="t-output info">⟳ Deploying to AWS...<span className="t-cursor-blink"></span></div>
                </div>
                <div className="terminal-progress">
                  <div className="t-prog-label">Build Progress — Sprint 3 of 4</div>
                  <div className="t-prog-bar"><div className="t-prog-fill"></div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-scroll">
            <div className="scroll-line"></div>
            <span>Scroll</span>
          </div>
        </section>

        {/* The rest of your components (Ticker, Solutions, etc.) stay exactly the same */}
        {/* ... */}