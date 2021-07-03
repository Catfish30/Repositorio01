
// window.console.log("Hola");

// setTimeout(() => {
//     console.log("....")
// },2000) 

// // Acceder a la ubicacion 
// window.navigator.geolocation.getCurrentPosition((Ubicacion) => {
//     console.log(Ubicacion);
// } )

// console.log(location);

// console.log(navigator.userAgent);


let titulo = document.getElementById("titulo")

console.log(titulo);

titulo.innerHTML = "<i> Pina fiel la mas fiel </i>"

let listaItems = document.getElementsByClassName("lista_item")

console.log(listaItems);

let arregloItems = Array.from(listaItems)

console.log(arregloItems);