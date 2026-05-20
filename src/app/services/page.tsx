import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FiZap, FiGlobe, FiShoppingCart, FiBarChart2, FiHome, FiMonitor, FiUsers, FiThumbsUp, FiHeart } from "react-icons/fi";
import { MdSportsEsports } from "react-icons/md";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services — Halo Studio",
  description:
    "Web development, Google Ads, and Meta Ads for Ugandan businesses ready to grow. Full scope, process, and deliverables.",
};

const services = [
  {
    id: "01",
    visual: "web" as const,
    slug: "web-development",
    title: "Web Development",
    headline: "A website that earns its place.",
    intro:
      "Most business websites in Uganda are either template sites that look like every other company, or old builds that load slowly on Airtel and MTN. Neither converts. We design and build custom websites from scratch — fast, focused, and built specifically to turn visitors into enquiries.",
    what: [
      {
        label: "Landing pages",
        desc: "Single-page conversion sites for ad campaigns, product launches, or service lines. Built to one goal: get the visitor to act.",
      },
      {
        label: "Multi-page business sites",
        desc: "5–10 page sites covering Home, About, Services, Blog, and Contact. The full digital presence for a professional brand.",
      },
      {
        label: "E-commerce",
        desc: "Online stores with product pages, cart, mobile payment integration (MTN MoMo, Airtel Money, card), and order management.",
      },
    ],
    process: [
      { step: "01", label: "Discovery", desc: "We learn your business, your customers, and what you need the site to do. This shapes everything." },
      { step: "02", label: "Wireframes", desc: "Page layouts in greyscale — structure and content hierarchy before any visual design." },
      { step: "03", label: "Design", desc: "High-fidelity mockups in your brand. You review and give feedback before we write a line of code." },
      { step: "04", label: "Build", desc: "We develop on a staging environment. Mobile, tablet, and desktop tested on real Ugandan devices." },
      { step: "05", label: "Launch", desc: "Domain setup, SSL, speed audit, and go-live. We brief you on how to manage content going forward." },
    ],
    includes: [
      "Custom design — no templates or page builders",
      "Mobile-first, responsive across all screen sizes",
      "Sub-2s load times on Airtel and MTN networks",
      "On-page SEO: meta titles, descriptions, structured data",
      "WhatsApp click-to-chat and contact form integration",
      "Google Analytics 4 + Search Console setup",
      "1 month of post-launch support",
    ],
    youProvide: [
      "Brand logo and colour palette (or we design them)",
      "Business copy and service descriptions",
      "Photos, videos, or budget for a shoot",
      "Feedback at each stage within 3 business days",
    ],
    timeline: "3–6 weeks depending on scope.",
    investment: "Starting from UGX 4,500,000 for a landing page. Multi-page sites from UGX 8,000,000.",
    cta: "Talk to us about your site",
  },
  {
    id: "02",
    visual: "google" as const,
    slug: "google-ads",
    title: "Google Ads",
    headline: "First result when they search.",
    intro:
      "When someone in Kampala searches \u2018plumber near me\u2019 or \u2018event venue Nakasero\u2019, they are ready to buy \u2014 they just need to find you first. Google Ads puts your business at the top of that result page, above every organic result and every competitor. We set up and manage campaigns that capture this high-intent traffic and track every lead back to a shilling of ad spend.",
    what: [
      {
        label: "Search campaigns",
        desc: "Text ads triggered by keywords your customers type. The highest-intent, highest-converting ad format available.",
      },
      {
        label: "Google Display",
        desc: "Visual banner ads across millions of websites and apps — used for awareness, retargeting, and staying top of mind.",
      },
      {
        label: "YouTube pre-roll",
        desc: "Video ads shown before YouTube videos. Effective for brand storytelling and reaching audiences at scale.",
      },
    ],
    process: [
      { step: "01", label: "Audit & research", desc: "If you have existing campaigns, we audit them first. We map search volume, intent, and competitor spend for your keywords." },
      { step: "02", label: "Campaign architecture", desc: "We build tight ad groups with close keyword-to-ad relevance. Quality Score drives cost-per-click, and we engineer it from the start." },
      { step: "03", label: "Ad copywriting", desc: "Three headlines, two descriptions, sitelinks, callouts, and structured snippets — every character used." },
      { step: "04", label: "Conversion tracking", desc: "We set up tracking for every action that matters: form fills, WhatsApp clicks, phone calls, and purchases." },
      { step: "05", label: "Ongoing management", desc: "Weekly bid adjustments, search term reviews, negative keyword additions, and A/B testing of ad copy." },
    ],
    includes: [
      "Full keyword research and competitor analysis",
      "Campaign and ad group architecture",
      "Ad copywriting (all headlines, descriptions, extensions)",
      "Conversion tracking setup (forms, calls, WhatsApp, purchases)",
      "Google Tag Manager configuration",
      "Weekly performance review and optimisation",
      "Monthly report: spend, clicks, conversions, CPA, ROAS",
      "Uganda and diaspora geo-targeting",
    ],
    youProvide: [
      "Ad budget (paid directly to Google — minimum UGX 500,000/month recommended)",
      "Access to your Google Ads account or we create one",
      "Website or landing page to send traffic to",
      "Clear definition of what a conversion looks like for your business",
    ],
    timeline: "Campaigns go live within 5–7 business days of receiving access and brief.",
    investment: "Management fee from UGX 800,000/month. Ad spend is separate and paid to Google.",
    cta: "Start a Google Ads campaign",
  },
  {
    id: "03",
    visual: "meta" as const,
    slug: "meta-ads",
    title: "Meta Ads",
    headline: "Full-funnel. Not just a boosted post.",
    intro:
      "Boosting posts is not advertising — it is donating money to Meta in exchange for likes from people who will never buy from you. Real Meta advertising means building a funnel: the right message to the right person at the right stage of their decision. We build that funnel, set up the Pixel, write the creative, and optimise until your cost per lead is one you can build a business on.",
    what: [
      {
        label: "Lead generation campaigns",
        desc: "Forms inside Facebook and Instagram that capture name, phone, and email without leaving the app. High volume, low friction.",
      },
      {
        label: "WhatsApp click-to-message",
        desc: "Ads that open a WhatsApp conversation directly. The highest-converting format for service businesses in Uganda.",
      },
      {
        label: "Retargeting campaigns",
        desc: "Ads shown to people who visited your website, watched your video, or engaged with your page. Warmer audience, lower cost per result.",
      },
      {
        label: "Awareness and reach",
        desc: "Top-of-funnel campaigns to grow brand recognition in a geographic area or among a target demographic.",
      },
    ],
    process: [
      { step: "01", label: "Pixel & tracking setup", desc: "We install the Meta Pixel and configure events so every action on your website is tracked: page views, form submissions, purchases." },
      { step: "02", label: "Audience research", desc: "We build custom audiences from your existing customers, lookalike audiences, and interest/behaviour targeting relevant to Uganda." },
      { step: "03", label: "Creative brief", desc: "We write the ad copy and direct the creative — static image, carousel, or short video. We can work with your content or produce it." },
      { step: "04", label: "Campaign launch", desc: "Campaigns are structured across awareness, consideration, and conversion objectives. Budget is allocated by funnel stage." },
      { step: "05", label: "Optimisation", desc: "We review performance 2× per week. Winning ads get more budget. Underperformers are paused and replaced." },
    ],
    includes: [
      "Meta Pixel installation and event configuration",
      "Custom audience setup (website visitors, customer list, engagement)",
      "Lookalike audience creation",
      "Ad creative direction and copywriting",
      "Campaign setup across Facebook and Instagram",
      "WhatsApp Business integration (where applicable)",
      "Twice-weekly performance checks",
      "Monthly report: reach, CPM, CTR, CPL, ROAS",
    ],
    youProvide: [
      "Ad budget (paid directly to Meta — minimum UGX 600,000/month recommended)",
      "Admin access to your Facebook Business Manager",
      "Brand assets: logo, product photos, or video footage",
      "Approval of ad creative before launch",
    ],
    timeline: "First campaigns live within 7 business days of receiving access and assets.",
    investment: "Management fee from UGX 900,000/month. Ad spend is separate and paid to Meta.",
    cta: "Build a Meta funnel",
  },
];

