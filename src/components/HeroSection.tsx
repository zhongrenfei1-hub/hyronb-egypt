import { useLanguage } from "@/i18n/LanguageContext";

// Hieroglyph 装饰串(伪象形,实际是 Unicode 块 U+13000)
const GLYPHS = "𓂀 𓅓 𓆣 𓊽 𓋹 𓏞 𓎟 𓂋 𓍿 𓄿 𓇋 𓏏 𓇌 𓊃 𓏤 𓎼";

const METRICS = [
  { v: "hero.metric1.value", l: "hero.metric1.label" },
  { v: "hero.metric2.value", l: "hero.metric2.label" },
  { v: "hero.metric3.value", l: "hero.metric3.label" },
  { v: "hero.metric4.value", l: "hero.metric4.label" },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const glyphStream = `${GLYPHS}   ${GLYPHS}   ${GLYPHS}`;

  return (
    <section id="top" className="relative overflow-hidden bg-midnight">
      {/* 大幅 lapis → 透明 渐变光晕(克制,非满屏) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 start-0 w-[60vw] h-[60vw] opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(218 75% 42% / 0.6), transparent 60%)",
        }}
      />
      {/* carnelian 副光晕 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 end-0 w-[40vw] h-[40vw] opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, hsl(12 75% 50% / 0.55), transparent 65%)",
        }}
      />

      <div className="container mx-auto relative pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left column — main copy */}
          <div className="lg:col-span-8 space-y-9">
            <div className="chip">{t("hero.chip")}</div>

            <h1 className="display-xxl">{t("hero.title")}</h1>

            <p className="meta-text max-w-2xl text-base md:text-lg leading-relaxed">
              {t("hero.lede")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <a href="#contact" className="btn-brutal btn-brutal--primary">
                {t("hero.cta.primary")}
                <span aria-hidden>→</span>
              </a>
              <a href="#flow" className="btn-brutal">
                {t("hero.cta.secondary")}
              </a>
            </div>
          </div>

          {/* Right column — exhibit label(博物馆展品标签风) */}
          <aside className="lg:col-span-4 lg:pl-6 lg:border-s lg:border-rule-soft lg:ps-8">
            <div className="space-y-5">
              <div className="ex-no">{t("hero.exno")}</div>
              <div className="hair-gilt" />
              <p className="font-display text-sandstone text-xl leading-snug">
                {t("brand.tagline")}
              </p>
              <div className="hair-rule-soft border-t" />
              <p className="meta-text text-xs leading-relaxed">
                Cairo · Alexandria · Suez · Beijing<br />
                est. 2026 / hyronb.eg
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom strip — Metrics + Glyph band */}
        <div className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-y-10">
          {/* Metrics 4-up */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 hair-gilt border-t pt-8">
            {METRICS.map((m, i) => (
              <div
                key={i}
                className={`px-4 ${i < 3 ? "md:border-e md:border-rule-soft" : ""}`}
              >
                <div className="font-display text-3xl md:text-4xl text-lapis leading-none">
                  {t(m.v)}
                </div>
                <div className="mt-3 meta-text text-xs uppercase tracking-widest">
                  {t(m.l)}
                </div>
              </div>
            ))}
          </div>

          {/* Hieroglyph band */}
          <div className="lg:col-span-3 lg:pl-6 lg:border-s lg:border-rule-soft lg:ps-8 hair-gilt border-t pt-8">
            <div className="ex-no mb-3">N / E / S / W</div>
            <div className="glyph-band animate-glyph-pan" style={{ animationDuration: "120s" }}>
              {glyphStream}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
