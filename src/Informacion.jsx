import React from "react";
import fotoSinFondo from "./assets/fotoSinFondo.png";
import Redes from "./redes";
import "././css/index.css";
import "././css/App.css";

function Informacion() {
  return (
    <div className="w-screen h-auto flex justify-around flex-wrap-reverse items-center py-14">
      <div className="w-5/12 flex flex-col gap-2">
        <p className="w-full bg-colorFondo text-blancoEstrella text-lg font-medium text-wrap">
          Soy David Osorio, un apasionado de la programación. Con más de dos
          años de practica, me especializo en desarrollo Front-End. mas sin
          embargo me desenvuelvo bastante bien en desarrolo Back-End y
          desarrollo movil. Mi enfoque se centra en crear soluciones innovadoras
          y eficientes que satisfagan las necesidades del usuario. ¡Programemos
          juntos el futuro!
        </p>
        <div className="w-full h-auto flex flex-col gap-9">
          <div className="flex w-full justify-around flex-wrap gap-8">
            <Redes
              nombre="David Alejandro Osorio Sanchez"
              linkPerfil="https://www.linkedin.com/in/david-alejandro-osorio-sanchez-662a6624b/?trk=public-profile-join-page"
              linkImg="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              redondo="rounded-none"
              tieneFondo="bg-transparente"
            />

            <Redes
              nombre="@DavidOsorioSanchez"
              linkPerfil="https://github.com/DavidOsorioSanchez/Portafolio.git"
              linkImg="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
              redondo="rounded-full"
              tieneFondo="bg-blancoEstrella"
            />
          </div>
          <div className="flex w-full justify-around flex-wrap gap-9">
            <Redes
              nombre="daalosx@gmail.com"
              linkPerfil="https://mail.google.com/mail/u/0/#inbox"
              linkImg="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
              redondo="rounded-none"
              tieneFondo="bg-transparente"
            />
            <Redes
              nombre="+57 305-2209754"
              linkPerfil="https://www.whatsapp.com/?lang=es_LA"
              linkImg="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png"
              redondo="rounded-none"
              tieneFondo="bg-transparente"
            />
          </div>
        </div>
      </div>

      <div className="responsive w-96 h-96 relative">
        <div className="responsive w-96 h-96 -top-1 absolute rounded-full border-dashed border-8 animate-giro border-colorBordePerfil "></div>
        <img
          className="responsive w-96 h-96 absolute rounded-full "
          src={fotoSinFondo}
          alt="la imagen no marco"
        />
      </div>
    </div>
  );
}

export default Informacion;
