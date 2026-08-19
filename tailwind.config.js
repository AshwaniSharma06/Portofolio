/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E50914",
          redDark: "#B81D24",
          dark: "#0F172A",
          charcoal: "#1E293B",
          bg: "#F8F9FA",
          cardBg: "#FFFFFF",
          border: "#E2E8F0",
        }
      },
      fontFamily: {
        display: ["Outfit", "Cabinet Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'red-glow': '0 4px 20px -2px rgba(229, 9, 20, 0.3)',
        'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
