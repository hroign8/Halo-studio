import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Performance Marketing Packages Uganda — Halo Studio",
  description:
    "Google Ads and Meta Ads packages for Ugandan businesses — from UGX 1,500,000/month. Includes a custom landing page. No website needed. No lock-in.",
};

const packages = [
  {
    id: "01",
    name: "Launch",
    amount: "1,500,000",
    currency: "UGX",
    period: "/ mo",
    tagline: "Your first revenue channel, live in 7 days.",
    desc: "No website? No problem. We build your landing page and run one paid channel — Google Ads or Meta Ads — fully managed. Test the market with real data before committing to more.",
    highlight: false,
    cta: "Start with Launch",
    features: [
      "1 active channel — Google Ads OR Meta Ads",
      "Full campaign setup & copywriting",
      "Custom landing page build (1 page)",
      "Conversion tracking from day one",
      "Monthly performance report",
      "WhatsApp & email support",
    ],
  },
  {
    id: "02",
    name: "Scale",
    amount: "2,800,000",
    currency: "UGX",
    period: "/ mo",
    tagline: "Double your reach. Google and Meta as one.",
    desc: "Capture buyers at every stage — search when they're ready, social when they're browsing. Both channels managed together with one strategy and one monthly report.",
    highlight: true,
    cta: "Start with Scale",
    features: [
      "Google Ads + Meta Ads, fully managed",
      "Custom landing page build + monthly optimisation",
      "Meta Pixel + full event tracking",
      "A/B testing on creatives & copy",
      "Bi-weekly strategy calls",
      "Weekly performance reports",
    ],
  },
  {
    id: "03",
    name: "Revenue Engine",
    amount: "Custom",
    currency: "",
    period: "",
    tagline: "Ads, landing page, and strategy — done for you.",
    desc: "For businesses ready to go all-in. We handle your landing page, both ad channels, and the growth strategy that ties it all together — so you can focus on the work.",
    highlight: false,
    cta: "Let's talk",
    features: [
      "All three services — Web + Google + Meta",
      "Dedicated landing page + full website funnel strategy",
      "Dedicated account manager",
      "Monthly creative refresh for ads",
      "Custom analytics dashboard",
      "Priority support (same-day response)",
      "Quarterly growth strategy review",
    ],
  },
];

const alwaysIncluded = [
  "No website needed to start",
  "Uganda & diaspora market targeting",
  "Airtel & MTN speed optimisation",
  "WhatsApp click-to-chat on every landing page",
  "Month-to-month — cancel with 30 days notice",
  "Revenue-focused reporting, not vanity metrics",
];

const faqs = [
  {
    q: "Do I need a website before I can start?",
    a: "No. Every package includes a custom landing page built specifically for your ad campaigns. We handle that before any ads go live.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Your business name, what you sell, who your customers are, and any photos or brand colours you have. We handle everything else — copy, design, setup, and management.",
  },
  {
    q: "Is ad spend included in the monthly fee?",
    a: "No — the monthly fee covers our management work. Ad spend (the budget paid directly to Google or Meta) is separate. We recommend a minimum of UGX 500,000/month in ad spend to get meaningful data.",
  },
  {
    q: "Can I start on Launch and upgrade later?",
    a: "Absolutely. Most clients start on Launch, see results in 60–90 days, then move to Scale. We make upgrading seamless — no new contracts, no downtime.",
  },
  {
    q: "What does 'no lock-in' mean?",
    a: "Month-to-month agreements. If we're not delivering results and can't fix it, you can leave with 30 days notice. We earn your business every month.",
  },
  {
    q: "How quickly can campaigns go live?",
    a: "Landing page first — typically 5–7 business days. Google Ads go live within 2 days of page launch. Meta Ads within 1–2 days. You'll be in-market within 2 weeks of starting.",
  },
];

