import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'instrument': ['var(--font-instrument-serif)'],
        'karla': ['var(--font-karla)'],
        'mono': ['var(--font-ibm-plex-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
