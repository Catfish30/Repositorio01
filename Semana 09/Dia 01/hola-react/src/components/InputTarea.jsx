import React from 'react'

export default function InputTarea(props) {
    console.log(props);
    return (
        <div>
            <input type="text" value={props.texto} onChange={(e) => {props.manejarTexto(e.target.value)}}/>
            <button onClick={props.annadirTarea}>
                Agregar Tarea 
            </button>
        </div>
    )
}
