/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08090D",
        surface: "#11131A",
        "surface-alt": "#171A23",
        border: "#292D38",
        ink: "#F4F5F8",
        muted: "#9A9EAA",
        accent: "#75D9E8",
      },
      fontFamily: {
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 70px rgba(111, 93, 230, 0.18)",
      },
    },
  },
  plugins: [],
};
