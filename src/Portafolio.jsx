import React from 'react'
import ComponenteTarjeta from './componenteTarjeta'
import '././css/index.css'
import '././css/App.css'

function Portafolio() {
  return (
    <div className='w-screen h-auto p-4 bg-Fondo-Estrellas flex flex-wrap justify-around gap-4 items-center'>
      <ComponenteTarjeta retrazo="delay-0" imagenTarjeta="tarjeta1"/>
      <ComponenteTarjeta retrazo="delay-50"/>
      <ComponenteTarjeta retrazo="delay-100"/>
    </div>
  )
}

export default Portafolio;