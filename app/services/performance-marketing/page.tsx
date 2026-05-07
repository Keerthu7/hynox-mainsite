"use client";

import React, { useEffect, useState } from 'react';
import { 
  Target, TrendingUp, Zap, Clock, RefreshCcw, 
  Search, Youtube, Briefcase, Globe, Smartphone, 
  Mail, Brain, ShoppingBag, Cloud, Film, 
  Layers, FileText, Home, Flame, Triangle, 
  Palette, Bot, Facebook, ArrowRight, PlayCircle,
  Plus, Check, X, Layout
} from 'lucide-react';
import CTAsection from '@/components/home/CTAsection';
import './styles.css';

export default function PerformanceMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.fv-fill').forEach((bar) => {
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const tickerItems = [
    "Meta Ads", "Google Ads", "LinkedIn Ads", "YouTube Ads", 
    "Programmatic Display", "Retargeting", "Conversion Rate Optimisation", 
    "A/B Testing", "AI Bid Optimisation", "HYNOX"
  ];

  return (
    <>
    <div className="performance-marketing-page">
      <div className="grain-overlay"></div>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-content" style={{ marginTop: '4rem', marginLeft: '2rem' }}>
          <div className="hero-badge">
            <div className="badge-dot"></div>
            <div className="badge-line"></div>
            Performance Marketing — HYNOX
          </div>
          
          <h1 className="hero-title" style={{ fontSize: '5rem', lineHeight: '1.1' }}>
            Every Rupee<br/>
            Spent Must<br/>
            <em>Return More</em>
          </h1>
          
          <div className="hero-meta">
            <p className="hero-desc" style={{ fontSize: '1rem', maxWidth: '90%' }}>HYNOX runs performance marketing campaigns engineered for measurable ROI — Meta Ads, Google Ads, LinkedIn, YouTube and programmatic — tracked to the rupee, optimised daily, scaled relentlessly.</p>
            
            {/* INGE MAATHAVUM: Buttons-a flex row add panni side-by-side aakirukom */}
            <div className="hero-actions" style={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: '1.5rem', alignItems: 'center' }}>
              <a href="/#work" className="btn-p" style={{ fontSize: '1.05rem', padding: '12px 28px', whiteSpace: 'nowrap', display: 'inline-block', textAlign: 'center' }}>See Our Works</a>
              <a href="/contact" className="btn-g" style={{ fontSize: '1.05rem', padding: '12px 28px', whiteSpace: 'nowrap', display: 'inline-block', textAlign: 'center' }}>Free Ad Audit</a>
            </div>
          </div>
        </div>

        <div className="hero-visual" style={{ marginTop: '3rem' }}>
          {/* Live Dashboard Mockup */}
          <div className="hero-dashboard" style={{ transform: 'scale(1.15) translateX(-2rem)', transformOrigin: 'center' }}>
            <div className="dash-frame">
              <div className="dash-topbar">
                <div className="dash-title">Campaign Dashboard</div>
                <div className="dash-live"><div className="live-dot"></div>Live</div>
              </div>
              <div className="dash-body">
                <div className="dash-kpi-row">
                  <div className="kpi-box">
                    <span className="kpi-val">4.8×</span>
                    <span className="kpi-label">ROAS</span>
                    <span className="kpi-delta">↑ +1.2×</span>
                  </div>
                  <div className="kpi-box">
                    <span className="kpi-val">₹18</span>
                    <span className="kpi-label">CPA</span>
                    <span className="kpi-delta">↓ -32%</span>
                  </div>
                  <div className="kpi-box">
                    <span className="kpi-val">6.2%</span>
                    <span className="kpi-label">CTR</span>
                    <span className="kpi-delta">↑ +2.1%</span>
                  </div>
                </div>
                <div className="dash-chart-label">Daily Conversions — This Week</div>
                <div className="dash-chart">
                  <div className="bar" style={{ height: '35%' }}></div>
                  <div className="bar" style={{ height: '55%' }}></div>
                  <div className="bar" style={{ height: '48%' }}></div>
                  <div className="bar" style={{ height: '70%' }}></div>
                  <div className="bar" style={{ height: '62%' }}></div>
                  <div className="bar lit" style={{ height: '88%' }}></div>
                  <div className="bar lit" style={{ height: '95%' }}></div>
                </div>
                <div className="dash-metrics">
                  <div className="dm-row">
                    <div className="dm-label">Meta Ads</div>
                    <div className="dm-bar-wrap"><div className="dm-bar-fill" style={{ width: '88%' }}></div></div>
                    <div className="dm-val">4.9×</div>
                  </div>
                  <div className="dm-row">
                    <div className="dm-label">Google Ads</div>
                    <div className="dm-bar-wrap"><div className="dm-bar-fill" style={{ width: '74%' }}></div></div>
                    <div className="dm-val">4.2×</div>
                  </div>
                  <div className="dm-row">
                    <div className="dm-label">LinkedIn Ads</div>
                    <div className="dm-bar-wrap"><div className="dm-bar-fill" style={{ width: '60%' }}></div></div>
                    <div className="dm-val">3.8×</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll"><div className="scroll-line"></div><span>Scroll</span></div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div className="ticker-item" key={i}>◈ <b>{item}</b></div>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>01 — About This Service</div>
        <div className="s-title reveal">Marketing That<br/>Pays For Itself</div>
        <div className="intro-grid">
          <div className="intro-text reveal">
            <p>Performance marketing means one thing: <b>you only pay for results.</b> Every campaign we run is built around a clear cost-per-acquisition target, a return-on-ad-spend goal and a measurable growth trajectory — not vanity impressions or brand fluff.</p>
            <p>At HYNOX, we manage your full paid media ecosystem — <b>Meta, Google, LinkedIn, YouTube and programmatic</b> — with daily optimisation, creative testing and AI-powered bid strategies that squeeze maximum revenue from every rupee of ad spend.</p>
            <p>Whether you want to <b>generate leads, drive e-commerce sales, grow app installs or scale a SaaS product</b> — we build the campaigns, write the ads, design the creatives, run the tests and deliver the numbers.</p>
          </div>
          <div className="intro-stats reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="is-item"><span className="is-num">4.8×</span><span className="is-label">Avg. ROAS Delivered</span></div>
            <div className="is-item"><span className="is-num">-38%</span><span className="is-label">Avg. CPA Reduction</span></div>
            <div className="is-item"><span className="is-num">Daily</span><span className="is-label">Campaign Optimisation</span></div>
            <div className="is-item"><span className="is-num">AI</span><span className="is-label">Powered Bid Strategy</span></div>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <div style={{ padding: '0 8vw', borderTop: '1px solid var(--border)' }}>
        <div className="metrics-strip reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="metric-item"><span className="metric-icon"><Target size={32} style={{ margin: '0 auto 0.8rem' }} /></span><span className="metric-val">₹18</span><span className="metric-label">Avg. Cost Per Lead</span></div>
          <div className="metric-item"><span className="metric-icon"><TrendingUp size={32} style={{ margin: '0 auto 0.8rem' }} /></span><span className="metric-val">4.8×</span><span className="metric-label">Return on Ad Spend</span></div>
          <div className="metric-item"><span className="metric-icon"><Zap size={32} style={{ margin: '0 auto 0.8rem' }} /></span><span className="metric-val">6.2%</span><span className="metric-label">Avg. Click-Through Rate</span></div>
          <div className="metric-item"><span className="metric-icon"><Clock size={32} style={{ margin: '0 auto 0.8rem' }} /></span><span className="metric-val">48h</span><span className="metric-label">Campaign Go-Live</span></div>
          <div className="metric-item"><span className="metric-icon"><RefreshCcw size={32} style={{ margin: '0 auto 0.8rem' }} /></span><span className="metric-val">Daily</span><span className="metric-label">Optimisation Cadence</span></div>
        </div>
      </div>

      {/* CHANNELS */}
      <section className="channels-section" id="channels">
        <div className="ch-header">
          <div>
            <div className="s-label reveal"><span className="s-label-line"></span>02 — Ad Channels</div>
            <div className="s-title reveal">Every Channel.<br/>Maximum ROI.</div>
          </div>
          <p className="reveal">We manage campaigns across every major paid channel — with platform-native strategies, custom audience architectures and creative that's built to convert, not just impress.</p>
        </div>
        <div className="ch-grid">
          {[
            { num: "01", icon: <Facebook size={32} />, name: "Meta Ads (Facebook & Instagram)", desc: "Full-funnel Meta campaigns — awareness to conversion — with custom audiences, lookalikes, retargeting stacks and creative testing frameworks engineered for lowest possible CPA.", tags: ["Facebook", "Instagram", "Reels Ads", "Lookalikes"] },
            { num: "02", icon: <Search size={32} />, name: "Google Ads (Search & Display)", desc: "Search campaigns targeting high-intent buyers, Shopping ads for e-commerce, Display retargeting and Performance Max campaigns — bid strategies optimised by AI daily for maximum ROAS.", tags: ["Search", "Shopping", "PMax", "Display"] },
            { num: "03", icon: <Youtube size={32} />, name: "YouTube Ads", desc: "In-stream, bumper and discovery ads with audience targeting by intent, demographics and competitor keywords — video creative scripted and produced to drive action, not just views.", tags: ["In-Stream", "Bumper", "Discovery"] },
            { num: "04", icon: <Briefcase size={32} />, name: "LinkedIn Ads", desc: "B2B precision targeting by job title, company size, industry and seniority — Sponsored Content, Message Ads and Lead Gen Forms that put your offer directly in front of decision-makers.", tags: ["Sponsored Content", "InMail", "Lead Gen"] },
            { num: "05", icon: <Globe size={32} />, name: "Programmatic Display", desc: "Automated buying of display inventory across thousands of premium websites — retargeting and prospecting at scale with real-time bidding, viewability tracking and brand safety controls.", tags: ["RTB", "DSP", "Retargeting"] },
            { num: "06", icon: <Smartphone size={32} />, name: "TikTok & YouTube Shorts Ads", desc: "Short-form video ads on TikTok and YouTube Shorts — native, authentic creative that blends into the feed and drives measurable clicks and conversions from younger, high-intent audiences.", tags: ["TikTok", "Shorts Ads", "UGC Style"] },
            { num: "07", icon: <RefreshCcw size={32} />, name: "Retargeting & Remarketing", desc: "Multi-platform retargeting sequences that follow your warm audiences across the web — website visitors, cart abandoners, video viewers and email lists converted into paying customers.", tags: ["Pixel", "Custom Audiences", "Dynamic Ads"] },
            { num: "08", icon: <Mail size={32} />, name: "Email & WhatsApp Marketing", desc: "Performance-driven email and WhatsApp campaigns — automated sequences, broadcast campaigns, abandoned cart flows and win-back campaigns with full open, click and conversion tracking.", tags: ["Email", "WhatsApp", "Automation"] },
            { num: "09", icon: <Brain size={32} />, name: "AI-Powered Bid Optimisation", desc: "Machine learning bid strategies layered across all campaigns — target CPA, target ROAS and maximise conversion value algorithms trained on your specific customer data and revenue goals.", tags: ["Smart Bidding", "ML Signals", "Auto-Optimise"] }
          ].map((ch, idx) => (
            <div className="ch-card reveal" key={idx} style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}>
              <div className="ch-num">{ch.num}</div>
              <span className="ch-icon">{ch.icon}</span>
              <div className="ch-name">{ch.name}</div>
              <div className="ch-desc">{ch.desc}</div>
              <div className="ch-tags">
                {ch.tags.map(tag => <span className="ch-tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPAIGN GOALS */}
      <section className="plat-section">
        <div className="s-label reveal"><span className="s-label-line"></span>03 — Campaign Goals</div>
        <div className="s-title reveal">Built For Every<br/>Business Objective</div>
        <div className="plat-grid reveal" style={{ transitionDelay: '0.15s' }}>
          {[
            { icon: <Target size={40} />, name: "Lead Generation", desc: "Low-cost, high-quality leads delivered directly to your CRM — volume, speed and qualification all optimised simultaneously.", tags: ["Meta Leads", "LinkedIn Lead Gen", "Landing Pages"] },
            { icon: <ShoppingBag size={40} />, name: "E-Commerce Sales", desc: "Revenue-first campaigns for online stores — dynamic product ads, Shopping campaigns and cart recovery sequences with ROAS targets from day one.", tags: ["Shopping Ads", "Dynamic Ads", "ROAS"] },
            { icon: <Smartphone size={40} />, name: "App Installs & Retention", desc: "User acquisition campaigns optimised for install cost, Day-7 retention and in-app conversion events — not just cheap installs that churn immediately.", tags: ["UAC", "Meta App Ads", "D7 Retention"] },
            { icon: <Cloud size={40} />, name: "SaaS & B2B Growth", desc: "Pipeline-focused B2B campaigns driving free trial signups, demo bookings and MQL targets — with LinkedIn precision and Google intent targeting working together.", tags: ["MQL Targeting", "Demo Bookings", "ABM"] }
          ].map((goal, idx) => (
            <div className="plat-item" key={idx}>
              <span className="plat-icon">{goal.icon}</span>
              <div className="plat-name">{goal.name}</div>
              <div className="plat-desc">{goal.desc}</div>
              <div className="plat-tags">
                {goal.tags.map(tag => <span className="plat-tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="proc-section" id="process">
        <div className="s-label reveal"><span className="s-label-line"></span>04 — How We Work</div>
        <div className="s-title reveal">Our Performance<br/>Marketing Process</div>
        <div className="process-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          {[
            { num: "01", title: "Account & Competitor Audit", desc: "We audit your existing ad accounts, pixel setup, audience health and creative performance — then benchmark against competitors to identify the exact gaps where budget is being wasted and where opportunity exists.", tools: ["Account Audit", "Pixel QA", "Competitor Analysis"], badge: "Week 1" },
            { num: "02", title: "Strategy & Campaign Architecture", desc: "Full-funnel campaign architecture mapped to your business objectives — TOFU, MOFU and BOFU campaigns designed with channel allocation, budget split, audience segmentation and KPI targets per campaign.", tools: ["Funnel Strategy", "Budget Allocation", "Audience Map"], badge: "Week 1" },
            { num: "03", title: "Creative Production & Ad Copy", desc: "We produce all ad creatives in-house — static images, video ads, carousel formats and copy variants. Multiple creative angles tested from launch to identify your winning message and visual style fast.", tools: ["Ad Copywriting", "Creative Design", "Video Ads", "A/B Variants"], badge: "Week 2" },
            { num: "04", title: "Launch & Technical Setup", desc: "Pixel and conversion tracking verified. UTM parameters configured. Conversion events tested in real-time. Landing pages reviewed for CRO. Campaigns launched with conservative budgets and scaled based on data.", tools: ["Pixel Setup", "UTM Config", "Conversion QA"], badge: "Week 2" },
            { num: "05", title: "Daily Optimisation & Scaling", desc: "Daily checks on spend, ROAS, CPA and frequency. Underperforming ad sets paused, budgets shifted to winners, bids adjusted, new audiences tested. We optimise every day — not every week.", tools: ["Daily Monitoring", "Bid Adjustment", "Budget Scaling"], badge: "Daily" },
            { num: "06", title: "A/B Testing & Creative Refresh", desc: "Structured creative testing — one variable at a time — to continuously improve CTR and conversion rate. New ad variants launched every 2 weeks to combat creative fatigue and maintain performance.", tools: ["A/B Testing", "Creative Refresh", "Statistical Sig."], badge: "Bi-Weekly" },
            { num: "07", title: "Monthly Reporting & Strategy Review", desc: "Detailed monthly performance report — spend, revenue, ROAS, CPA, conversion rate and channel breakdown. 30-minute strategy call to review results, adjust targets and plan next month's campaigns.", tools: ["Performance Report", "Strategy Review", "Next Month Plan"], badge: "Monthly" }
          ].map((proc, idx) => (
            <div className="proc-row" key={idx}>
              <div className="proc-num">{proc.num}</div>
              <div className="proc-content">
                <h3>{proc.title}</h3>
                <p>{proc.desc}</p>
                <div className="proc-tools">
                  {proc.tools.map(tool => <span className="proc-tool" key={tool}>{tool}</span>)}
                </div>
              </div>
              <div className="proc-badge">{proc.badge}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW & IMPROVED FUNNEL SECTION */}
      <section className="funnel-section">
        <div className="s-label reveal"><span className="s-label-line"></span>05 — Conversion Funnel</div>
        <div className="s-title reveal">We Own the Full<br/>Funnel — Not Just Ads</div>
        
        <div className="funnel-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', 
          gap: '4rem', 
          alignItems: 'flex-start',
          marginTop: '4rem'
        }}>
          {/* Left Column: Text & Premium Stages List */}
          <div className="funnel-left-column" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div className="funnel-text reveal">
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>
                Most agencies manage the ads. We manage <b style={{color: '#fff'}}>everything that affects conversion</b> — from the first impression to the sale. That means auditing your landing pages, fixing your tracking, improving your offer and optimising the entire path to purchase.
              </p>
              <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>
                Because a <b style={{color: '#fff'}}>great ad going to a bad landing page</b> wastes every rupee. We fix the whole system.
              </p>
            </div>
            
            {/* Timeline UI for Funnel Stages */}
            <div className="funnel-stages reveal" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              position: 'relative'
            }}>
              {/* Vertical connecting line */}
              <div style={{ position: 'absolute', left: '15px', top: '24px', bottom: '24px', width: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }}></div>

              {[
                { name: "AWARENESS", title: "Top of Funnel", desc: "Cold audience campaigns — reach, video views, brand search campaigns and prospecting to fill the funnel with qualified traffic.", pct: "100%" },
                { name: "INTEREST", title: "Middle of Funnel", desc: "Engagement campaigns, lead magnets and retargeting to audiences who interacted with top-of-funnel content.", pct: "72%" },
                { name: "DECISION", title: "Bottom of Funnel", desc: "Conversion campaigns targeting warm audiences with offers, testimonials and urgency — optimised for lowest CPA.", pct: "44%" },
                { name: "PURCHASE", title: "Conversion & Retention", desc: "Post-purchase campaigns — upsell sequences, loyalty ads and win-back campaigns to maximise lifetime value.", pct: "24%" }
              ].map((stage, idx) => (
                <div className="funnel-stage" key={idx} style={{ 
                  display: 'flex', 
                  gap: '1.5rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {/* Timeline Dot Node */}
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    background: '#050505', 
                    border: '2px solid rgba(255,255,255,0.3)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '8px'
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }}></div>
                  </div>
                  
                  {/* Stage Card */}
                  <div style={{ 
                    flex: 1, 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.08)', 
                    borderRadius: '12px', 
                    padding: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      {/* Pill Badge */}
                      <span style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '600', 
                        letterSpacing: '0.05em', 
                        background: 'rgba(255,255,255,0.1)', 
                        color: '#fff', 
                        padding: '6px 12px', 
                        borderRadius: '20px' 
                      }}>
                        {stage.name}
                      </span>
                      {/* Clean Percentage Output */}
                      <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff' }}>{stage.pct}</span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '600', color: '#fff', margin: '0 0 0.5rem 0' }}>{stage.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', margin: 0 }}>{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Dashboard Metrics View */}
          <div className="funnel-visual reveal" style={{ 
            transitionDelay: '0.2s', 
            background: '#0a0a0a', /* Very dark premium background */
            border: '1px solid rgba(255,255,255,0.1)', 
            padding: '3rem 2.5rem', 
            borderRadius: '16px',
            position: 'sticky',
            top: '120px' /* Stays on screen while scrolling the left column */
          }}>
            <div className="fv-title" style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#fff', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              Live Campaign Metrics
            </div>
            <div className="fv-rows" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { name: "Click-Through Rate", val: "6.2% (avg 2.1%)", width: "88%" },
                { name: "Landing Page CVR", val: "14.8%", width: "74%" },
                { name: "Return on Ad Spend", val: "4.8× ROAS", width: "96%" },
                { name: "Cost Per Acquisition", val: "₹18 (target ₹25)", width: "82%" },
                { name: "Ad Relevance Score", val: "9.2 / 10", width: "92%" },
                { name: "Retargeting CVR", val: "22.4%", width: "78%" }
              ].map((m, idx) => (
                <div className="fv-row" key={idx}>
                  <div className="fv-row-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.75rem' }}>
                    <span className="fv-row-name" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>{m.name}</span>
                    <span className="fv-row-val" style={{ fontSize: '1rem', fontWeight: '600', color: '#fff' }}>{m.val}</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="fv-bar" style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
                    {/* Progress Fill */}
                    <div className="fv-fill" data-width={m.width} style={{ width: '0%', height: '100%', background: '#fff', borderRadius: '6px', transition: 'width 1.5s cubic-bezier(0.1, 0.7, 0.1, 1)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE */}
      <section className="creative-section">
        <div className="s-label reveal"><span className="s-label-line"></span>06 — Creative Production</div>
        <div className="s-title reveal">Ad Creative That<br/>Actually Converts</div>
        <div className="creative-grid">
          {[
            { icon: <Layout size={32} />, name: "Static Ad Design", desc: "High-impact static images built around proven direct-response principles — clear offer, strong headline, social proof and one unmissable CTA. Multiple size formats for every placement." },
            { icon: <Film size={32} />, name: "Video Ad Production", desc: "Hook-driven video ads scripted and edited for maximum watch time and conversion — UGC-style, testimonial formats, product demos and animated explainers in 15s, 30s and 60s cuts." },
            { icon: <Layers size={32} />, name: "Carousel & Collection Ads", desc: "Multi-panel carousel ads that tell a story across frames — product range showcases, feature walkthroughs and before/after sequences that engage and drive swipe-through to purchase." },
            { icon: <FileText size={32} />, name: "Ad Copywriting", desc: "Direct-response copy tested across 3–5 angles per campaign — pain-point, desire-based, social proof and urgency frameworks. Every word earns its place or gets cut in the next test." },
            { icon: <Home size={32} />, name: "Landing Page CRO", desc: "We audit and optimise the landing pages your ads send traffic to — message match, load speed, form friction, CTA placement and trust signals — because the best ad fails on a bad page." },
            { icon: <Zap size={32} />, name: "A/B & Multivariate Testing", desc: "Disciplined creative testing framework — one variable tested at a time with statistical significance thresholds. Winners scaled, losers killed fast. Continuous improvement, every cycle." }
          ].map((cr, idx) => (
            <div className="cr-card reveal" key={idx} style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}>
              <span className="cr-icon">{cr.icon}</span>
              <div className="cr-name">{cr.name}</div>
              <div className="cr-desc">{cr.desc}</div>
            </div>
          ))}
        </div>
      </section>


      {/* RESULTS / CASE STUDIES SECTION */}
      <section className="results-section" id="results" style={{ background: '#050505', padding: '100px 0' }}>
        <div className="s-label reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}><span className="s-label-line"></span>08 — Case Studies</div>
        <div className="s-title reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>Campaigns We've<br/>Run & Won</div>
        
        <div className="results-grid reveal" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem', 
          padding: '0 8vw',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Case 1: SugarStar */}
          <div className="result-case" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '16px' }}>
            <div className="rc-industry" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>E-Commerce · Loungewear</div>
            <div className="rc-name" style={{ fontSize: '2.5rem', fontFamily: 'Bebas Neue', color: '#fff', marginBottom: '0.5rem' }}>SugarStar</div>
            <div className="rc-channel" style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: '500' }}>Meta ads</div>
            <p className="rc-desc" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              Executed hyper-targeted message campaigns to drive direct inquiries. Achieved massive scale with optimized entry costs, resulting in high-intent sales conversions.
            </p>
            <div className="rc-results" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>₹9.9</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Cost Per Click</span></div>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>₹4.2L</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Total Sales</span></div>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>₹1L</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Net Profit</span></div>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>4 Months</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Duration</span></div>
            </div>
            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.85rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Spent: ₹1,300 | Invested: ₹3.27L</span>
            </div>
          </div>

          {/* Case 2: Teerex */}
          <div className="result-case" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '16px' }}>
            <div className="rc-industry" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Retail · Apparel</div>
            <div className="rc-name" style={{ fontSize: '2.5rem', fontFamily: 'Bebas Neue', color: '#fff', marginBottom: '0.5rem' }}>Teerex</div>
            <div className="rc-channel" style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: '500' }}>Meta ads</div>
            <p className="rc-desc" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              Scaled lead generation for high-volume retail. By optimizing lead quality, we delivered a consistent flow of prospects and a strong return on marketing investment.
            </p>
            <div className="rc-results" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>₹220</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Cost Per Lead</span></div>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>₹11.48L</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Total Returns</span></div>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>3.02×</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>ROI</span></div>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>6 Months</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Duration</span></div>
            </div>
            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.85rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Invested: ₹3.8L</span>
            </div>
          </div>

          {/* Case 3: JP Interiors */}
          <div className="result-case" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem', borderRadius: '16px' }}>
            <div className="rc-industry" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Industrial · Interiors</div>
            <div className="rc-name" style={{ fontSize: '2.5rem', fontFamily: 'Bebas Neue', color: '#fff', marginBottom: '0.5rem' }}>JP Interiors</div>
            <div className="rc-channel" style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: '500' }}>Google Ads</div>
            <p className="rc-desc" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              Engineered high-intent search campaigns for high-ticket interior projects. Targeted specific commercial keywords to capture decision-makers at the peak of their search journey.
            </p>
            <div className="rc-results" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>₹145</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Cost Per Lead</span></div>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>₹18.5L</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Project Value</span></div>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>5.8%</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>CTR</span></div>
              <div className="rc-result-item"><p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>Ongoing</p><span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Duration</span></div>
            </div>
            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.85rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>High-Ticket Conversion Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="tools-section">
        <div className="s-label reveal"><span className="s-label-line"></span>09 — Tools We Use</div>
        <div className="s-title reveal">Our Marketing<br/>Tech Stack</div>
        <div className="tools-grid reveal" style={{ transitionDelay: '0.15s' }}>
          {[
            { icon: <Facebook size={24} />, name: "Meta Ads Manager" },
            { icon: <Search size={24} />, name: "Google Ads" },
            { icon: <Briefcase size={24} />, name: "LinkedIn Campaign Mgr" },
            { icon: <Youtube size={24} />, name: "YouTube Studio" },
            { icon: <TrendingUp size={24} />, name: "Google Analytics 4" },
            { icon: <Flame size={24} />, name: "Hotjar / Clarity" },
            { icon: <Triangle size={24} />, name: "Google Tag Manager" },
            { icon: <Zap size={24} />, name: "VWO / Optimizely" },
            { icon: <Brain size={24} />, name: "Triple Whale" },
            { icon: <Mail size={24} />, name: "Klaviyo" },
            { icon: <Palette size={24} />, name: "Canva / Figma" },
            { icon: <Bot size={24} />, name: "Claude AI" }
          ].map((tool, idx) => (
            <div className="tool-item" key={idx}>
              <span className="tool-icon" style={{ display: 'block', margin: '0 auto 0.6rem' }}>{tool.icon}</span>
              <div className="tool-name">{tool.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="why-section">
        <div className="s-label reveal"><span className="s-label-line"></span>10 — Why HYNOX</div>
        <div className="s-title reveal">Why Choose Us<br/>Over Others</div>
        <div className="why-cols reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="why-col">
            <div className="why-col-title">Generic Digital Agencies</div>
            {[
              "Set campaigns live and check in once a month",
              "Charge management fees regardless of performance",
              "Use the same creative template for every client",
              "Report on reach and impressions, not revenue",
              "No landing page or CRO support — just the ads",
              "Junior account managers spread across 40+ clients"
            ].map(item => (
              <div className="why-item" key={item}><div className="why-mark"><X size={12} /></div><p>{item}</p></div>
            ))}
          </div>
          <div className="why-col">
            <div className="why-col-title">HYNOX</div>
            {[
              "Daily campaign monitoring and optimisation — every single day",
              "Performance-first — everything measured against ROAS and CPA",
              "Custom creatives built for your brand and tested every cycle",
              "Revenue, ROAS and CPA are the only metrics we care about",
              "Full-funnel ownership including landing page CRO",
              "Senior performance marketers on every account"
            ].map(item => (
              <div className="why-item" key={item}><div className="why-mark"><Check size={12} /></div><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--grey-dark)', borderTop: '1px solid var(--border)' }} id="faq">
        <div className="s-label reveal"><span className="s-label-line"></span>11 — FAQ</div>
        <div className="s-title reveal">Frequently Asked<br/>Questions</div>
        <div className="faq-list reveal" style={{ transitionDelay: '0.15s' }}>
          {[
            { q: "How is your management fee structured relative to ad spend?", a: "Our management fee is separate from your ad spend budget. We charge a flat monthly management fee based on the package you choose — your ad spend goes directly to Meta, Google or other platforms. This means we're never incentivised to inflate your ad budget unnecessarily. We want the lowest spend for the highest return." },
            { q: "How long before I see results from paid ads?", a: "Google Search campaigns can generate leads within 48–72 hours of launch. Meta campaigns typically need a 7–14 day learning phase before the algorithm optimises fully. Most clients see a clear positive ROAS trend by the end of week 3. We set realistic expectations upfront and hit them — rather than over-promising and under-delivering." },
            { q: "Do you create the ad creatives or do I need to supply them?", a: "We create all ad creatives in-house — static images, carousel ads, video scripts and ad copy. You don't need to supply anything except your brand assets (logo, brand colours, product images if applicable). All creatives go through your approval before going live." },
            { q: "What is a good ROAS to target for my business?", a: "It depends on your margins. A general rule is: if your gross margin is 50%, you need at least 2× ROAS to break even on ad spend. We work backwards from your margin and CPA goal to set the right ROAS target for your specific business — not a generic benchmark." },
            { q: "Will I have access to my ad accounts?", a: "Yes — always. Your ad accounts are yours. We work inside your existing Meta Business Manager and Google Ads accounts, or help you set them up in your name. You have full visibility and admin access at all times. If you stop working with us, you keep everything." },
            { q: "What's the minimum ad spend you recommend?", a: "For Meta Ads, we recommend a minimum of ₹30,000/month to get meaningful data for optimisation. For Google Search, ₹20,000–₹40,000/month depending on keyword competition. Below these thresholds, the platforms don't have enough conversion data to optimise effectively and results are inconsistent." }
          ].map((faq, idx) => (
            <div className={`faq-item ${openFaq === idx ? 'open' : ''}`} key={idx}>
              <div className="faq-q" onClick={() => toggleFaq(idx)}><h4>{faq.q}</h4><span className="faq-toggle"><Plus size={20} /></span></div>
              <div className="faq-a"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </section>

    </div>
    <CTAsection />
    </>
  );
}