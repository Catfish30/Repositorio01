//to-do
//1. Obtener Datos
//1.1 Esos datos estan en la estructura que se necesita?
//2 Convertir datos a HTML
//3 Agregar al DOM

import { obtenerProductos, obtenerProductoId, actualizarProducto } from "./productoService.js";
import { imprimirProductos } from "./inteface.js";
import { crearProducto } from "./productoService.js";
import { eliminarProducto } from "./productoService.js";

const bntCrear = document.getElementById("btnCrear")
const modalCrear = document.getElementById("modalCrear")
const bsModalCrear = new bootstrap.Modal(modalCrear)  //instanciando modal como objeto de bootstrap
const formCrear = document.getElementById("formCrear")

let modoActualizar = false //identificar si esta creando o actualizando
let productoActualizar; //tener la info de lo que se actualizara, esta variable almanecera la id a actualizar

const getProductos = () => {
    obtenerProductos()
    .then((productos) => {
       imprimirProductos(productos);
       getBotonesEliminar()
       getBotonesActualizar()
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

    //Producto editado tiene la info del formulario y el id del producto a editar
    const productoEditado = {
        prop_id:productoActualizar,
        prod_nombre: formCrear.prod_nombre.value,
        prod_descripcion: formCrear["prod_descripcion"].value,
        prod_precio: formCrear["prod_precio"].value,
        prod_stock: formCrear["prod_stock"].value,
        prod_oferta: formCrear["prod_oferta"].value,
    }


    try {
        if(modoActualizar === false){
            let rpta = await crearProducto(nuevoProducto)
            formCrear.reset() //limpia formulario
            bsModalCrear.hide() //escondo el modal
            getProductos() //obtengo productos actualizados
        }else{
            let rpta = await actualizarProducto(productoEditado)
            formCrear.reset() 
            bsModalCrear.hide() 
            getProductos()
            modoActualizar = false// vuelve a su valor original
        }
    } catch (error) {
        console.log(error);
    }


})

const getBotonesEliminar = () => {
    const btnEliminar = document.getElementsByClassName("eliminar")
    const arrBtnEliminar = Array.from(btnEliminar)
    arrBtnEliminar.forEach(boton => {
        boton.addEventListener("click",() => {
            const id = boton.getAttribute("data-id")

            Swal.fire({
                icon:'warning',
                title:'Desea eliminar el producto?',
                showConfirmButton:true,
                confirmButtonText:'Si, Eliminar',
                showCancelButton:true,
                cancelButtonText:'No,Cancelar'
            }).then( async (result)=>{
                if(result.isConfirmed){
                    let respuesta = await eliminarProducto(id)
                    console.log(respuesta);
                    // location.reload()
                    getProductos()
                }
            })
                      
        })
    });
}

const getBotonesActualizar = () => {
    const btnActualizar = document.getElementsByClassName("actualizar")
    const arrBtnActualizar = Array.from(btnActualizar)
    
    arrBtnActualizar.forEach(boton => {
        boton.addEventListener("click",async() => {
            const id = boton.getAttribute("data-id")

            const productoObtenido = await obtenerProductoId(id)

            let {prod_nombre, prod_descripcion, prod_precio, prod_stock, prod_oferta} = productoObtenido
                formCrear.prod_nombre.value = prod_nombre
                formCrear.prod_descripcion.value = prod_descripcion
                formCrear.prod_precio.value = prod_precio
                formCrear.prod_stock.value = prod_stock
                formCrear.prod_oferta.value = prod_oferta

            productoActualizar = id

            modoActualizar = true // Flag

            bsModalCrear.show()
        })
    });
}
