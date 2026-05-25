import type { Config } from "tailwindcss";

// hyronb-egypt — 博物馆深夜版
// 主色:lapis 218°75%42% / accent:carnelian 12°75%50% / paper:sandstone 34°25%88%
// 圆角:0 / Brutalist editorial / GEM 大埃及博物馆展厅气质
export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Marcellus', 'EB Garamond', 'Reem Kufi', 'Noto Serif SC', 'serif'],
        serif: ['EB Garamond', 'Marcellus', 'Reem Kufi', 'Noto Serif SC', 'serif'],
        sans: ['Inter', 'Reem Kufi', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        arabic: ['Reem Kufi', 'Noto Naskh Arabic', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 博物馆深夜专属语义色
        lapis: "hsl(var(--lapis))",
        "lapis-soft": "hsl(var(--lapis-soft))",
        carnelian: "hsl(var(--carnelian))",
        "carnelian-soft": "hsl(var(--carnelian-soft))",
        sandstone: "hsl(var(--sandstone))",
        "sandstone-soft": "hsl(var(--sandstone-soft))",
        midnight: "hsl(var(--midnight))",
        "midnight-soft": "hsl(var(--midnight-soft))",
        gilt: "hsl(var(--gilt))",
        rule: "hsl(var(--rule))",
        "rule-soft": "hsl(var(--rule-soft))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        none: "0",
        lg: "0",
        md: "0",
        sm: "0",
      },
      letterSpacing: {
        chip: "0.28em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "glyph-pan": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "reveal-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glyph-pan": "glyph-pan 60s linear infinite",
        "reveal-up": "reveal-up 1.1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
