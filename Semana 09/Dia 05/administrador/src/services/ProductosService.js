import axios from "axios"

const URL = `https://6108335bd73c6400170d38a1.mockapi.io/productos`

const obtenerProductos = async () => {
    try {
        // axios.get .post .put  , data contiene los da tos de respuesta
        let { data } = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

export {
    obtenerProductos
}