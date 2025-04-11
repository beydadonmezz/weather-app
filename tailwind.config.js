/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // 'class' ile manuel koyu mod kontrolü
    theme: {
      extend: {},
    },
    plugins: [],
  }