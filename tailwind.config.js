/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        Inconsolata: "'Inconsolata', monospace",
        Montserrat: "'Montserrat', sans-serif",
        SpaceMono: "'Space Mono', monospace",
      },
    },
  },
  plugins: [],
}

