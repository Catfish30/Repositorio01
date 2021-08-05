import axios from "axios"
import { storage } from "../config/Firebase"

// const URL = `https://6108335bd73c6400170d38a1.mockapi.io/productos`

const URL = `${process.env.REACT_APP_API}productos`

const obtenerProductos = async () => {
    try {
        // axios.get .post .put  , data contiene los da tos de respuesta
        let { data } = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

const crearProducto = async (nuevoProducto) => {
    try {
        const headers = {
            "Content-Type":"application/json"
        }
        //.post(URL,DATA,HEADERS)
        let {data} = await axios.post(URL,nuevoProducto,{ headers })
        return data
    } catch (error) {
        throw error        
    }
}

const obtenerProductoPorId = async (id) => {
    try {
        let { data } = await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

const editarProducto = async (productoEditado,id) =>{
    try {
        const headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.put(`${URL}/${id}`,productoEditado,{ headers })
        return data
    } catch (error) {
        throw error
    }
}

const subirArchivo = (imagen) => {
    return new Promise((resolve, reject) => {
        let refStorage = storage.ref(`fotos/${imagen.name}`)
        let tareaSubir = refStorage.put(imagen)

        tareaSubir.on("state_changed",
            () => {},
            (error) => {reject(error)},
            () => {
                tareaSubir.snapshot.ref.getDownloadURL()
                .then((urlImagen) => {
                    resolve(urlImagen)
                })
            }
        )
    })
}

export {
    obtenerProductos,
    crearProducto,
    obtenerProductoPorId,
    editarProducto,
    subirArchivo,
}