export default function PackagesPage() {
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "end",
        }}
        className="pkg-header-grid pkg-page-header"
      >
        {/* Left */}
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
            Pricing
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
            Packages built for{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(90deg, #f472b6, #818cf8, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ugandan businesses.
            </span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.48)",
              letterSpacing: "-0.01em",
            }}
          >
            Landing page + paid ads, managed end-to-end. No website required to start. Priced for businesses serious about growth — month-to-month, no lock-in.
          </p>
        </div>

        {/* Right: always included */}
        <div style={{ paddingBottom: "4px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "20px",
            }}
          >
            In every package
          </p>
          {alwaysIncluded.map((item, i, arr) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 0",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderBottom: i === arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <FiCheck size={13} color="#818cf8" strokeWidth={2.5} style={{ flexShrink: 0 }} />
              <span
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  letterSpacing: "-0.01em",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Package cards */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
          }}
          className="pkg-cards-grid"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              style={{
                background: pkg.highlight ? "#fff" : "#0a0a0a",
                border: pkg.highlight ? "none" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "36px 32px 32px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {pkg.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    background: "#000",
                    color: "#fff",
                    borderRadius: "20px",
                    padding: "4px 10px",
                  }}
                >
                  Most popular
                </div>
              )}

              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: pkg.highlight ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.22)",
                  marginBottom: "20px",
                  display: "block",
                }}
              >
                {pkg.id}
              </span>

              <div style={{ marginBottom: "20px" }}>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: pkg.highlight ? "#000" : "#fff",
                    marginBottom: "6px",
                  }}
                >
                  {pkg.name}
                </h2>
                <p
                  style={{
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: pkg.highlight ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.38)",
                  }}
                >
                  {pkg.tagline}
                </p>
              </div>

              <div
                style={{
                  marginBottom: "20px",
                  paddingBottom: "20px",
                  borderBottom: `1px solid ${pkg.highlight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.07)"}`,
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  {pkg.currency && (
                    <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: pkg.highlight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.3)", marginBottom: "6px" }}>
                      {pkg.currency}
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span
                      style={{
                        fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.045em",
                        lineHeight: 1,
                        color: pkg.highlight ? "#000" : "#fff",
                      }}
                    >
                      {pkg.amount}
                    </span>
                    {pkg.period && (
                      <span
                        style={{
                          fontSize: "13px",
                          color: pkg.highlight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.28)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {pkg.period}
                      </span>
                    )}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: pkg.highlight ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.38)",
                    lineHeight: 1.6,
                  }}
                >
                  {pkg.desc}
                </p>
              </div>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flex: 1,
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px 0",
                }}
              >
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      color: pkg.highlight ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.6)",
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <FiCheck
                      size={13}
                      strokeWidth={2.5}
                      color={pkg.highlight ? "#000" : "#818cf8"}
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                  background: pkg.highlight ? "#000" : "rgba(255,255,255,0.06)",
                  color: pkg.highlight ? "#fff" : "#f5f5f7",
                  border: pkg.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
                }}
                className="pkg-cta"
              >
                {pkg.cta}
                <FiArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "rgba(255,255,255,0.22)",
            marginTop: "28px",
            letterSpacing: "-0.01em",
          }}
        >
          All prices in Ugandan Shillings. Ad spend budget is separate from management fees.
          Payment plans available on request.
        </p>
      </div>

      {/* FAQ */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "64px",
          alignItems: "start",
        }}
        className="pkg-faq-grid"
      >
        <div>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "16px",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              color: "#fff",
            }}
          >
            Common questions.
          </h2>
        </div>

        <div>
          {faqs.map((faq, i, arr) => (
            <div
              key={faq.q}
              style={{
                paddingTop: i === 0 ? 0 : "28px",
                paddingBottom: i < arr.length - 1 ? "28px" : 0,
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#f5f5f7",
                  letterSpacing: "-0.025em",
                  marginBottom: "10px",
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.75,
                  letterSpacing: "-0.005em",
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
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
        <p
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
            marginBottom: "20px",
          }}
        >
          Free 30-minute strategy call
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
          Not sure where to start?
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.42)",
            lineHeight: 1.7,
            letterSpacing: "-0.01em",
            maxWidth: "480px",
            margin: "0 auto 36px",
          }}
        >
          Tell us about your business in 30 minutes. We&apos;ll come back with a clear recommendation — which channel, which package, what to expect in 90 days. No pitch, no pressure.
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
        >
          Book a free discovery call
          <FiArrowRight size={15} strokeWidth={2.5} />
        </Link>
      </div>

      <Footer />

      <style>{`
        .pkg-cta:hover { opacity: 0.75; }
        @media (max-width: 767px) {
          .pkg-header-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .pkg-page-header { padding-top: 104px !important; padding-bottom: 48px !important; }
          .pkg-cards-grid { grid-template-columns: 1fr !important; }
          .pkg-faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}
