let input = document.getElementById("input")
let contenido = document.getElementById("contenido")

//
// addEventListener escucha el evento que le indiquemos y nosotros podemos capturar el evento en la funcion que esta como 2do parametro de addEnentListener
input.addEventListener("keyup",(evento)=>{
    console.log("tecla presionada",evento.key);
    console.log(evento.target.value);
    // console.log("Tecla precionada");
})
//target: representa al propio evento donde se esta disparando el evento, value: 

let boton = document.createElement("button")
boton.innerHTML = "Mostrar valor"

boton.addEventListener("click",()=>{
    console.log(input.value);
})

contenido.appendChild(boton)

let goToGoogle = document.createElement("a")

goToGoogle.setAttribute("href","http://google.com")
goToGoogle.innerHTML = "Vamo a Google amiguito :3"

contenido.appendChild(goToGoogle)

goToGoogle.addEventListener("click",(event)=>{
    event.preventDefault()
})