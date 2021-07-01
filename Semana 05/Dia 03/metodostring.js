let texto = "Codigo";

console.log(texto);

let texto2 = new String("javascript")

console.log(texto2);

// toUpperCase metodo que convierte texto a mayusulas
console.log(texto.toUpperCase());

let nombre = "Josefina"

// toLowerCase metodo que convierte texto a minusculas

console.log(nombre.toLowerCase());

// let apellidos = prompt("Ingresa tus apellidos")

// //.trim() sirve para remover los espacios

// console.log(apellidos.trim().length);

let oracion = "La mani cochina juega con su caca";

// let buscarTexto = prompt("Ingrese la palabra")

// //inecOf busca texto y devuelve la posicion
// let posicion = oracion.indexOf(buscarTexto)

// console.log(posicion);

//replace reemplaza una palabra por otra
let reemplazo = oracion.replace("mani", "pina")

console.log(reemplazo);

//split convierte la oracion en arreglo 

let arrOracion = oracion.split(" ")

console.log(arrOracion);

//join agrupa el arreglo en un string recibe un separador, ejemplo " "

let stringOracion = arrOracion.join(" ")

console.log(stringOracion);

//slice

let monto = "S/ 100.00" 

let extraer = monto.slice(3,10)

console.log(extraer);