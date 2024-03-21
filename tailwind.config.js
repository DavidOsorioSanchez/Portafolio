/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
    },
    colors: {
      BlancoTransparente: "rgba(245, 245, 245, 0.775)",
    },
    backgroundImage: {
      "Fondo-Estrellas": "url('src/assets/Fondo.jpg')",
    },
    animation: {
      bajada: "normal pabajo 2s ease-in-out",
    },
    keyframes: {
      pabajo: {
        "0%, 100%": { transform: "translateY(0rem)", opacity: 1 },
        "0%": { transform: "translateY(-10rem)", opacity: 0 },
      },
    },
  },
  plugins: [],
};
