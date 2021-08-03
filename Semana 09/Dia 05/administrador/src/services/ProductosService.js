import axios from "axios"

// const URL = `https://6108335bd73c6400170d38a1.mockapi.io/productos`

const URL = `${process.env.REACT_APP_API}productos`
console.log(URL)

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



export {
    obtenerProductos,
    crearProducto
}