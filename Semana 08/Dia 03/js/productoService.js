
const URL = "https://60f72c029cdca00017454da7.mockapi.io/productos"

const obtenerProductos = () => {
    return new Promise((resolve,reject) =>{
        //Codigo asincrono,que demora
        fetch(URL)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then((productosObtenidos) => {
            resolve(productosObtenidos)
        })
        .catch(error => reject(error))
    })
}

const crearProducto = async (objProducto) => {
    const configuracion = {
        method:'POST',
        body: JSON.stringify(objProducto),
        headers:{'Content-Type':'application/json'}
    }
    try {
        const respuesta = await fetch(URL, configuracion) 
        const data = await respuesta.json()
        return data
    } catch (error) {
        throw error
    }
    

}



export {
    obtenerProductos,
    crearProducto
}