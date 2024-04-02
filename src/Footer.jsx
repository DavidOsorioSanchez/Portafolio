import React from "react";
function Footer() {
  return (
    <footer className="w-screen h-auto flex flex-col  min-h-24 bg-colorFooter border-solid border-t-2 border-colorBordePerfil gap-20 py-12">
      <p className="text-center text-5xl text-blancoEstrella">Formulario</p>
      <form className="w-screen flex gap-5 flex-wrap justify-around">
        <input
          className="min-w-80 border-t-hidden border-r-hidden bg-transarente text-blancoEstrella border-solid border-b-4 border-l-2 border-colorBordePerfil rounded-tr-sm text-center"
          type="gmail"
          placeholder="Escribe tu correo"
          required
        />
        <input
          className="min-w-80 border-t-hidden border-r-hidden bg-transarente text-blancoEstrella border-solid border-b-4 border-l-2 border-colorBordePerfil rounded-tr-sm text-center"
          type="text"
          placeholder="Escribe tu nombre"
          required
        />
      </form>
    </footer>
  );
}

export default Footer;
