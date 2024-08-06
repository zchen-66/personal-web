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
    },
  },
  plugins: [],
}

