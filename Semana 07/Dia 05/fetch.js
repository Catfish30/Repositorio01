fetch("https://reqres.in/api/users?page=2")

.then((respuesta)=>{
    console.log(respuesta);
    return respuesta.json()
})
.then((datos)=>{
    console.log(datos);
})