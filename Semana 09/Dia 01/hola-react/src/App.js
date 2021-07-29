import {useState} from 'react'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'

export default function App() {
    const [tareas,setTareas] = useState(["Comer"])

    const [texto,setTexto] = useState("")

    const annadirTarea = () =>{
        setTareas([...tareas, texto])

    }

    const manejarTexto = (nuevoTexto) => {
        setTexto(nuevoTexto)
    }

    const miTitulo = "Mi app"
    return (
        <div>
            <h1>{miTitulo}</h1>

            <ListaTareas tareas = {tareas}/>
            <hr/>

            <input type="text" value={texto} onChange={(e) => {manejarTexto(e.target.value)}}/>

            <button onClick={annadirTarea}>
                Anadir Tarea
            </button>
            <Footer mensaje={"Empresa 01"}/>
            <Footer mensaje={"Empresa 02"}/>
        </div>
    )
}
