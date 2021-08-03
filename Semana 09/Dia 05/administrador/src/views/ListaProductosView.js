import {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

import { obtenerProductos } from '../services/ProductosService'

export default function ListaProductosView() {
    const [productos,setProductos] = useState([])


    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            // console.log(productosObtenidos)
            setProductos(productosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductos()
    },[])

    return (
        <div>
            <h1>Lista de Productos</h1>
            {/* se cambio button por link para redireccionar hacia otro archivo, vista. con el atributo to propio de react-router-dom */}
            <Link className="btn btn-primary btn-lg my-2" to='/crear'>
                Crear Producto
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map( (prod,i) => (
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td>{prod.prod_descripcion}</td>
                            <td>{prod.prod_precio}</td>
                            <td>{prod.prod_stock}</td>
                            <td>
                                <button className="btn btn-warning btn-sm">
                                    <i className="fas fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
