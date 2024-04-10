import React from "react";
import Logos from "./Logos";
import "././css/index.css";
import "././css/App.css";
import "././css/Portada.scss";

function Portada() {
  // const main = document.querySelector(".main");

  // main.addEventListener("mousemove", (e) => {
  //   let xPos = e.clientX;
  //   let yPos = e.clientY;
  //   console.log(xPos, yPos);
  // });

  return (
    <div className="main">

      <img
        className="imagenFondo"
        src="https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/non-4k/original/07.jpg?3"
        alt="no cargo"
      />
      {/* tarjeta parte izquierda */}
      <Logos
        miAnimacion="JS"
        links="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png"
      />
      <Logos
        miAnimacion="SQL"
        links="http://blog.desafiolatam.com/wp-content/uploads/2018/05/sql-logo.png"
      />
      <Logos
        miAnimacion="JAVA"
        links="http://blog.desafiolatam.com/wp-content/uploads/2018/05/java-logo.png"
      />
      <Logos
        miAnimacion="REACT"
        links="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
      />
      <Logos
        miAnimacion="CSS"
        links="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg"
      />
      <Logos
        miAnimacion="HTML"
        links="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png"
      />

      {/* tarjeta parte derecha */}
      <Logos
        miAnimacion="TAIL"
        links="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
      />
      <Logos
        miAnimacion="BOOT"
        links="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
      />
      <Logos
        miAnimacion="FLUTTER"
        links="https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png"
      />
      <Logos
        miAnimacion="DART"
        links="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
      />
      <Logos
        miAnimacion="SPRING"
        links="https://www.armadilloamarillo.com/wp-content/uploads/spring-boot-ok.png"
      />
      <Logos
        miAnimacion="PYTHON"
        links="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/220px-Python-logo-notext.svg.png"
      />
    </div>
  );
}
export default Portada;
