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
        sans: ["var(--font-inter)", "Inter", "sans-serif"], // Keep sans/serif for defaults
        serif: ["var(--font-merriweather)", "Merriweather", "serif"],
      },
      colors: {
        // Map CSS variables to Tailwind classes
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border-color)", // Added
        card: {
          // Added for card components
          DEFAULT: "var(--card-background)",
          foreground: "var(--foreground)", // Text color inside cards
        },
        heading: "var(--heading-color)",
        body: "var(--text-color)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        accent: {
          DEFAULT: "var(--accent-color)",
          hover: "var(--accent-hover)",
          foreground: "var(--background)", // Text color on accent background
        },
        success: "var(--success-color)",
        warning: "var(--warning-color)",
        error: "var(--error-color)",
      },
      fontSize: {
        h1: "var(--h1-size)",
        h2: "var(--h2-size)",
        h3: "var(--h3-size)",
        h4: "var(--h4-size)",
        h5: "var(--h5-size)",
        h6: "var(--h6-size)",
        body: "var(--body-size)",
        small: "var(--small-size)",
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
      },
      letterSpacing: {
        tight: "var(--letter-spacing-tight)",
        normal: "var(--letter-spacing-normal)",
        wide: "var(--letter-spacing-wide)",
      },
      lineHeight: {
        tight: "var(--line-height-tight)",
        normal: "var(--line-height-normal)",
        loose: "var(--line-height-loose)",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "fade-in": "fadeIn 0.6s ease-in-out",
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite 1s",
        "float-fast": "float 4s ease-in-out infinite 0.5s",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      // Keep existing typography config if needed
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
