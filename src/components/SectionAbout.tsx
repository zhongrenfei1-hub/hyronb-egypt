import { useLanguage } from "@/i18n/LanguageContext";

const PILLARS = [
  { no: "about.p1.no", t: "about.p1.title", b: "about.p1.body" },
  { no: "about.p2.no", t: "about.p2.title", b: "about.p2.body" },
  { no: "about.p3.no", t: "about.p3.title", b: "about.p3.body" },
];

export default function SectionAbout() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-midnight border-t border-rule-soft">
      <div className="container mx-auto py-20 lg:py-28">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-3">
            <div className="chip mb-6">{t("about.chip")}</div>
            <div className="ex-no">{t("about.exno")}</div>
          </div>
          <div className="lg:col-span-9 lg:ps-10 lg:border-s lg:border-rule-soft">
            <h2 className="display-md mb-6">{t("about.heading")}</h2>
            <p className="meta-text max-w-3xl text-base md:text-lg leading-relaxed">
              {t("about.lede")}
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid lg:grid-cols-3 gap-px bg-rule-soft border border-rule-soft">
          {PILLARS.map((p) => (
            <article
              key={p.no}
              className="bg-midnight p-8 lg:p-10 flex flex-col gap-5 group"
            >
              <div className="flex items-baseline justify-between">
                <span className="ex-no">{t(p.no)}</span>
                <span className="hair-gilt flex-1 ms-4" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl leading-tight text-sandstone group-hover:text-lapis transition-colors">
                {t(p.t)}
              </h3>
              <p className="meta-text text-sm leading-relaxed">{t(p.b)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
