

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", background: "#000", overflow: "hidden" }}>
      <style>{`
        @media (max-width: 767px) {
          .hero-copy { padding: 104px 24px 36px !important; }
          .hero-visual { display: none; }
        }
      `}</style>
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "45%",
          width: "700px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(167,139,250,0.3) 0%, rgba(244,114,182,0.2) 45%, transparent 70%)",
          filter: "blur(72px)",
          pointerEvents: "none",
        }}
      />

      {/* Hero copy — centered */}
      <div
        className="hero-copy"
        style={{
          position: "relative",
          maxWidth: "820px",
          margin: "0 auto",
          padding: "160px 32px 64px",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.38)",
            marginBottom: "28px",
          }}
        >
          Performance Studio, Kampala
        </p>

        {/* Headline */}
        <h1
          style={{
            lineHeight: 0.97,
            letterSpacing: "-0.045em",
            margin: 0,
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(3.2rem,8vw,7rem)",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            Revenue,
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(3.2rem,8vw,7rem)",
              fontWeight: 800,
              fontStyle: "italic",
              fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
              background: "linear-gradient(135deg, #f472b6 0%, #a78bfa 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            engineered.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            marginTop: "28px",
            fontSize: "17px",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.52)",
            letterSpacing: "-0.01em",
            maxWidth: "480px",
            margin: "28px auto 0",
          }}
        >
          We turn ad spend into measurable revenue — for Ugandan businesses ready to grow.
        </p>

        {/* CTAs */}
        <div
          style={{
            marginTop: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 28px",
              borderRadius: "999px",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              background: "#f5f5f7",
              color: "#1d1d1f",
              textDecoration: "none",
              transition: "opacity 0.18s ease",
              border: "none",
            }}
          >
            Get in touch ›
          </a>
        </div>
      </div>

      {/* Hero visual */}
      <div
        className="hero-visual"
        style={{
          position: "relative",
          maxWidth: "1080px",
          margin: "24px auto 0",
          padding: "0 24px 24px",
        }}
      >
        {/* Google Ads preview card */}
        <div
          style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#111",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              background: "#1e1e1e",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Traffic lights */}
            <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
            </div>
            {/* URL bar */}
            <div
              style={{
                flex: 1,
                background: "#2a2a2a",
                borderRadius: "6px",
                padding: "5px 12px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: 0,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              google.com/search?q=performance+marketing+agency+uganda
            </div>
          </div>

          {/* SERP page */}
          <div style={{ position: "relative", background: "#fff", padding: "20px 24px 28px" }}>

            {/* Google logo + search bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <svg width="74" height="24" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                <path d="M35.29 41.41V32h31.77c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.03 9.66C16.32 69.35.36 53.89.36 34.79.36 15.69 16.32.23 35.34.23c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.53.05z" fill="#4285F4"/>
              </svg>
              <div
                style={{
                  flex: 1,
                  maxWidth: "580px",
                  border: "1px solid #dfe1e5",
                  borderRadius: "24px",
                  padding: "9px 18px",
                  fontSize: "14px",
                  color: "#202124",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 1px 6px rgba(32,33,36,0.12)",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                performance marketing agency uganda
              </div>
            </div>

            {/* Sponsored label */}
            <div style={{ marginBottom: "8px" }}>
              <span
                style={{
                  fontSize: "11px",
                  color: "#70757a",
                  fontFamily: "system-ui, sans-serif",
                  letterSpacing: "0.01em",
                }}
              >
                Sponsored
              </span>
            </div>

            {/* Ad result */}
            <div
              style={{
                borderLeft: "3px solid #1a73e8",
                paddingLeft: "14px",
                marginBottom: "24px",
              }}
            >
              {/* Favicon + URL row */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #f472b6, #818cf8)",
                    flexShrink: 0,
                  }}
                />
                <div style={{ fontFamily: "system-ui, sans-serif" }}>
                  <div style={{ fontSize: "13px", color: "#202124", lineHeight: 1.3 }}>Halo Studio</div>
                  <div style={{ fontSize: "12px", color: "#0d652d" }}>https://halostudio.co &rsaquo; google-ads</div>
                </div>
              </div>

              {/* Ad headline */}
              <a
                style={{
                  display: "block",
                  fontSize: "19px",
                  color: "#1a0dab",
                  textDecoration: "none",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  marginBottom: "4px",
                  cursor: "pointer",
                }}
              >
                Google Ads Agency Uganda | Revenue-Focused Campaigns
              </a>

              {/* Ad description */}
              <p
                style={{
                  fontSize: "13px",
                  color: "#4d5156",
                  fontFamily: "system-ui, sans-serif",
                  lineHeight: 1.55,
                  margin: 0,
                  maxWidth: "600px",
                }}
              >
                Stop guessing. We build high-converting ad campaigns and track every shilling back to revenue.
                Google &amp; Meta certified. UGX 500K minimum budget.
              </p>

              {/* Sitelinks */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "10px",
                }}
              >
                {["Google Ads", "Meta Ads", "Web Design", "Contact Us"].map((link) => (
                  <a
                    key={link}
                    style={{
                      fontSize: "13px",
                      color: "#1a0dab",
                      textDecoration: "none",
                      border: "1px solid #dadce0",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      fontFamily: "system-ui, sans-serif",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Organic result 1 (faded) */}
            <div style={{ opacity: 0.38, marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#e0e0e0", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "13px", color: "#202124", fontFamily: "system-ui, sans-serif" }}>Random Agency KE</div>
                  <div style={{ fontSize: "12px", color: "#0d652d", fontFamily: "system-ui, sans-serif" }}>https://randomagency.ke</div>
                </div>
              </div>
              <div style={{ fontSize: "18px", color: "#1a0dab", fontFamily: "system-ui, sans-serif", marginBottom: "3px" }}>Digital Marketing Kenya | Social Media</div>
              <div style={{ fontSize: "13px", color: "#4d5156", fontFamily: "system-ui, sans-serif", lineHeight: 1.55, maxWidth: "580px" }}>
                We manage your Facebook page and help grow your followers organically...
              </div>
            </div>

            {/* Organic result 2 (faded) */}
            <div style={{ opacity: 0.22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#e0e0e0", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "13px", color: "#202124", fontFamily: "system-ui, sans-serif" }}>Freelancer Ads UG</div>
                  <div style={{ fontSize: "12px", color: "#0d652d", fontFamily: "system-ui, sans-serif" }}>https://upwork.com › profiles</div>
                </div>
              </div>
              <div style={{ fontSize: "18px", color: "#1a0dab", fontFamily: "system-ui, sans-serif", marginBottom: "3px" }}>Boost Your Posts | Affordable Social Media Uganda</div>
              <div style={{ fontSize: "13px", color: "#4d5156", fontFamily: "system-ui, sans-serif", lineHeight: 1.55, maxWidth: "580px" }}>
                Get more likes and shares. We boost your posts for only UGX 50,000/month...
              </div>
            </div>

            {/* White bottom fade — dissolves the organic results into nothing */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "120px",
                background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
