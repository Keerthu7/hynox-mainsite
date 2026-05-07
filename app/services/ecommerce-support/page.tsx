"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import CTAsection from "@/components/home/CTAsection";
import { 
  Shirt, 
  ShoppingBag, 
  Zap, 
  Megaphone, 
  RefreshCw, 
  Smartphone, 
  Clapperboard, 
  BarChart3, 
  CheckCircle2, 
  Settings, 
  MousePointer2, 
  ShoppingCart, 
  CreditCard, 
  RotateCw, 
  Ruler, 
  TrendingUp, 
  Camera, 
  Film, 
  Target,
  Atom,
  Facebook,
  Search,
  Mail,
  Flame,
  Brain,
  Palette,
  X,
  Check
} from "lucide-react";
import "./styles.css";

export default function EcommerceSupport() {
  useEffect(() => {
    // Reveal Logic
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    return () => {
      obs.disconnect();
    };
  }, []);

  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const item = el.parentElement;
    if (!item) return;
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  };

  return (
    <div className="ecommerce-page">
      <SiteHeader />

      {/* HERO */}
      <section className="hero" id="hero">
        {/* Store Mockup */}
        <div className="hero-store">
          <div className="store-frame">
            <div className="store-bar">
              <div className="s-dot"></div>
              <div className="s-dot"></div>
              <div className="s-dot"></div>
              <div className="store-url">yourstore.com · HYNOX</div>
            </div>
            <div className="store-body">
              <div className="store-hero-img">
                <span>YOUR BRAND</span>
              </div>
              <div className="store-content">
                <div className="store-badge">New Collection · Just Launched</div>
                <div className="store-headline" style={{ fontSize: "1.1rem" }}>Shop The Collection</div>
                <div className="store-products">
                  <div className="store-product">
                    <div className="sp-img"><Shirt size={18} /></div>
                    <div className="sp-name">Oversized Tee</div>
                    <div className="sp-price">₹899</div>
                  </div>
                  <div className="store-product">
                    <div className="sp-img"><ShoppingBag size={18} /></div>
                    <div className="sp-name">Sneakers</div>
                    <div className="sp-price">₹2,499</div>
                  </div>
                  <div className="store-product">
                    <div className="sp-img"><Zap size={18} /></div>
                    <div className="sp-name">Cap</div>
                    <div className="sp-price">₹499</div>
                  </div>
                </div>
                <div className="store-cta-btn">Shop Now — Free Shipping</div>
                <div className="store-metrics">
                  <div className="sm-item">
                    <span className="sm-val">₹4.8L</span>
                    <span className="sm-label">Revenue</span>
                  </div>
                  <div className="sm-item">
                    <span className="sm-val">4.9×</span>
                    <span className="sm-label">ROAS</span>
                  </div>
                  <div className="sm-item">
                    <span className="sm-val">98%</span>
                    <span className="sm-label">Speed</span>
                  </div>
                </div>
              </div>
              <div className="store-progress">
                <div className="sp-label">
                  <span>Monthly Revenue Target</span>
                  <span>82%</span>
                </div>
                <div className="sp-bar">
                  <div className="sp-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Wrapper to move text to the right */}
        <div className="hero-text-wrapper" style={{ paddingLeft: "4%", position: "relative", zIndex: 2 }}>
          <div className="hero-eyebrow" style={{ fontSize: "1rem", letterSpacing: "1px", marginBottom: "1rem" }}>
            <div className="he-dot"></div>
            <div className="he-line"></div>End-to-End E-Commerce — HYNOX 
          </div>
          
          <div 
            className="hero-stamp" 
            style={{ 
              fontSize: "0.85rem", 
              padding: "0.3rem 0.8rem", 
              display: "inline-block", 
              width: "max-content", 
              marginBottom: "1.5rem" 
            }}
          >
            From Idea to Revenue
          </div>
          
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1.1" }}>
            We Handle
            <br />
            <em>Everything.</em>
            <br />
            You Sell.
          </h1>
          
          <div className="hero-sub-line" style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
            Website · Ads · Content · Growth · Analytics — All Under One Roof
          </div>
          
          <div className="hero-meta" style={{ marginTop: "1.5rem" }}>
            <p className="hero-desc" style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "500px" }}>
              HYNOX is your complete e-commerce partner — we build your store,
              run your ads, create your content, manage your social media and
              track every number that matters. One team. Zero gaps. Full
              accountability.
            </p>
            <div className="hero-actions" style={{ marginTop: "2rem" }}>
              <Link href="/#work" className="btn-p" style={{ fontSize: "0.9rem", padding: "0.6rem 1.2rem", marginRight: "1rem" }}>
                See Our Works
              </Link>
              <a href="#contact" className="btn-g" style={{ fontSize: "0.9rem", padding: "0.6rem 1.2rem" }}>
                Free Strategy Call
              </a>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span style={{ fontSize: "0.8rem" }}>Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          <div className="ticker-item">◈ <b>Shopify Development</b></div>
          <div className="ticker-item">◈ <b>Store Setup & Optimisation</b></div>
          <div className="ticker-item">◈ <b>Meta & Google Ads</b></div>
          <div className="ticker-item">◈ <b>Sales Funnel Optimisation</b></div>
          <div className="ticker-item">◈ <b>Social Media Management</b></div>
          <div className="ticker-item">◈ <b>Product Shoots & UGC</b></div>
          <div className="ticker-item">◈ <b>Analytics & Growth Tracking</b></div>
          <div className="ticker-item">◈ <b>HYNOX</b></div>
          <div className="ticker-item">◈ <b>Shopify Development</b></div>
          <div className="ticker-item">◈ <b>Store Setup & Optimisation</b></div>
          <div className="ticker-item">◈ <b>Meta & Google Ads</b></div>
          <div className="ticker-item">◈ <b>Sales Funnel Optimisation</b></div>
          <div className="ticker-item">◈ <b>Social Media Management</b></div>
          <div className="ticker-item">◈ <b>Product Shoots & UGC</b></div>
          <div className="ticker-item">◈ <b>Analytics & Growth Tracking</b></div>
          <div className="ticker-item">◈ <b>HYNOX</b></div>
        </div>
      </div>

      {/* PROMISE BAND */}
      <div className="promise-band reveal">
        <div className="pb-main">
          One Team. <em>Every Layer.</em>
          <br />
          Zero Excuses.
        </div>
        <div className="pb-items">
          <div className="pb-item">
            <div className="pb-num">4.9×</div>
            <div className="pb-label">Avg. ROAS</div>
          </div>
          <div className="pb-item">
            <div className="pb-num">48h</div>
            <div className="pb-label">Store Go-Live</div>
          </div>
          <div className="pb-item">
            <div className="pb-num">100%</div>
            <div className="pb-label">Done For You</div>
          </div>
          <div className="pb-item">
            <div className="pb-num">6+</div>
            <div className="pb-label">Services Bundled</div>
          </div>
        </div>
      </div>

      {/* JOURNEY — HOW IT WORKS */}
      <section className="journey-section" id="journey">
        <div className="journey-header">
          <div>
            <div className="s-label reveal">
              <span className="s-label-line"></span>01 — The Journey
            </div>
            <div className="s-title reveal">
              From Idea
              <br />
              to Revenue
            </div>
          </div>
          <p className="reveal">
            We walk beside you from the moment your brand is just an idea — all
            the way to a scaling revenue machine. Every step is handled,
            documented and delivered. You never wonder what's happening next.
          </p>
        </div>
        <div className="journey-steps reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="j-step">
            <div className="j-num">01</div>
            <div className="j-content">
              <div className="j-phase">Phase 1 — Foundation</div>
              <div className="j-title">Brand Strategy & Store Architecture</div>
              <div className="j-desc">
                We start with your brand — positioning, naming, visual identity
                and tone of voice. Then we architect your store structure:
                collections, navigation, product hierarchy and conversion flow
                — before writing a single line of code.
              </div>
              <div className="j-tags">
                <span className="j-tag">Brand Identity</span>
                <span className="j-tag">Sitemap</span>
                <span className="j-tag">Competitor Research</span>
                <span className="j-tag">Product Strategy</span>
              </div>
            </div>
          </div>
          <div className="j-step">
            <div className="j-num">02</div>
            <div className="j-content">
              <div className="j-phase">Phase 2 — Build</div>
              <div className="j-title">Website Development (Shopify / Custom)</div>
              <div className="j-desc">
                Your store built pixel-perfect — custom theme or heavily
                customised premium theme, mobile-first, blazing fast and
                conversion-optimised from the first scroll. All payment
                gateways, apps and integrations configured and tested before
                launch.
              </div>
              <div className="j-tags">
                <span className="j-tag">Shopify</span>
                <span className="j-tag">Custom Dev</span>
                <span className="j-tag">Mobile First</span>
                <span className="j-tag">Speed Optimised</span>
                <span className="j-tag">99 PageSpeed</span>
              </div>
            </div>
          </div>
          <div className="j-step">
            <div className="j-num">03</div>
            <div className="j-content">
              <div className="j-phase">Phase 3 — Content</div>
              <div className="j-title">Product Shoots & UGC Video Creation</div>
              <div className="j-desc">
                Professional product photography and UGC-style video content
                that drives both organic engagement and paid ad performance.
                Every asset created for multiple uses — website, ads, social
                and email — so nothing is wasted.
              </div>
              <div className="j-tags">
                <span className="j-tag">Product Photography</span>
                <span className="j-tag">UGC Videos</span>
                <span className="j-tag">Reels</span>
                <span className="j-tag">Ad Creatives</span>
              </div>
            </div>
          </div>
          <div className="j-step">
            <div className="j-num">04</div>
            <div className="j-content">
              <div className="j-phase">Phase 4 — Traffic</div>
              <div className="j-title">Performance Marketing (Meta & Google Ads)</div>
              <div className="j-desc">
                Full-funnel paid campaigns across Meta and Google — prospecting,
                retargeting, Shopping ads and dynamic product ads — all
                optimised daily for ROAS and CPA targets. No wasted spend. No
                set-and-forget.
              </div>
              <div className="j-tags">
                <span className="j-tag">Meta Ads</span>
                <span className="j-tag">Google Shopping</span>
                <span className="j-tag">Retargeting</span>
                <span className="j-tag">AI Bidding</span>
                <span className="j-tag">Daily Optimisation</span>
              </div>
            </div>
          </div>
          <div className="j-step">
            <div className="j-num">05</div>
            <div className="j-content">
              <div className="j-phase">Phase 5 — Convert</div>
              <div className="j-title">Sales Funnel & Conversion Optimisation</div>
              <div className="j-desc">
                We don't just drive traffic — we convert it. Landing page CRO,
                cart abandonment flows, upsell sequences, email automation and
                A/B testing on product pages, checkout and CTAs to squeeze
                every percentage point of conversion rate.
              </div>
              <div className="j-tags">
                <span className="j-tag">CRO</span>
                <span className="j-tag">Cart Recovery</span>
                <span className="j-tag">Upsells</span>
                <span className="j-tag">Email Flows</span>
                <span className="j-tag">A/B Testing</span>
              </div>
            </div>
          </div>
          <div className="j-step">
            <div className="j-num">06</div>
            <div className="j-content">
              <div className="j-phase">Phase 6 — Grow</div>
              <div className="j-title">Social Media Marketing & Management</div>
              <div className="j-desc">
                Organic social presence managed daily — content calendar, daily
                posting, community engagement, influencer collaborations and
                reels strategy across Instagram, TikTok and YouTube to build
                brand equity that outlasts your ad spend.
              </div>
              <div className="j-tags">
                <span className="j-tag">Instagram</span>
                <span className="j-tag">TikTok</span>
                <span className="j-tag">Reels</span>
                <span className="j-tag">Influencers</span>
                <span className="j-tag">Community</span>
              </div>
            </div>
          </div>
          <div className="j-step">
            <div className="j-num">07</div>
            <div className="j-content">
              <div className="j-phase">Phase 7 — Monitor</div>
              <div className="j-title">Analytics, Tracking & Growth Monitoring</div>
              <div className="j-desc">
                Full analytics setup — GA4, Meta Pixel, server-side tracking,
                UTMs and custom dashboards showing your real-time revenue,
                ROAS, conversion rates and customer acquisition cost. Monthly
                growth reports with next-month strategy built in.
              </div>
              <div className="j-tags">
                <span className="j-tag">GA4</span>
                <span className="j-tag">Server-Side Tracking</span>
                <span className="j-tag">Custom Dashboard</span>
                <span className="j-tag">Monthly Reports</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="services-section" id="services">
        <div className="srv-header">
          <div>
            <div className="s-label reveal">
              <span className="s-label-line"></span>02 — Our Services
            </div>
            <div className="s-title reveal">
              Everything
              <br />
              Included
            </div>
          </div>
          <p className="reveal">
            Six core service pillars — each one a specialist discipline, all
            working together as one coordinated growth system for your
            e-commerce brand. No gaps. No handoffs. One team accountable for
            all of it.
          </p>
        </div>
        <div className="srv-grid">
          <div className="srv-card reveal">
            <div className="sc-num">01</div>
            <span className="sc-icon"><ShoppingBag strokeWidth={1.5} /></span>
            <div className="sc-name">Store Setup & Optimisation</div>
            <div className="sc-desc">
              Complete Shopify or custom store setup — product listings,
              collections, navigation, filters, payment gateways, shipping
              rules, discount logic and app integrations. Plus ongoing CRO to
              improve conversion rate month over month.
            </div>
            <div className="sc-tags">
              <span className="sc-tag">Shopify</span>
              <span className="sc-tag">Product Setup</span>
              <span className="sc-tag">Payment GW</span>
              <span className="sc-tag">CRO</span>
            </div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: "0.08s" }}>
            <div className="sc-num">02</div>
            <span className="sc-icon"><Megaphone strokeWidth={1.5} /></span>
            <div className="sc-name">Performance Marketing</div>
            <div className="sc-desc">
              Meta and Google ad campaigns built for revenue — shopping ads,
              dynamic product ads, prospecting, lookalikes and retargeting
              stacks managed daily with AI-powered bidding and creative
              testing every fortnight.
            </div>
            <div className="sc-tags">
              <span className="sc-tag">Meta Ads</span>
              <span className="sc-tag">Google Shopping</span>
              <span className="sc-tag">ROAS Target</span>
              <span className="sc-tag">Daily Opt.</span>
            </div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: "0.16s" }}>
            <div className="sc-num">03</div>
            <span className="sc-icon"><RefreshCw strokeWidth={1.5} /></span>
            <div className="sc-name">Sales Funnel & CRO</div>
            <div className="sc-desc">
              Full funnel from first click to repeat purchase — landing pages,
              product page CRO, cart and checkout optimisation, post-purchase
              upsells, abandoned cart flows and loyalty programme setup.
            </div>
            <div className="sc-tags">
              <span className="sc-tag">Landing Pages</span>
              <span className="sc-tag">Cart Recovery</span>
              <span className="sc-tag">Upsells</span>
              <span className="sc-tag">A/B Tests</span>
            </div>
          </div>
          <div className="srv-card reveal">
            <div className="sc-num">04</div>
            <span className="sc-icon"><Smartphone strokeWidth={1.5} /></span>
            <div className="sc-name">Social Media Marketing</div>
            <div className="sc-desc">
              Daily organic social management across Instagram, TikTok and
              YouTube — content calendar, posts, reels, stories, community
              engagement, influencer coordination and brand-building campaigns
              that grow your audience month after month.
            </div>
            <div className="sc-tags">
              <span className="sc-tag">Daily Posts</span>
              <span className="sc-tag">Reels</span>
              <span className="sc-tag">Influencers</span>
              <span className="sc-tag">Community</span>
            </div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: "0.08s" }}>
            <div className="sc-num">05</div>
            <span className="sc-icon"><Clapperboard strokeWidth={1.5} /></span>
            <div className="sc-name">Product Shoots & UGC Video</div>
            <div className="sc-desc">
              Professional product photography and UGC-style short-form videos
              — scripted, shot and edited for ads, organic and website use.
              Authentic, scroll-stopping content that builds trust and drives
              conversions better than studio shots alone.
            </div>
            <div className="sc-tags">
              <span className="sc-tag">Product Photos</span>
              <span className="sc-tag">UGC Videos</span>
              <span className="sc-tag">Reels</span>
              <span className="sc-tag">Ad Creative</span>
            </div>
          </div>
          <div className="srv-card reveal" style={{ transitionDelay: "0.16s" }}>
            <div className="sc-num">06</div>
            <span className="sc-icon"><BarChart3 strokeWidth={1.5} /></span>
            <div className="sc-name">Analytics & Growth Monitoring</div>
            <div className="sc-desc">
              Full tracking setup — GA4, Meta Pixel, server-side events,
              UTM architecture and a custom live dashboard showing revenue,
              ROAS, CAC, LTV and conversion rate at a glance. Monthly
              growth strategy reviews included.
            </div>
            <div className="sc-tags">
              <span className="sc-tag">GA4</span>
              <span className="sc-tag">Custom Dashboard</span>
              <span className="sc-tag">LTV Tracking</span>
              <span className="sc-tag">Reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* STORE TYPES */}
      <section className="store-section">
        <div className="s-label reveal">
          <span className="s-label-line"></span>03 — Website Development
        </div>
        <div className="s-title reveal">
          Pick Your
          <br />
          Store Platform
        </div>
        <div className="store-grid reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="st-card">
            <span className="st-icon"><CheckCircle2 className="text-green-500" strokeWidth={1.5} /></span>
            <div className="st-tag">Recommended for Most Brands</div>
            <div className="st-name">Shopify Store</div>
            <div className="st-sub">Fastest path to revenue · Best ecosystem</div>
            <div className="st-desc">
              Shopify is the world's most powerful e-commerce platform — and we
              build on it better than anyone. Custom themes or premium theme
              customisation, all apps wired, all settings configured, all
              integrations tested. Live in 7–14 days.
            </div>
            <div className="st-features">
              <div className="st-feat">Custom theme design (not template)</div>
              <div className="st-feat">Mobile-first, 90+ PageSpeed score</div>
              <div className="st-feat">Razorpay / Stripe / COD setup</div>
              <div className="st-feat">Inventory & order management</div>
              <div className="st-feat">Email & WhatsApp integration</div>
              <div className="st-feat">Review apps, upsell apps, loyalty apps</div>
              <div className="st-feat">Full SEO setup — meta, schema, sitemap</div>
            </div>
          </div>
          <div className="st-card">
            <span className="st-icon"><Settings strokeWidth={1.5} /></span>
            <div className="st-tag">For Advanced Requirements</div>
            <div className="st-name">Custom Store</div>
            <div className="st-sub">Unlimited control · Built from scratch</div>
            <div className="st-desc">
              When your requirements go beyond what Shopify can handle — complex
              B2B portals, multi-vendor marketplaces, subscription models,
              custom checkout flows or deep ERP integrations — we engineer it
              from the ground up.
            </div>
            <div className="st-features">
              <div className="st-feat">100% custom frontend & backend</div>
              <div className="st-feat">Next.js / React + Node.js architecture</div>
              <div className="st-feat">Multi-vendor / marketplace capability</div>
              <div className="st-feat">Custom subscription & pricing logic</div>
              <div className="st-feat">Full ERP / CRM integration</div>
              <div className="st-feat">Headless commerce architecture</div>
              <div className="st-feat">AI-powered search & recommendations</div>
            </div>
          </div>
        </div>
      </section>

      {/* SALES FUNNEL */}
      <section className="funnel-section">
        <div className="funnel-intro">
          <div>
            <div className="s-label reveal">
              <span className="s-label-line"></span>04 — Sales Funnel
            </div>
            <div className="s-title reveal">
              We Optimise
              <br />
              Every Stage
            </div>
          </div>
          <p className="reveal">
            Most e-commerce brands lose money at every stage of their funnel —
            they just don't know where. We audit, fix and continuously optimise
            the entire customer journey so every rupee of traffic converts as
            efficiently as possible.
          </p>
        </div>
        <div className="funnel-stages reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="fs-item">
            <div className="fs-arrow"></div>
            <div className="fs-step">Stage 01</div>
            <span className="fs-icon"><Megaphone strokeWidth={1.5} /></span>
            <div className="fs-name">Awareness</div>
            <div className="fs-desc">
              Meta prospecting, Google Shopping, Reels and influencer seeding
              to reach cold audiences
            </div>
          </div>
          <div className="fs-item">
            <div className="fs-arrow"></div>
            <div className="fs-step">Stage 02</div>
            <span className="fs-icon"><MousePointer2 strokeWidth={1.5} /></span>
            <div className="fs-name">Click & Land</div>
            <div className="fs-desc">
              Landing page CRO — message match, speed, trust signals and clear
              CTA to convert the click
            </div>
          </div>
          <div className="fs-item">
            <div className="fs-arrow"></div>
            <div className="fs-step">Stage 03</div>
            <span className="fs-icon"><ShoppingCart strokeWidth={1.5} /></span>
            <div className="fs-name">Add to Cart</div>
            <div className="fs-desc">
              Product page optimisation, urgency triggers, social proof, size
              guides and upsell popups
            </div>
          </div>
          <div className="fs-item">
            <div className="fs-arrow"></div>
            <div className="fs-step">Stage 04</div>
            <span className="fs-icon"><CreditCard strokeWidth={1.5} /></span>
            <div className="fs-name">Checkout</div>
            <div className="fs-desc">
              Friction-free checkout, cart recovery emails + WhatsApp, payment
              options and trust badges
            </div>
          </div>
          <div className="fs-item">
            <div className="fs-step">Stage 05</div>
            <span className="fs-icon"><RotateCw strokeWidth={1.5} /></span>
            <div className="fs-name">Retain & Repeat</div>
            <div className="fs-desc">
              Post-purchase flows, loyalty rewards, cross-sell campaigns and
              win-back sequences for LTV
            </div>
          </div>
        </div>
      </section>

      {/* ANALYTICS & TRACKING */}
      <section className="metrics-section">
        <div className="s-label reveal">
          <span className="s-label-line"></span>05 — Analytics & Tracking
        </div>
        <div className="s-title reveal">
          Track Every Rupee.
          <br />
          Know Every Number.
        </div>
        <div className="metrics-grid">
          <div className="met-card reveal">
            <span className="met-icon"><Ruler strokeWidth={1.5} /></span>
            <div className="met-name">Tracking Setup</div>
            <div className="met-desc">
              Complete technical tracking infrastructure built correctly from
              day one — no data gaps, no attribution errors, no guessing where
              your sales came from.
            </div>
            <div className="met-items">
              <div className="met-item">Google Analytics 4 (GA4) setup</div>
              <div className="met-item">Meta Pixel + Conversions API</div>
              <div className="met-item">Server-side event tracking</div>
              <div className="met-item">Google Tag Manager configuration</div>
              <div className="met-item">UTM parameter architecture</div>
              <div className="met-item">Shopify analytics integration</div>
            </div>
          </div>
          <div className="met-card reveal" style={{ transitionDelay: "0.1s" }}>
            <span className="met-icon"><BarChart3 strokeWidth={1.5} /></span>
            <div className="met-name">Custom Dashboard</div>
            <div className="met-desc">
              A single live dashboard showing every metric that matters — no
              more switching between 5 tools to understand how your store is
              performing.
            </div>
            <div className="met-items">
              <div className="met-item">Real-time revenue & orders</div>
              <div className="met-item">ROAS by channel & campaign</div>
              <div className="met-item">Cost per acquisition (CAC)</div>
              <div className="met-item">Customer lifetime value (LTV)</div>
              <div className="met-item">Conversion rate by device</div>
              <div className="met-item">Abandoned cart rate & recovery</div>
            </div>
          </div>
          <div className="met-card reveal" style={{ transitionDelay: "0.2s" }}>
            <span className="met-icon"><TrendingUp strokeWidth={1.5} /></span>
            <div className="met-name">Monthly Growth Report</div>
            <div className="met-desc">
              Detailed monthly performance review delivered in a 30-minute
              call — here's what happened, here's why, and here's the plan for
              next month.
            </div>
            <div className="met-items">
              <div className="met-item">Revenue vs. previous period</div>
              <div className="met-item">Ad spend efficiency analysis</div>
              <div className="met-item">Top performing products & pages</div>
              <div className="met-item">Funnel drop-off identification</div>
              <div className="met-item">Audience & demographic insights</div>
              <div className="met-item">Next-month growth strategy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE / PRODUCT SHOOTS */}
      <section className="creative-section">
        <div className="s-label reveal">
          <span className="s-label-line"></span>06 — Content Production
        </div>
        <div className="s-title reveal">
          Content That Sells
          <br />
          Before You Say a Word
        </div>
        <div className="cr-grid">
          <div className="cr-text reveal">
            <p>
              The single biggest lever most e-commerce brands are missing is{" "}
              <b>great content.</b> Blurry product images and stock-style shots
              kill conversion. Authentic UGC videos and professional photography
              build trust instantly — and perform better in ads than any design
              ever will.
            </p>
            <p>
              HYNOX's content team produces <b>every visual asset you need</b>{" "}
              — from clean white-background product shots to lifestyle
              photography, UGC-style testimonial videos and scroll-stopping
              Reels — all optimised for both organic and paid use.
            </p>
          </div>
          <div className="cr-types reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="cr-type">
              <span className="ct-icon"><Camera strokeWidth={1.5} /></span>
              <div className="ct-name">Product Photography</div>
              <div className="ct-desc">
                White-background, lifestyle and detail shots — every angle your
                customer needs to feel confident buying
              </div>
            </div>
            <div className="cr-type">
              <span className="ct-icon"><Clapperboard strokeWidth={1.5} /></span>
              <div className="ct-name">UGC Video Creation</div>
              <div className="ct-desc">
                Authentic user-generated style videos — unboxing, testimonials
                and in-use content that converts better than polished ads
              </div>
            </div>
            <div className="cr-type">
              <span className="ct-icon"><Film strokeWidth={1.5} /></span>
              <div className="ct-name">Reels & Short-Form</div>
              <div className="ct-desc">
                Trending-format Reels scripted and edited for Instagram, TikTok
                and YouTube Shorts — built for both organic reach and paid
                promotion
              </div>
            </div>
            <div className="cr-type">
              <span className="ct-icon"><Target strokeWidth={1.5} /></span>
              <div className="ct-name">Ad Creative Production</div>
              <div className="ct-desc">
                Static, carousel and video ad variants built for Meta and
                Google — multiple hooks and angles tested to find your winning
                creative fast
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* RESULTS */}
      <section className="results-section" id="results">
        <div className="s-label reveal">
          <span className="s-label-line"></span>08 — Case Studies
        </div>
        <div className="s-title reveal">
          Stores We've
          <br />
          Built & Scaled
        </div>
        <div className="results-grid reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="rc-item">
            <div className="rc-niche">Fashion & Apparel · D2C</div>
            <div className="rc-name">The Label Co.</div>
            <div className="rc-desc">
              Built a complete Shopify store from scratch, produced 40 product
              photos + 6 UGC videos, launched Meta campaigns and managed social
              — all within 45 days of brief. Now a self-sustaining revenue
              machine.
            </div>
            <div className="rc-nums">
              <div className="rc-num-item">
                <p>₹12L</p>
                <span>First 90 days revenue</span>
              </div>
              <div className="rc-num-item">
                <p>5.2×</p>
                <span>ROAS achieved</span>
              </div>
              <div className="rc-num-item">
                <p>28K</p>
                <span>Instagram followers gained</span>
              </div>
              <div className="rc-num-item">
                <p>45d</p>
                <span>Idea to live store</span>
              </div>
            </div>
          </div>
          <div className="rc-item">
            <div className="rc-niche">Beauty & Skincare · D2C</div>
            <div className="rc-name">Glow Studio</div>
            <div className="rc-desc">
              Migrated from a slow Wix site to a custom Shopify store, rebuilt
              the ad account from scratch, produced UGC testimonial videos and
              implemented a full abandoned cart + post-purchase email sequence.
            </div>
            <div className="rc-nums">
              <div className="rc-num-item">
                <p>+240%</p>
                <span>Revenue increase</span>
              </div>
              <div className="rc-num-item">
                <p>-44%</p>
                <span>CPA reduction</span>
              </div>
              <div className="rc-num-item">
                <p>22%</p>
                <span>Email CVR</span>
              </div>
              <div className="rc-num-item">
                <p>3mo</p>
                <span>To full scale</span>
              </div>
            </div>
          </div>
          <div className="rc-item">
            <div className="rc-niche">Home & Living · D2C</div>
            <div className="rc-name">Craft & Co.</div>
            <div className="rc-desc">
              Full end-to-end launch — brand identity, Shopify store, 60 product
              photos, social setup across Instagram and Pinterest, Google
              Shopping campaigns and a full analytics dashboard tracking every
              SKU's contribution to revenue.
            </div>
            <div className="rc-nums">
              <div className="rc-num-item">
                <p>₹8L</p>
                <span>Month 2 revenue</span>
              </div>
              <div className="rc-num-item">
                <p>4.7×</p>
                <span>Google Shopping ROAS</span>
              </div>
              <div className="rc-num-item">
                <p>3.8%</p>
                <span>Store conversion rate</span>
              </div>
              <div className="rc-num-item">
                <p>60d</p>
                <span>From brand to revenue</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-section">
        <div className="s-label reveal">
          <span className="s-label-line"></span>09 — Tools We Use
        </div>
        <div className="s-title reveal">
          Our E-Commerce
          <br />
          Tech Stack
        </div>
        <div className="tech-grid reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="tech-item">
            <span className="tech-icon"><CheckCircle2 className="text-green-500" strokeWidth={1.5} /></span>
            <div className="tech-name">Shopify Plus</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><Atom strokeWidth={1.5} /></span>
            <div className="tech-name">Next.js / React</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><Facebook className="text-blue-500" strokeWidth={1.5} /></span>
            <div className="tech-name">Meta Ads</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><Search strokeWidth={1.5} /></span>
            <div className="tech-name">Google Ads</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><BarChart3 strokeWidth={1.5} /></span>
            <div className="tech-name">Google Analytics 4</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><Mail strokeWidth={1.5} /></span>
            <div className="tech-name">Klaviyo</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><CreditCard strokeWidth={1.5} /></span>
            <div className="tech-name">Razorpay</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><Flame className="text-orange-500" strokeWidth={1.5} /></span>
            <div className="tech-name">Hotjar / Clarity</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><Ruler strokeWidth={1.5} /></span>
            <div className="tech-name">Google Tag Manager</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><Brain strokeWidth={1.5} /></span>
            <div className="tech-name">Triple Whale</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"></span>
            <div className="tech-name">Claude AI</div>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><Palette strokeWidth={1.5} /></span>
            <div className="tech-name">Figma / Canva</div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why-section">
        <div className="s-label reveal">
          <span className="s-label-line"></span>10 — Why HYNOX
        </div>
        <div className="s-title reveal">
          One Partner.
          <br />
          Total Accountability.
        </div>
        <div className="why-cols reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="why-col">
            <div className="why-col-title">Working With Multiple Vendors</div>
            <div className="why-item">
              <div className="why-mark"><X size={10} /></div>
              <p>Web agency blames the ad agency when sales are low</p>
            </div>
            <div className="why-item">
              <div className="why-mark"><X size={10} /></div>
              <p>No one owns the full funnel — gaps appear everywhere</p>
            </div>
            <div className="why-item">
              <div className="why-mark"><X size={10} /></div>
              <p>3–4 different retainers, 3–4 different reporting styles</p>
            </div>
            <div className="why-item">
              <div className="why-mark"><X size={10} /></div>
              <p>Creative team doesn't talk to the ad team — misalignment</p>
            </div>
            <div className="why-item">
              <div className="why-mark"><X size={10} /></div>
              <p>Months to get something changed across all vendors</p>
            </div>
            <div className="why-item">
              <div className="why-mark"><X size={10} /></div>
              <p>You spend half your time as the project manager</p>
            </div>
          </div>
          <div className="why-col">
            <div className="why-col-title">HYNOX</div>
            <div className="why-item">
              <div className="why-mark"><Check size={10} /></div>
              <p>
                One team owns the result — website, ads, content and analytics
                all aligned
              </p>
            </div>
            <div className="why-item">
              <div className="why-mark"><Check size={10} /></div>
              <p>
                Full-funnel ownership — we know where every drop-off happens
              </p>
            </div>
            <div className="why-item">
              <div className="why-mark"><Check size={10} /></div>
              <p>One invoice, one dashboard, one monthly strategy call</p>
            </div>
            <div className="why-item">
              <div className="why-mark"><Check size={10} /></div>
              <p>Creative team builds assets specifically for your ad campaigns</p>
            </div>
            <div className="why-item">
              <div className="why-mark"><Check size={10} /></div>
              <p>
                Changes happen in hours — not weeks across multiple vendors
              </p>
            </div>
            <div className="why-item">
              <div className="why-mark"><Check size={10} /></div>
              <p>You focus on your product — we handle everything else</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ background: "var(--grey-dark)", borderTop: "1px solid var(--border)" }}
        id="faq"
      >
        <div className="s-label reveal">
          <span className="s-label-line"></span>11 — FAQ
        </div>
        <div className="s-title reveal">
          Frequently Asked
          <br />
          Questions
        </div>
        <div className="faq-list reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              <h4>I have no store yet — can you build everything from scratch?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-a">
              <p>
                Yes — that's actually our favourite situation. We start with your
                brand brief, build your Shopify store, shoot your products, set
                up your social channels, launch your ad campaigns and configure
                your analytics — all coordinated by one team. Most brands are
                live and generating their first sales within 30–45 days of
                signing.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              <h4>I already have a store — can you just manage specific services?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-a">
              <p>
                Absolutely. While our full end-to-end packages deliver the best
                results, we can onboard you for specific services — just ads,
                just social, just CRO or just analytics setup. We audit your
                current situation first and recommend the highest-impact
                starting point for your budget.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              <h4>Shopify or custom — which should I choose for my store?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-a">
              <p>
                For 90% of e-commerce brands, Shopify is the right choice — it's
                faster to launch, has the best app ecosystem and handles scaling
                to millions in revenue without breaking. We recommend custom
                development only when you have genuinely complex requirements
                like multi-vendor marketplaces, heavily customised B2B pricing or
                deep legacy ERP integrations.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              <h4>How soon can we expect to see results from ads?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-a">
              <p>
                Google Shopping can drive sales within 48–72 hours of launch.
                Meta campaigns typically need a 7–14 day learning phase. Most
                clients hit a positive ROAS by the end of week 3. We set clear
                targets upfront — and if we're not hitting them, we tell you why
                and what we're doing about it, not just send a report and hope
                for the best.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              <h4>What does UGC creation involve — do I need to find creators?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-a">
              <p>
                No — we handle everything. We script the videos, source and brief
                the creators, manage the content review and edit the final
                assets. You just supply the product and sign off the script. Our
                UGC videos are designed specifically to perform in paid ads —
                not just look good on a creator's page.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              <h4>Is the ad spend included in the package price?</h4>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-a">
              <p>
                No — our management fee is separate from your ad spend. Ad spend
                goes directly to Meta and Google in your name. This keeps things
                transparent — you always know exactly what you're spending on
                ads versus management. We never take a percentage of ad spend,
                which means we're always incentivised to get you the best
                return, not to inflate your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAsection/>
      <SiteFooter />
    </div>
  );
}