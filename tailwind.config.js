/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      BlancoTransparente: "rgba(245, 245, 245, 0.775)"
    },
    backgroundImage: {
      "Fondo-Estrellas": "url('src/assets/Fondo.jpg')",
    },
  },
  plugins: [],
};
