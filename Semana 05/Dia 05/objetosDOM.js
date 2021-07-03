
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

titulo.style.color = "rebeccapurple"
titulo.style.backgroundColor = "lime"
titulo.style.padding = "20px"

let listaItems = document.getElementsByClassName("lista_item")

console.log(listaItems);

let arregloItems = Array.from(listaItems)

console.log(arregloItems);

arregloItems.forEach((item) =>{
 item.style.fontFamily = "Arial"
 item.style.fontWeight = "bold"
})

let cajitas = document.querySelectorAll(".cajita")

console.log(cajitas);

cajitas.forEach((caja)=>{
    caja.innerHTML = "Contenido Caja"
    caja.classList.add("resaltado")
    caja.style.width = "100px"
    caja.style.height = "100px"
    caja.classList.add("redondeado")
})

let miParrafo = document.querySelector("#miParrafo")

console.log(miParrafo);

miParrafo.classList.add("resaltado")

// setTimeout(()=>{
//     miParrafo.classList.remove("resaltado")
// },4000)

// setInterval se ejecuta cada x tiempo
setInterval(()=>{
    //toggle di encuentra algo lo quita y si no lo agrega
    miParrafo.classList.toggle("resaltado")
},1000)

let divContenido = document.getElementById("contenido")

divContenido.innerHTML = "<p> Parrafo desde JS</p>"

let parrafo2 = document.createElement("p") //Creando elemento html
parrafo2.innerHTML = "Texto del parrafo 2" /// Aniadiendo info al elemento creado

divContenido.appendChild(parrafo2) // parrafo 2 esta mostrandose en html al ser hijo de divContenido 

let seleccion = ["Pina","Prin","Cavi","Mani","Gufy","Canela"]

let lista = document.createElement("ul")

let htmlItems = ""

seleccion.forEach((jugador)=>{
    htmlItems = htmlItems + `<li>${jugador}</li>`
})

// console.log(htmlItems);
lista.innerHTML = htmlItems

divContenido.appendChild(lista)