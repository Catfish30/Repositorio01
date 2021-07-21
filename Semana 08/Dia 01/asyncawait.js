// const traerData = () =>{
//     return new Promise((resolve,reject)=>{
//         resolve("datos obtenidos")
//     })
// }


const traerData = async () =>{
    return "Datos obtenidos" //resolve
    // throw "error data"  //reject
}



// traerData()
// .then((respuesta)=>{
//     console.log(respuesta);
// })
// .catch((error)=>{
//     console.error(error)
// })

const usarData = async() =>{
    try { 
        let respuesta = await traerData()
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}
usarData()