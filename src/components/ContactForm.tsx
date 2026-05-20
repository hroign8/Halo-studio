"use client";

import { useState } from "react";

const BUDGETS = [
  "Under UGX 1M / month",
  "UGX 1M – 3M / month",
  "UGX 3M – 6M / month",
  "UGX 6M – 10M / month",
  "Above UGX 10M / month",
  "Prefer to discuss on call",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  padding: "13px 16px",
  fontSize: "15px",
  color: "rgba(255,255,255,0.9)",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.38)",
};

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", budget: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) { setErrorMsg("Please agree to the privacy policy."); return; }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "48px 0" }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            letterSpacing: "-0.025em",
            color: "#fff",
          }}
        >
          Enquiry sent.
        </h3>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
          Thanks, {fields.name.split(" ")[0]}. I&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-name-grid">
        <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={labelStyle}>Name</span>
          <input
            type="text"
            placeholder="Your name"
            required
            value={fields.name}
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            style={inputStyle}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={labelStyle}>Email</span>
          <input
            type="email"
            placeholder="your@email.com"
            required
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            style={inputStyle}
          />
        </label>
      </div>

      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={labelStyle}>Budget range</span>
        <select
          value={fields.budget}
          onChange={(e) => setFields({ ...fields, budget: e.target.value })}
          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
        >
          <option value="">Select a range</option>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </label>

      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={labelStyle}>What do you want to achieve?</span>
        <textarea
          placeholder="Describe your goal — more leads, higher sales, a new launch…"
          rows={5}
          required
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
          style={{ ...inputStyle, resize: "none" }}
        />
      </label>

      <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", marginTop: "4px" }}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          style={{ marginTop: "3px", flexShrink: 0, accentColor: "#fff" }}
        />
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
          I agree that Halo Studio may store this information to respond to my enquiry. Data
          won&apos;t be sold or shared.{" "}
          <a
            href="/privacy"
            style={{
              color: "rgba(255,255,255,0.55)",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            Privacy policy
          </a>
          .
        </span>
      </label>

      {errorMsg && (
        <p style={{ fontSize: "13px", color: "#f87171" }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "8px",
          padding: "15px 28px",
          borderRadius: "999px",
          fontSize: "15px",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          background: status === "sending" ? "rgba(245,245,247,0.5)" : "#f5f5f7",
          color: "#1d1d1f",
          border: "none",
          cursor: status === "sending" ? "default" : "pointer",
          fontFamily: "inherit",
          transition: "opacity 0.18s ease",
        }}
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
