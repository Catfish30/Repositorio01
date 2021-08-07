import { useState,createContext } from "react";

export const CarritoContext = createContext()



const CarritoContextProvider = (props) => {
    

    const [carrito,setCarrito] = useState([])

    const annadirCarrito = (producto) => {

        for(let i=0;i < carrito.length;i++){
            if(carrito[i].prod_id === producto.prod_id){
                const productoExiste = {
                    ...carrito[i],
                    cantidad: carrito[i].cantidad + 1
                }
            
            let carritoTmp =[...carrito ]
            carritoTmp.splice(i,1)
            carritoTmp.push(productoExiste)
            setCarrito(carritoTmp) 
            return
            }
        }

        setCarrito([...carrito,{...producto, cantidad:1}])
    }

    return(
        <CarritoContext.Provider value={{carrito, annadirCarrito}}>
            {props.children}
        </CarritoContext.Provider>
    )

}

export default CarritoContextProvider