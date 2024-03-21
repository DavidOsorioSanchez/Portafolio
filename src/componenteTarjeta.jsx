import React from 'react'
import '././css/index.css'
import '././css/App.css'

function ComponenteTarjeta ({retrazo, imagenTarjeta}){

    return(
        <div className={`w-1/3 max-h-max h-96 flex rounded-2xl bg-BlancoTransparente animate-bajada ${retrazo}`}>
            <div id={`${imagenTarjeta}`} className={`w-5/12 h-full p-2`}>
                hola
            </div>
            <div className='w-max h-max p-2'>adios</div>
        </div>
    )
        

}
export default ComponenteTarjeta;