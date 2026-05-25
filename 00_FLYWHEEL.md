# 🛞 四环飞轮 · Hyronb Egypt — هايرونب مصر

> **置顶宪章** — 本文件是 hyronb-egypt 独立子站的唯一真理源。
> 所有计划、需求、进度都在这里,自动同步打钩。
> 文件名以 `00_` 开头,在 Finder 中物理置顶。

---

## 一、用户原始指令(锁死,不可改)

> 按照海荣独立站那里获得的信息 继续用四环飞轮的方式 做一个 埃及的网站 不能用 同一个风格和ui
>
> **三个关键约束**:
> 1. 🧬 **复用海荣业务结构** — 服务/法务/中埃双向商务的内容口径沿用
> 2. 🚫 **风格不可重复** — 不能用母站紫色 SaaS,不能用 MENA 翡翠绿 + 沙金杂志
> 3. 🇪🇬 **聚焦埃及** — 专攻中埃双向商务,聚焦 SCZONE / 开罗 / 亚历山大

---

## 二、四环飞轮工作法(沿用母仓宪章)

```
    ┌─────────┐
    │  BUILD  │ ← 写代码、做功能
    └────┬────┘
         │
    ┌────▼────┐
    │  TEST   │ ← 跑 build、跑测试、浏览器自动化截图
    └────┬────┘
         │
    ┌────▼────┐
    │   FIX   │ ← 改 bug、清警告、修类型
    └────┬────┘
         │
    ┌────▼────┐
    │  SHIP   │ ← commit + 打钩 + 变更日志
    └────┬────┘
         │
         └──→ 回到 BUILD,下一圈
```

**每一圈结束的硬性动作**:
- ✅ §五 / §六 打钩
- ✅ `git add . && git commit -m "..."`(本 repo 独立 git history)
- ✅ `npm run build` 通过
- ✅ §八 变更日志追加一行

---

## 三、定位画像

| 维度 | 母站 hyronb-source | MENA 子站 hyronb-mena | **本站 hyronb-egypt** |
|---|---|---|---|
| 域名定位 | 全球 33 法域 | MENA 5 国 + 国际锚点 | **埃及单国(中埃双向)** |
| 默认语言 | English | 阿拉伯语(ar / RTL) | **阿拉伯语(ar-EG / RTL)** |
| 主色 | 紫 263° + 沙金 | 翡翠 158° + 沙金 38° | **青金石 lapis 218° + 红玉髓 carnelian 12° + 沙岩 34°** |
| 背景 | 米白(浅)| 米黄 paper(浅)| **午夜深炭 220° 8%(深)** |
| 字体 | Outfit + Cormorant | Naskh Arabic + Cormorant + Inter | **Marcellus + EB Garamond + Reem Kufi + Inter** |
| 圆角 | 12px | 4px | **0(直角到底)** |
| 调性 | SaaS 渐变 + glow | 杂志刊物(dropcap/kicker/issue-badge)| **博物馆 Brutalist editorial(展柜 + 展品编号 + 烫金 hairline)** |
| Hero 风格 | 渐变光晕 + CTA | masthead + 杂志大标 | **大写碑铭字 + 几何象形装饰条 + 单图焦点** |

> 三个站,**三种完全不同的风格语言**,但 Hyronb 品牌内核保持(专业 / 稳健 / 长期价值)。

---

## 四、技术选型

| 维度 | 选择 | 理由 |
|---|---|---|
| 框架 | Vite 5 + React 18 + TypeScript | 沿用 MENA stack,组件兼容性最高 |
| 样式 | Tailwind 3.4 + CSS variables | radius 强制 0,主题完全自重写 |
| 路由 | react-router-dom 6 | 单页站默认 /,后续可扩 |
| i18n | LanguageContext 自研(三语 ar/en/zh)| 复用 MENA 的 context 架子,字典全换 |
| 字体 | Marcellus / EB Garamond / Reem Kufi / Noto Serif SC / Inter | Google Fonts CDN,无本地依赖 |
| 组件库 | shadcn/ui(radix-ui)| 已在 src/components/ui/ 里,radius=0 之后视觉自然变 brutalist |
| 部署 | 静态 Vite build,后续可丢 Vercel / Cloudflare Pages | 独立 git repo,**不走 Lovable 同步** |
| 端口 | dev `8181`(避开 mena 的 8080) | 三站可同时本地预览 |

---

## 五、需求列表

### P0 · 地基(Round 1)
- [x] **NEED-001** fork hyronb-mena 脚手架,清空 magazine / 业务组件,只留 ui/ 与 hooks/integrations/lib/pages 框架
- [x] **NEED-002** package.json 改名 hyronb-egypt,去 lovable-tagger,去 supabase 依赖,端口 8181
- [x] **NEED-003** 索引页 index.html ar-EG / og:locale=ar_EG / 埃及 keyword
- [x] **NEED-004** tailwind.config + index.css 注入「博物馆深夜版」主题(midnight / lapis / carnelian / sandstone)
- [x] **NEED-005** Brutalist utilities:chip / ex-no / glyph-band / btn-brutal / nav-link / display-xxl
- [x] **NEED-006** i18n 字典三语(ar/en/zh)精简到地基 key:nav + hero + footer
- [x] **NEED-007** Navbar(直角顶部 + hairline 分隔)+ HeroSection(大字 chip + 单图焦点)+ Footer(大量元数据)
- [x] **NEED-008** pages/Index.tsx 单页组装,App.tsx 路由收窄到 /
- [x] **NEED-009** dev server 跑通 + 浏览器自动化首屏截图(三语)+ build pass(321KB / gzip 103KB)

