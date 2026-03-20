/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#3B82F6',
        'soft-blue': '#93C5FD',
        'light-blue-bg': '#EFF6FF',
        'cool-gray': '#E5E7EB',
        'dark-blue-text': '#1E3A8A',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
