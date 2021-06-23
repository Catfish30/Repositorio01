// let edad = +prompt("Ingresas tu edad");
// if (edad < 18){
//     console.log("No eres mayor de edad");
// }else{
//         console.log("Eres mayor de edad");
// }

let edad2 = 50;
if (edad2>=65){
    console.log("Puedes recibes pension 65");
}else if(edad2 == 50){
    console.log("Te damos un reloj");
}else if(edad2>=18){
    console.log("Recibes bono Familiar");
}else{
    console.log("Eres menor de edad");
}
if(edad2>=18){
    console.log("Recibes bono Familiar");
}

let chanchito = +prompt("Ingrese sus ahorros");
if (chanchito > 599){
    console.log("Puedes comprar un Logitech G502")
}else if(chanchito >= 200){
    console.log("Puedes comprar un MX 2S")
}else if(chanchito == 149 || chanchito>149){
    console.log("Puedes comprar estas ofertas")
}else{
    console.log("Estas misio manito vuelve otro dia")
}