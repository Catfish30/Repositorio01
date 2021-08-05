import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import { editarProducto, obtenerProductoPorId,subirArchivo } from '../services/ProductosService'
import FormProducto from '../components/FormProducto'

//useParams en forma de objeto da los parametros que reciba por url 

let imagen

export default function EditarProductoView() {

    const [value, setValue] = useState({
        prod_nombre:'',
        prod_descripcion:'',
        prod_precio:0,
        prod_stock:0,
        prod_oferta:false,
    })

    const {id} = useParams()
    const history = useHistory()

    const getProducto = async () => {
        try {
            const productoObtenido = await obtenerProductoPorId(id)
            setValue({...productoObtenido})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getProducto()
    },[])

    const actualizarInput = (e) => {
        if(e.target.name === "prod_oferta"){
            setValue({
                ...value,
                [e.target.name]:e.target.checked
            })
            return
        }
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()

        if(typeof imagen !== undefined){
            const urlArchivo = await subirArchivo(imagen)
            await editarProducto({...value, prod_imagen:urlArchivo},id)
        }else{
            await editarProducto(value,id)
        }

        await Swal.fire({
            icon:"success",
            title:"Producto editado con éxito",
            showConfirmButton:false,
            timer:2000
        })
        history.push('/')
    }

    const manejarImagen = (e) => {
        e.preventDefault()
        imagen = e.target.files[0]
    }




    return (
        <div>
            <h1>Editar Producto</h1>
            <FormProducto 
                value={value} 
                actualizarInput={actualizarInput}
                manejarSubmit={manejarSubmit}
                manejarImagen={manejarImagen}
            />
        </div>
    )
}