// ─── Platform visual mockups ──────────────────────────────────────────────

function WebDevMockup() {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.09)", background: "#1c1c1e" }}>
      {/* Browser chrome */}
      <div style={{ background: "#2c2c2e", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ flex: 1, background: "#1c1c1e", borderRadius: "5px", padding: "4px 10px", fontSize: "11px", color: "rgba(255,255,255,0.28)", fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: "5px" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/></svg>
          halostudio.co/client
        </div>
      </div>
      {/* Site content */}
      <div style={{ background: "#fff" }}>
        {/* Nav */}
        <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ width: 44, height: 8, background: "#111", borderRadius: "2px" }} />
          <div style={{ display: "flex", gap: "10px" }}>
            {[28, 22, 28, 22].map((w, i) => <div key={i} style={{ width: w, height: 5, background: "#ddd", borderRadius: "2px" }} />)}
          </div>
          <div style={{ width: 60, height: 22, background: "#111", borderRadius: "20px" }} />
        </div>
        {/* Hero */}
        <div style={{ padding: "28px 20px 20px", textAlign: "center", background: "#fafafa" }}>
          <div style={{ width: "62%", height: 11, background: "#111", borderRadius: "3px", margin: "0 auto 7px" }} />
          <div style={{ width: "48%", height: 11, background: "#111", borderRadius: "3px", margin: "0 auto 14px" }} />
          <div style={{ width: "72%", height: 5, background: "#ddd", borderRadius: "2px", margin: "0 auto 4px" }} />
          <div style={{ width: "58%", height: 5, background: "#ddd", borderRadius: "2px", margin: "0 auto 18px" }} />
          <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
            <div style={{ width: 80, height: 28, background: "#111", borderRadius: "20px" }} />
            <div style={{ width: 80, height: 28, border: "1.5px solid #ccc", borderRadius: "20px" }} />
          </div>
        </div>
        {/* Stat row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "1px solid #eee" }}>
          {[
            { num: "3×", label: "Avg. lead increase" },
            { num: "<2s", label: "Load time, Airtel MTN" },
            { num: "100%", label: "Mobile optimised" },
          ].map(({ num, label }) => (
            <div key={num} style={{ padding: "14px 12px", textAlign: "center", borderRight: "1px solid #eee" }}>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#111", fontFamily: "system-ui, sans-serif", letterSpacing: "-0.03em", marginBottom: "3px" }}>{num}</div>
              <div style={{ fontSize: "10px", color: "#999", fontFamily: "system-ui, sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>
        {/* Service cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#eee", margin: "0" }}>
          {[
            { Icon: FiZap, title: "Landing pages" },
            { Icon: FiGlobe, title: "Business sites" },
            { Icon: FiShoppingCart, title: "E-commerce" },
            { Icon: FiBarChart2, title: "Analytics setup" },
          ].map(({ Icon, title }) => (
            <div key={title} style={{ background: "#fff", padding: "12px 14px" }}>
              <div style={{ marginBottom: "6px", color: "#333" }}><Icon size={15} /></div>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "#111", fontFamily: "system-ui, sans-serif", marginBottom: "3px" }}>{title}</div>
              <div style={{ width: "70%", height: 4, background: "#eee", borderRadius: "2px", marginBottom: "2px" }} />
              <div style={{ width: "50%", height: 4, background: "#eee", borderRadius: "2px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GoogleSERPMockup() {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.09)", background: "#1c1c1e" }}>
      {/* Browser chrome */}
      <div style={{ background: "#2c2c2e", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ flex: 1, background: "#1c1c1e", borderRadius: "5px", padding: "4px 10px", fontSize: "11px", color: "rgba(255,255,255,0.28)", fontFamily: "system-ui, sans-serif" }}>
          google.com/search?q=performance+marketing+kampala
        </div>
      </div>
      {/* SERP */}
      <div style={{ position: "relative", background: "#fff", padding: "16px 18px 12px" }}>
        {/* Google logo + search bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <svg width="55" height="18" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
            <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
            <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
            <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
            <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
            <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
            <path d="M35.29 41.41V32h31.77c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.03 9.66C16.32 69.35.36 53.89.36 34.79.36 15.69 16.32.23 35.34.23c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.53.05z" fill="#4285F4"/>
          </svg>
          <div style={{ flex: 1, border: "1px solid #dfe1e5", borderRadius: "22px", padding: "6px 14px", fontSize: "12px", color: "#202124", fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 1px 4px rgba(32,33,36,0.1)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round"/></svg>
            performance marketing kampala
          </div>
        </div>
        {/* Nav tabs */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "14px", borderBottom: "1px solid #ebebeb", paddingBottom: "8px" }}>
          {["All", "Images", "News", "Maps", "Videos"].map((tab, i) => (
            <span key={tab} style={{ fontSize: "12px", color: i === 0 ? "#1a73e8" : "#70757a", fontFamily: "system-ui, sans-serif", paddingBottom: "6px", borderBottom: i === 0 ? "2.5px solid #1a73e8" : "none", cursor: "pointer" }}>{tab}</span>
          ))}
        </div>
        {/* Sponsored label */}
        <div style={{ fontSize: "10px", color: "#70757a", fontFamily: "system-ui, sans-serif", marginBottom: "6px" }}>Sponsored</div>
        {/* Halo Studio ad */}
        <div style={{ borderLeft: "3px solid #1a73e8", paddingLeft: "10px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
            <div style={{ width: 16, height: 16, borderRadius: "50%", background: "linear-gradient(135deg, #f472b6, #818cf8)", flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: "12px", fontWeight: 500, color: "#202124", fontFamily: "system-ui, sans-serif" }}>Halo Studio</div>
              <div style={{ fontSize: "10px", color: "#0d652d", fontFamily: "system-ui, sans-serif" }}>https://halostudio.co › google-ads</div>
            </div>
          </div>
          <div style={{ fontSize: "16px", color: "#1a0dab", fontFamily: "system-ui, sans-serif", fontWeight: 400, lineHeight: 1.3, marginBottom: "3px" }}>Google Ads Uganda | Revenue-Focused Campaigns</div>
          <div style={{ fontSize: "12px", color: "#4d5156", fontFamily: "system-ui, sans-serif", lineHeight: 1.55 }}>Track every shilling of ad spend back to a real lead. Google certified. Conversion tracking from day one.</div>
          <div style={{ display: "flex", gap: "5px", marginTop: "7px", flexWrap: "wrap" }}>
            {["Google Ads", "Meta Ads", "Web Design", "Contact Us"].map((l) => (
              <span key={l} style={{ fontSize: "10px", color: "#1a0dab", border: "1px solid #dadce0", borderRadius: "3px", padding: "2px 6px", fontFamily: "system-ui, sans-serif" }}>{l}</span>
            ))}
          </div>
        </div>
        {/* Organic results — faded */}
        <div style={{ opacity: 0.35, marginBottom: "12px" }}>
          <div style={{ fontSize: "10px", color: "#0d652d", fontFamily: "system-ui, sans-serif", marginBottom: "2px" }}>https://randomagency.ke</div>
          <div style={{ fontSize: "14px", color: "#1a0dab", fontFamily: "system-ui, sans-serif" }}>Cheap Social Media Uganda | Boost Posts Fast</div>
          <div style={{ fontSize: "11px", color: "#4d5156", fontFamily: "system-ui, sans-serif" }}>Get more likes and followers for only UGX 50,000...</div>
        </div>
        <div style={{ opacity: 0.18 }}>
          <div style={{ fontSize: "10px", color: "#0d652d", fontFamily: "system-ui, sans-serif", marginBottom: "2px" }}>https://upwork.com › profiles</div>
          <div style={{ fontSize: "14px", color: "#1a0dab", fontFamily: "system-ui, sans-serif" }}>Freelance Facebook Booster | Affordable Uganda</div>
          <div style={{ fontSize: "11px", color: "#4d5156", fontFamily: "system-ui, sans-serif" }}>I will boost your posts and grow your page...</div>
        </div>
        {/* White bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "70px", background: "linear-gradient(to top, #fff, transparent)", pointerEvents: "none" }} />
      </div>
    </div>
  );
}

function MetaAdMockup() {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.09)", background: "#1c1c1e" }}>
      {/* Browser chrome */}
      <div style={{ background: "#2c2c2e", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ flex: 1, background: "#1c1c1e", borderRadius: "5px", padding: "4px 10px", fontSize: "11px", color: "rgba(255,255,255,0.28)", fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: "6px" }}>
          {/* Meta "f" logo */}
          <svg width="11" height="11" viewBox="0 0 36 36" fill="none"><path d="M36 18C36 8.06 27.94 0 18 0S0 8.06 0 18c0 8.99 6.58 16.44 15.19 17.78V23.2h-4.57V18h4.57v-3.97c0-4.51 2.69-7.01 6.8-7.01 1.97 0 4.03.35 4.03.35v4.43h-2.27c-2.24 0-2.93 1.39-2.93 2.81V18h4.99l-.8 5.2h-4.19v12.58C29.42 34.44 36 26.99 36 18z" fill="#1877F2"/><path d="M25.01 23.2l.8-5.2h-4.99v-3.39c0-1.42.69-2.81 2.93-2.81h2.27V7.37s-2.06-.35-4.03-.35c-4.11 0-6.8 2.5-6.8 7.01V18h-4.57v5.2h4.57v12.58a18.18 18.18 0 0 0 5.62 0V23.2h4.2z" fill="#fff"/></svg>
          facebook.com
        </div>
      </div>
      {/* Facebook layout */}
      <div style={{ background: "#f0f2f5", padding: "10px" }}>
        {/* FB top nav bar */}
        <div style={{ background: "#fff", borderRadius: "8px", padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
          <svg width="22" height="22" viewBox="0 0 36 36" fill="none"><path d="M36 18C36 8.06 27.94 0 18 0S0 8.06 0 18c0 8.99 6.58 16.44 15.19 17.78V23.2h-4.57V18h4.57v-3.97c0-4.51 2.69-7.01 6.8-7.01 1.97 0 4.03.35 4.03.35v4.43h-2.27c-2.24 0-2.93 1.39-2.93 2.81V18h4.99l-.8 5.2h-4.19v12.58C29.42 34.44 36 26.99 36 18z" fill="#1877F2"/><path d="M25.01 23.2l.8-5.2h-4.99v-3.39c0-1.42.69-2.81 2.93-2.81h2.27V7.37s-2.06-.35-4.03-.35c-4.11 0-6.8 2.5-6.8 7.01V18h-4.57v5.2h4.57v12.58a18.18 18.18 0 0 0 5.62 0V23.2h4.2z" fill="#fff"/></svg>
          <div style={{ background: "#f0f2f5", borderRadius: "20px", padding: "5px 12px", fontSize: "11px", color: "#65676b", fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: "5px" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="#65676b" strokeWidth="2" strokeLinecap="round"/></svg>
            Search Facebook
          </div>
          <div style={{ display: "flex", gap: "10px", color: "#65676b" }}>
            <FiHome size={16} />
            <FiMonitor size={16} />
            <FiUsers size={16} />
            <MdSportsEsports size={16} />
          </div>
        </div>
        {/* Faded post above ad */}
        <div style={{ background: "#fff", borderRadius: "8px", padding: "10px 12px", marginBottom: "6px", opacity: 0.4, boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#e0e0e0" }} />
            <div>
              <div style={{ width: 80, height: 6, background: "#ccc", borderRadius: "2px", marginBottom: "4px" }} />
              <div style={{ width: 50, height: 4, background: "#ddd", borderRadius: "2px" }} />
            </div>
          </div>
          <div style={{ marginTop: "8px", width: "90%", height: 5, background: "#eee", borderRadius: "2px", marginBottom: "3px" }} />
          <div style={{ width: "70%", height: 5, background: "#eee", borderRadius: "2px" }} />
        </div>
        {/* The Ad card */}
        <div style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.12)" }}>
          {/* Ad header */}
          <div style={{ padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #f472b6, #818cf8)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#050505", fontFamily: "system-ui, sans-serif", lineHeight: 1.2 }}>Halo Studio</div>
                <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                  <span style={{ fontSize: "10px", color: "#65676b", fontFamily: "system-ui, sans-serif" }}>Sponsored</span>
                  <span style={{ fontSize: "10px", color: "#65676b" }}>·</span>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#65676b" strokeWidth="2"/><path d="M2 12h20M12 2c-3 4-3 16 0 20M12 2c3 4 3 16 0 20" stroke="#65676b" strokeWidth="2"/></svg>
                </div>
              </div>
            </div>
            <span style={{ color: "#65676b", fontSize: "18px", lineHeight: 1 }}>···</span>
          </div>
          {/* Caption */}
          <div style={{ padding: "0 12px 10px", fontSize: "13px", color: "#050505", fontFamily: "system-ui, sans-serif", lineHeight: 1.55 }}>
            Stop boosting posts. <strong>Real Meta Ads</strong> build funnels that turn scroll into revenue — WhatsApp leads, form fills, and sales.
          </div>
          {/* Ad creative */}
          <div style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1e1030 40%, #0d1a2e 100%)", height: "150px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg, #f472b6, #818cf8, #60a5fa)", display: "inline-block" }} />
              <span style={{ fontSize: "16px", fontWeight: 800, color: "#fff", fontFamily: "system-ui, sans-serif", letterSpacing: "-0.03em" }}>Halo Studio</span>
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontFamily: "system-ui, sans-serif" }}>Meta Ads · Kampala, Uganda</div>
            <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
              {["Google Ads", "Meta Ads", "Web Dev"].map(tag => (
                <span key={tag} style={{ fontSize: "9px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "20px", padding: "2px 8px", color: "rgba(255,255,255,0.7)", fontFamily: "system-ui, sans-serif" }}>{tag}</span>
              ))}
            </div>
          </div>
          {/* CTA bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "#f0f2f5" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#050505", fontFamily: "system-ui, sans-serif" }}>halostudio.co</div>
              <div style={{ fontSize: "10px", color: "#65676b", fontFamily: "system-ui, sans-serif" }}>Stop boosting posts. Start converting.</div>
            </div>
            <div style={{ background: "#e4e6eb", borderRadius: "6px", padding: "6px 12px", fontSize: "11px", fontWeight: 700, color: "#050505", fontFamily: "system-ui, sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>
              Send message
            </div>
          </div>
          {/* Reaction bar */}
          <div style={{ padding: "8px 12px 10px", borderTop: "1px solid #e4e6eb", display: "flex", alignItems: "center", gap: "4px" }}>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: "50%", background: "#1877F2", color: "#fff" }}><FiThumbsUp size={9} /></span>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: "50%", background: "#f33e58", color: "#fff" }}><FiHeart size={9} /></span>
            </div>
            <span style={{ fontSize: "11px", color: "#65676b", fontFamily: "system-ui, sans-serif", flex: 1 }}>Kampala Business Hub and 847 others</span>
            <span style={{ fontSize: "11px", color: "#65676b", fontFamily: "system-ui, sans-serif" }}>32 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <Navbar />

      {/* Page header */}
      <ScrollReveal>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "160px 32px 80px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "end",
          }}
          className="services-grid services-page-header"
        >
        {/* Left: headline */}
        <div>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)",
              marginBottom: "24px",
            }}
          >
            Services
          </p>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.0,
              color: "#fff",
              marginBottom: "28px",
            }}
          >
            What we do, and how we do it.
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.48)",
              letterSpacing: "-0.01em",
            }}
          >
            Three services. Each one chosen because it directly drives revenue. No brand awareness
            packages. No social media management. Only work that pays back.
          </p>
        </div>

        {/* Right: service quick-nav */}
        <div style={{ paddingBottom: "4px" }}>
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "20px" }}>
            On this page
          </p>
          {[
            { id: "01", title: "Web Development", slug: "web-development", desc: "Sites that load fast and convert." },
            { id: "02", title: "Google Ads", slug: "google-ads", desc: "First result when they're ready to buy." },
            { id: "03", title: "Meta Ads", slug: "meta-ads", desc: "Full-funnel, not just boosted posts." },
          ].map((item, i, arr) => (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "18px 0",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderBottom: i === arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                textDecoration: "none",
                color: "inherit",
                transition: "opacity 0.15s",
              }}
              className="service-nav-link"
            >
              <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", color: "rgba(255,255,255,0.22)", paddingTop: "3px", flexShrink: 0 }}>{item.id}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "15px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.025em", marginBottom: "4px" }}>{item.title}</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
              <svg style={{ flexShrink: 0, marginTop: "4px", color: "rgba(255,255,255,0.2)" }} width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          ))}
        </div>
        </div>
      </ScrollReveal>

      {/* Service sections */}
      {services.map((service, index) => (
        <ScrollReveal key={service.slug} delayMs={100 + index * 70}>
          <section
            id={service.slug}
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "80px 32px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
          {/* Section header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
              marginBottom: "72px",
            }}
            className="services-grid"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  {service.id}
                </span>
                <span
                  style={{
                    height: "1px",
                    width: "32px",
                    background: "rgba(255,255,255,0.15)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  {service.title}
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.06,
                  color: "#fff",
                  marginBottom: "24px",
                }}
              >
                {service.headline}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.48)",
                  letterSpacing: "-0.005em",
                }}
              >
                {service.intro}
              </p>
            </div>

            {/* Platform visual mockup */}
            <div>
              {service.visual === "web" ? (
                <WebDevMockup />
              ) : service.visual === "google" ? (
                <GoogleSERPMockup />
              ) : (
                <MetaAdMockup />
              )}
            </div>
          </div>

          {/* Process */}
          <div style={{ marginBottom: "64px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "28px",
              }}
            >
              Our process
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "1px",
                background: "rgba(255,255,255,0.07)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
              className="process-grid"
            >
              {service.process.map((step) => (
                <div
                  key={step.step}
                  style={{
                    background: "#000",
                    padding: "24px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.22)",
                      letterSpacing: "0.12em",
                      fontWeight: 500,
                      marginBottom: "12px",
                    }}
                  >
                    {step.step}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#f5f5f7",
                      letterSpacing: "-0.02em",
                      marginBottom: "8px",
                    }}
                  >
                    {step.label}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.38)",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom grid: includes + you provide + timeline/investment */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "32px",
            }}
            className="details-grid"
          >
            {/* What's included */}
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "20px",
                }}
              >
                What&apos;s included
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {service.includes.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        marginTop: "6px",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.3)",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* You provide */}
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "20px",
                }}
              >
                You provide
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {service.youProvide.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        marginTop: "6px",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.15)",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline + Investment + CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "8px",
                  }}
                >
                  Timeline
                </p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>
                  {service.timeline}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "8px",
                  }}
                >
                  Investment
                </p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>
                  {service.investment}
                </p>
              </div>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 22px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  background: "#f5f5f7",
                  color: "#1d1d1f",
                  textDecoration: "none",
                  alignSelf: "flex-start",
                }}
              >
                {service.cta} ›
              </Link>
            </div>
          </div>
          </section>
        </ScrollReveal>
      ))}

      {/* Bottom CTA */}
      <ScrollReveal delayMs={160}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "80px 32px 120px",
            textAlign: "center",
          }}
        >
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.06,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Not sure which service you need?
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.75,
            marginBottom: "36px",
          }}
        >
          Tell us about your business and your goals. We&apos;ll recommend a starting point.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 32px",
            borderRadius: "999px",
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            background: "#f5f5f7",
            color: "#1d1d1f",
            textDecoration: "none",
          }}
        >
          Book a free discovery call ›
        </Link>
        </div>
      </ScrollReveal>

      <Footer />

      <style>{`
        .service-nav-link:hover { opacity: 0.65; }
        .service-nav-link:hover svg { color: rgba(255,255,255,0.55) !important; }
        @media (max-width: 767px) {
          .services-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .services-page-header { padding-top: 104px !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .details-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
