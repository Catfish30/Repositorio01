import React from 'react'
import { Carousel } from 'react-bootstrap'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import NavTop from './Components/NavTop'
import Routes from './Routes'
import CustomCarousel from './Components/CustomCarousel'
import CarritoContextProvider from './context/carritoContext'


export default function App() {
  return (
    <Router>
      <CarritoContextProvider>
        <NavTop />
        <Switch>
          <Routes/>
        </Switch>
      </CarritoContextProvider>
    </Router>
  )
}

