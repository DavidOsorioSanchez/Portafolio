import './main'
import ComponenteTarjeta from './componenteTarjeta'
import Portada from './Portada.jsx'
import './App.css'
import './index.css'
function App() {
  return (
    <>
      
      <nav  id='top'>
        <div id='navbar'>

        
            <p class="animacion">
              <span class="icono material-symbols-outlined bg-white rounded-lg">
              code
                
              </span>
              <p class="titulo">Soy David Alejandro Osorio Sánchez</p>
            </p>
          <div>
            {
              document.addEventListener("scroll", () => {
                const borde = document.getElementById("borde");
                if (window.pageYOffset < 30) {
                  borde.style = "opacity: 0; animation: normal desaparecer 1s ease;";
                }
                if(window.pageYOffset > 30) {
                  borde.style = "animation: normal aparecer 1s ease;";
                }
              })
            }
            {
              /*
              document.addEventListener('DOMContentLoaded', () => {
                const borde = document.getElementById("borde");
                borde.style = "opacity: 0"
              })
              */
            }
          </div>
        </div>
        <div id='borde'></div>
      </nav>
      
      {/* <ComponenteTarjeta />  */}
      <Portada/>
    </>
  )  
}

export default App;
