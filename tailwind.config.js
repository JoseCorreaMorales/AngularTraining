module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      'pastel',
      'retro', // first one will be the default theme
      'cupcake',
    ],
  },
}


