import Link from "next/link";

const packages = [
  {
    label: "Project",
    name: "The Foundation",
    subtitle: "For businesses launching a new product, service, or campaign.",
    points: [
      "High-converting custom landing page",
      "Meta Pixel + Google Tag Manager setup",
      "One complete ad campaign (Google or Meta)",
      "14 days of post-launch optimisation",
    ],
  },
  {
    label: "Retainer",
    name: "The Scale Engine",
    subtitle: "For businesses ready to dominate their market month over month.",
    points: [
      "Continuous page optimisation and A/B testing",
      "Active management of Meta and Google budgets",
      "Weekly ROI reports and performance reviews",
      "WhatsApp sales funnel automation",
    ],
  },
];

export default function Films() {
  return (
    <section id="packages" style={{ scrollMarginTop: "84px" }} className="px-6 md:px-10 py-24 md:py-32 w-full">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px w-full bg-white/[0.07] mb-16" />

        <p className="eyebrow mb-5">Packages</p>
        <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-bold tracking-[-0.045em] leading-[1.08] text-white mb-14">
          Choose your growth track.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="rounded-2xl border border-white/[0.08] bg-[#050505] p-8 md:p-10 flex flex-col gap-7"
            >
              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/30">{pkg.label}</span>
                <h3 className="mt-3 text-[1.55rem] font-semibold tracking-[-0.03em] text-white leading-[1.15]">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-white/45 text-[14px] leading-[1.7]">{pkg.subtitle}</p>
              </div>

              <ul className="flex flex-col gap-3 border-t border-white/[0.07] pt-7">
                {pkg.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] text-white/60 leading-[1.65]">
                    <span className="text-white/25 mt-px select-none">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn btn-ghost self-start mt-auto">
                Get started ›
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
