import React from 'react'
import { useEffect,useState } from 'react'
import { obtenerProductos } from '../Services/productoService'
import GrupoProductos from '../Components/GrupoProductos'

export default function PortadaView() {

    const [productos,setproductos] = useState([])

    const getProductos = async () => {
        try {
            let productosObtenidos = await obtenerProductos()
            setproductos(productosObtenidos)   
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductos()
    },[])

    return (
        <div>
            <GrupoProductos productos={productos} />
        </div>
    )
}
