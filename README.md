# Hyronb MENA Desk — هايرونب الشرق الأوسط

阿拉伯子站(中东 + 北非),基于 [`open-hearted-spark`](https://github.com/zhongrenfei1-hub/open-hearted-spark) 母站派生。

> **定位**:服务两个方向
> 1. 中东/北非企业来华(WFOE / 合资 / 代表处)
> 2. 中国企业出海到中东(UAE / KSA / EG / MA / JO)

## 与母站的差异

| 维度 | 母站 `open-hearted-spark` | 本站 `hyronb-mena` |
|---|---|---|
| 默认语言 | English | **阿拉伯语(ar)**,RTL |
| 文字栈 | Outfit + Cormorant + Noto SC | **Tajawal + IBM Plex Sans Arabic** 前置 |
| 主色 | 紫色(263°)| **翡翠绿(158°)**+ 沙金(38°)+ 午夜蓝(220°)|
| 法域聚焦 | 全球 33 法域 | **MENA 5 国 + 中国 + 国际网络锚点(SG/GB/US)** |
| SEO 区域 | 全球出海 | 中东专属(`og:locale=ar_AE`)|
| 视觉资产 | 通用 | 增加伊斯兰几何纹样 SVG(`src/assets/patterns/`)|

## 技术栈

Vite · React 18 · TypeScript · Tailwind · shadcn/ui · Supabase · react-i18next-like context

```sh
npm install
npm run dev       # 本地开发(默认 ar / RTL)
npm run build     # 生产构建
npm run lint      # ESLint
npm run test      # Vitest
```

## i18n

`src/i18n/translations.ts` 已含 `zh / en / ar` 三套字典,131 个 key 对齐。语言切换走 `LanguageContext`,自动同步 `<html lang>` 和 `dir`,并 localStorage 持久化(key: `hyronb-mena-lang`)。

## 部署

通过 Lovable 双向同步到 GitHub。本 repo 推到 `main` 后,Lovable 会拉取并自动部署到 `*.lovable.app`(或绑定的自定义域,推荐 `ar.hyronb.com`)。

---

🤝 与母站 `open-hearted-spark` 独立运维,文案与组件可双向借用。
