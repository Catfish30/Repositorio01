

// for(let i = 0; i<peliculas.length;i++){
// console.log(`Pelicula ${peliculas[i].title}`)
// }

// for(let i = 0; i<peliculas.length;i++){
//     if(peliculas[i].vote_average >= 7){
//         console.log(`Pelicula ${peliculas[i].title} tiene de puntuacion ${peliculas[i].vote_average}`)
//     }
// }

// let peliculasPorIdioma = (idioma) => {
//     let peliculaSeleccionada = []
//     for(let peli of peliculas){
//         if(peli.original_language === idioma){
//             peliculaSeleccionada.push(peli)
//         }
//     }
//     return peliculaSeleccionada
// }

// console.table(peliculasPorIdioma("ru"));


// let peliculasPorGenero = (genero) =>{
    
//     seleccionadas = []
    
//         for(let peli of peliculas){
//         for(let i = 0; i<peli.genre_ids.length; i++)
//         if (peli.genre_ids[i] === genero){
//             seleccionadas.push(peli)
//         }
//     }
//     return seleccionadas
// }

// console.table(peliculasPorGenero(28))


let comparar = (nombregenero) =>{

    seleccionadas = []
    let generoEncontrado = 0
    for(let gen of generos){
            if(gen.name === nombregenero ){
                generoEncontrado = gen.id
            }
        }
    
    for(let peli of peliculas){
        for(let i = 0; i<peli.genre_ids.length; i++)
         if (peli.genre_ids[i] === generoEncontrado){
              seleccionadas.push(peli.title)
          }
    }
    return seleccionadas

}


console.table(comparar("Animation"));