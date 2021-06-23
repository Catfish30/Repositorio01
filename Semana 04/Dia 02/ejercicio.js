
// Ejercicio

let tipo = prompt("Escoja tipo de uva A o B")

let tamanio = +prompt("Escoja el tamanio de la uva 1 o 2")

let kilos = +prompt("Ingrese los kilos de uva")

total = 0

if( tipo == "A" && tamanio === 1){
    total = kilos * 5 + (0.2 * kilos)
    if(tipo == "A" && tamanio === 2){
        total = kilos *5 + (0.3 * kilos)
}else if(tipo == "B" && tamanio === 1){
    total = kilos * 5 + (0.35 * kilos)
    if(tipo == "B" && tamanio === 2){
         total = kilos *5 + (0.5 * kilos)
}else{
    console.log("Datos invalidos")
}
console.log(`Total a pagar ${total}`)