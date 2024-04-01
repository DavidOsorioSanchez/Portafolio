import React from 'react'
import '././css/index.css'
import '././css/App.css'

function ComponenteTarjeta ({children, retrazo, imagenTarjeta, titulo, tipoBack, tipoFront}){


    return(
        <div className={`w-2/5 min-w-72 max-h-max h-96 rounded-lg animate-bajada ${retrazo} object-cover bg-no-repeat bg-cover bg-total ${tipoFront} ${tipoBack} ${imagenTarjeta}`}>
            <div className={`w-full h-full flex flex-col transition ease-in-out duration-300 rounded-lg opacity-0 hover:opacity-100 hover:bg-BlancoTransparente`}>
                <p className='w-full h-1/2 flex justify-center items-end font-semibold italic text-4xl text-nowrap '>
                    {`${titulo}`}
                </p>
                <div className='w-full h-1/2 flex flex-wrap justify-around items-center '>
                    {children}
                </div>
            </div>
        </div>
    )
        

}

export default ComponenteTarjeta;