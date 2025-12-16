/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terracotta': '#D4622F',
        'navy': '#1E3A5F',
        'gold': '#F5A623',
        'warm-grey': '#F8F6F4',
        'text-grey': '#5A5A5A',
      },
    },
  },
  plugins: [],
}
