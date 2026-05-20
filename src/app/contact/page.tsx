import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — Halo Studio",
  description:
    "Tell us about your business and your goals. We'll come back with a clear plan, not a sales pitch.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <Navbar />

      {/* Page header */}
      <ScrollReveal>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "160px 32px 64px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
          className="contact-page-header"
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
          Contact
        </p>
        <h1
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1.0,
            color: "#fff",
            marginBottom: "24px",
          }}
        >
          Ready to build{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(90deg, #f472b6, #818cf8, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            something real?
          </span>
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.50)",
            letterSpacing: "-0.01em",
            maxWidth: "520px",
          }}
        >
          Tell us about your business and where you want it to go. We&apos;ll come back with a
          clear plan, not a sales pitch.
        </p>
        </div>
      </ScrollReveal>

      {/* Form section */}
      <ScrollReveal delayMs={90}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "64px 32px 100px",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
        {/* Left — context */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {[
              {
                label: "Kampala-based clients",
                detail: "Same-day response, local context. We can meet in person.",
              },
              {
                label: "Diaspora businesses",
                detail: "Remote-friendly. Timezone aware. We work with Ugandan businesses globally.",
              },
              {
                label: "No obligation",
                detail:
                  "We\u2019ll review your situation and give you an honest recommendation before any contract.",
              },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <span
                  style={{
                    marginTop: "7px",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.80)",
                      letterSpacing: "-0.015em",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.38)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "56px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.22)",
                marginBottom: "16px",
              }}
            >
              Typical response time
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.65,
              }}
            >
              Within 24 hours on weekdays. We&apos;ll confirm we&apos;ve received your message and
              schedule a call if it&apos;s a good fit.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <ContactForm />
        </div>
      </ScrollReveal>

      <Footer />

      <style>{`
        @media (max-width: 767px) {
          .contact-page-header { padding-top: 104px !important; padding-bottom: 40px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
