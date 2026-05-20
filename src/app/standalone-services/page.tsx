import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiArrowRight } from "react-icons/fi";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Standalone Services Uganda — Halo Studio",
  description:
    "One-off marketing services for Ugandan businesses, from social media management to video production and analytics setup.",
};

const standaloneServices = [
  {
    title: "Social Media Management",
    amount: "600,000",
    period: "/ month",
    description:
      "Organic social across Instagram, Facebook, TikTok, and LinkedIn. Includes content calendar, copywriting, scheduling, and monthly performance reporting.",
  },
  {
    title: "WhatsApp Marketing",
    amount: "500,000",
    period: "/ month",
    description:
      "Broadcast campaigns, drip sequences, and catalogue integration via WhatsApp Business API. Ideal for retention, re-engagement, and last-mile sales.",
  },
  {
    title: "Video Production",
    amount: "1,200,000",
    period: "/ project",
    description:
      "Brand films, ad creative, product demos, social-first short-form video, and testimonials. Scripted, shot, and edited in-house.",
  },
  {
    title: "Influencer Marketing",
    amount: "2,000,000",
    period: "/ campaign",
    description:
      "End-to-end influencer campaigns: talent identification, outreach, briefing, approval, posting, and full performance reporting with tracked links.",
  },
  {
    title: "Creative Design",
    amount: "600,000",
    period: "/ project",
    description:
      "Brand identities, marketing collateral, pitch decks, ad creative, and social templates. One-off projects or retained design support.",
  },
  {
    title: "Analytics Audit & Setup",
    amount: "800,000",
    period: "/ one-off",
    description:
      "GA4 configuration, conversion tracking, custom event setup, Looker Studio dashboard build, and a written findings report delivered once and done.",
  },
];

export default function StandaloneServicesPage() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff", position: "relative" }}>
      <Navbar />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "74px",
          left: "50%",
          width: "960px",
          height: "420px",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse at center, rgba(105, 117, 255, 0.14) 0%, rgba(0, 0, 0, 0) 68%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <main style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "132px 32px 56px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "grid",
            gridTemplateColumns: "1.35fr 1fr",
            gap: "44px",
            alignItems: "end",
          }}
          className="standalone-header standalone-page-header"
        >
          <ScrollReveal>
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
              Standalone services
            </p>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.1rem)",
                fontWeight: 800,
                letterSpacing: "-0.045em",
                lineHeight: 1.04,
                marginBottom: "18px",
              }}
            >
              Specialist execution, on demand.
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "-0.01em",
                maxWidth: "620px",
              }}
            >
              Need one service only? Book any standalone offer below as a one-off or monthly engagement. Add-ons are available to current retainers too.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">
                Book standalone service
              </Link>
              <Link href="/packages" className="btn btn-ghost">
                View monthly packages
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ paddingBottom: "4px" }}>
              {[
                "6 standalone service options",
                "Starts from UGX 500,000",
                "Book independently or as add-ons",
              ].map((item, i, arr) => (
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
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "999px",
                      background: "linear-gradient(135deg, #f472b6, #818cf8, #60a5fa)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.62)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "56px 32px 72px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="standalone-grid">
            {standaloneServices.map((service, index) => (
              <ScrollReveal
                key={service.title}
                delayMs={80 + index * 70}
              >
                <article className="standalone-card">
                  <p className="standalone-label">{service.title}</p>
                  <h2 className="standalone-price">
                    <span className="standalone-from">From UGX</span>
                    {service.amount}
                    <span>{service.period}</span>
                  </h2>
                  <p className="standalone-desc">{service.description}</p>
                  <Link href="/contact" className="standalone-link">
                    Enquire
                    <FiArrowRight size={14} strokeWidth={2.4} className="standalone-arrow" aria-hidden="true" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "68px 32px 92px",
            textAlign: "center",
          }}
        >
          <ScrollReveal delayMs={120}>
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
              Need a recommendation first?
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.4vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "20px",
              }}
            >
              We can help you choose the right service.
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                letterSpacing: "-0.01em",
                maxWidth: "560px",
                margin: "0 auto 34px",
              }}
            >
              Tell us what you are trying to achieve and we will recommend the highest-leverage standalone service for your current stage.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a strategy call
            </Link>
          </ScrollReveal>
        </div>
      </main>

      <Footer />

      <style>{`
        .scroll-reveal {
          opacity: 1;
          transform: none;
        }

        .scroll-reveal.reveal-pending {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.68s cubic-bezier(0.22, 1, 0.36, 1), transform 0.68s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .scroll-reveal.reveal-pending.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .standalone-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .standalone-card {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 30px 28px 26px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          transition: border-color 220ms ease, background-color 220ms ease;
        }

        .standalone-card:hover {
          border-color: rgba(255,255,255,0.16);
          background: #0d0d10;
        }

        .standalone-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 20px;
        }

        .standalone-price {
          font-size: clamp(1.9rem, 3.2vw, 2.7rem);
          line-height: 1.1;
          letter-spacing: -0.04em;
          color: #fff;
          margin: 0 0 14px;
        }

        .standalone-from {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.26);
          margin-bottom: 8px;
        }

        .standalone-price span {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: rgba(255,255,255,0.33);
          margin-left: 6px;
        }

        .standalone-desc {
          font-size: 15px;
          line-height: 1.72;
          color: rgba(255,255,255,0.45);
          letter-spacing: -0.01em;
          margin: 0;
        }

        .standalone-link {
          margin-top: auto;
          padding-top: 22px;
          color: rgba(255,255,255,0.92);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.005em;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          transition: opacity 180ms ease, color 180ms ease;
        }

        .standalone-arrow {
          flex-shrink: 0;
          opacity: 0.85;
        }

        .standalone-link:hover {
          opacity: 0.9;
          color: #fff;
        }

        @media (max-width: 1180px) {
          .standalone-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-reveal,
          .scroll-reveal.reveal-pending,
          .scroll-reveal.reveal-pending.is-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .standalone-card,
          .standalone-arrow {
            transition: none;
          }

          .standalone-card:hover {
            transform: none;
          }
        }

        @media (max-width: 767px) {
          .standalone-page-header {
            padding: 100px 24px 40px !important;
          }

          .standalone-header {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }

          .standalone-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .standalone-card {
            min-height: 0;
            padding: 24px;
            border-radius: 14px;
          }

          .standalone-price {
            font-size: clamp(2rem, 10vw, 2.4rem);
          }
        }
      `}</style>
    </div>
  );
}
