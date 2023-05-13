import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"
import scrollbarPlugin from "tailwind-scrollbar"
import typographyPlugin from "@tailwindcss/typography"

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "")
const em = (px: number, base: number) => `${round(px / base)}em`

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,svelte}",
    "./src/routes/**/*.{js,ts,jsx,tsx,svelte}",
    "./src/**/*.{html,css}",
    "../../packages/ui-shared/**/*.{js,ts,jsx,tsx,svelte}",
    "../../packages/ui-svelte/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        iranyekan: ["var(--font-iranyekan)", ...fontFamily.sans],
        iransans: ["var(--font-iransans)", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.orange.700"),
              fontWeight: theme("fontWeight.normal"),
              textDecoration: "none",
              borderBottomWidth: theme("borderWidth.DEFAULT"),
              borderColor: theme("colors.orange.700"),
              transitionProperty: "background-color",
              transitionDuration: theme("transitionDuration.150"),
              transitionTimingFunction: theme("transitionTimingFunction.out"),
              "&:hover": {
                backgroundColor: theme("colors.orange.100"),
                backgroundOpacity: theme("opacity.50"),
              },
            },
            img: {
              marginRight: "auto",
              marginLeft: "auto",
            },
            ol: {
              listStyleType: "persian",
            },
            blockquote: {
              borderLeftWidth: "0",
              borderRightWidth: "0.25rem",
              borderLeftColor: "none",
              borderRightColor: "var(--tw-prose-quote-borders)",
            },
          },
        },
        sm: {
          css: {
            blockquote: {
              paddingLeft: 0,
              paddingRight: em(20, 18),
            },
            ul: {
              paddingLeft: 0,
              paddingRight: em(22, 14),
            },
            ol: {
              paddingLeft: 0,
              paddingRight: em(22, 14),
            },
            "ol > li": {
              paddingLeft: 0,
              paddingRight: em(6, 14),
            },
            "ul > li": {
              paddingLeft: 0,
              paddingRight: em(6, 14),
            },
          },
        },
        base: {
          css: {
            blockquote: {
              paddingLeft: 0,
              paddingRight: em(20, 10),
            },
            ul: {
              paddingLeft: 0,
              paddingRight: em(26, 16),
            },
            ol: {
              paddingLeft: 0,
              paddingRight: em(26, 16),
            },
            "ol > li": {
              paddingLeft: 0,
              paddingRight: em(6, 16),
            },
            "ul > li": {
              paddingLeft: 0,
              paddingRight: em(6, 16),
            },
          },
        },
      }),
    },
    fontWeight: {},
  },
  plugins: [
    typographyPlugin,
    scrollbarPlugin,
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".font-thin": {
          "font-weight": "100",
          "font-variation-settings": '"wght" 100',
        },
        ".font-extralight": {
          "font-weight": "200",
          "font-variation-settings": '"wght" 200',
        },
        ".font-light": {
          "font-weight": "300",
          "font-variation-settings": '"wght" 300',
        },
        ".font-normal": {
          "font-weight": "400",
          "font-variation-settings": '"wght" 400',
        },
        ".font-medium": {
          "font-weight": "500",
          "font-variation-settings": '"wght" 500',
        },
        ".font-semibold": {
          "font-weight": "600",
          "font-variation-settings": '"wght" 600',
        },
        ".font-bold": {
          "font-weight": "700",
          "font-variation-settings": '"wght" 700',
        },
        ".font-extrabold": {
          "font-weight": "800",
          "font-variation-settings": '"wght" 800',
        },
        ".font-black": {
          "font-weight": "900",
          "font-variation-settings": '"wght" 900',
        },
      })
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".ss02": {
          "-moz-font-feature-settings": "ss02",
          "-webkit-font-feature-settings": "ss02",
          "font-feature-settings": "ss02",
        },
        ".ss03": {
          "-moz-font-feature-settings": "ss03",
          "-webkit-font-feature-settings": "ss03",
          "font-feature-settings": "ss03",
        },
      })
    }),
  ],
} satisfies Config
