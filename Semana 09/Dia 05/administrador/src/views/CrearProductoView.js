import React from 'react'
import { useState,useEffect } from 'react'
import { useHistory } from "react-router-dom"

import Swal from "sweetalert2"

import { crearProducto, subirArchivo } from "../services/ProductosService"
import FormProducto from '../components/FormProducto'

let imagen


export default function CrearProductoView() {
    const [value,setValue] = useState({
        prod_nombre:'',
        prod_descripcion:'',
        prod_precio:0,
        prod_stock:0,
        prod_oferta:false,
    })

    const history = useHistory()


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
        try {
            const urlArchivo = await subirArchivo(imagen) 
            await crearProducto({...value,prod_imagen:urlArchivo})
            await Swal.fire({
                icon:'success',
                title:'Producto Creado!',
                showConfirmButton:false,
                timer:2000
            })
            history.push('/')

        } catch (error) {
            console.log(error)
        }
    }

    const manejarImagen = (e) => {
        e.preventDefault()
        // console.log(e)
        imagen = e.target.files[0]
    }



    return (
        <div>
            <h1>Crear Producto</h1>
            <FormProducto value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit} manejarImagen={manejarImagen} />
        </div>
    )
}
