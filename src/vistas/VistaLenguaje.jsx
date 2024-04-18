import React from "react";
import './VistaLenguaje.css'

function VistaLenguaje({len}){
    return(
        <div className="lenVista">
        <h1>{len.nombre}</h1>
        <h2>{len.comentario}</h2>
        <img src={len.imagen} alt= {len.imagen + 'imagen'}/>

        </div>

    )
}

export default VistaLenguaje;