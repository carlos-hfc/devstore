import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        app: "860px",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      gridTemplateRows: {
        app: "min-content max-content",
      },
    },
  },
  plugins: [],
}
export default config
