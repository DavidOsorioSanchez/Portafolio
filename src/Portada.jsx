import React from 'react'
import Logos from './Logos';
import './App.css'

function Portada (){
    return(
        <div class="main">
            
            <Logos miAnimacion="JS" links="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" /> 
            <Logos miAnimacion="SQL" links="http://blog.desafiolatam.com/wp-content/uploads/2018/05/sql-logo.png" class="SQL"/>
            <Logos miAnimacion="JAVA" links="http://blog.desafiolatam.com/wp-content/uploads/2018/05/java-logo.png" class="JAVA" />
            <Logos miAnimacion="REACT" links="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png" /> 
            <Logos miAnimacion="CSS" links="https://img-resize-cdn.joshmartin.ch/2000x0%2C363e360e8516e42e965658dab267b06b94b2899a751b80079cfce35583aa080c/https://joshmartin.ch/app/uploads/2017/10/css3.svg" class="SQL"/>
            <Logos miAnimacion="HTML" links="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png" class="JAVA" />
        </div>
    )
        

}
export default Portada;