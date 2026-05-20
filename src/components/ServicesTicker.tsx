export default function ServicesTicker() {
  return (
    <section id="problem" className="w-full px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto">
        {/* Thin rule above */}
        <div className="h-px w-full bg-white/[0.07] mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <p className="eyebrow mb-5">The problem</p>
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-bold tracking-[-0.045em] text-white leading-[1.08]">
              Likes don&apos;t pay rent.
            </h2>
          </div>

          <div className="pt-1 lg:pt-3">
            <p className="text-[17px] md:text-[18px] text-white/50 leading-[1.85] tracking-[-0.01em]">
              Most agencies chase vanity metrics — followers, impressions, viral moments. But if your website is slow
              or you&apos;re just boosting posts, you&apos;re burning budget. You don&apos;t need more engagement.
              You need a predictable pipeline of leads and revenue.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-3 md:gap-6 border-t border-white/[0.07] pt-10">
              {[
                { stat: "3×", label: "avg. ROAS on managed campaigns" },
                { stat: "<2s", label: "target load time on local networks" },
                { stat: "90d", label: "to a measurable revenue impact" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[1.55rem] md:text-[2rem] font-bold tracking-[-0.04em] text-white">{item.stat}</p>
                  <p className="mt-1 text-[12px] md:text-[13px] text-white/40 leading-[1.5]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
