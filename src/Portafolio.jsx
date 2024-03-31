import React from 'react'
import ComponenteTarjeta from './componenteTarjeta'
import '././css/index.css'
import '././css/App.css'

function Portafolio() {
  return (
    <div className='w-screen h-auto bg-Fondo-Estrellas'>
      <div>

      </div>
      <div className='w-screen h-auto p-4  flex flex-wrap justify-around gap-x-2 gap-y-12 items-center'>
        <ComponenteTarjeta retrazo="duration-150" imagenTarjeta="bg-targeta1" titulo="Explosion">
          <img className='w-24 h-w-24 ' src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" alt="no cargo" />
        </ComponenteTarjeta>
        <ComponenteTarjeta retrazo="duration-300" imagenTarjeta="bg-targeta2" titulo="Piedras" >
          <img className='w-24 h-w-24' src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" alt="no cargo" />
        </ComponenteTarjeta>
        <ComponenteTarjeta retrazo="duration-450" imagenTarjeta="bg-targeta3" titulo="Casa" >
          <img className='w-24 h-w-24' src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" alt="no cargo" />
          <img className='w-24 h-w-24' src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" alt="no cargo" />
        </ComponenteTarjeta>
        
      </div>
    </div>
  )
}

export default Portafolio;