module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        clash: ["Clash Display"]
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};

