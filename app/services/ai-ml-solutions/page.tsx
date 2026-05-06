"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Bot, Workflow, PenTool, ArrowRight } from 'lucide-react';
import CTAsection from '@/components/home/CTAsection';
import './styles.css';

export default function AiMlSolutionsPage() {
  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="ai-ml-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg-text">HYNOX</div>
        
        {/* INGE MAATHAVUM: marginTop & marginLeft add panni text-a keela & right side move pannirukom */}
        <div className="hero-content" style={{ marginTop: '-7rem', marginLeft: '2rem' }}>
          <div className="hero-badge"><span></span>Agentic AI Solutions — Est. 2024</div>
          
          {/* INGE MAATHAVUM: Title size & line height adjust pannirukom */}
          <h1 className="hero-title" style={{ fontSize: '5.4rem', lineHeight: '1.1' }}>
            AI Agents<br/>
            That <em>Close</em><br/>
            Deals For You
          </h1>
          
          {/* INGE MAATHAVUM: Description size adjust pannirukom */}
          <p className="hero-sub" style={{ fontSize: '1rem', maxWidth: '90%' }}>
            HYNOX deploys autonomous AI pipelines that find leads, send messages, book meetings and grow your revenue — fully automated, 24 hours a day.
          </p>
          
          {/* INGE MAATHAVUM: Buttons-a flex row add panni side-by-side aakirukom */}
          <div className="hero-bottom" style={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: '1.5rem', alignItems: 'center' }}>
            <a href="#pipeline" className="hero-cta" style={{ fontSize: '1.05rem', padding: '12px 28px', whiteSpace: 'nowrap', display: 'inline-block', textAlign: 'center' }}>See How It Works</a>
            <a href="/contact" className="hero-cta-ghost" style={{ fontSize: '1.05rem', padding: '12px 28px', whiteSpace: 'nowrap', display: 'inline-block', textAlign: 'center' }}>Get In Touch</a>
          </div>
        </div>

        {/* INGE MAATHAVUM: marginTop add panni visual block-a konjam keela thalli vachirukom */}
        <div className="hero-visual" style={{ marginTop: '3rem' }}>
          {/* INGE MAATHAVUM: scale() use panni image size perisaakirukkom */}
          <img src="/aiml-hero.png" alt="AI Neural Network" className="hero-visual-img" style={{ transform: 'scale(1.2)', transformOrigin: 'center' }} />
          <div className="hero-visual-fade"></div>
        </div>
        
        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> Lead Generation Agent</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> AI Chatbots</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> Business Automation</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> Content Creation AI</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> Meeting Booking Agent</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> HYNOX</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> Lead Generation Agent</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> AI Chatbots</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> Business Automation</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> Content Creation AI</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> Meeting Booking Agent</div>
          <div className="ticker-item"><span><Sparkles size={14} className="inline-block" /></span> HYNOX</div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services">
        <div className="section-label reveal"><span></span>01 — What We Do</div>
        <div className="section-title reveal">Our Services</div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-num">01</div>
            <span className="service-icon"><Target size={32} /></span>
            <div className="service-name">AI Lead Generation</div>
            <div className="service-desc">Autonomous agents that scrape, personalise and send 500+ targeted messages daily — turning cold data into booked meetings.</div>
            <span className="service-arrow"><ArrowRight size={20} /></span>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="service-num">02</div>
            <span className="service-icon"><Bot size={32} /></span>
            <div className="service-name">AI Chatbot & Assistant</div>
            <div className="service-desc">Always-on customer support and sales chatbots for your website, WhatsApp and social channels. Never miss a lead again.</div>
            <span className="service-arrow"><ArrowRight size={20} /></span>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="service-num">03</div>
            <span className="service-icon"><Workflow size={32} /></span>
            <div className="service-name">Business Automation</div>
            <div className="service-desc">From email workflows to data entry and report generation — we automate the tasks eating your team's time and budget.</div>
            <span className="service-arrow"><ArrowRight size={20} /></span>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="service-num">04</div>
            <span className="service-icon"><PenTool size={32} /></span>
            <div className="service-name">AI Content Creation</div>
            <div className="service-desc">Blog posts, social media, ad copy and product descriptions — generated at scale, tailored to your brand voice, published automatically.</div>
            <span className="service-arrow"><ArrowRight size={20} /></span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        <div className="stat-item reveal">
          <span className="stat-num">500+</span>
          <span className="stat-label">Leads Scraped Daily</span>
        </div>
        <div className="stat-item reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="stat-num">24/7</span>
          <span className="stat-label">Agent Uptime</span>
        </div>
        <div className="stat-item reveal" style={{ transitionDelay: '0.2s' }}>
          <span className="stat-num">5×</span>
          <span className="stat-label">Pipeline Agents</span>
        </div>
        <div className="stat-item reveal" style={{ transitionDelay: '0.3s' }}>
          <span className="stat-num">0</span>
          <span className="stat-label">Manual Outreach Needed</span>
        </div>
      </div>

      {/* PIPELINE */}
      <section className="pipeline-section" id="pipeline">
        <div className="pipeline-intro">
          <div>
            <div className="section-label reveal"><span></span>02 — How It Works</div>
            <div className="section-title reveal">The Agent<br/>Pipeline</div>
          </div>
          <p className="reveal">Five autonomous agents work in sequence — from scraping raw data to booking a warm meeting in your calendar. You only appear at the very last step, fully prepared to close.</p>
        </div>
        <div className="pipeline-steps">
          <div className="pipeline-step reveal">
            <div className="step-dot">01</div>
            <div className="step-title">Scrape</div>
            <div className="step-desc">Finds 200–500 targeted business leads daily from Google Maps, LinkedIn & JustDial</div>
          </div>
          <div className="pipeline-step reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="step-dot">02</div>
            <div className="step-title">Personalise</div>
            <div className="step-desc">AI crafts a unique, human-sounding message for every single lead</div>
          </div>
          <div className="pipeline-step reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="step-dot">03</div>
            <div className="step-title">Outreach</div>
            <div className="step-desc">Sends emails and LinkedIn DMs automatically, every day</div>
          </div>
          <div className="pipeline-step reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="step-dot">04</div>
            <div className="step-title">Follow-up</div>
            <div className="step-desc">Auto follow-up sequence if no reply — persistent but never spammy</div>
          </div>
          <div className="pipeline-step reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="step-dot">05</div>
            <div className="step-title">Book Meeting</div>
            <div className="step-desc">Interested leads get a Calendly link and a confirmed slot in your calendar</div>
          </div>
          <div className="pipeline-step reveal" style={{ transitionDelay: '0.5s' }}>
            <div className="step-dot step-you">YOU</div>
            <div className="step-title step-you-title" style={{ color: 'var(--white)' }}>You Close</div>
            <div className="step-desc">Show up to a warm, pre-qualified meeting and sign the deal</div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section style={{ background: 'var(--grey-dark)' }}>
        <style>{`
          .portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); margin-top: 4rem; }
          .port-item { aspect-ratio: 16/9; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; background-color: var(--grey-card); }
          .port-tag { font-family: 'Space Mono', monospace; font-size: 0.48rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 0.4rem; position: relative; z-index: 1; }
          .port-name { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; letter-spacing: 1px; color: var(--white); position: relative; z-index: 1; }
          .port-overlay { position: absolute; inset: 0; background: var(--white); display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 0.5rem; opacity: 0; transition: opacity 0.35s; z-index: 2; }
          .port-overlay span { font-family: 'Bebas Neue', sans-serif; font-size: 1.3rem; letter-spacing: 2px; color: var(--black); }
          .port-overlay p { font-family: 'Space Mono', monospace; font-size: 0.5rem; letter-spacing: 1px; color: rgba(0,0,0,0.4); text-transform: uppercase; }
          .port-item:hover .port-overlay { opacity: 0; }
          @media (max-width: 992px) { .portfolio-grid { grid-template-columns: 1fr; } }
        `}</style>
        <div className="section-label reveal"><span></span>03 — Portfolio</div>
        <div className="section-title reveal">Recent Projects</div>
        <div className="portfolio-grid reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.95)), url("/ml_cover.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="port-tag" style={{ color: '#ccc' }}>Workflow Automation</div>
            <div className="port-name">n8n Integration</div>
            <div className="port-overlay"><span>View Project</span><p>AI Pipeline · Automation</p></div>
          </div>
          <div className="port-item" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.95)), url("/voice_cover.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="port-tag" style={{ color: '#ccc' }}>Voice AI Assistant</div>
            <div className="port-name">Aura Voice</div>
            <div className="port-overlay"><span>View Project</span><p>NLP · Voice Recognition</p></div>
          </div>
          <div className="port-item" style={{ background: 'var(--grey-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Bebas Neue'", fontSize: '2rem', letterSpacing: '2px' }}>Your Project Next?</div>
            <a href="/contact" style={{ fontFamily: "'Space Mono'", fontSize: '0.55rem', letterSpacing: '2px', color: 'var(--white)', border: '1px solid var(--border-light)', padding: '8px 16px', textDecoration: 'none', textTransform: 'uppercase' }}>Start a Project →</a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="about">
        <div className="section-label reveal"><span></span>04 — Why HYNOX</div>
        <div className="section-title reveal">Built Different</div>
        <div className="why-grid">
          <ul className="why-list">
            <li className="why-item reveal">
              <div className="why-num">01</div>
              <div className="why-text">
                <h4>Fully Autonomous Pipeline</h4>
                <p>From first touch to booked meeting — every step is handled by agents. No team of SDRs needed.</p>
              </div>
            </li>
            <li className="why-item reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="why-num">02</div>
              <div className="why-text">
                <h4>Hyper-Personalised at Scale</h4>
                <p>AI writes unique messages per lead, not copy-paste blasts. Higher open rates. Higher conversions.</p>
              </div>
            </li>
            <li className="why-item reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="why-num">03</div>
              <div className="why-text">
                <h4>You Only Attend Meetings</h4>
                <p>Your time is for closing, not cold outreach. Let the agents do the heavy lifting 24/7.</p>
              </div>
            </li>
            <li className="why-item reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="why-num">04</div>
              <div className="why-text">
                <h4>Built For Indian Businesses</h4>
                <p>Designed to work with Indian markets — local scraping, regional targeting, and WhatsApp-ready pipelines.</p>
              </div>
            </li>
            <li className="why-item reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="why-num">05</div>
              <div className="why-text">
                <h4>Sell It Back to Others</h4>
                <p>Once proven, we sell this exact pipeline to other businesses at ₹50K–₹2L per deployment.</p>
              </div>
            </li>
          </ul>
          <div className="why-visual reveal">
            <div className="why-visual-ring">
              <div className="why-visual-inner">HYNOX</div>
            </div>
          </div>
        </div>
      </section>

      </div>
      <CTAsection />
    </>
  );
}