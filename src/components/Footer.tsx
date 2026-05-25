import { useLanguage } from "@/i18n/LanguageContext";

const ADDRESSES = [
  { k: "footer.address.cairo", tag: "CAI" },
  { k: "footer.address.alex", tag: "ALY" },
  { k: "footer.address.suez", tag: "SCZ" },
  { k: "footer.address.beijing", tag: "PEK" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-midnight border-t border-rule-soft">
      <div className="container mx-auto py-16 lg:py-20">
        {/* Kicker */}
        <div className="chip mb-12">{t("footer.kicker")}</div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Big brand mark */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="display-md leading-tight">{t("brand.long")}</h3>
            <p className="meta-text max-w-md">{t("brand.tagline")}</p>
            <div className="hair-gilt" />
            <p className="meta-text text-xs">{t("footer.imprint")}</p>
          </div>

          {/* Addresses */}
          <div className="lg:col-span-4">
            <div className="ex-no mb-5">{t("footer.section.contact")}</div>
            <ul className="space-y-4">
              {ADDRESSES.map((a) => (
                <li key={a.tag} className="flex gap-4 items-start">
                  <span className="ex-no shrink-0 mt-1 w-12">{a.tag}</span>
                  <span className="meta-text text-sm leading-relaxed">{t(a.k)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related sites */}
          <div className="lg:col-span-3">
            <div className="ex-no mb-5">{t("footer.section.related")}</div>
            <ul className="space-y-3 meta-text text-sm">
              <li>
                <a className="hover:text-sandstone transition-colors" href="https://hyronb.com" target="_blank" rel="noreferrer noopener">
                  {t("footer.related.source")} ↗
                </a>
              </li>
              <li>
                <a className="hover:text-sandstone transition-colors" href="https://mena.hyronb.com" target="_blank" rel="noreferrer noopener">
                  {t("footer.related.mena")} ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rule + copy */}
        <div className="mt-16 hair-rule border-t pt-6 flex flex-col md:flex-row gap-4 md:items-end justify-between">
          <span className="meta-text text-xs">{t("footer.copy")}</span>
          <span className="ex-no">EST. 2026 · CAIRO</span>
        </div>
      </div>
    </footer>
  );
}
