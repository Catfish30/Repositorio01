console.log("Hola")
alert("Holaaa!") // aparece ventana con alerta 

let nombre = prompt("Ingresa tu nombre")

console.log(nombre)

// Las capturas de prompt son de tipo String

let edad = prompt("Ingresa tu edad")

console.log(typeof edad)

//parseInt convierte string a numero
console.log(parseInt("50.3"))

console.log(parseFloat("123.5"))

let nota = +prompt("Ingrese su nota")

console.log(nota)

let laQuieres = confirm("La quieres?")

console.log(laQuieres)