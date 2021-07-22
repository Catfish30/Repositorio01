//to-do
//1. Obtener Datos
//1.1 Esos datos estan en la estructura que se necesita?
//2 Convertir datos a HTML
//3 Agregar al DOM

import { obtenerProductos } from "./productoService.js";
import { imprimirProductos } from "./inteface.js";
import { crearProducto } from "./productoService.js";

const bntCrear = document.getElementById("btnCrear")
const modalCrear = document.getElementById("modalCrear")
const bsModalCrear = new bootstrap.Modal(modalCrear)  //instanciando modal como objeto de bootstrap
const formCrear = document.getElementById("formCrear")

const getProductos = () => {
    obtenerProductos()
    .then((productos) => {
       imprimirProductos(productos);
    })
}
getProductos()

bntCrear.addEventListener("click",() => {
    bsModalCrear.show()
})

formCrear.addEventListener("submit", async (e) => {
    e.preventDefault()

    const nuevoProducto = {
        prod_nombre: formCrear.prod_nombre.value,
        prod_descripcion: formCrear["prod_descripcion"].value,
        prod_precio: formCrear["prod_precio"].value,
        prod_stock: formCrear["prod_stock"].value,
        prod_oferta: formCrear["prod_oferta"].value,
    }

    try {
        let rpta = await crearProducto(nuevoProducto)
        formCrear.reset() //limpia formulario
        bsModalCrear.hide() //escondo el modal
        getProductos() //obtengo productos actualizados
    } catch (error) {
        console.log(error);
    }
})
