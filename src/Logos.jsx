import React from 'react'

function Logos ({links, miAnimacion}){
    return(
        <>
            <img className={`iconoProgramacion ${miAnimacion}`} src={links} alt="no cargo T_T"/>
        </>
    )
        

}
export default Logos;