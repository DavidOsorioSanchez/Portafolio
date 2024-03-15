import React from 'react'
import Logos from './Logos';
import './App.css'

function Portada (){
    return(
        <div class="main">
            
            <Logos miAnimacion="JS" links="https://blog.desafiolatam.com/wp-content/uploads/2018/05/javascript-logo.png" /> 
            <Logos miAnimacion="SQL" links="http://blog.desafiolatam.com/wp-content/uploads/2018/05/sql-logo.png" class="SQL"/>
            <Logos miAnimacion="JAVA" links="http://blog.desafiolatam.com/wp-content/uploads/2018/05/java-logo.png" class="JAVA" />
        </div>
    )
        

}
export default Portada;