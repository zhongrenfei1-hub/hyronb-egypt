import { useLanguage } from "@/i18n/LanguageContext";

const STEPS = ["step1", "step2", "step3", "step4", "step5"];

function Corridor({
  side,
  accent,
}: {
  side: "col1" | "col2";
  accent: "lapis" | "carnelian";
}) {
  const { t } = useLanguage();
  return (
    <div className="space-y-8 py-2">
      <div>
        <div className="chip mb-3">{t(`flow.${side}.kicker`)}</div>
        <h3 className="font-display text-3xl lg:text-4xl text-sandstone leading-tight">
          {t(`flow.${side}.title`)}
        </h3>
      </div>
      <ol className="space-y-7">
        {STEPS.map((s) => (
          <li key={s} className="flex gap-5 items-start">
            <span
              className={`shrink-0 font-mono text-xl font-medium leading-none pt-1 ${
                accent === "lapis" ? "text-lapis" : "text-carnelian"
              }`}
            >
              {t(`flow.${side}.${s}.no`)}
            </span>
            <div className="space-y-2">
              <h4 className="font-display text-lg lg:text-xl text-sandstone leading-snug">
                {t(`flow.${side}.${s}.t`)}
              </h4>
              <p className="meta-text text-sm leading-relaxed">
                {t(`flow.${side}.${s}.b`)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function SectionCrossFlow() {
  const { t } = useLanguage();

  return (
    <section id="flow" className="bg-midnight-soft border-t border-rule-soft">
      <div className="container mx-auto py-20 lg:py-28">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <div className="chip mb-6">{t("flow.chip")}</div>
            <div className="ex-no">{t("flow.exno")}</div>
          </div>
          <div className="lg:col-span-9 lg:ps-10 lg:border-s lg:border-rule-soft">
            <h2 className="display-md mb-6">{t("flow.heading")}</h2>
            <p className="meta-text max-w-3xl text-base md:text-lg leading-relaxed">
              {t("flow.lede")}
            </p>
          </div>
        </div>

        {/* Two corridors */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x lg:divide-rule-soft">
          <div className="lg:pe-12">
            <Corridor side="col1" accent="lapis" />
          </div>
          <div className="lg:ps-12">
            <Corridor side="col2" accent="carnelian" />
          </div>
        </div>
      </div>
    </section>
  );
}
