import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg_color":"var(--bg_color)",
        "text_color":"var(--text_color)",
        "primary_color":"var(--primary_color)"
      },
      fontFamily:{
        "marker":"var(--font_marker)",
        "lexend":"var(--font_lexend)"
      }
    },
  },
  plugins: [],
};
export default config;
