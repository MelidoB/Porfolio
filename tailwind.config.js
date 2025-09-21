/** @type {import('tailwindcss').Config} */
export default {
  // This tells Tailwind to scan all these files for class names.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // This enables class-based dark mode, matching your ThemeContext logic.
  darkMode: 'class',
  // This is where all your custom styles go.
  theme: {
    extend: {
      // Your custom font.
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Your custom animations.
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      }
    },
  },
  // This is for adding official Tailwind plugins, which you aren't using yet.
  plugins: [],
}