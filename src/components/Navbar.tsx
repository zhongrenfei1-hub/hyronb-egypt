import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const navKeys = ["nav.about", "nav.services", "nav.flow", "nav.network", "nav.faq", "nav.contact"];
const langs: Array<{ code: "ar" | "en" | "zh"; key: string }> = [
  { code: "ar", key: "lang.ar" },
  { code: "en", key: "lang.en" },
  { code: "zh", key: "lang.zh" },
];

export default function Navbar() {
  const { lang, setLang, t, dir } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-midnight/85 backdrop-blur supports-[backdrop-filter]:bg-midnight/70 hair-rule-soft border-t-0 border-x-0 border-b">
      <div className="container mx-auto flex items-center justify-between py-5">
        {/* Brand */}
        <a href="#top" className="flex items-baseline gap-3 group">
          <span className="ex-no">EX / 001</span>
          <span className="font-display text-sandstone text-xl md:text-2xl tracking-wide group-hover:text-carnelian transition-colors">
            {t("brand.long")}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navKeys.map((k) => (
            <a key={k} href={`#${k.split(".")[1]}`} className="nav-link">
              {t(k)}
            </a>
          ))}
        </nav>

        {/* Right: lang + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center divide-x divide-rule-soft text-xs">
            {langs.map((l, i) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`px-3 font-sans tracking-wider uppercase transition-colors ${
                  lang === l.code ? "text-gilt" : "text-sandstone-soft hover:text-sandstone"
                }`}
                style={dir === "rtl" && i === 0 ? { borderInlineStart: "none" } : undefined}
              >
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#contact" className="btn-brutal btn-brutal--primary">
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-sandstone-soft text-sandstone"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          <span className="font-mono text-sm">{open ? "✕" : "≡"}</span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden hair-rule-soft border-t bg-midnight">
          <div className="container mx-auto py-6 flex flex-col gap-5">
            {navKeys.map((k) => (
              <a
                key={k}
                href={`#${k.split(".")[1]}`}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {t(k)}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 hair-rule-soft border-t">
              {langs.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1 font-sans tracking-wider uppercase text-xs border ${
                    lang === l.code
                      ? "border-gilt text-gilt"
                      : "border-rule-soft text-sandstone-soft"
                  }`}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#contact" className="btn-brutal btn-brutal--primary self-start" onClick={() => setOpen(false)}>
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
