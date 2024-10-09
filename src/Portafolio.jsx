import React from "react";
import ComponenteTarjeta from "./componenteTarjeta";
import "././css/index.css";
import "././css/App.css";

function Portafolio() {
  const [front, setFront] = React.useState(false);
  const estadoFont = front
    ? "bg-colorActivoFront text-blancoEstrella"
    : "bg-blancoEstrella ";
  const [back, setBack] = React.useState(false);
  const estadoBack = back
    ? "bg-colorActivoBack text-blancoEstrella"
    : "bg-blancoEstrella ";

  const mostrarFront = () => {
    setFront(!front);
  };

  const mostrarBack = () => {
    setBack(!back);
  };

  return (
    <div className="w-screen h-auto bg-Fondo-Estrellas my-12">
      <div className="w-screen h-auto flex flex-col py-12 gap-8">
        <p className="w-screen h-auto flex justify-center text-blancoEstrella font-bold text-5xl">
          Trabajos Hechos
        </p>
        <div className="w-screen h-auto flex justify-center gap-6 text-colorFondo  font-bold text-lg">
          <button
            className={`w-40 rounded-md ${estadoFont} transition ease-in duration-100 active:bg-colorDeAccion active:text-blancoEstrella`}
            onClick={mostrarFront}
          >
            Frond-End
          </button>
          <button
            className={`w-40 rounded-md ${estadoBack} transition ease-in duration-100 active:bg-colorDeAccion active:text-blancoEstrella`}
            onClick={mostrarBack}
          >
            Back-End
          </button>
        </div>
      </div>
      <div className="w-screen h-auto p-4  flex flex-wrap justify-around gap-x-2 gap-y-12 items-center">
        {back && front ? (
          <>
            <ComponenteTarjeta
                imagenTarjeta="bg-Comida"
                titulo="Comida a un click"
                subtitulo="Front-end & Back-end"
                link="https://comida-a-un-click.vercel.app/"
              >
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/github/explore/5cc0a03a302ec862c4aeac2a22a513ae31c35432/topics/astro/astro.png"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png" 
                  alt="no cargo"
                />
                
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1024px-Spring_Boot.svg.png"
                  alt="no cargo"
                />
              </ComponenteTarjeta>
              <ComponenteTarjeta
                imagenTarjeta="bg-altoFlora"
                titulo="AltoFlora - server"
                subtitulo="Front-end & Back-end"
                link="https://alto-flora-copete-crew-zsdh.vercel.app/en"
              >
                <img
                  className="w-24 h-24 "
                  src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png" 
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1024px-Spring_Boot.svg.png"
                  alt="no cargo"
                />
              </ComponenteTarjeta>

            <ComponenteTarjeta
              imagenTarjeta="bg-EnglishCorner"
              titulo="EnglishCorner"
              subtitulo="Front-end &  Back-end"
            >
              <img
                className="w-24 h-24 "
                src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-24 "
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
          </>
        ) : !back && !front ? (
          <>
          <ComponenteTarjeta
                imagenTarjeta="bg-Comida"
                titulo="Comida a un click"
                subtitulo="Front-end & Back-end"
                link="https://comida-a-un-click.vercel.app/"
              >
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/github/explore/5cc0a03a302ec862c4aeac2a22a513ae31c35432/topics/astro/astro.png"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png" 
                  alt="no cargo"
                />
                
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                  alt="no cargo"
                />
              </ComponenteTarjeta>
            <ComponenteTarjeta
                imagenTarjeta="bg-altoFlora"
                titulo="AltoFlora - server"
                subtitulo="Front-end & Back-end"
                link="https://alto-flora-copete-crew-zsdh.vercel.app/en"
              >
                <img
                  className="w-24 h-24 "
                  src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png" 
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1024px-Spring_Boot.svg.png"
                  alt="no cargo"
                />
              </ComponenteTarjeta>

            <ComponenteTarjeta
              imagenTarjeta="bg-EnglishCorner"
              titulo="EnglishCorner"
              subtitulo="Front-end &  Back-end"
            >
              <img
                className="w-24 h-24 "
                src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-24 "
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>

            <ComponenteTarjeta
              imagenTarjeta="bg-ArteyForma"
              titulo="Esthetic Health"
              subtitulo="Front-end"
            >
              <img
                className="w-24 h-24 "
                src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-24 "
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>

            <ComponenteTarjeta
              imagenTarjeta="bg-portafolio"
              titulo="Portafolio"
              subtitulo="Front-end"
            >
              <img
                className="w-24 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="no cargo"
              />
              <img
                className="w-24 h-24"
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
                alt="no cargo"
              />
              <img
                className="w-20 h-20"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
          </>
        ) : back ? (
          <>
        <ComponenteTarjeta
                imagenTarjeta="bg-Comida"
                titulo="Comida a un click"
                subtitulo="Front-end & Back-end"
                link="https://comida-a-un-click.vercel.app/"
              >
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/github/explore/5cc0a03a302ec862c4aeac2a22a513ae31c35432/topics/astro/astro.png"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png" 
                  alt="no cargo"
                />
                
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                  alt="no cargo"
                />
              </ComponenteTarjeta>
            <ComponenteTarjeta
                imagenTarjeta="bg-altoFlora"
                titulo="AltoFlora - server"
                subtitulo="Front-end & Back-end"
                link="https://alto-flora-copete-crew-zsdh.vercel.app/en"
              >
                <img
                  className="w-24 h-24 "
                  src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png" 
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1024px-Spring_Boot.svg.png"
                  alt="no cargo"
                />
              </ComponenteTarjeta>

            <ComponenteTarjeta
              imagenTarjeta="bg-EnglishCorner"
              titulo="EnglishCorner"
              subtitulo="Front-end &  Back-end"
            >
              <img
                className="w-24 h-24 "
                src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-24 "
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
          </>
        ) : front ? (
          <>
            <ComponenteTarjeta
                imagenTarjeta="bg-Comida"
                titulo="Comida a un click"
                subtitulo="Front-end & Back-end"
                link="https://comida-a-un-click.vercel.app/"
              >
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/github/explore/5cc0a03a302ec862c4aeac2a22a513ae31c35432/topics/astro/astro.png"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png" 
                  alt="no cargo"
                />
                
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                  alt="no cargo"
                />
              </ComponenteTarjeta>

            <ComponenteTarjeta
                imagenTarjeta="bg-altoFlora"
                titulo="AltoFlora - server"
                subtitulo="Front-end & Back-end"
                link="https://alto-flora-copete-crew-zsdh.vercel.app/en"
              >
                <img
                  className="w-24 h-24 "
                  src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png" 
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="no cargo"
                />
                <img
                  className="w-24 h-24 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1024px-Spring_Boot.svg.png"
                  alt="no cargo"
                />
              </ComponenteTarjeta>

            <ComponenteTarjeta
              imagenTarjeta="bg-EnglishCorner"
              titulo="EnglishCorner"
              subtitulo="Front-end &  Back-end"
            >
              <img
                className="w-24 h-24 "
                src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-24 "
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
            <ComponenteTarjeta
              imagenTarjeta="bg-ArteyForma"
              titulo="Esthetic Health"
              subtitulo="Front-end"
            >
              <img
                className="w-24 h-24 "
                src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-24 "
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
              <img
                className="w-20 h-20 "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>

            <ComponenteTarjeta
              imagenTarjeta="bg-portafolio"
              titulo="Portafolio"
              subtitulo="Front-end"
            >
              <img
                className="w-24 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-24"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="no cargo"
              />
              <img
                className="w-24 h-24"
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
                alt="no cargo"
              />
              <img
                className="w-20 h-20"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Portafolio;
