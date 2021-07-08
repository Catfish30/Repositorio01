let nombre = prompt("Ingrese su nombre")

//Guardar informacion, valores que recibe(clavenombre,valor)
localStorage.setItem("miNombre", nombre)

setTimeout(()=>{

    //Solo recibe el nombre o clase con lo que  se guardo el setItem
    let obtenido = localStorage.getItem("miNombre")
    alert(obtenido)

},4000)

setTimeout(()=>{
    localStorage.removeItem("miNombre")
},6000)


localStorage.setItem("ahorros",500000)

let misAhorros = localStorage.getItem("ahorros")

console.log(typeof misAhorros);

let objetoTaza = {
    precio: 20,
    material: "ceramica",
    tamanio: "mediano",
    color:"blanco"
}
//JSON convierte un documetno js a un string, manteniendo su estructura js
let tazaJson = JSON.stringify(objetoTaza)
// console.log(tazaJson);
// console.log(objetoTaza);

localStorage.setItem("objeto",tazaJson)

setTimeout(()=>{
    let JsonObtenido = localStorage.getItem("objeto")
    //JSON.parse hace lo contrario al JSONstringify
    let JsonConvertido = JSON.parse(JsonObtenido)

    console.log(JsonConvertido);
},2000)