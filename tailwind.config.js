/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      "theme-yellow": "#F4D04E",
      "theme-gray-950": "#111111",
      "theme-gray-500": "#6B6B6B",
      "theme-white": "#FFFFFF",
    },
    fontFamily: {
      figtree: ["Figtree", "fantasy"],
    },
    extend: {
      spacing: {
        300: "24px",
        150: "12px",
        100: "8px",
        50: "4px",
      },
      boxShadow: {
        flat: "8px 8px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
