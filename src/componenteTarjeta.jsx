import React from 'react'
import '././css/index.css'
import '././css/App.css'

function ComponenteTarjeta ({retrazo, imagenTarjeta, titulo}){

    return(
        <div className={`w-2/5 min-w-72 max-h-max h-96 rounded-lg animate-bajada ${retrazo} object-cover bg-no-repeat bg-cover bg-total text-transarente ${imagenTarjeta}`}>
            <div className={`w-full h-full p-2 transition ease-in-out duration-300 rounded-lg hover:bg-BlancoTransparente hover:text-negro`}>
                <p className='w-full h-1/2 flex justify-center items-end text-4xl text-nowrap '>
                    {`${titulo}`}
                </p>
            </div>
        </div>
    )
        

}
export default ComponenteTarjeta;