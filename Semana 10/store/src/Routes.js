import React from 'react'
import { Route } from 'react-router-dom'
import PortadaView from './Views/PortadaView'
import ProductoView from './Views/ProductoView'
import CarritoView from './Views/CarritoView'
import ProductosViews from './Views/ProductosViews'
import LoginView from './Views/LoginView'

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={PortadaView} />
            <Route path="/detalle/:id" exact component={ProductoView} />
            <Route path="/carrito" exact component={CarritoView} />
            <Route path="/productos" exact component={ProductosViews} />
            <Route path="/login" exact component={LoginView} />
        </div>
    )
}
