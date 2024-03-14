import './main'
import ComponenteTarjeta from './componenteTarjeta'
import './App.css'
import { useEffect } from 'react';

function App() {
  return (
    <body>
      
      <nav  class='w-full h-12 p-2 m-0'>
        <div id='navbar'>

        
            <p class="animacion">
              <span class="icono material-symbols-outlined bg-white rounded-lg">
              code
                
              </span>
              <p class="titulo">Soy David Alejandro Osorio Sánchez</p>
            </p>
          <div>
            {document.addEventListener("scroll", () => {
              const navbar = document.getElementById("navbar");
              if (window.pageYOffset > 50) {
                navbar.style = "border-bottom: 0.2rem  solid whitesmoke; animation: normal aparecer 0.5s ease;";
              }
              if(window.pageYOffset < 50) {
                navbar.style = "::before  animation: normal desaparecer 0.5s ease;";
              }
            })}
          </div>
        </div>
        <div id='borde'></div>
      </nav>
      {/* <ComponenteTarjeta />  */}
    </body>
  )  
}

export default App
