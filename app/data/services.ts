import { LucideIcon, Code2, Smartphone, Cpu, ShoppingBag, Layers } from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string; // We'll map this to Lucide icons or raw SVGs
}

export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceTestimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface ServiceCaseStudy {
  before: string;
  after: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  stats: ServiceStat[];
  features: ServiceFeature[];
  caseStudy?: ServiceCaseStudy; // Made optional
  testimonials: ServiceTestimonial[];
  clientLogos: string[];
}

export const servicesData: Record<string, ServiceData> = {
  "web-applications": {
    slug: "web-applications",
    title: "Web Application Development",
    hero: {
      title: "Scalable Web Applications",
      subtitle: "For Modern Businesses",
      description: "We build high-performance, secure, and scalable web applications tailored to your business needs using the latest technologies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    },
    stats: [
      { label: "Active Projects", value: "3" },
      { label: "Uptime Guaranteed", value: "99.9%" },
      { label: "Success Rate", value: "100%" },
      { label: "Tech Experts", value: "5+" },
    ],
    features: [
      {
        title: "Progressive Web Apps",
        description: "Mobile-first web experiences that work offline and feel like native apps.",
        icon: "Smartphone",
      },
      {
        title: "Custom CRM/ERP",
        description: "Bespoke internal tools to streamline your business operations and data.",
        icon: "Layers",
      },
      {
        title: "Cloud-Native Scalability",
        description: "Built on AWS/Azure to handle traffic spikes and grow with your business.",
        icon: "Cpu",
      },
      {
        title: "API-First Design",
        description: "Robust APIs that integrate seamlessly with other services and platforms.",
        icon: "Code2",
      },
    ],
    caseStudy: {
      title: "Real Estate Management Platform",
      description: "A comprehensive solution for a leading real estate firm to manage properties and leads.",
      before: "The client used manual spreadsheets and paper-based tracking, leading to lead loss and inconsistent follow-ups.",
      after: "Automated lead capture and property matching increased conversion rates by 45% and reduced manual work.",
    },
    testimonials: [
      {
        name: "Rahul Sharma",
        role: "CEO, TechProp",
        content: "HYNOX transformed our manual processes into a sleek, automated web application. Our efficiency has tripled since launch.",
      },
    ],
    clientLogos: [
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
    ],
  },
  "mobile-applications": {
    slug: "mobile-applications",
    title: "Mobile Application Development",
    hero: {
      title: "Native & Cross-Platform",
      subtitle: "Mobile Experiences",
      description: "Deliver stunning mobile experiences with our expert iOS and Android development services using Flutter and React Native.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2426",
    },
    stats: [
      { label: "Apps Developed", value: "2" },
      { label: "Avg Rating", value: "4.9/5" },
      { label: "Support", value: "24/7" },
      { label: "Platforms", value: "iOS/Android" },
    ],
    features: [
      {
        title: "iOS & Android Development",
        description: "High-performance native and cross-platform apps for all mobile devices.",
        icon: "Smartphone",
      },
      {
        title: "User-Centric UI/UX",
        description: "Intuitive designs that engage users and drive meaningful interactions.",
        icon: "Layers",
      },
      {
        title: "Real-time Connectivity",
        description: "Features like push notifications, live chat, and real-time data sync.",
        icon: "Cpu",
      },
      {
        title: "Secure Payments",
        description: "Seamless integration with global payment gateways for in-app purchases.",
        icon: "ShoppingBag",
      },
    ],
    caseStudy: {
      title: "Health & Fitness Tracker",
      description: "A community-driven fitness app with workout tracking and social features.",
      before: "Existing fitness apps were too complex and lacked local community integration.",
      after: "A streamlined, social-first app that reached its target engagement goals within the first month.",
    },
    testimonials: [
      {
        name: "Priya V.",
        role: "Founder, FitLife",
        content: "The mobile app exceeded our expectations. The UI is beautiful and our users love the performance.",
      },
    ],
    clientLogos: [
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
    ],
  },
  "custom-software": {
    slug: "custom-software",
    title: "Custom Software Solutions",
    hero: {
      title: "Tailored Software",
      subtitle: "For Unique Needs",
      description: "When off-the-shelf software isn't enough, we build bespoke solutions designed specifically for your unique business challenges.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2426",
    },
    stats: [
      { label: "Bespoke Builds", value: "3" },
      { label: "ROI Delivered", value: "150%+" },
      { label: "Process Automation", value: "70%" },
      { label: "Partner Success", value: "100%" },
    ],
    features: [
      {
        title: "Business Automation",
        description: "Automate repetitive tasks and workflows to save time and reduce human error.",
        icon: "Cpu",
      },
      {
        title: "Legacy Modernization",
        description: "Update your aging software systems to modern, maintainable architectures.",
        icon: "Layers",
      },
      {
        title: "Systems Integration",
        description: "Connect disparate software systems into a unified, efficient ecosystem.",
        icon: "Code2",
      },
      {
        title: "Data Analytics",
        description: "Custom dashboards and reporting tools to turn your data into insights.",
        icon: "Smartphone",
      },
    ],
    caseStudy: {
      title: "JP Aluminium Interior Automation",
      description: "Transforming manual interior work tracking into a streamlined digital process.",
      before: "Leads were lost in notebooks, and site updates were manual via WhatsApp, causing delays.",
      after: "100% lead capture and real-time site updates via a custom portal reduced customer calls by 50%.",
    },
    testimonials: [
      {
        name: "Jayaprakash",
        role: "Owner, JP Aluminium",
        content: "The automation HYNOX built for us has changed how we run our business. We no longer lose leads.",
      },
    ],
    clientLogos: [
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
    ],
  },
  "ai-ml-solutions": {
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    hero: {
      title: "Intelligent Automation",
      subtitle: "Powered by AI",
      description: "Leverage the power of Artificial Intelligence and Machine Learning to gain insights, automate decisions, and stay ahead.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2426",
    },
    stats: [
      { label: "Models Deployed", value: "2" },
      { label: "Accuracy Rate", value: "98%" },
      { label: "Processing Speed", value: "Instant" },
      { label: "Cost Savings", value: "30%+" },
    ],
    features: [
      {
        title: "Predictive Analytics",
        description: "Forecast trends and customer behavior to make data-driven business decisions.",
        icon: "Cpu",
      },
      {
        title: "NLP Solutions",
        description: "Custom chatbots and sentiment analysis to understand and engage your audience.",
        icon: "Code2",
      },
      {
        title: "Computer Vision",
        description: "Automated image and video analysis for quality control and security.",
        icon: "Smartphone",
      },
      {
        title: "Recommendation Engines",
        description: "Personalized experiences that drive higher conversion and customer loyalty.",
        icon: "Layers",
      },
    ],
    caseStudy: {
      title: "E-commerce Fraud Detection",
      description: "Implementing ML to identify and prevent fake COD orders and fraudulent returns.",
      before: "An e-commerce brand was losing revenue to fake COD orders and high return rates.",
      after: "Our ML model filtered out majority of fake orders, resulting in protected margins.",
    },
    testimonials: [
      {
        name: "Suresh Mani",
        role: "CEO, RetailFlow",
        content: "The predictive model HYNOX developed has allowed us to stock our inventory with high accuracy.",
      },
    ],
    clientLogos: [
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
    ],
  },
  "shopify-store-development": {
    slug: "shopify-store-development",
    title: "Shopify Store Development",
    hero: {
      title: "Expert Shopify",
      subtitle: "E-commerce Solutions",
      description: "Launch and scale your online store with our comprehensive Shopify development and performance marketing services.",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2070&auto=format&fit=crop",
    },
    stats: [
      { label: "Stores Built", value: "3" },
      { label: "Average ROI", value: "300%" },
      { label: "Retention Rate", value: "40%+" },
      { label: "Client Growth", value: "Steady" },
    ],
    features: [
      {
        title: "Custom Theme Design",
        description: "Unique, high-converting store designs that reflect your brand identity.",
        icon: "Layers",
      },
      {
        title: "Performance Marketing",
        description: "Meta and Google Ads strategy to drive high-quality traffic and sales.",
        icon: "Smartphone",
      },
      {
        title: "Subscription Models",
        description: "Setup recurring revenue systems for sustainable business growth.",
        icon: "ShoppingBag",
      },
      {
        title: "App Integration",
        description: "Enhance your store with custom and third-party app integrations.",
        icon: "Code2",
      },
    ],
    caseStudy: {
      title: "Zyden Clothing Global Scale",
      description: "From a local investment idea to a global clothing brand with subscription model.",
      before: "The client had capital but no direction on products, branding, or digital operations.",
      after: "Launched a global-ready store with 300% ROI within 6 months and automated retention systems.",
    },
    testimonials: [
      {
        name: "Vignesh",
        role: "Owner, Zyden Clothing",
        content: "HYNOX didn't just build a store; they built a business. Their A-Z approach is exactly what I needed.",
      },
    ],
    clientLogos: [
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
    ],
  },
  "ugc-video-creation": {
    slug: "ugc-video-creation",
    title: "UGC Video Creation",
    hero: {
      title: "Authentic UGC",
      subtitle: "Content that Converts",
      description: "We create high-impact User Generated Content (UGC) that builds trust and drives sales for your brand.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2426",
    },
    stats: [
      { label: "Brands Served", value: "2" },
      { label: "Videos Created", value: "15+" },
      { label: "Ad Performance", value: "+40%" },
      { label: "Engagement", value: "High" },
    ],
    features: [
      {
        title: "Creator Sourcing",
        description: "We find the perfect faces to represent your brand and connect with your audience.",
        icon: "Smartphone",
      },
      {
        title: "Script & Strategy",
        description: "Hook-driven scripts designed to stop the scroll and drive action.",
        icon: "Layers",
      },
      {
        title: "High-Volume Production",
        description: "Consistent delivery of fresh content for your social media and ad campaigns.",
        icon: "Cpu",
      },
      {
        title: "Trend Alignment",
        description: "Content that stays current with platform trends and audience preferences.",
        icon: "Code2",
      },
    ],
    testimonials: [
      {
        name: "Amit K.",
        role: "Marketing Head",
        content: "The UGC videos HYNOX produced have significantly lowered our Customer Acquisition Cost.",
      },
    ],
    clientLogos: [
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
    ],
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    hero: {
      title: "Social Growth",
      subtitle: "Building Communities",
      description: "Complete social media management and growth strategies to turn followers into loyal brand advocates.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=2426",
    },
    stats: [
      { label: "Active Brands", value: "3" },
      { label: "Followers Gained", value: "5K+" },
      { label: "Reach Delivered", value: "100K+" },
      { label: "Daily Support", value: "24/7" },
    ],
    features: [
      {
        title: "Content Planning",
        description: "Monthly content calendars aligned with your brand goals and voice.",
        icon: "Layers",
      },
      {
        title: "Community Management",
        description: "Engaging with your audience to build lasting relationships and trust.",
        icon: "Smartphone",
      },
      {
        title: "Influencer Outreach",
        description: "Connecting with key influencers to expand your brand's reach and authority.",
        icon: "Cpu",
      },
      {
        title: "Analytic Insights",
        description: "Detailed reporting on performance and data-backed growth strategies.",
        icon: "Code2",
      },
    ],
    testimonials: [
      {
        name: "Sneha R.",
        role: "Brand Owner",
        content: "Our social presence has become much more professional and engaging since HYNOX took over.",
      },
    ],
    clientLogos: [
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
    ],
  },
  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing",
    hero: {
      title: "Results Driven",
      subtitle: "Paid Acquisition",
      description: "Scale your revenue with data-backed Meta and Google ad campaigns focused on maximum ROI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2426",
    },
    stats: [
      { label: "Active Ad Sets", value: "10+" },
      { label: "Avg ROAS", value: "3.5x" },
      { label: "Monthly Reach", value: "250K+" },
      { label: "Success Rate", value: "100%" },
    ],
    features: [
      {
        title: "Meta Ads Strategy",
        description: "Full-funnel Facebook and Instagram campaigns designed for conversion.",
        icon: "Smartphone",
      },
      {
        title: "Google Search & Shopping",
        description: "Capturing high-intent traffic with optimized search and shopping ads.",
        icon: "Layers",
      },
      {
        title: "Retargeting Systems",
        description: "Bringing back lost visitors and increasing Customer Lifetime Value.",
        icon: "Cpu",
      },
      {
        title: "Conversion Tracking",
        description: "End-to-end tracking to measure every rupee spent and earned.",
        icon: "Code2",
      },
    ],
    caseStudy: {
      title: "NSK Tex E-commerce Scaling",
      description: "Scaling a local clothing brand with targeted performance marketing.",
      before: "Existing sales were inconsistent and return rates were high due to fake COD orders.",
      after: "Generated 300+ orders with minimal spend and eliminated returns with a smart filter system.",
    },
    testimonials: [
      {
        name: "Kartik N.",
        role: "Director, NSK Tex",
        content: "HYNOX helped us scale our sales while significantly reducing our operational losses.",
      },
    ],
    clientLogos: [
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
    ],
  },
};
