module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};
