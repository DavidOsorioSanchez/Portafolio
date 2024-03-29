/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      'total': '100% 100%',
    },
    extend: {
      
    },
    colors: {
      "BlancoTransparente": "rgba(245, 245, 245, 0.775)",
      "transarente": "rgba(245, 245, 245, 0)",
      "negro":"rgb(0,0,0)",
    },
    backgroundImage: {
      "Fondo-Estrellas": "url('src/assets/Fondo.jpg')",
      "targeta1": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZfhZAuaSRN2WvNVZLiIAgtvuVz14f5-gRg&usqp=CAU')",
      "targeta2": "url('https://img.freepik.com/free-photo/minimalistic-zen-stone-background_23-2150526023.jpg?w=360&t=st=1711574057~exp=1711574657~hmac=b6c74685e2e4d5390e98d7de51fef6352e44e70e4312e5d53ea85e2ef3bac3c6')",
      "targeta3": "url('https://planner5d.com/blog/content/images/size/w2000/2022/01/r-architecture-wDDfbanbhl8-unsplash-1.jpg')"
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
