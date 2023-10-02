/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'abhaya': ['Abhaya Libre', 'serif'],
      },
      colors: {
        'background': '#FFF6E7',
        'text': '#000000',
        'primary': '#DAD3C8',
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 700,
      },
    }
  },
  plugins: []
};