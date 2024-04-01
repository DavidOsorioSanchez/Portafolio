import React from 'react'
import fotoSinFondo from './assets/fotoSinFondo.png'
import '././css/index.css'
import '././css/App.css'

function Informacion() {
    return (
        <div className='w-screen h-auto flex justify-around flex-wrap-reverse items-center py-14'>
            <div className='w-2/4 flex flex-col gap-3'>
                <p className='w-full bg-colorFondo text-blancoEstrella text-lg font-medium text-wrap'>
                Soy David Osorio, un apasionado de la programación. Con más de una dos años de experiencia, me especializo en desarrollo web y móvil. Mi enfoque se centra en crear soluciones innovadoras y eficientes que satisfagan las necesidades del usuario. ¡Programemos juntos el futuro!</p>
                <div className='flex w-full justify-around'>
                    <div className='flex gap-4 items-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" className='w-12 h-12 ' alt="no cargo" />
                        <p className='text-blancoEstrella text-xl'>David Alejandro Osorio Sanchez</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" className='w-12 h-12 bg-blancoEstrella rounded-full' alt="no cargo" />
                        <p className='text-blancoEstrella text-xl'>@DavidOsorioSanchez</p>
                    </div>
                </div>
            </div>
            
            <div className='w-96 h-96 relative'>
                <div className='w-96 h-96 -top-1 absolute rounded-full border-dashed border-8 animate-giro border-colorBordePerfil'></div>
                <img className='w-96 h-96 absolute rounded-full' src={fotoSinFondo} alt="la imagen no marco" />
            </div>
        </div>
    )
}

export default Informacion;