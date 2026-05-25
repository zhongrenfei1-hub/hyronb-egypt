// hyronb-egypt — 三语精简字典
// 阶段 1 只覆盖 nav / hero / footer 三块,后续阶段按需扩 key
const translations: Record<string, Record<string, string>> = {
  ar: {
    // ─── Brand ───
    "brand.short": "هايرونب",
    "brand.long": "هايرونب مصر",
    "brand.tagline": "بوابة الأعمال بين مصر والصين",

    // ─── Nav ───
    "nav.about": "عن المكتب",
    "nav.services": "الخدمات",
    "nav.flow": "بين البلدين",
    "nav.network": "الشبكة",
    "nav.faq": "أسئلة شائعة",
    "nav.contact": "تواصل معنا",
    "nav.cta": "استشارة",

    // ─── Hero ───
    "hero.chip": "مكتب القاهرة · المعرض 001",
    "hero.exno": "EX / 001",
    "hero.title": "تأسيس الشركات والاستثمار المتبادل عبر بوابة قناة السويس",
    "hero.lede": "من القاهرة إلى بكين · من المنطقة الاقتصادية لقناة السويس إلى شنغهاي. فريق محلي ثنائي الجنسية يخدم الشركات الراغبة في التوسع بين مصر والصين منذ التأسيس وحتى الامتثال طويل الأمد.",
    "hero.cta.primary": "ابدأ تأسيس شركتك",
    "hero.cta.secondary": "حدد موعد استشارة",
    "hero.metric1.value": "GAFI",
    "hero.metric1.label": "تسجيل معتمد",
    "hero.metric2.value": "SCZONE",
    "hero.metric2.label": "شريك المنطقة الاقتصادية",
    "hero.metric3.value": "ثنائي اللغة",
    "hero.metric3.label": "فريق عربي / صيني",
    "hero.metric4.value": "14٪",
    "hero.metric4.label": "ضريبة القيمة المضافة المصرية",

    // ─── Footer ───
    "footer.kicker": "مكتب مصر · شبكة هايرونب الدولية",
    "footer.address.cairo": "القاهرة · حي وسط البلد · القاهرة الجديدة",
    "footer.address.alex": "الإسكندرية · المنطقة الحرة العامة",
    "footer.address.suez": "السويس · المنطقة الاقتصادية لقناة السويس (SCZONE)",
    "footer.address.beijing": "بكين · مكتب الارتباط الصيني",
    "footer.section.contact": "تواصل",
    "footer.section.legal": "الإشهار",
    "footer.section.related": "مواقع شقيقة",
    "footer.related.source": "هايرونب الدولية (الموقع الرئيسي)",
    "footer.related.mena": "هايرونب الشرق الأوسط (MENA)",
    "footer.copy": "© 2026 هايرونب مصر · جميع الحقوق محفوظة",
    "footer.imprint": "مرخصة من الهيئة العامة للاستثمار والمناطق الحرة (GAFI)",

    // ─── Language Switcher ───
    "lang.ar": "العربية",
    "lang.en": "English",
    "lang.zh": "中文",
  },

  en: {
    // ─── Brand ───
    "brand.short": "Hyronb",
    "brand.long": "Hyronb Egypt",
    "brand.tagline": "The Egypt × China business gateway",

    // ─── Nav ───
    "nav.about": "About",
    "nav.services": "Services",
    "nav.flow": "Cross-flow",
    "nav.network": "Network",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Consult",

    // ─── Hero ───
    "hero.chip": "Cairo Desk · Exhibit 001",
    "hero.exno": "EX / 001",
    "hero.title": "Incorporation & cross-border investment across the Suez gateway",
    "hero.lede": "From Cairo to Beijing, from the Suez Canal Economic Zone to Shanghai. A bilingual on-the-ground team serves enterprises moving capital and operations between Egypt and China — from day-one incorporation to long-haul compliance.",
    "hero.cta.primary": "Start incorporation",
    "hero.cta.secondary": "Book a consultation",
    "hero.metric1.value": "GAFI",
    "hero.metric1.label": "Authorised registrar",
    "hero.metric2.value": "SCZONE",
    "hero.metric2.label": "Economic-zone partner",
    "hero.metric3.value": "Bilingual",
    "hero.metric3.label": "Arabic / Mandarin team",
    "hero.metric4.value": "14%",
    "hero.metric4.label": "Egypt VAT standard rate",

    // ─── Footer ───
    "footer.kicker": "Cairo Desk · Hyronb international network",
    "footer.address.cairo": "Cairo · Downtown & New Cairo offices",
    "footer.address.alex": "Alexandria · Public Free Zone",
    "footer.address.suez": "Suez · SCZONE economic zone hub",
    "footer.address.beijing": "Beijing · China liaison desk",
    "footer.section.contact": "Contact",
    "footer.section.legal": "Imprint",
    "footer.section.related": "Sister sites",
    "footer.related.source": "Hyronb International (main site)",
    "footer.related.mena": "Hyronb MENA Desk",
    "footer.copy": "© 2026 Hyronb Egypt · All rights reserved",
    "footer.imprint": "Licensed by the General Authority for Investment & Free Zones (GAFI)",

    // ─── Language Switcher ───
    "lang.ar": "العربية",
    "lang.en": "English",
    "lang.zh": "中文",
  },

  zh: {
    // ─── Brand ───
    "brand.short": "海荣",
    "brand.long": "海荣 · 埃及办事处",
    "brand.tagline": "中埃商务双向枢纽",

    // ─── Nav ───
    "nav.about": "关于本所",
    "nav.services": "服务",
    "nav.flow": "双向流程",
    "nav.network": "网络",
    "nav.faq": "常见问题",
    "nav.contact": "联系",
    "nav.cta": "预约咨询",

    // ─── Hero ───
    "hero.chip": "开罗办事处 · 展品 001",
    "hero.exno": "EX / 001",
    "hero.title": "跨苏伊士门户的公司注册与双向投资",
    "hero.lede": "从开罗到北京，从苏伊士运河经济区到上海。中阿双语的在地团队，服务往返埃及与中国之间的企业——从开业第一天的注册，到长期合规。",
    "hero.cta.primary": "启动公司注册",
    "hero.cta.secondary": "预约一对一咨询",
    "hero.metric1.value": "GAFI",
    "hero.metric1.label": "投资署授权代办",
    "hero.metric2.value": "SCZONE",
    "hero.metric2.label": "苏伊士经济区合作伙伴",
    "hero.metric3.value": "双语",
    "hero.metric3.label": "阿语 / 中文团队",
    "hero.metric4.value": "14%",
    "hero.metric4.label": "埃及增值税基准税率",

    // ─── Footer ───
    "footer.kicker": "开罗办事处 · 海荣国际网络",
    "footer.address.cairo": "开罗 · 市中心 / 新开罗双办",
    "footer.address.alex": "亚历山大 · 公共自由区",
    "footer.address.suez": "苏伊士 · SCZONE 经济区驻点",
    "footer.address.beijing": "北京 · 中国联络处",
    "footer.section.contact": "联系",
    "footer.section.legal": "合规声明",
    "footer.section.related": "兄弟站点",
    "footer.related.source": "海荣国际（主站）",
    "footer.related.mena": "海荣中东（MENA）",
    "footer.copy": "© 2026 海荣埃及办事处 · 保留所有权利",
    "footer.imprint": "由埃及投资与自由区总局（GAFI）授权注册",

    // ─── Language Switcher ───
    "lang.ar": "العربية",
    "lang.en": "English",
    "lang.zh": "中文",
  },
};

export default translations;
