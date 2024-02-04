/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Responsivness breakpoints
      screens: {
        'sm': '360px',
        // => @media (min-width: 360px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      // Base colors of the app
      colors: {
        'primary': '#0F2745',
        'secondary': '#1B1B1B',
        'tertiary': '#C3FFFF'
      }
    },
  },
  plugins: [],
}

