const config = {
  content: ["./packages/renderer/src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'accent': '#6A1221',
        'accent-dark': '#AA1C35',
      }
    },
  },

  plugins: [],
};

module.exports = config;
