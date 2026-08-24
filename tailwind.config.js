/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        surface: "#12161F",
        "surface-alt": "#171C27",
        border: "#232A3A",
        ink: "#E7EAF0",
        muted: "#8891A5",
        copper: "#FF8A4C",
        cyan: "#5EEAD4",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "'Fira Code'", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(#232A3A 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "26px 26px",
      },
    },
  },
  plugins: [],
};
