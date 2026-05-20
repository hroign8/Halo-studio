import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Halo Studio",
  description:
    "The engagement, payment, intellectual property, and liability terms for working with Halo Studio.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 md:px-10 pt-32 pb-24">
      <section className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-white/35 mb-5">
          Terms
        </p>
        <h1 className="text-[clamp(2rem,4.4vw,3.6rem)] font-bold tracking-[-0.03em] text-white leading-[1.05] mb-6">
          Terms of Service
        </h1>

        <p className="text-white/45 text-sm mb-8">Last updated: May 19, 2026</p>

        <div className="space-y-8 mb-10">
          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">1. Scope and Engagement</h2>
            <p className="text-white/70 leading-7">
              Services, deliverables, and timeline are defined in a written proposal, statement of work, or contract.
              Project work begins once the agreement is accepted and any required upfront payment is received.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">2. Fees and Payment</h2>
            <p className="text-white/70 leading-7">
              Fees and payment schedules are stated in writing. Invoices are due on the terms listed on the invoice.
              Late payments may delay delivery. Taxes, transfer fees, and third-party costs are the client&apos;s
              responsibility unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">3. Client Responsibilities</h2>
            <p className="text-white/70 leading-7">
              The client will provide timely feedback, approvals, content, and access needed to complete work. Delays
              caused by missing inputs may require timeline or fee adjustments.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">4. Intellectual Property</h2>
            <p className="text-white/70 leading-7">
              Unless otherwise stated in writing, final approved deliverables transfer to the client after full payment.
              Halo Studio retains ownership of pre-existing tools, templates, know-how, and process assets used to
              create the work.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">5. Confidentiality</h2>
            <p className="text-white/70 leading-7">
              Both parties agree to treat non-public business and project information as confidential and to use it only
              for the purpose of delivering or receiving services.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">6. Warranties and Liability</h2>
            <p className="text-white/70 leading-7">
              Services are provided using reasonable professional care. To the extent permitted by law, liability is
              limited to fees paid for the specific services giving rise to the claim, and neither party is liable for
              indirect or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">7. Termination</h2>
            <p className="text-white/70 leading-7">
              Either party may terminate an engagement in writing. Fees for work completed and expenses incurred through
              the termination date remain payable.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold tracking-[-0.02em] mb-3">8. Updates to These Terms</h2>
            <p className="text-white/70 leading-7">
              We may update these Terms from time to time. Continued use of the site after updates indicates acceptance
              of the revised terms.
            </p>
          </section>
        </div>

        <Link href="/" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">
          ← Back to home
        </Link>
      </section>
    </main>
    <Footer />
    </div>
  );
}