### P1 · 内容填充(Round 2-N)
- [x] **NEED-010** About:埃及定位三段式(SCZONE 跳板 / Cairo-Alex 双城 / 中阿双语桥梁)
- [ ] **NEED-011** Services 四大块(LLC 注册 / 投资身份 / 财税合规 / 本土品牌)— 埃及口径
- [ ] **NEED-012** Jurisdictions 区域:开罗 / 亚历山大 / SCZONE / 北京 + 本地团队
- [x] **NEED-013** Cross-flow:中企进埃及 vs 埃企进中国 双流程对照(两栏 grid 各 5 步)
- [ ] **NEED-014** Testimonials:1-2 个中埃案例
- [ ] **NEED-015** FAQ:常见埃及法务问题(GAFI 审批时长 / 增值税 / SCZONE 优惠)
- [ ] **NEED-016** CTA + Contact

### P2 · 视觉增强(Round N+)
- [ ] **NEED-017** Hieroglyph 装饰横条(SVG 而非 emoji)
- [ ] **NEED-018** Lapis → carnelian 渐变作 hero accent
- [ ] **NEED-019** 滚动 reveal 动画
- [ ] **NEED-020** 暗色 / 浅色切换(深色为默认)

---

## 六、阶段规划

| 阶段 | 主题 | 关键产出 | 完成 |
|---|---|---|---|
| **Round 1** | 🏛️ 地基 | fork + 主题 + 三件套 + dev pass + 首 commit | ✅ |
| **Round 2** | 📜 About + Cross-flow | 埃及定位 + 中埃双向流程 | - |
| **Round 3** | 🛠️ Services | 四大服务卡(LLC/身份/财税/品牌) | - |
| **Round 4** | 🗺️ Jurisdictions | 开罗/亚历山大/SCZONE/北京网络 | - |
| **Round 5** | 💬 Social proof | Testimonials + FAQ | - |
| **Round 6** | ✉️ CTA + Contact | 联系入口 + 多端二维码 | - |
| **v1.0** | 🎉 达成 | 全站可上线 | - |

---

## 七、Round 1 详细计划

- [x] fork hyronb-mena → hyronb-egypt(无 .git / node_modules / lockfiles)
- [x] git init,设 user.email/user.name
- [x] 删 magazine/ + 业务组件 + 旧 pages + assets(只留 ui/ + hooks/integrations 残壳)
- [x] 改 package.json:name hyronb-egypt,去 supabase / lovable-tagger / react-simple-maps
- [x] 改 vite.config.ts:去 lovable-tagger,端口 8181
- [x] 改 index.html:ar-EG / 埃及标题与 meta
- [x] 改 LanguageContext:storage key → `hyronb-egypt-lang`
- [x] 写 tailwind.config:博物馆深夜 token,radius=0,字体栈
- [x] 写 src/index.css:Google Fonts 导入 + CSS vars + brutalist utilities
- [x] 写 src/i18n/translations.ts:三语精简字典(nav/hero/footer 三块)
- [x] 写 src/components/Navbar.tsx:直角顶部 + 语言切换 + hairline
- [x] 写 src/components/HeroSection.tsx:chip + display-xxl + 双 CTA + glyph 装饰条
- [x] 写 src/components/Footer.tsx:大量元数据 + 烫金 hairline
- [x] 改 src/App.tsx:只保留 / 和 *
- [x] 改 src/pages/Index.tsx:组装三件套
- [x] 删 supabase 残留 imports(LanguageContext 自查),删 src/integrations
- [x] npm install + npm run dev → 浏览器自动化首屏截图(ar/en/zh 三语)
- [x] npm run build pass(321KB JS / 65KB CSS / 总 gzip 103KB)
- [ ] git add + commit `feat(round-1): hyronb-egypt 地基 · 博物馆深夜主题`

---

## 八、变更日志

| 日期 | 圈 | 完成 | 失败 / 待修 | Commit |
|---|---|---|---|---|
| 2026-05-25 | **1** | 🏛️ **地基达成**:博物馆深夜主题 + Navbar/Hero/Footer 三件套 + 三语 i18n + 三语浏览器自动化截图通过 + build 321KB | sticky navbar 在深背景上半透明,视觉对比可后续调强 | `005e8f1` `b876ae4` `7d07abf` |
| 2026-05-25 | **1.5** | 🚀 **上线 GitHub Pages**:Actions workflow 跑通,HTTPS 200,JS/CSS 子路径加载正常 → https://zhongrenfei1-hub.github.io/hyronb-egypt/ | 后续可挂自定义域 eg.hyronb.com | `4c3630f` |
| 2026-05-25 | **1.6** | 🩹 修两枚部署 bug:`.nojekyll` + `404.html` SPA fallback;BrowserRouter `basename=import.meta.env.BASE_URL`(否则子路径下 React Router 走 catch-all 显示 NotFound) | basename 仍有边缘缓存难题 | `2ee0ded` `e192f54` |
| 2026-05-25 | **1.7** | 🔁 BrowserRouter → **HashRouter**,URL 走 `#/` fragment。子路径 SPA + 静态托管的行业标准方案,一份代码 GH Pages / Vercel / CF Pages 全跑通,不再依赖 base/basename/server rewrite | - | `d55c98a` |
| 2026-05-25 | **2** | 📜 **Round 2 达成**:SectionAbout(三段 SCZONE/Cairo-Alex/双语桥梁)+ SectionCrossFlow(两栏 5+5 步对照)+ i18n 扩 60 key 三语对齐 + build 333KB/gzip 108KB,本地 snapshot 验全过 | preview_screenshot 工具自身 bug 出黑图,改用 preview_snapshot 验通过 | _本次 commit_ |
