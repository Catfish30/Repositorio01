 const obtenerEstudiantes = ()=>{
     //GET
     fetch("https://60f72c029cdca00017454da7.mockapi.io/estudiantes")
     .then((respuesta) =>{
         return respuesta.json()
     })
     .then((datos)=>{
         console.log(datos);
     })
     .catch((error)=>{
         console.error(error);
     })
 }
//  obtenerEstudiantes()

 //POST
 const crearEstudiante = () =>{
    const nuevoEstudiante = {
        nombres:"Michael",
        apellidos:"Fuentes",
        telefono:27413239
    } 
    
    const cabecera = {
        method:'POST' ,//PUT DELETE
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(nuevoEstudiante)
    }

    fetch("https://60f72c029cdca00017454da7.mockapi.io/estudiantes", cabecera)
    .then((respuesta) =>{
        console.log(respuesta);
        return respuesta.json()
    })
    .then((estudianteCreado)=>{
        console.log(estudianteCreado);
    })
    .catch((err)=>{
        console.error(err);
    })
 }

// crearEstudiante()

//PUT

const asctualizarEstudiante = (id)=>{
    const estudianteModificado = {
        nombres:"Prin",
        apellidos:"Huamani"
    }
    const configuracion = {
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(estudianteModificado)
    }

    fetch(`https://60f72c029cdca00017454da7.mockapi.io/estudiantes/${id}`,configuracion)
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((modificado)=>{
        console.log(modificado);
    })
    .catch((er)=>{
        console.error(er);
    })
}

// asctualizarEstudiante(5)

//DELETE

const eliminarEstudiante = (id) =>{

    const configuracion={
        method:'DELETE'
    }
    fetch(`https://60f72c029cdca00017454da7.mockapi.io/estudiantes/${id}`,configuracion)
    .then((respuesta)=>{
        console.log(respuesta);
        return respuesta.json()
    })
    .then((eliminado)=>{
        console.log(eliminado);
    })
    .catch((error)=>{
        console.error(error);
    })
}
eliminarEstudiante(5)