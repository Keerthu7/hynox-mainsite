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
          {/* INGE MAATHAVUM: marginLeft add panni text-a right side move pannirukom */}
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

        {/* TICKER */}
        <div className="ticker-wrap">
          <div className="ticker-track">
            <div className="ticker-item">◈ <b>ERP Systems</b></div>
            <div className="ticker-item">◈ <b>CRM Platforms</b></div>
            <div className="ticker-item">◈ <b>SaaS Products</b></div>
            <div className="ticker-item">◈ <b>AI Automation</b></div>
            <div className="ticker-item">◈ <b>Enterprise Software</b></div>
            <div className="ticker-item">◈ <b>API Development</b></div>
            <div className="ticker-item">◈ <b>Data Pipelines</b></div>
            <div className="ticker-item">◈ <b>Cloud Architecture</b></div>
            <div className="ticker-item">◈ <b>Legacy Migration</b></div>
            <div className="ticker-item">◈ <b>HYNOX</b></div>
            <div className="ticker-item">◈ <b>ERP Systems</b></div>
            <div className="ticker-item">◈ <b>CRM Platforms</b></div>
            <div className="ticker-item">◈ <b>SaaS Products</b></div>
            <div className="ticker-item">◈ <b>AI Automation</b></div>
            <div className="ticker-item">◈ <b>Enterprise Software</b></div>
            <div className="ticker-item">◈ <b>API Development</b></div>
            <div className="ticker-item">◈ <b>Data Pipelines</b></div>
            <div className="ticker-item">◈ <b>Cloud Architecture</b></div>
            <div className="ticker-item">◈ <b>Legacy Migration</b></div>
            <div className="ticker-item">◈ <b>HYNOX</b></div>
          </div>
        </div>

        {/* INTRO */}
        <section>
          <div className="s-label reveal"><span className="s-label-line"></span>01 — About This Service</div>
          <div className="s-title reveal">Software That Fits<br/>Like a Glove</div>
          <div className="intro-grid">
            <div className="intro-text reveal">
              <p>Generic software forces your business to <b>adapt to the tool.</b> Custom software is built to adapt to you — your exact workflows, your data, your team and your growth plans.</p>
              <p>At HYNOX, we architect and engineer software from scratch — <b>clean code, scalable systems, and AI built-in</b> from day one. Whether you need an internal operations platform, a client-facing SaaS product or a complex data pipeline, we scope it precisely and build it right.</p>
              <p>Every project starts with a <b>deep discovery phase</b> — understanding not just what you want to build, but why, and what success looks like 3 years from now. That thinking shapes everything we deliver.</p>
            </div>
            <div className="intro-stats reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="is-item"><span className="is-num">100%</span><span className="is-label">Custom — Zero Templates</span></div>
              <div className="is-item"><span className="is-num">48h</span><span className="is-label">Prototype Turnaround</span></div>
              <div className="is-item"><span className="is-num">∞</span><span className="is-label">Scalable Architecture</span></div>
              <div className="is-item"><span className="is-num">AI</span><span className="is-label">Built Into Every System</span></div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="sol-section" id="solutions">
          <div className="sol-header">
            <div>
              <div className="s-label reveal"><span className="s-label-line"></span>02 — What We Build</div>
              <div className="s-title reveal">Custom Software<br/>Solutions</div>
            </div>
            <p className="reveal">From internal business tools to market-facing SaaS products — we engineer every type of custom software with the same obsessive attention to architecture, performance and user experience.</p>
          </div>
          <div className="sol-grid">
            <div className="sol-card reveal">
              <div className="sol-num">01</div>
              <span className="sol-icon"><Factory size={32} /></span>
              <div className="sol-name">ERP Systems</div>
              <div className="sol-desc">End-to-end Enterprise Resource Planning systems built around your exact operations — inventory, finance, HR, procurement, production and reporting in one unified platform.</div>
              <div className="sol-tags"><span className="sol-tag">Multi-module</span><span className="sol-tag">Role-based</span><span className="sol-tag">Real-time</span></div>
            </div>
            <div className="sol-card reveal" style={{ transitionDelay: '0.08s' }}>
              <div className="sol-num">02</div>
              <span className="sol-icon"><Users size={32} /></span>
              <div className="sol-name">CRM Platforms</div>
              <div className="sol-desc">Custom Customer Relationship Management platforms with lead tracking, pipeline management, automated follow-ups, communication logs and AI-powered deal scoring.</div>
              <div className="sol-tags"><span className="sol-tag">Pipeline</span><span className="sol-tag">Automation</span><span className="sol-tag">AI Scoring</span></div>
            </div>
            <div className="sol-card reveal" style={{ transitionDelay: '0.16s' }}>
              <div className="sol-num">03</div>
              <span className="sol-icon"><Cloud size={32} /></span>
              <div className="sol-name">SaaS Products</div>
              <div className="sol-desc">Multi-tenant SaaS platforms built to serve thousands of clients — subscription billing, onboarding flows, usage analytics, role management and API-first architecture.</div>
              <div className="sol-tags"><span className="sol-tag">Multi-tenant</span><span className="sol-tag">Stripe</span><span className="sol-tag">Scalable</span></div>
            </div>
            <div className="sol-card reveal">
              <div className="sol-num">04</div>
              <span className="sol-icon"><Bot size={32} /></span>
              <div className="sol-name">AI-Powered Software</div>
              <div className="sol-desc">Intelligent systems with decision automation, natural language processing, predictive analytics, computer vision and AI agent pipelines embedded directly into your workflows.</div>
              <div className="sol-tags"><span className="sol-tag">Claude API</span><span className="sol-tag">ML Models</span><span className="sol-tag">Agents</span></div>
            </div>
            <div className="sol-card reveal" style={{ transitionDelay: '0.08s' }}>
              <div className="sol-num">05</div>
              <span className="sol-icon"><LinkIcon size={32} /></span>
              <div className="sol-name">API & Integration Layer</div>
              <div className="sol-desc">REST and GraphQL APIs, middleware platforms and enterprise integration layers that connect your existing tools — ERP to CRM to payment to logistics — into one seamless system.</div>
              <div className="sol-tags"><span className="sol-tag">REST</span><span className="sol-tag">GraphQL</span><span className="sol-tag">Webhooks</span></div>
            </div>
            <div className="sol-card reveal" style={{ transitionDelay: '0.16s' }}>
              <div className="sol-num">06</div>
              <span className="sol-icon"><BarChart size={32} /></span>
              <div className="sol-name">Business Intelligence & Analytics</div>
              <div className="sol-desc">Custom dashboards, data warehouses, reporting engines and BI platforms — turning raw business data into real-time insights, KPI tracking and automated executive reports.</div>
              <div className="sol-tags"><span className="sol-tag">Dashboards</span><span className="sol-tag">Data Warehouse</span><span className="sol-tag">Reports</span></div>
            </div>
            <div className="sol-card reveal">
              <div className="sol-num">07</div>
              <span className="sol-icon"><Landmark size={32} /></span>
              <div className="sol-name">Legacy System Migration</div>
              <div className="sol-desc">Modernise outdated software — migrate legacy codebases to modern stacks, move on-premise systems to cloud and rebuild monoliths into microservices without business disruption.</div>
              <div className="sol-tags"><span className="sol-tag">Migration</span><span className="sol-tag">Cloud</span><span className="sol-tag">Microservices</span></div>
            </div>
            <div className="sol-card reveal" style={{ transitionDelay: '0.08s' }}>
              <div className="sol-num">08</div>
              <span className="sol-icon"><Settings size={32} /></span>
              <div className="sol-name">Workflow Automation Software</div>
              <div className="sol-desc">Eliminate manual, repetitive processes — custom automation platforms that trigger actions, route approvals, generate documents and synchronise data across your entire business automatically.</div>
              <div className="sol-tags"><span className="sol-tag">Automation</span><span className="sol-tag">Approvals</span><span className="sol-tag">Triggers</span></div>
            </div>
            <div className="sol-card reveal" style={{ transitionDelay: '0.16s' }}>
              <div className="sol-num">09</div>
              <span className="sol-icon"><Shield size={32} /></span>
              <div className="sol-name">Compliance & Security Software</div>
              <div className="sol-desc">Role-based access control, audit trails, data encryption, regulatory compliance tools and security monitoring systems built to enterprise standards from the ground up.</div>
              <div className="sol-tags"><span className="sol-tag">RBAC</span><span className="sol-tag">Audit Logs</span><span className="sol-tag">Encryption</span></div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section>
          <div className="s-label reveal"><span className="s-label-line"></span>03 — Industries</div>
          <div className="s-title reveal">Built For Every<br/>Industry</div>
          <div className="ind-grid reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="ind-item"><span className="ind-icon"><Hospital size={32} /></span><div className="ind-name">Healthcare</div><div className="ind-desc">Patient management, clinic systems, telemedicine platforms and compliance-ready health data tools</div></div>
            <div className="ind-item"><span className="ind-icon"><Landmark size={32} /></span><div className="ind-name">Finance & BFSI</div><div className="ind-desc">Fintech platforms, loan management, insurance systems and regulatory reporting engines</div></div>
            <div className="ind-item"><span className="ind-icon"><ShoppingBag size={32} /></span><div className="ind-name">Retail & E-Commerce</div><div className="ind-desc">Inventory systems, order management, POS software and customer loyalty platforms</div></div>
            <div className="ind-item"><span className="ind-icon"><Building2 size={32} /></span><div className="ind-name">Construction & Real Estate</div><div className="ind-desc">Project management, contractor portals, site tracking and property management software</div></div>
            <div className="ind-item"><span className="ind-icon"><GraduationCap size={32} /></span><div className="ind-name">Education & EdTech</div><div className="ind-desc">LMS platforms, student portals, assessment systems and AI tutoring applications</div></div>
            <div className="ind-item"><span className="ind-icon"><Truck size={32} /></span><div className="ind-name">Logistics & Supply Chain</div><div className="ind-desc">Fleet management, warehouse systems, route optimisation and shipment tracking platforms</div></div>
            <div className="ind-item"><span className="ind-icon"><Factory size={32} /></span><div className="ind-name">Manufacturing</div><div className="ind-desc">Production planning, quality control, equipment monitoring and supply chain ERP systems</div></div>
            <div className="ind-item"><span className="ind-icon"><Zap size={32} /></span><div className="ind-name">SaaS & Technology</div><div className="ind-desc">Developer tools, platform infrastructure, B2B SaaS products and API-first software businesses</div></div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="proc-section" id="process">
          <div className="s-label reveal"><span className="s-label-line"></span>04 — How We Build</div>
          <div className="s-title reveal">Our Engineering<br/>Process</div>
          <div className="process-wrap reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="proc-row">
              <div className="proc-num">01</div>
              <div className="proc-content">
                <h3>Discovery & Requirements</h3>
                <p>Deep-dive workshops to map your business processes, pain points, user journeys and technical constraints. Output: a complete product requirements document with user stories and acceptance criteria.</p>
                <div className="proc-tools"><span className="proc-tool">Workshops</span><span className="proc-tool">User Stories</span><span className="proc-tool">PRD</span><span className="proc-tool">Acceptance Criteria</span></div>
              </div>
              <div className="proc-time">1–2 Weeks</div>
            </div>
            <div className="proc-row">
              <div className="proc-num">02</div>
              <div className="proc-content">
                <h3>System Architecture & Design</h3>
                <p>Database schema, system architecture diagrams, API contracts, security model and infrastructure plan — all documented and reviewed before writing a single line of application code.</p>
                <div className="proc-tools"><span className="proc-tool">System Design</span><span className="proc-tool">DB Schema</span><span className="proc-tool">API Contracts</span><span className="proc-tool">Security Model</span></div>
              </div>
              <div className="proc-time">1 Week</div>
            </div>
            <div className="proc-row">
              <div className="proc-num">03</div>
              <div className="proc-content">
                <h3>UI/UX Design</h3>
                <p>Wireframes and high-fidelity prototypes for every screen and user role — reviewed and approved before development starts. Includes a design system for consistency across the entire product.</p>
                <div className="proc-tools"><span className="proc-tool">Figma</span><span className="proc-tool">Prototyping</span><span className="proc-tool">Design System</span><span className="proc-tool">User Testing</span></div>
              </div>
              <div className="proc-time">1–2 Weeks</div>
            </div>
            <div className="proc-row">
              <div className="proc-num">04</div>
              <div className="proc-content">
                <h3>Agile Development Sprints</h3>
                <p>2-week development sprints with working software delivered at each milestone. Daily standups, sprint reviews and continuous integration — you see real progress every fortnight, not a reveal after months.</p>
                <div className="proc-tools"><span className="proc-tool">Git</span><span className="proc-tool">CI/CD</span><span className="proc-tool">Jira</span><span className="proc-tool">2-Week Sprints</span></div>
              </div>
              <div className="proc-time">Ongoing</div>
            </div>
            <div className="proc-row">
              <div className="proc-num">05</div>
              <div className="proc-content">
                <h3>Testing & Quality Assurance</h3>
                <p>Unit tests, integration tests, end-to-end testing, performance load testing, security penetration testing and user acceptance testing — all completed before any release goes to production.</p>
                <div className="proc-tools"><span className="proc-tool">Jest</span><span className="proc-tool">Cypress</span><span className="proc-tool">Load Testing</span><span className="proc-tool">Pen Testing</span></div>
              </div>
              <div className="proc-time">Each Sprint</div>
            </div>
            <div className="proc-row">
              <div className="proc-num">06</div>
              <div className="proc-content">
                <h3>Deployment & Infrastructure</h3>
                <p>Production deployment to AWS, GCP or Azure with auto-scaling, monitoring, alerting, backup policies, disaster recovery and a full DevOps pipeline — ready from day one.</p>
                <div className="proc-tools"><span className="proc-tool">AWS</span><span className="proc-tool">Docker</span><span className="proc-tool">Kubernetes</span><span className="proc-tool">Terraform</span></div>
              </div>
              <div className="proc-time">Launch Day</div>
            </div>
            <div className="proc-row">
              <div className="proc-num">07</div>
              <div className="proc-content">
                <h3>Training, Handover & Support</h3>
                <p>Full user training sessions, admin documentation, video walkthroughs and knowledge transfer to your team. Followed by ongoing support and retainer development for new features.</p>
                <div className="proc-tools"><span className="proc-tool">Training</span><span className="proc-tool">Documentation</span><span className="proc-tool">SLA Support</span></div>
              </div>
              <div className="proc-time">Post-launch</div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section>
          <div className="s-label reveal"><span className="s-label-line"></span>05 — Technology</div>
          <div className="s-title reveal">Our Tech Stack</div>
          <div className="tech-grid reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="tech-item"><span className="tech-icon"><Atom size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">React / Next.js</div></div>
            <div className="tech-item"><span className="tech-icon"><Server size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">Node.js</div></div>
            <div className="tech-item"><span className="tech-icon"><Code2 size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">Python</div></div>
            <div className="tech-item"><span className="tech-icon"><Coffee size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">Java / Spring</div></div>
            <div className="tech-item"><span className="tech-icon"><Database size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">PostgreSQL</div></div>
            <div className="tech-item"><span className="tech-icon"><Leaf size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">MongoDB</div></div>
            <div className="tech-item"><span className="tech-icon"><Layers size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">Redis</div></div>
            <div className="tech-item"><span className="tech-icon"><Cloud size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">AWS / GCP</div></div>
            <div className="tech-item"><span className="tech-icon"><Box size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">Docker / K8s</div></div>
            <div className="tech-item"><span className="tech-icon"><Brain size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">Claude AI</div></div>
            <div className="tech-item"><span className="tech-icon"><Package size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">GraphQL</div></div>
            <div className="tech-item"><span className="tech-icon"><Wrench size={28} style={{ margin: '0 auto' }} /></span><div className="tech-name">Terraform</div></div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="arch-section">
          <div className="s-label reveal"><span className="s-label-line"></span>06 — Architecture</div>
          <div className="s-title reveal">Built to Scale.<br/>Built to Last.</div>
          <div className="arch-grid">
            <div className="arch-list">
              <div className="arch-item reveal">
                <div className="arch-icon-box"><Puzzle size={20} /></div>
                <div className="arch-text">
                  <h4>Microservices Architecture</h4>
                  <p>Independently deployable services that scale horizontally — each component of your system can grow, update or fail independently without affecting the whole platform.</p>
                </div>
              </div>
              <div className="arch-item reveal" style={{ transitionDelay: '0.08s' }}>
                <div className="arch-icon-box"><Plug size={20} /></div>
                <div className="arch-text">
                  <h4>API-First Design</h4>
                  <p>Every system we build exposes well-documented APIs — so your software can connect to anything, power mobile apps, integrate with partners and evolve without rewrites.</p>
                </div>
              </div>
              <div className="arch-item reveal" style={{ transitionDelay: '0.16s' }}>
                <div className="arch-icon-box"><Shield size={20} /></div>
                <div className="arch-text">
                  <h4>Security by Design</h4>
                  <p>Encryption at rest and in transit, role-based access, audit logs, OWASP compliance and regular security reviews — not bolted on after launch, baked in from line one.</p>
                </div>
              </div>
              <div className="arch-item reveal" style={{ transitionDelay: '0.24s' }}>
                <div className="arch-icon-box"><TrendingUp size={20} /></div>
                <div className="arch-text">
                  <h4>Horizontal Scalability</h4>
                  <p>Auto-scaling cloud infrastructure that handles traffic spikes without manual intervention — from 100 users to 1 million users, the architecture grows with your business.</p>
                </div>
              </div>
              <div className="arch-item reveal" style={{ transitionDelay: '0.32s' }}>
                <div className="arch-icon-box"><Bot size={20} /></div>
                <div className="arch-text">
                  <h4>AI Integration Layer</h4>
                  <p>A standardised AI layer built into every system — making it straightforward to add intelligent features like predictions, automation and natural language interfaces at any point.</p>
                </div>
              </div>
            </div>
            <div className="arch-visual reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="arch-visual-title">System Architecture Layers</div>
              <div className="arch-layer">
                <div className="arch-layer-item"><span className="arch-layer-name">Presentation Layer</span><span className="arch-layer-badge active">React / Next.js</span></div>
                <div className="arch-layer-item"><span className="arch-layer-name">API Gateway</span><span className="arch-layer-badge active">REST / GraphQL</span></div>
                <div className="arch-layer-item"><span className="arch-layer-name">Business Logic</span><span className="arch-layer-badge active">Node.js / Python</span></div>
                <div className="arch-layer-item"><span className="arch-layer-name">AI Agent Layer</span><span className="arch-layer-badge active">Claude API</span></div>
                <div className="arch-layer-item"><span className="arch-layer-name">Data Layer</span><span className="arch-layer-badge active">PostgreSQL / Redis</span></div>
                <div className="arch-layer-item"><span className="arch-layer-name">Message Queue</span><span className="arch-layer-badge">RabbitMQ / SQS</span></div>
                <div className="arch-layer-item"><span className="arch-layer-name">Infrastructure</span><span className="arch-layer-badge">AWS / Docker / K8s</span></div>
                <div className="arch-layer-item"><span className="arch-layer-name">Monitoring</span><span className="arch-layer-badge">Datadog / Sentry</span></div>
              </div>
            </div>
          </div>
        </section>



        {/* ENGAGEMENT MODELS */}
        <section className="engage-section">
          <div className="s-label reveal"><span className="s-label-line"></span>08 — Engagement Models</div>
          <div className="s-title reveal">Choose How We<br/>Work Together</div>
          <div className="engage-grid">
            <div className="engage-card reveal">
              <span className="eng-icon"><Pin size={32} /></span>
              <div className="eng-name">Fixed Price Project</div>
              <div className="eng-desc">A fully scoped project with a fixed price, fixed timeline and fixed deliverables. Ideal for well-defined requirements where you know exactly what you need and want cost certainty.</div>
              <div className="eng-detail">Best for: ERP builds, SaaS MVPs, standalone tools</div>
            </div>
            <div className="engage-card reveal" style={{ transitionDelay: '0.1s' }}>
              <span className="eng-icon"><RefreshCcw size={32} /></span>
              <div className="eng-name">Time & Materials</div>
              <div className="eng-desc">Pay for actual development time with full transparency on hours and tasks. Perfect for evolving products where requirements change frequently and flexibility is critical.</div>
              <div className="eng-detail">Best for: Innovation projects, R&D, evolving scope</div>
            </div>
            <div className="engage-card reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="eng-icon"><Building2 size={32} /></span>
              <div className="eng-name">Dedicated Team</div>
              <div className="eng-desc">A dedicated team of engineers, designers and a project manager working exclusively on your product — embedded in your processes, aligned with your roadmap, scaling up or down as needed.</div>
              <div className="eng-detail">Best for: Long-term products, startups, scale-ups</div>
            </div>
          </div>
        </section>



        {/* WHY */}
        <section className="why-section">
          <div className="s-label reveal"><span className="s-label-line"></span>10 — Why HYNOX</div>
          <div className="s-title reveal">Why Choose Us<br/>Over Others</div>
          <div className="why-cols reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="why-col">
              <div className="why-col-title">Typical Software Vendors</div>
              <div className="why-item"><div className="why-mark">✗</div><p>Sell you a licensed product that's 80% of what you need</p></div>
              <div className="why-item"><div className="why-mark">✗</div><p>Lock you into vendor contracts with escalating annual fees</p></div>
              <div className="why-item"><div className="why-mark">✗</div><p>No AI capability — manual workflows remain manual</p></div>
              <div className="why-item"><div className="why-mark">✗</div><p>Offshore junior teams with poor communication</p></div>
              <div className="why-item"><div className="why-mark">✗</div><p>Generic architecture that can't handle your scale</p></div>
              <div className="why-item"><div className="why-mark">✗</div><p>You never own the source code outright</p></div>
            </div>
            <div className="why-col">
              <div className="why-col-title">HYNOX</div>
              <div className="why-item"><div className="why-mark">✓</div><p>100% built for your exact requirements — nothing more, nothing less</p></div>
              <div className="why-item"><div className="why-mark">✓</div><p>You own all code, forever — no licensing, no lock-in</p></div>
              <div className="why-item"><div className="why-mark">✓</div><p>AI agents and intelligence built into every system we deliver</p></div>
              <div className="why-item"><div className="why-mark">✓</div><p>Senior engineers on every project with direct communication</p></div>
              <div className="why-item"><div className="why-mark">✓</div><p>Scalable cloud architecture designed to handle enterprise load</p></div>
              <div className="why-item"><div className="why-mark">✓</div><p>Full source code, documentation and knowledge transfer included</p></div>
            </div>
          </div>
        </section>

        {/* GUARANTEES */}
        <section className="guarantee-section">
          <div className="s-label reveal"><span className="s-label-line"></span>11 — Our Commitments</div>
          <div className="s-title reveal">What We<br/>Guarantee</div>
          <div className="guarantee-grid reveal" style={{ transitionDelay: '0.15s', marginTop: '4rem' }}>
            <div className="guarantee-item">
              <span className="guarantee-icon"><ClipboardCheck size={40} style={{ margin: '0 auto' }} /></span>
              <div className="guarantee-title">Fixed Scope Promise</div>
              <div className="guarantee-desc">We scope every project in writing. If something wasn't in the scope, we flag it before we build it — no hidden additions to your invoice.</div>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon"><Key size={40} style={{ margin: '0 auto' }} /></span>
              <div className="guarantee-title">Full Code Ownership</div>
              <div className="guarantee-desc">100% of source code, design files and documentation transferred to you upon project completion. You own everything with no strings attached.</div>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon"><Rocket size={40} style={{ margin: '0 auto' }} /></span>
              <div className="guarantee-title">On-Time Delivery</div>
              <div className="guarantee-desc">Every milestone is committed to in writing. We use agile sprints so you see real progress every two weeks — not a surprise at the finish line.</div>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon"><ShieldCheck size={40} style={{ margin: '0 auto' }} /></span>
              <div className="guarantee-title">Post-Launch Support</div>
              <div className="guarantee-desc">Every package includes a post-launch support window with bug fixing at no extra cost. We don't disappear after delivery — we ensure it actually works.</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'var(--grey-dark)', borderTop: '1px solid var(--border)' }} id="faq">
          <div className="s-label reveal"><span className="s-label-line"></span>12 — FAQ</div>
          <div className="s-title reveal">Frequently Asked<br/>Questions</div>
          <div className="faq-list reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="faq-item">
              <div className="faq-q" onClick={toggleFaq}><h4>How long does custom software take to build?</h4><span className="faq-toggle">+</span></div>
              <div className="faq-a"><p>A focused single-module tool takes 6–10 weeks. A full multi-module platform like an ERP or CRM takes 4–8 months. Enterprise-grade SaaS products with complex architecture take 6–12 months. We give you a milestone-by-milestone timeline during the discovery phase — not a vague estimate.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={toggleFaq}><h4>Will I own the source code?</h4><span className="faq-toggle">+</span></div>
              <div className="faq-a"><p>Yes — 100%. Upon final payment, all source code, database schemas, API documentation, design files and deployment configurations are transferred to you in full. No licensing fees, no vendor lock-in. You can take the code to any other developer at any time.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={toggleFaq}><h4>Can you integrate with our existing systems?</h4><span className="faq-toggle">+</span></div>
              <div className="faq-a"><p>Yes. We integrate with virtually any existing system — Tally, SAP, Salesforce, QuickBooks, payment gateways, ERPs, CRMs and custom databases. We conduct a technical audit of your current stack during discovery and design the integration architecture before writing any code.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={toggleFaq}><h4>How do you handle changing requirements during development?</h4><span className="faq-toggle">+</span></div>
              <div className="faq-a"><p>We manage this through our agile sprint process. Small refinements within scope are absorbed. Significant new requirements are logged, scoped and priced transparently as change requests before implementation. You always know what's in scope and what affects cost or timeline.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={toggleFaq}><h4>What AI capabilities can you add to custom software?</h4><span className="faq-toggle">+</span></div>
              <div className="faq-a"><p>We can integrate AI agents for decision automation, natural language interfaces (chat with your data), predictive analytics, intelligent document processing, anomaly detection, recommendation engines, AI-generated reports and workflow automation powered by Claude API and custom ML models.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={toggleFaq}><h4>Do you provide training and documentation?</h4><span className="faq-toggle">+</span></div>
              <div className="faq-a"><p>Yes — every project includes end-user training sessions, admin documentation, API documentation and video walkthroughs. We ensure your team can confidently use and manage the system before we consider a project complete.</p></div>
            </div>
          </div>
        </section>
      </div>

      {/* GLOBAL CTA SECTION */}
      <CTAsection />
    </>
  );
}