import React from 'react'
import { Route } from "react-router-dom"
import ListaProductosView from './views/ListaProductosView'
import CrearProductoView from './views/CrearProductoView'

//obtendra solo rutas atributos path, component, exact

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={ListaProductosView} />
            <Route path="/crear" exact component={CrearProductoView} />
        </div>
    )
}
