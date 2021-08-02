import React from 'react'

export default function ListaTareas(props) {
    return (
        <ul>
            {props.tareas.map((item,i) => {
                    return <li key={i}>{item} <button onClick={() => {props.eliminarTarea(i)}}>X</button> </li>
                })}
        </ul>
    )
}
