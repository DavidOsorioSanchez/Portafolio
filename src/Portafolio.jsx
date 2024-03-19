import React from 'react'
import ComponenteTarjeta from './componenteTarjeta'
import '././css/index.css'
import '././css/App.css'

function Portafolio() {
  return (
    <div className='w-screen h-auto p-4 bg-Fondo-Estrellas flex justify-around items-center'>
      <ComponenteTarjeta />
      <ComponenteTarjeta />
      <ComponenteTarjeta/>
    </div>
  )
}

export default Portafolio;