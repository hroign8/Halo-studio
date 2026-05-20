import Image from "next/image";
import adThink from "@/app/assets/ad-think.jpg";
import adRefined from "@/app/assets/ad-refined.jpg";
import adHalo from "@/app/assets/ad-halo.jpg";

export default function Campaigns() {
  return (
    <section id="thinking" style={{ scrollMarginTop: "84px" }} className="px-6 md:px-10 py-24 max-w-[1280px] mx-auto w-full">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/35 mb-5">
          Campaigns
        </p>
        <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.035em] text-white leading-[1.04]">
          Ads that earn{" "}
          <span className="text-white/40">a second look.</span>
        </h2>
      </div>

      {/* Asymmetric grid: tall left + 2 stacked right */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[320px_320px] gap-4">
        {/* Tall left card */}
        <article className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050507] h-[320px] md:h-auto md:row-span-2">
          <Image
            src={adThink}
            alt="Think campaign"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </article>

        {/* Top-right */}
        <article className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050507] h-[320px]">
          <Image
            src={adRefined}
            alt="Marketing refined campaign"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </article>

        {/* Bottom-right */}
        <article className="card-lift relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050507] h-[320px]">
          <Image
            src={adHalo}
            alt="Halo agency campaign"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </article>
      </div>
    </section>
  );
}
