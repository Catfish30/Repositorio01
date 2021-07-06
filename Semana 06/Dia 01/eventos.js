let botoncito = document.getElementById("boton")
let contenido = document.getElementById("contenido")

botoncito.addEventListener("click", ()=>{
    alert("Me tocaste")
})

let caja = document.createElement("div")

caja.style.width = "200px"
caja.style.height = "200px"
caja.style.borderColor ="red"
caja.style.borderWidth = "2px"
caja.style.borderStyle = "solid"
caja.style.backgroundColor = "blue"

contenido.appendChild(caja)

caja.addEventListener("mouseover", ()=>{
    console.log("PASO");
})

let libros = [
    "harry potter",
    "el tunel",
    "historia",
    "ciencia de la ctm",
    "la paisanda jacinta",
    "oe palteas mano",
    "pina come caca",
    "mani acgona",
    "prin vieja",
    "cavi cachonda"
]

libros.forEach((book)=>{
    let parrafo = document.createElement("p")
    parrafo.innerHTML = book
    contenido.appendChild(parrafo)

    parrafo.addEventListener("dblclick",()=>{
        alert(`Has hecho click en ${book}`)
    })

})

let input = document.createElement("input")
input.setAttribute("type","password")
contenido.appendChild(input)

let btn = document.createElement("button")
btn.innerHTML = "ver contrasenia"

contenido.appendChild(btn)

let visible = false

btn.addEventListener("click",()=>{
    visible = !visible
    if (visible === true){
        input.setAttribute("type","text")
    }else{
        input.setAttribute("type","password")
    }
})