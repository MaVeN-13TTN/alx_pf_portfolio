/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-inter)", "Inter", "sans-serif"],
        secondary: ["var(--font-merriweather)", "Merriweather", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["var(--font-merriweather)", "Merriweather", "serif"],
      },
      colors: {
        // Light theme colors
        heading: "var(--heading-color)",
        body: "var(--text-color)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        accent: "var(--accent-color)",
        "accent-hover": "var(--accent-hover)",
        success: "var(--success-color)",
        warning: "var(--warning-color)",
        error: "var(--error-color)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--text-color)",
            h1: {
              color: "var(--heading-color)",
              fontWeight: "var(--font-weight-bold)",
              fontSize: "var(--h1-size)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "var(--letter-spacing-tight)",
            },
            h2: {
              color: "var(--heading-color)",
              fontWeight: "var(--font-weight-bold)",
              fontSize: "var(--h2-size)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "var(--letter-spacing-tight)",
            },
            h3: {
              color: "var(--heading-color)",
              fontWeight: "var(--font-weight-semibold)",
              fontSize: "var(--h3-size)",
              lineHeight: "var(--line-height-tight)",
              letterSpacing: "var(--letter-spacing-tight)",
            },
            h4: {
              color: "var(--heading-color)",
              fontWeight: "var(--font-weight-semibold)",
              fontSize: "var(--h4-size)",
            },
            p: {
              color: "var(--text-color)",
              lineHeight: "var(--line-height-normal)",
            },
            a: {
              color: "var(--accent-color)",
              "&:hover": {
                color: "var(--accent-hover)",
              },
            },
            strong: {
              fontWeight: "var(--font-weight-semibold)",
            },
            blockquote: {
              color: "var(--text-secondary)",
              borderLeftColor: "var(--accent-color)",
              fontFamily: 'var(--font-secondary, "Merriweather", serif)',
              fontStyle: "italic",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
