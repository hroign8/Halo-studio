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

export default function CTA() {
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

  return (
    <section
      id="contact"
      style={{ scrollMarginTop: "84px" }}
      className="px-6 md:px-10 py-24 md:py-32 w-full"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px w-full bg-white/[0.07] mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left — copy */}
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-bold tracking-[-0.045em] leading-[1.08] text-white">
              Ready to build something real?
            </h2>
            <p className="mt-5 text-[17px] text-white/50 leading-[1.8] tracking-[-0.01em] max-w-[420px]">
              Tell me about your business and where you want it to go. I&apos;ll come back with a clear plan, not a sales pitch.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                { label: "Kampala-based clients", detail: "Same-day response, local context." },
                { label: "Diaspora businesses", detail: "Remote-friendly. Timezone aware." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span
                    className="mt-[6px] size-[5px] rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #f472b6, #a78bfa)" }}
                  />
                  <div>
                    <p className="text-[14px] font-medium text-white/80">{item.label}</p>
                    <p className="text-[13px] text-white/38">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          {status === "sent" ? (
            <div className="flex flex-col gap-4 py-12">
              <div
                className="size-[44px] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[1.3rem] font-semibold tracking-[-0.025em] text-white">Enquiry sent.</h3>
              <p className="text-[15px] text-white/45 leading-[1.7]">
                Thanks, {fields.name.split(" ")[0]}. I&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="eyebrow">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={fields.name}
                    onChange={(e) => setFields({ ...fields, name: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-[15px] text-white/90 placeholder:text-white/25 outline-none focus:border-white/25 transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="eyebrow">Email</span>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={fields.email}
                    onChange={(e) => setFields({ ...fields, email: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-[15px] text-white/90 placeholder:text-white/25 outline-none focus:border-white/25 transition-colors"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="eyebrow">Budget range</span>
                <select
                  value={fields.budget}
                  onChange={(e) => setFields({ ...fields, budget: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-[15px] text-white/90 outline-none focus:border-white/25 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a range</option>
                  {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="eyebrow">What do you want to achieve?</span>
                <textarea
                  placeholder="Describe your goal — more leads, higher sales, a new launch…"
                  rows={4}
                  required
                  value={fields.message}
                  onChange={(e) => setFields({ ...fields, message: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-[15px] text-white/90 placeholder:text-white/25 outline-none focus:border-white/25 transition-colors resize-none"
                />
              </label>

              <label className="flex items-start gap-3 cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-[3px] flex-shrink-0 accent-white"
                />
                <span className="text-[13px] text-white/35 leading-[1.6]">
                  I agree that Halo Studio may store this information to respond to my enquiry.
                  Data won&apos;t be sold or shared.{" "}
                  <a href="/privacy" className="text-white/55 underline underline-offset-2 hover:text-white/80 transition-colors">
                    Privacy policy
                  </a>
                  .
                </span>
              </label>

              {errorMsg && (
                <p className="text-[13px] text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary w-full mt-2 disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
