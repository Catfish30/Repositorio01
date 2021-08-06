import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
// params pasamos parametros en la ruta
import { obtenerProductoPorId } from '../Services/productoService'
import Cargando from '../Components/Cargando'

export default function ProductoView() {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    const getProducto = async () => {
        try {
            let productosObtenido = await obtenerProductoPorId(id)
            setProducto(productosObtenido)
            setCargando(false) // aqui le decimos que se termino de cargar los datos
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducto()
    },[])

    return (
        <div>

            {cargando ? 
            (<Cargando />) : 
            (<div>
                <div className="container">
                    <h2 className="fw-bold">{producto.prod_nombre}</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img className="img-fluid" src={producto.prod_imagen} alt={producto.prod_nombre} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h5 className="fw-bold">Descripcion</h5>
                            <p>{producto.prod_descripcion}</p>
                            <div className="py-3 d-flex justify-content-between">
                                <span className="fw-bold">
                                    S/.{producto.prod_precio}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}

        </div>
    )
}
