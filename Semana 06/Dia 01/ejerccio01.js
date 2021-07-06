
let contenido = document.getElementById("contenido")

contenido.innerHTML = "<h1>PrinPina</h1>"

let titulo = "Pina Prin 2.1"

contenido.innerHTML = `<header>
                            <h1>
                               ${titulo}
                            </h1>
                       </header>`

let titulo2 = document.createElement("h2")

titulo2.innerHTML = "Segundo titulo"

contenido.appendChild(titulo2)

let imagen = document.createElement("img")

imagen.setAttribute("src","https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-cute-cartoon-puppy-png-image_2610797.jpg")

contenido.prepend(imagen)

let bebidas = [
    {
        nombre: "Agua",
        saludable: true,
    },
    {
        nombre: "CocaCola",
        saludable: false,
    },
    {
        nombre: "Infusion",
        saludable: true,
    },
    {
        nombre: "Ron",
        saludable: false,
    }
]

let tabla = document.createElement("table")

let contenedorTabla = `<tr>
                        <th>Nombre</th>
                        <th>Recomendable</th>
                       </tr>`
let contTabla = ""

bebidas.forEach((bebida)=>{
    contTabla = contTabla + `<tr>
                                <td>
                                    ${bebida.nombre}
                                </td>
                                <td style = "color:${bebida.saludable === true ? 'green':'red'}">
                                    ${bebida.saludable === true ? "Recomendado" : "No Recomendable"}
                                </td>
                             </tr>`
})

tabla.innerHTML = contenedorTabla + contTabla

contenido.appendChild(tabla)