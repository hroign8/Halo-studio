import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Halo Studio",
  description:
    "How Halo Studio collects, uses, and protects personal information submitted through this website and client communications.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 md:px-10 pt-32 pb-24">
      <ScrollReveal>
      <section className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-white/35 mb-5">
          Privacy
        </p>
        <h1 className="text-[clamp(2rem,4.4vw,3.6rem)] font-bold tracking-[-0.03em] text-white leading-[1.05] mb-6">
          Privacy Policy
        </h1>

        <p className="text-white/45 text-sm mb-8">Last updated: May 19, 2026</p>

        <div className="space-y-8 mb-10">
          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">1. Information We Collect</h2>
            <p className="text-white/70 leading-7">
              We collect information you provide directly, including your name, email address, company details, budget
              range, and project information submitted through our contact form, email, or other direct communication.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">2. How We Use Information</h2>
            <p className="text-white/70 leading-7">
              We use your information to respond to inquiries, prepare proposals, deliver services, process payments,
              and manage our client relationship. We may also retain communications for recordkeeping, quality,
              security, and legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">3. Sharing and Disclosure</h2>
            <p className="text-white/70 leading-7">
              We do not sell your personal information. We only share data with trusted service providers when needed
              to run our business, such as hosting, invoicing, and analytics providers, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">4. Data Retention and Security</h2>
            <p className="text-white/70 leading-7">
              We keep information only as long as necessary for the purposes described here, then delete or anonymize
              it when no longer required. We use reasonable administrative and technical safeguards to protect
              information against unauthorized access and misuse.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">5. Your Rights</h2>
            <p className="text-white/70 leading-7">
              Depending on your location, you may have rights to access, correct, delete, or restrict use of your
              personal information. To exercise these rights, contact us through the website contact form and include
              your request details.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">6. Changes to This Policy</h2>
            <p className="text-white/70 leading-7">
              We may update this Privacy Policy from time to time. Material updates will be reflected by revising the
              "Last updated" date above.
            </p>
          </section>
        </div>

        <Link href="/" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">
          ← Back to home
        </Link>
      </section>
      </ScrollReveal>
    </main>
    <Footer />
    </div>
  );
}
