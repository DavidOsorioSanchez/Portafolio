import React from "react";

function Redes({nombre, linkImg, linkPerfil, tieneFondo, redondo}){
    return(
        <div className="flex gap-4 items-center">
              <img
                src={linkImg}
                className={`w-12 h-12 p-1 ${redondo} ${tieneFondo}`}
                alt="no cargo"
              />
              <a
                className="text-blancoEstrella text-xl active:text-colorBordePerfil active:underline active:decoration-solid"
                href={linkPerfil}
                target="_blank"
              >
                {`${nombre}`}
              </a>
        </div>
    )
}

export default Redes;