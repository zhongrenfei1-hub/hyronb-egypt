# Hyronb Egypt Desk — هايرونب مصر — 海荣埃及办事处

埃及单国独立子站,聚焦 **中埃双向商务**(开罗 / 亚历山大 / SCZONE ⇄ 北京)。
基于 [`open-hearted-spark`](https://github.com/zhongrenfei1-hub/open-hearted-spark) 母站脚手架重写,完整脱离 Lovable 同步。

> **定位**:
> 1. 中国企业进入埃及(LLC / 分支机构 / SCZONE 投资准入 / GAFI 审批)
> 2. 埃及企业进入中国(WFOE 北上广深 / 跨境支付 / 财税合规)

## 与兄弟站点的差异

| 维度 | 母站 `hyronb-source` | MENA `hyronb-mena` | **本站 `hyronb-egypt`** |
|---|---|---|---|
| 区域定位 | 全球 33 法域 | MENA 5 国 + 国际锚点 | **埃及单国(中埃双向)** |
| 默认语言 | English | 阿拉伯语(ar) | **阿拉伯语(ar-EG / RTL)** |
| 主色 | 紫色 263° + 沙金 | 翡翠 158° + 沙金 38° | **青金石 lapis 218° + 红玉髓 carnelian 12° + 沙岩 34°** |
| 背景 | 米白(浅)| 米黄 paper(浅)| **午夜深炭 220° 8%(深)** |
| 字体 | Outfit + Cormorant | Naskh Arabic + Cormorant + Inter | **Marcellus + EB Garamond + Reem Kufi + Noto Serif SC + Inter** |
| 圆角 | 12px | 4px | **0(直角到底,Brutalist)** |
| 调性 | SaaS 渐变 + glow | 杂志(dropcap/issue-badge)| **博物馆 Brutalist editorial(展柜 + 展品编号 + 烫金 hairline)** |
| 部署 | Lovable 同步 | Lovable 同步 | **独立 GitHub + Vercel/CF Pages** |

## 技术栈

Vite 5 · React 18 · TypeScript · Tailwind 3.4 · shadcn/ui · react-router-dom 6

```sh
npm install
npm run dev       # 本地开发,默认 ar / RTL,端口 3042
npm run build     # 生产构建(dist/)
npm run lint      # ESLint
npm run test      # Vitest
npm run preview   # 本地预览 build 产物
```

## i18n

`src/i18n/translations.ts` 三语字典 `ar / en / zh`,约 40 个 key(Round 1 仅覆盖 nav + hero + footer,后续阶段按需扩)。
语言切换走 `LanguageContext`,自动同步 `<html lang>` / `<html dir>`,并 localStorage 持久化(key: `hyronb-egypt-lang`)。

## 部署

### Vercel(推荐)
1. Vercel dashboard → Import Git Repository → 选 `zhongrenfei1-hub/hyronb-egypt`
2. 框架自动识别为 Vite(`vercel.json` 已配)
3. Deploy,默认 `*.vercel.app` 子域
4. 自定义域名:**Settings → Domains** → 加 `eg.hyronb.com`(或其它)

### Cloudflare Pages
1. CF dashboard → Pages → Create → Connect to Git → 选 repo
2. Build command: `npm run build` / Output: `dist`
3. 自定义域名:**Custom domains** → 加 `eg.hyronb.com`

### 本地预览
```sh
npm run build
npm run preview  # http://localhost:4173
```

## 四环飞轮

工作流见 [`00_FLYWHEEL.md`](./00_FLYWHEEL.md)。每圈:**BUILD → TEST → FIX → SHIP**,§五打钩 + commit + build pass。

---

🏛️ Round 1(2026-05-25)已 ship:博物馆深夜版主题 + Navbar/Hero/Footer 三件套 + 三语 i18n + build 321KB。
🤝 与母站 `hyronb-source` / `hyronb-mena` 完全独立运维,文案与组件可借用。
