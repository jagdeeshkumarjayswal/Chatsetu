/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F4F6F8",
        surface: "#FFFFFF",
        ink: "#12233B",
        muted: "#5B6B7C",
        teal: {
          DEFAULT: "#0E9594",
          dark: "#0B7574",
          light: "#E4F5F4",
        },
        amber: {
          DEFAULT: "#F2A93B",
          light: "#FDF0DA",
        },
        line: "#E1E6EB",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      borderRadius: {
        bridge: "999px",
      },
    },
  },
  plugins: [],
};
