import React from 'react'
import ComponenteTarjeta from './componenteTarjeta'
import '././css/index.css'
import '././css/App.css'

function Portafolio() {
  const [front, setFront] = React.useState(false);
  const estadoFont =  front ? "bg-colorActivoFront text-blancoEstrella" : "bg-blancoEstrella ";
  const [back, setBack] = React.useState(false);
  const estadoBack =  back ? "bg-colorActivoBack text-blancoEstrella" : "bg-blancoEstrella ";

  const  mostrarFront = () =>{
    if(!back){
      setFront(!front)
    }
  }

  const  mostrarBack = () =>{
    if(!front){
      setBack(!back)
    }
  }

  return (
    <div className='w-screen h-auto bg-Fondo-Estrellas'>
      <div className='w-screen h-auto flex flex-col py-12 gap-8'>
        <p className='w-screen h-auto flex justify-center text-blancoEstrella font-bold text-4xl'>Trabajos Hechos</p>
        <div className='w-screen h-auto flex justify-center gap-6 text-colorFondo  font-bold text-lg'>
          <button className={`w-40 rounded-md ${estadoFont} transition ease-in duration-100 hover:bg-colorDeAccion hover:text-blancoEstrella`} onClick={mostrarFront}>Frond-End</button>
          <button className={`w-40 rounded-md ${estadoBack} transition ease-in duration-100 hover:bg-colorDeAccion hover:text-blancoEstrella`} onClick={mostrarBack}>Back-End</button>
        </div>
      </div>
      <div className='w-screen h-auto p-4  flex flex-wrap justify-around gap-x-2 gap-y-12 items-center'>
        {/* el tipo true es front end y el false es back end  */}
        <ComponenteTarjeta retrazo="duration-150" tipo imagenTarjeta="bg-targeta1" titulo="Explosion">
          <img className='w-24 h-w-24 ' src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" alt="no cargo" />
        </ComponenteTarjeta>
        <ComponenteTarjeta retrazo="duration-300" tipo={false} imagenTarjeta="bg-targeta2" titulo="Piedras" >
          <img className='w-24 h-w-24' src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" alt="no cargo" />
        </ComponenteTarjeta>
        <ComponenteTarjeta retrazo="duration-450" tipo imagenTarjeta="bg-targeta3" titulo="Casa" >
          <img className='w-24 h-w-24' src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" alt="no cargo" />
          <img className='w-24 h-w-24' src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" alt="no cargo" />
        </ComponenteTarjeta>
        
      </div>
    </div>
  )
}

export default Portafolio;