/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      // Add custom colors, fonts, etc.
      colors: {
        primary: "#1E40AF", // example custom color
      },
    },
    
  },
  plugins: [],
}
