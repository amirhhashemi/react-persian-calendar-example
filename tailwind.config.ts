import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IRANYekan", "tahoma", ...fontFamily.sans],
      },
    },
  },
  plugins: [
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
      });
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".ss02": {
          "-moz-font-feature-settings": '"ss02"',
          "-webkit-font-feature-settings": '"ss02"',
          "font-feature-settings": '"ss02"',
        },
      });
    }),
  ],
} satisfies Config;
