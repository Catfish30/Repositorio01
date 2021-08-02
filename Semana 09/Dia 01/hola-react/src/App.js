import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'
import InputTarea from './components/InputTarea'

export default function App() {
    const [tareas,setTareas] = useState(["Comer"])

    const [texto,setTexto] = useState("")

    const annadirTarea = () =>{
        setTareas([...tareas, texto])

    }

    const manejarTexto = (nuevoTexto) => {
        setTexto(nuevoTexto)
    }

    const eliminarTarea = (indice) => {
        let tareasTmp = [...tareas]
        tareasTmp.splice(indice,1)
        setTareas(tareasTmp)
    }

    const miTitulo = "Mi app"

    useEffect(()=>{
        setTexto("")
    },[tareas])

    return (
        <div>
            <h1>{miTitulo}</h1>

            <ListaTareas tareas = {tareas} eliminarTarea={eliminarTarea}/>
            <hr/>

            <InputTarea texto={texto} manejarTexto={manejarTexto} annadirTarea={annadirTarea}/>

            <input type="text" value={texto} onChange={(e) => {manejarTexto(e.target.value)}}/>

            <button onClick={annadirTarea}>
                Anadir Tarea
            </button>
            <Footer mensaje={"Empresa 01"}/>
            <Footer mensaje={"Empresa 02"}/>
        </div>
    )
}
