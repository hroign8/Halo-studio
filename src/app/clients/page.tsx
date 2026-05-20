import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Businesses We Work With — Halo Studio",
  description:
    "Halo Studio works with Ugandan businesses that are active on WhatsApp and social media but have no website yet. Restaurants, retail, professional services, schools, and more.",
};

const sectors = [
  {
    id: "01",
    name: "Restaurants & Food Businesses",
    examples: "Restaurants, caterers, cloud kitchens, food delivery brands",
    signal: "You take orders on WhatsApp, post menus on Facebook, but have no place to send customers when they Google you.",
    opportunity: "A landing page and Google Ads campaign puts you in front of people searching 'restaurants near me' or 'food delivery Kampala' at the exact moment they're hungry.",
    result: "More direct orders. Less dependence on food delivery platforms taking 25–30% per order.",
  },
  {
    id: "02",
    name: "Retail & E-commerce",
    examples: "Clothing boutiques, electronics, household goods, beauty products",
    signal: "You sell on Instagram and WhatsApp catalogues. Orders come through DMs. You have no way to scale beyond your current follower count.",
    opportunity: "A product landing page connected to Meta Ads takes you from 'people who already follow me' to 'people in Kampala looking to buy right now.'",
    result: "A consistent flow of new buyers who didn't already know you existed.",
  },
  {
    id: "03",
    name: "Professional Services",
    examples: "Lawyers, accountants, consultants, architects, HR firms",
    signal: "Most of your clients come from referrals. You have a LinkedIn profile or Facebook page but nothing that explains what you do, who you help, or how to hire you.",
    opportunity: "A professional landing page and Google Ads campaign captures high-intent searches like 'tax accountant Kampala' or 'employment lawyer Uganda.'",
    result: "Qualified leads from people who need exactly what you offer — not just your network.",
  },
  {
    id: "04",
    name: "Healthcare & Wellness",
    examples: "Clinics, pharmacies, gyms, physiotherapists, mental health practitioners",
    signal: "Patients find you through word of mouth or physical signage. You have no way to reach people searching for your service online.",
    opportunity: "Google Ads and a clean landing page with your services, location, and booking contact puts you first when someone searches 'clinic near me' or 'gym Kampala.'",
    result: "A steady stream of new patients or members without relying entirely on walk-ins.",
  },
  {
    id: "05",
    name: "Schools & Training Institutions",
    examples: "Private schools, vocational training, tutoring centres, online course providers",
    signal: "Enrolment depends on word of mouth and physical flyers. You have a Facebook page but no structured way to collect enquiries or showcase your programme.",
    opportunity: "A focused landing page with Meta Ads reaches parents and students during enrolment season — or year-round for short courses.",
    result: "More enquiries per term. Less reliance on seasonal walk-ins.",
  },
  {
    id: "06",
    name: "Real Estate & Property",
    examples: "Agents, property developers, landlords, holiday rentals",
    signal: "You list properties on WhatsApp groups and OLX. Serious buyers are hard to reach and the enquiry quality is inconsistent.",
    opportunity: "A property landing page and Google Ads campaign captures buyers actively searching for property in specific areas, budget ranges, or property types.",
    result: "Higher-quality leads from people who are ready to buy or rent — not just browsing.",
  },
];

const notAGoodFit = [
  "Businesses with no clear product or service yet",
  "Businesses unwilling to invest a minimum ad budget alongside management fees",
  "Businesses expecting overnight results without a testing phase",
  "Businesses that need mass social media management or content creation only",
];

export default function ClientsPage() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <Navbar />

      {/* Page header */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "160px 32px 80px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="clients-page-header"
      >
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
          Who we help
        </p>
        <h1
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1.0,
            color: "#fff",
            marginBottom: "28px",
            maxWidth: "820px",
          }}
        >
          Built for businesses that are{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(90deg, #f472b6, #818cf8, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            online but invisible.
          </span>
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.48)",
            letterSpacing: "-0.01em",
            maxWidth: "620px",
          }}
        >
          You&apos;re active on WhatsApp, Instagram, or Facebook — but when a customer Googles your
          category, you don&apos;t show up. We build the landing page and run the ads that change
          that.
        </p>
      </div>

      {/* Sectors */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
            marginBottom: "56px",
          }}
        >
          Sectors
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden" }}>
          {sectors.map((sector) => (
            <div
              key={sector.id}
              style={{ background: "#000", padding: "40px 36px" }}
              className="sector-card"
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", alignItems: "start" }} className="sector-inner">
                {/* Left: name + examples */}
                <div>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.12em", fontWeight: 500, display: "block", marginBottom: "12px" }}>{sector.id}</span>
                  <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.25, marginBottom: "10px" }}>{sector.name}</h2>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: 1.6, fontStyle: "italic" }}>{sector.examples}</p>
                </div>

                {/* Middle: signal + opportunity */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "8px" }}>The gap</p>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{sector.signal}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "8px" }}>What we do</p>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{sector.opportunity}</p>
                  </div>
                </div>

                {/* Right: result */}
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "24px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(129,140,248,0.7)", marginBottom: "10px" }}>The outcome</p>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.65, letterSpacing: "-0.01em" }}>{sector.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Not a good fit */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}
        className="not-fit-grid"
      >
        <div>
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>
            Honesty first
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            When we&apos;re probably not the right fit.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }}>
            Performance marketing only works when the fundamentals are right. If any of these
            describe your situation, we&apos;d rather tell you now than take your money.
          </p>
        </div>

        <ul style={{ display: "flex", flexDirection: "column", gap: "0", listStyle: "none", padding: 0, margin: 0, paddingTop: "8px" }}>
          {notAGoodFit.map((item, i, arr) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "20px 0",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderBottom: i === arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <span style={{ width: "16px", height: "16px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                <span style={{ width: "6px", height: "1.5px", background: "rgba(255,255,255,0.3)", display: "block", borderRadius: "1px" }} />
              </span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px 100px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "20px" }}>
          Sounds like you?
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Let&apos;s get you visible.
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.42)",
            lineHeight: 1.7,
            letterSpacing: "-0.01em",
            maxWidth: "460px",
            margin: "0 auto 36px",
          }}
        >
          Tell us about your business and where you want to grow. We&apos;ll recommend a package and
          show you exactly what a campaign would look like for your category.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#f5f5f7",
            color: "#1d1d1f",
            borderRadius: "100px",
            padding: "16px 32px",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
          className="clients-cta"
        >
          Start a conversation
          <FiArrowRight size={15} strokeWidth={2.5} />
        </Link>
      </div>

      <Footer />

      <style>{`
        .clients-cta:hover { opacity: 0.82; }
        @media (max-width: 767px) {
          .clients-page-header { padding-top: 104px !important; padding-bottom: 48px !important; }
          .sector-inner { grid-template-columns: 1fr !important; gap: 24px !important; }
          .sector-card { padding: 28px 20px !important; }
          .not-fit-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </div>
  );
}
