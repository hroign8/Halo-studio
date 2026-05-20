import Link from "next/link";

const serviceCards = [
  {
    id: "01",
    title: "Web Development",
    tagline: "Your site should sell, not just sit there.",
    body: "We design and build custom websites that load fast and convert visitors into leads. Every project includes mobile-first design, on-page SEO, and load times optimised for Ugandan networks.",
    includes: [
      "Custom design — no templates",
      "Mobile-first, responsive layout",
      "Sub-2s load times on Airtel & MTN",
      "On-page SEO setup",
      "WhatsApp & contact form integration",
      "Google Analytics 4 setup",
    ],
  },
  {
    id: "02",
    title: "Google Ads",
    tagline: "Be the first result when customers search.",
    body: "Intent-based Search campaigns that put your business in front of people actively looking for what you offer. No wasted spend — just tightly targeted ads with conversion tracking from day one.",
    includes: [
      "Keyword research & competitor analysis",
      "Search campaign setup & copywriting",
      "Conversion tracking (calls, forms, WhatsApp)",
      "Weekly performance reporting",
      "Ongoing bid & budget optimisation",
      "Uganda & diaspora market targeting",
    ],
  },
  {
    id: "03",
    title: "Meta Ads",
    tagline: "Stop boosting posts. Start converting.",
    body: "Full-funnel Meta campaigns using the Pixel, custom audiences, and retargeting to move people from scroll to enquiry. We manage creative, copy, targeting, and optimisation end-to-end.",
    includes: [
      "Meta Pixel installation & event setup",
      "Audience research & custom audiences",
      "Ad creative direction & copywriting",
      "Lead gen & WhatsApp click campaigns",
      "Retargeting funnel setup",
      "Monthly reporting & strategy review",
    ],
  },
];

export default function Mockups() {
  return (
    <section
      id="services"
      style={{ scrollMarginTop: "84px" }}
      className="px-6 md:px-10 py-24 md:py-32 w-full"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="h-px w-full bg-white/[0.07] mb-16" />
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <p className="eyebrow mb-5">Services</p>
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-bold tracking-[-0.045em] text-white leading-[1.08]">
              Three levers.<br />One revenue engine.
            </h2>
          </div>
          <Link href="/contact" className="btn btn-ghost">
            Start a project ›
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07] rounded-2xl overflow-hidden">
          {serviceCards.map((card) => (
            <article
              key={card.id}
              className="bg-black p-8 md:p-10 flex flex-col gap-6"
            >
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/25">
                {card.id}
              </span>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-[1.32rem] leading-[1.18] font-semibold tracking-[-0.025em] text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-white/35 italic">{card.tagline}</p>
                </div>
                <p className="text-white/50 leading-[1.8] text-[14px]">{card.body}</p>
                <ul className="flex flex-col gap-2 pt-2 border-t border-white/[0.06]">
                  {card.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/50 leading-[1.6]">
                      <span className="mt-[6px] size-[4px] rounded-full bg-white/25 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-auto text-[13px] text-white/35 hover:text-white/75 transition-colors duration-200 tracking-[-0.01em]"
              >
                Get started ›
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
