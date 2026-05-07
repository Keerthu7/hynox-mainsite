"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, TrendingUp, CheckCircle, Instagram, Youtube, Music, Linkedin, Twitter,
  ClipboardList, Handshake, Settings, Clapperboard, User, Banknote, MessageCircle, PenTool, Brain,
  Target, Lightbulb, Sprout, Star, Crown, Video, Smartphone, Mic, Sparkles, Megaphone, BarChart, Heart
} from 'lucide-react';
import CTAsection from '@/components/home/CTAsection';
import './styles.css';

export default function SocialMediaPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const thumb = thumbRef.current;
    if (!grid || !thumb) return;

    const handleScroll = () => {
      const scrollLeft = grid.scrollLeft;
      const scrollWidth = grid.scrollWidth - grid.clientWidth;
      if (scrollWidth <= 0) return;
      const percentage = scrollLeft / scrollWidth;
      // track width is 180px, thumb width is 35% (63px)
      const trackWidth = 180;
      const thumbWidth = trackWidth * 0.35;
      const moveRange = trackWidth - thumbWidth;
      thumb.style.transform = `translateX(${percentage * moveRange}px)`;
    };

    grid.addEventListener('scroll', handleScroll);
    // Initialize position
    handleScroll();

    return () => grid.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll reveal
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
      <div className="social-media-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-content" style={{ marginTop: '4rem', marginLeft: '5rem' }}>
          <div className="hero-badge">
            <div className="badge-dot"></div>
            <div className="badge-line"></div>
            Social Media Marketing — HYNOX
          </div>

          <h1 className="hero-title" style={{ fontSize: '5.5rem', lineHeight: '1.1' }}>
            Social That<br/>
            <em>Drives</em> Profit<br/>
            Not Just Likes
          </h1>

          <div className="hero-meta">
            <p className="hero-desc" style={{ fontSize: '1rem', maxWidth: '90%' }}>
              HYNOX manages, grows and monetises your social media presence — from daily content and influencer campaigns to video production and personal brand building. We make your brand impossible to ignore.
            </p>
            
            <div className="hero-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', alignItems: 'flex-start' }}>
              <a href="/#work" className="btn-p" style={{ fontSize: '1.05rem', padding: '12px 28px', whiteSpace: 'nowrap', display: 'inline-block', textAlign: 'center' }}>See Our Works</a>
              <a href="/contact" className="btn-g" style={{ fontSize: '1.05rem', padding: '12px 28px', whiteSpace: 'nowrap', display: 'inline-block', textAlign: 'center' }}>Free Audit</a>
            </div>
          </div>
        </div>

        <div className="hero-visual" style={{ marginTop: '3rem' }}>
          <div className="hero-feed" aria-hidden="true" style={{ transform: 'scale(1.15) translateX(-9rem)', transformOrigin: 'center' }}>
            <div className="feed-post live">
              <span className="live-badge">Live</span>
              <div className="feed-header">
                <div className="feed-avatar">H</div>
                <div className="feed-name">@hynox</div>
                <div className="feed-time">now</div>
              </div>
              <div className="feed-text">Just dropped our latest <b>AI marketing campaign</b> — results are insane <Flame size={16} className="inline-block text-orange-500" /></div>
              <div className="feed-stats">
                <div className="feed-stat"><b>12.4K</b> reach</div>
                <div className="feed-stat"><b>847</b> likes</div>
                <div className="feed-stat"><b>94</b> shares</div>
              </div>
              <div className="engagement-bar"><div className="engagement-fill"></div></div>
            </div>
            <div className="feed-post">
              <div className="feed-header">
                <div className="feed-avatar">B</div>
                <div className="feed-name">@brand_client</div>
                <div className="feed-time">2h</div>
              </div>
              <div className="feed-text">Monthly report: <b>+340% reach</b>, <b>+180% engagement</b>. HYNOX changed the game for us.</div>
              <div className="feed-stats">
                <div className="feed-stat"><b>5.2K</b> reach</div>
                <div className="feed-stat"><b>423</b> saves</div>
              </div>
            </div>
            <div className="feed-post">
              <div className="feed-header">
                <div className="feed-avatar">I</div>
                <div className="feed-name">@influencer_collab</div>
                <div className="feed-time">5h</div>
              </div>
              <div className="feed-text">Reel is at <b>2.1M views</b> and climbing <TrendingUp size={16} className="inline-block text-green-500" /> partnered with <b>@hynox</b></div>
              <div className="feed-stats">
                <div className="feed-stat"><b>2.1M</b> views</div>
                <div className="feed-stat"><b>98K</b> likes</div>
              </div>
            </div>
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
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Page Management</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Content Strategy</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Influencer Coordination</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Video Production</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Personal Branding</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Paid Ads</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Community Management</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Analytics & Reporting</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Brand Administration</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>HYNOX</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Page Management</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Content Strategy</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Influencer Coordination</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Video Production</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Personal Branding</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Paid Ads</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Community Management</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Analytics & Reporting</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>Brand Administration</b></div>
          <div className="ticker-item"><CheckCircle size={14} className="inline-block" /> <b>HYNOX</b></div>
        </div>
      </div>

      {/* INTRO */}
      <section>
        <div className="s-label reveal"><span className="s-label-line"></span>01 — About This Service</div>
        <div className="s-title reveal">Social Media That<br/>Builds Empires</div>
        <div className="intro-grid">
          <div className="intro-text reveal">
            <p>Posting randomly and hoping for growth is not a strategy. At HYNOX, we build <b>data-driven social media systems</b> that grow audiences, drive engagement and convert followers into paying customers — consistently, month after month.</p>
            <p>We don't just manage pages. We develop your <b>entire social media ecosystem</b> — from content calendars and influencer partnerships to full video production and personal brand architecture. Every piece of content has a purpose.</p>
            <p>Whether you're a <b>business, startup, or individual</b> looking to dominate your niche — HYNOX becomes your complete social media department, powered by AI, data and creativity.</p>
          </div>
          <div className="intro-stats reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="is-item"><span className="is-num">10×</span><span className="is-label">Avg. Reach Growth in 90 Days</span></div>
            <div className="is-item"><span className="is-num">50+</span><span className="is-label">Posts Managed Monthly</span></div>
            <div className="is-item"><span className="is-num">200+</span><span className="is-label">Influencer Network</span></div>
            <div className="is-item"><span className="is-num">AI</span><span className="is-label">Powered Strategy & Scheduling</span></div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="platform-section">
        <div className="s-label reveal"><span className="s-label-line"></span>02 — Platforms</div>
        <div className="s-title reveal">Every Platform.<br/>One Team.</div>
        <div className="platform-grid reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="plat-card">
            <span className="plat-icon"><Instagram size={32} style={{ margin: '0 auto' }} /></span>
            <div className="plat-name">Instagram</div>
            <div className="plat-followers">Reels · Stories · Feed · Collab</div>
          </div>
          <div className="plat-card">
            <span className="plat-icon"><Youtube size={32} style={{ margin: '0 auto' }} /></span>
            <div className="plat-name">YouTube</div>
            <div className="plat-followers">Shorts · Long-form · SEO</div>
          </div>

          <div className="plat-card">
            <span className="plat-icon"><Linkedin size={32} style={{ margin: '0 auto' }} /></span>
            <div className="plat-name">LinkedIn</div>
            <div className="plat-followers">Thought Leadership · B2B</div>
          </div>
          <div className="plat-card">
            <span className="plat-icon"><Twitter size={32} style={{ margin: '0 auto' }} /></span>
            <div className="plat-name">X / Twitter</div>
            <div className="plat-followers">Threads · Engagement · PR</div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION - 6 BOXES WITH VIDEO & CUSTOM SCROLLBAR */}
      <section style={{ background: 'var(--black)', overflow: 'hidden', padding: '80px 8vw' }} id="portfolio">
        <style>{`
          .portfolio-grid { 
            display: flex; 
            gap: 1.2rem; 
            margin-top: 4rem; 
            overflow-x: auto; 
            padding: 0 0 2rem;
            scrollbar-width: none; /* Hide default scrollbar */
            scroll-snap-type: x mandatory;
            position: relative;
          }
          .portfolio-grid::-webkit-scrollbar { display: none; }
          
          .port-item { 
            /* 5 boxes visible aaga width calculation: (100% - total gap) / 5 */
            flex: 0 0 calc((84vw - (1.2rem * 4)) / 5); 
            aspect-ratio: 9/16; 
            position: relative; 
            overflow: hidden; 
            display: flex; 
            flex-direction: column; 
            justify-content: flex-end; 
            padding: 1.5rem; 
            background-color: #000; 
            border-radius: 20px;
            scroll-snap-align: start;
            border: 1px solid rgba(255,255,255,0.1);
          }

          .port-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }

          .port-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%);
            z-index: 1;
            pointer-events: none; /* Video mela click aagama irukka */
          }

          .port-content { position: relative; z-index: 2; pointer-events: none; }
          .port-tag { font-family: 'Space Mono', monospace; font-size: 0.6rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 0.5rem; background: rgba(0,0,0,0.7); padding: 4px 10px; border-radius: 4px; display: inline-block; color: #fff; }
          .port-name { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; color: var(--white); text-shadow: 0 2px 10px rgba(0,0,0,1); }
          
          /* Gray Scroll Indicator */
          .scroll-bar-wrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            padding-bottom: 4rem;
          }
          .scroll-track {
            width: 180px;
            height: 6px;
            background: #1a1a1a; 
            position: relative;
            border-radius: 10px;
            overflow: hidden;
          }
          .scroll-thumb {
            position: absolute;
            width: 35%;
            height: 100%;
            background: #4a4a4a; 
            border-radius: 10px;
            transition: transform 0.1s ease-out; /* Smooth movement */
          }

          @media (max-width: 1024px) {
            .port-item { flex: 0 0 250px; } 
          }
        `}</style>
        
        <div className="s-label reveal"><span className="s-label-line"></span>03 — Portfolio</div>
        <div className="s-title reveal">Recent Works</div>
        
        <div className="portfolio-grid reveal" ref={gridRef} style={{ transitionDelay: '0.2s' }}>
          
          {/* Box 1 */}
          <div className="port-item">
            {/* NOTE: path-la /public nu poda koodathu. Verum /1.mp4 thaan podanum */}
            <video className="port-video" autoPlay loop muted playsInline>
              <source src="/1.mp4" type="video/mp4" />
            </video>
            
          </div>

          {/* Box 2 */}
          <div className="port-item">
            <video className="port-video" autoPlay loop muted playsInline>
              <source src="/2.mp4" type="video/mp4" />
            </video>
           
          </div>

          {/* Box 3 */}
          <div className="port-item">
            <video className="port-video" autoPlay loop muted playsInline>
              <source src="/3.mp4" type="video/mp4" />
            </video>
            
          </div>

          {/* Box 4 */}
          <div className="port-item">
            {/* Oru vellai videos folder-kulla iruntha ippadi podanum: /videos/client4.mp4 */}
            <video className="port-video" autoPlay loop muted playsInline>
              <source src="/4.mp4" type="video/mp4" />
            </video>
           
          </div>

          {/* Box 5 */}
          <div className="port-item">
            <video className="port-video" autoPlay loop muted playsInline>
              <source src="/5.mp4" type="video/mp4" />
            </video>
           
          </div>

          {/* Box 6 - CTA (Hidden until scroll) */}
          <div className="port-item" style={{ background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', border: '1px dashed rgba(255,255,255,0.2)' }}>
            <div className="port-content">
              <div style={{ fontFamily: "'Bebas Neue'", fontSize: '2rem', lineHeight: '1.1', color: '#fff' }}>Your Brand<br/>Next?</div>
              <a href="/contact" style={{ fontFamily: "'Space Mono'", fontSize: '0.6rem', background: '#fff', color: '#000', padding: '10px 18px', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', marginTop: '1rem', fontWeight: 'bold' }}>Start Now →</a>
            </div>
          </div>

        </div>

        {/* Gray Scroll Bar Indicator */}
        <div className="scroll-bar-wrap reveal">
          <div className="scroll-track">
            <div className="scroll-thumb" ref={thumbRef}></div>
          </div>
        </div>

        {/* INSIGHTS IMAGE SECTION */}
        <div className="insights-container reveal" style={{ marginTop: '5rem', textAlign: 'center' }}>
           <div className="insights-header" style={{ marginBottom: '3.5rem' }}>
              <div style={{ fontFamily: "'Space Mono'", fontSize: '0.7rem', color: 'var(--grey-light)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '0.5rem' }}>Proof of Performance</div>
              <h3 style={{ fontFamily: "'Bebas Neue'", fontSize: '3.5rem', color: '#fff', letterSpacing: '1px' }}>View Insights</h3>
           </div>
           
           <style>{`
             .insights-grid {
               display: grid;
               grid-template-columns: repeat(3, 1fr);
               gap: 2.5rem;
               align-items: start;
             }
             @media (max-width: 992px) {
               .insights-grid {
                 grid-template-columns: 1fr;
                 max-width: 450px;
                 margin: 0 auto;
                 gap: 3rem;
               }
             }
           `}</style>

           <div className="insights-grid">
              <div className="insights-image-wrap" style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255,255,255,0.15)', 
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                background: '#0a0a0a'
              }}>
                 <img src="/instagram_insights.png" alt="Reach Insights" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div className="insights-image-wrap" style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255,255,255,0.15)', 
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                background: '#0a0a0a'
              }}>
                 <img src="/instagram_insights_2.png" alt="Engagement Insights" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div className="insights-image-wrap" style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255,255,255,0.15)', 
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                background: '#0a0a0a'
              }}>
                 <img src="/instagram_insights_3.png" alt="Growth Insights" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
           </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="srv-header">
          <div>
            <div className="s-label reveal"><span className="s-label-line"></span>04 — What We Do</div>
            <div className="s-title reveal">Our Social<br/>Media Services</div>
          </div>
          <p className="reveal">A complete suite of social media services — handled by dedicated specialists who eat, sleep and breathe social media. No generalists. No juniors. No excuses.</p>
        </div>
        <div className="srv-grid">
          <div className="srv-card reveal">
            <div className="sc-num">01</div>
            <span className="sc-icon"><ClipboardList size={32} /></span>
            <div className="sc-name">Social Page Management</div>
            <div className="sc-desc">We take full ownership of your social accounts — content planning, scheduling, posting, responding to comments and DMs, daily monitoring and performance tracking.</div>
            <div className="sc-tags"><span className="sc-tag">Content Calendar</span><span className="sc-tag">Daily Posting</span><span className="sc-tag">DM Management</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="sc-num">02</div>
            <span className="sc-icon"><Handshake size={32} /></span>
            <div className="sc-name">Influencer Coordination</div>
            <div className="sc-desc">We identify, outreach, negotiate, brief and manage influencer campaigns from nano to mega — ensuring authentic reach, brand alignment and measurable ROI on every collaboration.</div>
            <div className="sc-tags"><span className="sc-tag">Sourcing</span><span className="sc-tag">Outreach</span><span className="sc-tag">Campaign Mgmt</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.16s' }}>
            <div className="sc-num">03</div>
            <span className="sc-icon"><Settings size={32} /></span>
            <div className="sc-name">Brand Administration</div>
            <div className="sc-desc">Full backend management of your brand presence — profile optimisation, bio writing, link-in-bio setup, highlight covers, cross-platform consistency and account security monitoring.</div>
            <div className="sc-tags"><span className="sc-tag">Profile Setup</span><span className="sc-tag">Brand Kit</span><span className="sc-tag">Consistency</span></div>
          </div>
          <div className="srv-card reveal">
            <div className="sc-num">04</div>
            <span className="sc-icon"><Clapperboard size={32} /></span>
            <div className="sc-name">Video Production</div>
            <div className="sc-desc">Professional video content for Reels, TikTok, YouTube Shorts and long-form — scripted, edited, captioned and optimised for each platform's algorithm and audience retention.</div>
            <div className="sc-tags"><span className="sc-tag">Reels</span><span className="sc-tag">Shorts</span><span className="sc-tag">Editing</span><span className="sc-tag">Captions</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="sc-num">05</div>
            <span className="sc-icon"><User size={32} /></span>
            <div className="sc-name">Personal Branding</div>
            <div className="sc-desc">Build your personal brand as a founder, expert or thought leader — positioning strategy, content pillars, ghostwriting, speaking opportunities and audience growth architecture.</div>
            <div className="sc-tags"><span className="sc-tag">Positioning</span><span className="sc-tag">Ghostwriting</span><span className="sc-tag">Thought Leader</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.16s' }}>
            <div className="sc-num">06</div>
            <span className="sc-icon"><Banknote size={32} /></span>
            <div className="sc-name">Paid Social Advertising</div>
            <div className="sc-desc">Meta, Instagram and LinkedIn ad campaigns — audience targeting, A/B testing, creative production, budget optimisation and conversion tracking to maximise every rupee spent.</div>
            <div className="sc-tags"><span className="sc-tag">Meta Ads</span><span className="sc-tag">Instagram Ads</span><span className="sc-tag">ROI Tracking</span></div>
          </div>
          <div className="srv-card reveal">
            <div className="sc-num">07</div>
            <span className="sc-icon"><MessageCircle size={32} /></span>
            <div className="sc-name">Community Management</div>
            <div className="sc-desc">Daily engagement — replying to comments, managing DMs, handling negative feedback, building loyal community relationships and turning followers into brand advocates.</div>
            <div className="sc-tags"><span className="sc-tag">Engagement</span><span className="sc-tag">DM Funnels</span><span className="sc-tag">Reputation</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.08s' }}>
            <div className="sc-num">08</div>
            <span className="sc-icon"><PenTool size={32} /></span>
            <div className="sc-name">Content Creation & Design</div>
            <div className="sc-desc">Scroll-stopping static posts, carousels, infographics and story templates designed to your brand guidelines — consistent, beautiful and ready to post every single day.</div>
            <div className="sc-tags"><span className="sc-tag">Carousels</span><span className="sc-tag">Infographics</span><span className="sc-tag">Stories</span></div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: '0.16s' }}>
            <div className="sc-num">09</div>
            <span className="sc-icon"><Brain size={32} /></span>
            <div className="sc-name">AI-Powered Content Strategy</div>
            <div className="sc-desc">AI tools that analyse your audience, competitor gaps and trending topics to generate content ideas, optimal posting schedules and hashtag strategies — updated weekly.</div>
            <div className="sc-tags"><span className="sc-tag">Trend Analysis</span><span className="sc-tag">AI Scheduling</span><span className="sc-tag">Hashtags</span></div>
          </div>
        </div>
      </section>

      {/* CONTENT PILLARS */}
      <section className="pillars-section">
        <div className="s-label reveal"><span className="s-label-line"></span>05 — Content Framework</div>
        <div className="s-title reveal">The 4 Content<br/>Pillars We Build</div>
        <div className="pillars-grid reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="pillar-item">
            <div className="pillar-num">1</div>
            <span className="pillar-icon"><Target size={32} /></span>
            <div className="pillar-title">Educate</div>
            <div className="pillar-desc">Tips, tutorials, how-tos and industry insights that position your brand as the go-to authority in your niche. Builds trust and saves.</div>
          </div>
          <div className="pillar-item">
            <div className="pillar-num">2</div>
            <span className="pillar-icon"><Flame size={32} /></span>
            <div className="pillar-title">Entertain</div>
            <div className="pillar-desc">Trending formats, relatable content, memes and storytelling that make people stop scrolling and actually watch. Drives shares and reach.</div>
          </div>
          <div className="pillar-item">
            <div className="pillar-num">3</div>
            <span className="pillar-icon"><Lightbulb size={32} /></span>
            <div className="pillar-title">Inspire</div>
            <div className="pillar-desc">Behind-the-scenes, success stories, transformation posts and motivational content that creates emotional connection with your audience.</div>
          </div>
          <div className="pillar-item">
            <div className="pillar-num">4</div>
            <span className="pillar-icon"><Banknote size={32} /></span>
            <div className="pillar-title">Convert</div>
            <div className="pillar-desc">Offers, testimonials, product showcases and clear CTAs that turn engaged followers into paying customers — without being salesy.</div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--grey-dark)' }} id="process">
        <div className="s-label reveal"><span className="s-label-line"></span>06 — How We Work</div>
        <div className="s-title reveal">Our Monthly<br/>Process</div>
        <div className="process-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="proc-row">
            <div className="proc-num-box">01</div>
            <div className="proc-content">
              <h3>Brand & Audience Audit</h3>
              <p>We audit your current presence, competitor landscape, audience demographics and content performance to identify gaps, opportunities and your unique positioning.</p>
              <div className="proc-tools"><span className="proc-tool">Audience Analysis</span><span className="proc-tool">Competitor Audit</span><span className="proc-tool">Brand Positioning</span></div>
            </div>
            <div className="proc-badge">Week 1</div>
          </div>
          <div className="proc-row">
            <div className="proc-num-box">02</div>
            <div className="proc-content">
              <h3>Strategy & Content Calendar</h3>
              <p>30-day content calendar built around your business goals, trending topics, content pillars and platform algorithms — approved by you before anything goes live.</p>
              <div className="proc-tools"><span className="proc-tool">Content Plan</span><span className="proc-tool">Hashtag Research</span><span className="proc-tool">Posting Schedule</span></div>
            </div>
            <div className="proc-badge">Week 1–2</div>
          </div>
          <div className="proc-row">
            <div className="proc-num-box">03</div>
            <div className="proc-content">
              <h3>Content Production</h3>
              <p>Our team produces all graphics, captions, videos and stories — batch-produced in advance so there's never a gap in posting. Every piece reviewed and approved before scheduling.</p>
              <div className="proc-tools"><span className="proc-tool">Design</span><span className="proc-tool">Copywriting</span><span className="proc-tool">Video Editing</span><span className="proc-tool">QA Review</span></div>
            </div>
            <div className="proc-badge">Ongoing</div>
          </div>
          <div className="proc-row">
            <div className="proc-num-box">04</div>
            <div className="proc-content">
              <h3>Publishing & Community</h3>
              <p>We publish at optimal times, engage with comments and DMs, respond to mentions, manage collaborations and keep your community warm and growing daily.</p>
              <div className="proc-tools"><span className="proc-tool">Scheduling</span><span className="proc-tool">Engagement</span><span className="proc-tool">DM Handling</span></div>
            </div>
            <div className="proc-badge">Daily</div>
          </div>
          <div className="proc-row">
            <div className="proc-num-box">05</div>
            <div className="proc-content">
              <h3>Influencer Outreach & Management</h3>
              <p>Identify relevant influencers, handle all outreach and negotiation, send briefs, review content, manage deliverables and track campaign performance end to end.</p>
              <div className="proc-tools"><span className="proc-tool">Sourcing</span><span className="proc-tool">Negotiation</span><span className="proc-tool">Brief</span><span className="proc-tool">Tracking</span></div>
            </div>
            <div className="proc-badge">Monthly</div>
          </div>
          <div className="proc-row">
            <div className="proc-num-box">06</div>
            <div className="proc-content">
              <h3>Monthly Report & Strategy Review</h3>
              <p>Detailed performance report covering reach, impressions, follower growth, engagement rate, top content and next month's optimised strategy — presented in a 30-minute call.</p>
              <div className="proc-tools"><span className="proc-tool">Analytics Report</span><span className="proc-tool">Growth Review</span><span className="proc-tool">Strategy Update</span></div>
            </div>
            <div className="proc-badge">Monthly</div>
          </div>
        </div>
      </section>

      {/* INFLUENCER SECTION */}
      <section className="influencer-section" id="influencer">
        <div className="s-label reveal"><span className="s-label-line"></span>07 — Influencer Marketing</div>
        <div className="s-title reveal">Influencer Network<br/>That Converts</div>
        <div className="inf-grid">
          <div>
            <div className="inf-text reveal">
              <h3>200+ Vetted Influencers Across Every Niche</h3>
              <p>We don't just find influencers — we manage the entire relationship from first contact to final report. Our network spans fashion, tech, food, fitness, finance, beauty and more — across Instagram, YouTube and TikTok.</p>
              <p>Every influencer is vetted for <b>authentic engagement, audience quality and brand safety</b> before we ever recommend them to a client.</p>
            </div>
            <div className="inf-tiers reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="inf-tier">
                <div className="inf-tier-icon"><Sprout size={24} /></div>
                <div>
                  <div className="inf-tier-name">Nano Influencers</div>
                  <div className="inf-tier-range">1K – 10K followers · Hyper-targeted</div>
                </div>
                <div className="inf-tier-badge">High Trust</div>
              </div>
              <div className="inf-tier">
                <div className="inf-tier-icon"><TrendingUp size={24} /></div>
                <div>
                  <div className="inf-tier-name">Micro Influencers</div>
                  <div className="inf-tier-range">10K – 100K followers · Niche authority</div>
                </div>
                <div className="inf-tier-badge">Best ROI</div>
              </div>
              <div className="inf-tier">
                <div className="inf-tier-icon"><Star size={24} /></div>
                <div>
                  <div className="inf-tier-name">Macro Influencers</div>
                  <div className="inf-tier-range">100K – 1M followers · Mass reach</div>
                </div>
                <div className="inf-tier-badge">Mass Reach</div>
              </div>
              <div className="inf-tier">
                <div className="inf-tier-icon"><Crown size={24} /></div>
                <div>
                  <div className="inf-tier-name">Celebrity / Mega</div>
                  <div className="inf-tier-range">1M+ followers · National awareness</div>
                </div>
                <div className="inf-tier-badge">Maximum</div>
              </div>
            </div>
          </div>
          <div className="inf-visual reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="inf-visual-title">Campaign Performance</div>
            <div className="inf-metrics">
              <div className="inf-metric"><span className="inf-metric-label">Avg. Campaign Reach</span><span className="inf-metric-val">2.4M</span></div>
              <div className="inf-metric"><span className="inf-metric-label">Avg. Engagement Rate</span><span className="inf-metric-val">8.4%</span></div>
              <div className="inf-metric"><span className="inf-metric-label">Influencers in Network</span><span className="inf-metric-val">200+</span></div>
              <div className="inf-metric"><span className="inf-metric-label">Niches Covered</span><span className="inf-metric-val">24+</span></div>
              <div className="inf-metric"><span className="inf-metric-label">Avg. Cost Per Reach</span><span className="inf-metric-val">₹0.08</span></div>
              <div className="inf-metric"><span className="inf-metric-label">Campaign Success Rate</span><span className="inf-metric-val">97%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO PRODUCTION */}
      <section className="video-section" id="video">
        <div className="s-label reveal"><span className="s-label-line"></span>08 — Video Production</div>
        <div className="s-title reveal">Video Content That<br/>Stops the Scroll</div>
        <div className="video-grid">
          <div className="video-card reveal">
            <span className="vc-icon"><Clapperboard size={32} /></span>
            <div className="vc-name">Reels & Shorts</div>
            <div className="vc-desc">Vertical short-form videos scripted for hooks, edited with trending audio and paced for maximum watch time and algorithm push on Instagram and YouTube.</div>
            <div className="vc-duration">15s – 90s · Platform optimised</div>
          </div>
          <div className="video-card reveal" style={{ transitionDelay: '0.08s' }}>
            <span className="vc-icon"><Video size={32} /></span>
            <div className="vc-name">Long-Form YouTube</div>
            <div className="vc-desc">Fully scripted, professionally edited YouTube videos with custom thumbnails, SEO-optimised titles, descriptions and chapters to drive search discovery and watch time.</div>
            <div className="vc-duration">5min – 30min · SEO optimised</div>
          </div>
          <div className="video-card reveal" style={{ transitionDelay: '0.16s' }}>
            <span className="vc-icon"><Smartphone size={32} /></span>
            <div className="vc-name">Product Showcase Videos</div>
            <div className="vc-desc">Clean, compelling product demonstration videos that highlight features, benefits and social proof — designed to drive direct purchase decisions from social feeds and ads.</div>
            <div className="vc-duration">30s – 3min · Conversion focused</div>
          </div>
          <div className="video-card reveal">
            <span className="vc-icon"><Mic size={32} /></span>
            <div className="vc-name">Talking Head & Podcast</div>
            <div className="vc-desc">Personal brand videos, interviews, founder stories and podcast clips — edited with captions, b-roll and graphics to turn long-form conversations into scroll-stopping social content.</div>
            <div className="vc-duration">Any length · Multi-platform cut</div>
          </div>
          <div className="video-card reveal" style={{ transitionDelay: '0.08s' }}>
            <span className="vc-icon"><Sparkles size={32} /></span>
            <div className="vc-name">Motion Graphics & Animation</div>
            <div className="vc-desc">Animated explainers, data visualisations, logo animations and branded motion content — polished, professional and impossible to scroll past.</div>
            <div className="vc-duration">15s – 3min · Brand animated</div>
          </div>
          <div className="video-card reveal" style={{ transitionDelay: '0.16s' }}>
            <span className="vc-icon"><Megaphone size={32} /></span>
            <div className="vc-name">Ad Creative Production</div>
            <div className="vc-desc">High-converting paid ad videos for Meta, Instagram and YouTube — with multiple hook variations, format ratios and strong direct-response creative built for ROAS.</div>
            <div className="vc-duration">7s – 60s · ROAS optimised</div>
          </div>
        </div>
      </section>

      {/* PERSONAL BRANDING */}
      <section className="brand-section">
        <div className="s-label reveal"><span className="s-label-line"></span>09 — Personal Branding</div>
        <div className="s-title reveal">Build a Brand<br/>Around You</div>
        <div className="brand-grid">
          <div className="brand-left reveal">
            <p>In today's world, <b>your personal brand is your most valuable business asset.</b> Whether you're a founder, consultant, coach, executive or creator — people buy from people they trust. We build that trust systematically.</p>
            <p>HYNOX's personal branding service positions you as the <b>undeniable authority in your niche</b> — with a clear message, consistent content and a growing audience that comes to you.</p>
            <div className="brand-checklist">
              <div className="brand-check"><div className="brand-check-mark">✓</div><p><b>Brand Positioning</b> — Define your niche, message and unique point of view</p></div>
              <div className="brand-check"><div className="brand-check-mark">✓</div><p><b>Profile Architecture</b> — Optimised bio, links, highlights and visual identity</p></div>
              <div className="brand-check"><div className="brand-check-mark">✓</div><p><b>Content Ghostwriting</b> — LinkedIn posts, threads and captions written in your voice</p></div>
              <div className="brand-check"><div className="brand-check-mark">✓</div><p><b>Thought Leadership</b> — Industry opinions, hot takes and original insights that get shared</p></div>
              <div className="brand-check"><div className="brand-check-mark">✓</div><p><b>Speaking & PR</b> — Podcast outreach, media features and speaking opportunities</p></div>
              <div className="brand-check"><div className="brand-check-mark">✓</div><p><b>Audience Monetisation</b> — Convert followers into leads, clients and revenue</p></div>
            </div>
          </div>
          <div className="brand-right reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="brand-item">
              <div className="brand-item-num">01</div>
              <div className="brand-item-name">Founder Brand</div>
              <div className="brand-item-desc">For startup founders and entrepreneurs building authority alongside their company — investors, clients and talent follow people, not just companies.</div>
            </div>
            <div className="brand-item">
              <div className="brand-item-num">02</div>
              <div className="brand-item-name">Expert / Coach Brand</div>
              <div className="brand-item-desc">For consultants, coaches and specialists monetising their knowledge — content that attracts inbound clients and positions you as the #1 choice in your field.</div>
            </div>
            <div className="brand-item">
              <div className="brand-item-num">03</div>
              <div className="brand-item-name">Creator Brand</div>
              <div className="brand-item-desc">For content creators going full-time — monetisation strategy, brand deal positioning, audience diversification and platform growth systems.</div>
            </div>
            <div className="brand-item">
              <div className="brand-item-num">04</div>
              <div className="brand-item-name">Executive Brand</div>
              <div className="brand-item-desc">For senior leaders and C-suite executives building visibility — thought leadership, media presence and LinkedIn authority that opens doors.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section className="analytics-section">
        <div className="analytics-intro">
          <div>
            <div className="s-label reveal"><span className="s-label-line"></span>10 — Analytics & Reporting</div>
            <div className="s-title reveal">Data-Driven.<br/>Always.</div>
          </div>
          <p className="reveal">Every decision we make is backed by data. We track, measure and optimise everything — so you always know exactly what's working, what's growing and where your ROI is coming from.</p>
        </div>
        <div className="analytics-grid reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="analytics-card">
            <span className="analytics-icon"><BarChart size={32} /></span>
            <div className="analytics-name">Reach & Impressions</div>
            <div className="analytics-desc">Track total accounts reached, impressions per post, story views and how your content distributes across platforms each week.</div>
          </div>
          <div className="analytics-card">
            <span className="analytics-icon"><Heart size={32} /></span>
            <div className="analytics-name">Engagement Analytics</div>
            <div className="analytics-desc">Likes, comments, saves, shares, profile visits and link clicks — broken down by content type, format and posting time to identify your top performers.</div>
          </div>
          <div className="analytics-card">
            <span className="analytics-icon"><TrendingUp size={32} /></span>
            <div className="analytics-name">Follower Growth</div>
            <div className="analytics-desc">Net follower growth, new vs lost followers, audience demographics and follower quality score — updated monthly with trajectory forecasting.</div>
          </div>
          <div className="analytics-card">
            <span className="analytics-icon"><Banknote size={32} /></span>
            <div className="analytics-name">Ad & Influencer ROI</div>
            <div className="analytics-desc">Cost per reach, cost per engagement, ROAS on paid campaigns and influencer campaign ROI — full financial accountability on every spend.</div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="results-section" style={{ background: 'var(--grey-dark)', borderTop: '1px solid var(--border)' }}>
        <div className="s-label reveal"><span className="s-label-line"></span>11 — Results We Deliver</div>
        <div className="s-title reveal">Real Numbers.<br/>Real Growth.</div>
        <div className="results-grid reveal" style={{ transitionDelay: '0.15s', marginTop: '4rem' }}>
          <div className="result-item">
            <span className="result-num">340%</span>
            <span className="result-label">Avg. Reach Increase</span>
            <span className="result-sub">Within first 90 days</span>
          </div>
          <div className="result-item">
            <span className="result-num">8.4%</span>
            <span className="result-label">Avg. Engagement Rate</span>
            <span className="result-sub">Industry avg is 1.5%</span>
          </div>
          <div className="result-item">
            <span className="result-num">2.1M</span>
            <span className="result-label">Reel Views (Single Campaign)</span>
            <span className="result-sub">Influencer collab</span>
          </div>
          <div className="result-item">
            <span className="result-num">97%</span>
            <span className="result-label">Client Retention Rate</span>
            <span className="result-sub">Month-over-month</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="s-label reveal"><span className="s-label-line"></span>12 — FAQ</div>
        <div className="s-title reveal">Frequently Asked<br/>Questions</div>
        <div className="faq-list reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>How quickly will I see results from social media management?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Most clients see a significant improvement in engagement within the first 30 days. Follower growth typically accelerates from days 45–90 as algorithm trust builds. For influencer campaigns, results are visible within the campaign window. We set clear KPIs and milestone targets upfront so you always know what to expect.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Do I need to give you access to my accounts?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Yes — we need admin or manager access to your social accounts to post and manage them. All access is handled securely through official platform tools (Meta Business Suite, etc.) and you can revoke access at any time. We never ask for your personal login credentials.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Will I see and approve content before it's posted?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Absolutely. We share a content calendar with all posts, captions and visuals for your approval before scheduling. You have full visibility and final say on everything. Most clients approve in batches weekly — taking less than 15 minutes of their time.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>How do you find and vet influencers for campaigns?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>We use a combination of our existing 200+ network and advanced influencer tools to identify the best fit for your brand. Every influencer is checked for authentic engagement (not bought followers), audience demographics, past brand collaborations and content quality before we make a recommendation to you.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>Can you manage paid social ads as well as organic?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Yes — our Growth, Scale and Enterprise packages include paid social ad management. We handle everything: audience targeting, creative production, A/B testing, budget optimisation and full conversion reporting. Your ad spend budget is separate from our management fee.</p></div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}><h4>What is personal branding and do I need it?</h4><span className="faq-toggle">+</span></div>
            <div className="faq-a"><p>Personal branding is building your individual reputation and authority online — separate from or alongside your business brand. If you're a founder, consultant, coach or public-facing leader, a strong personal brand drives trust, inbound leads and opportunities that your company brand alone can't generate. We tailor it to your goals and comfort level.</p></div>
          </div>
        </div>
      </section>

      </div>
      <CTAsection />
    </>
  );
}