/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "heading-primary": '#131313',
        "bg-primary": "#ebebeb",
        "bg-secondary": "#e4ede8"
      },
      fontFamily: {
        title: ["Source Code Pro"],
        NotoSerif: ["Noto Serif"],
        PTSansNarrow: ["PT Sans Narrow"],
        content: ["Quattrocento Sans"]
      },
      screens: {
        'smol': '400px',
        'med': '800px',
        'big': '1200px',
      },
      animation: {
        'infinite-scroll-l': 'infinite-scroll 10s linear infinite',
        'infinite-scroll-r': 'infinite-scroll 15s linear infinite reverse',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
}

