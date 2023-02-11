/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ["Press Start 2P", "cursive"]
      },
      colors: {
        "html": {
          "name": "#569cd6",
          "arrow": "#808080",
          "valueName": "#9cdcfe",
          "string": "#ce9178",
          "number": "#b5cea8"
        }
      }
    },
  },
  plugins: [],
}
