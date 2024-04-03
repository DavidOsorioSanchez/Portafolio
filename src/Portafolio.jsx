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
            className={`w-40 rounded-md ${estadoFont} transition ease-in duration-100 hover:bg-colorDeAccion hover:text-blancoEstrella`}
            onClick={mostrarFront}
          >
            Frond-End
          </button>
          <button
            className={`w-40 rounded-md ${estadoBack} transition ease-in duration-100 hover:bg-colorDeAccion hover:text-blancoEstrella`}
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
              retrazo="duration-150"
              imagenTarjeta="bg-tarjeta1"
              titulo="Explosion"
              subtitulo="Front-end &  Back-end"
            >
              <img
                className="w-24 h-w-24 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
          </>
        ) : !back && !front ? (
          <>
            <ComponenteTarjeta
              retrazo="duration-150"
              imagenTarjeta="bg-tarjeta1"
              titulo="Explosion"
              subtitulo="Front-end &  Back-end"
            >
              <img
                className="w-24 h-w-24 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
            <ComponenteTarjeta
              retrazo="duration-450"
              imagenTarjeta="bg-tarjeta3"
              titulo="Casa"
              subtitulo="Back-end"
            >
              <img
                className="w-24 h-w-24"
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-w-24"
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
            <ComponenteTarjeta
              retrazo="duration-300"
              imagenTarjeta="bg-tarjeta2"
              titulo="Piedras"
              subtitulo="Front-end"
            >
              <img
                className="w-24 h-w-24"
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>

            <ComponenteTarjeta
              retrazo="duration-300"
              imagenTarjeta="bg-portafolio"
              titulo="portafolio"
              subtitulo="Front-end"
            >
              <img
                className="w-24 h-w-24"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-w-24"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="no cargo"
              />
              <img
                className="w-24 h-w-24"
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
                alt="no cargo"
              />
            </ComponenteTarjeta>
          </>
        ) : back ? (
          <>
            <ComponenteTarjeta
              retrazo="duration-150"
              imagenTarjeta="bg-tarjeta1"
              titulo="Explosion"
              subtitulo="Front-end &  Back-end"
            >
              <img
                className="w-24 h-w-24 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
            <ComponenteTarjeta
              retrazo="duration-450"
              imagenTarjeta="bg-tarjeta3"
              titulo="Casa"
              subtitulo="Back-end"
            >
              <img
                className="w-24 h-w-24"
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-w-24"
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
          </>
        ) : front ? (
          <>
            <ComponenteTarjeta
              retrazo="duration-150"
              imagenTarjeta="bg-tarjeta1"
              titulo="Explosion"
              subtitulo="Front-end &  Back-end"
            >
              <img
                className="w-24 h-w-24 "
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>
            <ComponenteTarjeta
              retrazo="duration-300"
              imagenTarjeta="bg-tarjeta2"
              subtitulo="Front-end"
            >
              <img
                className="w-24 h-w-24"
                src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
                alt="no cargo"
              />
            </ComponenteTarjeta>

            <ComponenteTarjeta
              retrazo="duration-300"
              imagenTarjeta="bg-portafolio"
              titulo="portafolio"
              subtitulo="Front-end"
            >
              <img
                className="w-24 h-w-24"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
                alt="no cargo"
              />
              <img
                className="w-24 h-w-24"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="no cargo"
              />
              <img
                className="w-24 h-w-24"
                src="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
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
