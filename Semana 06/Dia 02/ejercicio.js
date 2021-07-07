let formTarea = document.getElementById("formTarea")
let pendientes = document.getElementById("pendientes")

let arregloPendientes = []

formTarea.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(formTarea["tarea"].value);
    let nuevaTarea = formTarea["tarea"].value
    arregloPendientes.push(nuevaTarea)
    console.log(arregloPendientes);
    // formTarea["tarea"].value=""
    formTarea.reset()

    dibujarPendiente()
})

// pendientes.appendChild(arregloPendientes)

let dibujarPendiente = ()=>{
    pendientes.innerHTML=""

    arregloPendientes.forEach((item,i)=>{
        let li = document.createElement("li")
        li.innerHTML = item
        pendientes.appendChild(li)


        li.addEventListener("dblclick",()=>{
            arregloPendientes.splice(i,1)
            pendientes.removeChild(pendientes.childNodes[i])
        })
    })
}
