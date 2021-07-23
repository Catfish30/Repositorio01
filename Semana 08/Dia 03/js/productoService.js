
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

const eliminarProducto = async (id) => {
    const configuracion = {
        method: 'DELETE'
    }
    try {
        await fetch(`${URL}/${id}`,configuracion) //No necesito respuesta porque lo estoy eliminando
        return "Eliminado"
    } catch (error) {
        throw error
    }

}

const obtenerProductoId = async (id) =>{
    try {
        const respuesta = await fetch(`${URL}/${id}`)
        const producto = await respuesta.json()
        return producto
    } catch (error) {
        throw error
    }
}

const actualizarProducto = async (objProducto) => {
    const configuracion = {
        method:'PUT',
        body:JSON.stringify(objProducto),
        headers:{'Content-Type':'application/json'}
    }
    try {
        const respuesta = await fetch(`${URL}/${objProducto.prod_id}`,configuracion)
        const productoAct = await respuesta.json()
        return productoAct
    } catch (error) {
        throw error
    }
}


export {
    obtenerProductos,
    crearProducto,
    eliminarProducto,
    obtenerProductoId,
    actualizarProducto
}