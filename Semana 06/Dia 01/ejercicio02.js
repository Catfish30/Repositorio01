
let contenido = document.getElementById("contenido")


let tabla = document.createElement("table")

tabla.style.fontFamily = "Arial"
tabla.style.textAlign = "center"
tabla.style.padding = "15px"
tabla.classList.add("borde")

tablaTitulos = `<tr>
                    <th>Orden</th>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Anio</th>
                    <th>Idioma</th>
                </tr>`

listaPeliculas = ""

peliculas.forEach((movie,index)=>{
    listaPeliculas = listaPeliculas + `<tr>
                                        <td>
                                            ${index+1}
                                        </td>
                                        <td>
                                            ${movie.id}
                                        </td>
                                        <td>
                                            ${movie.title}
                                        </td>
                                        <td>
                                            ${movie.release_date.slice(0,4)}
                                        </td>
                                        <td>
                                            ${movie.original_language}
                                        </td>
                                       </tr>`
})

tabla.innerHTML = tablaTitulos + listaPeliculas

contenido.appendChild(tabla)