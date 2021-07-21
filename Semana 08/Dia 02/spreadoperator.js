let frutas=["manzana","platano","uva"]

let frutasTmp = [...frutas,"mandarina","mango"]

console.log(frutasTmp);

console.log(frutas);

let verduras = ["lechuga","zanahoria","brocoli"]

let carnes = ["pollo","cordero","cuy","pato"]

let comida = [...verduras, ...carnes]

console.log(comida);

let pikachu = {
    tipo:"electrico",
    fuerza:60,
    vida:80,
}

let pikachu2 = pikachu

pikachu2.vida = 40
console.log(pikachu.vida);

let pikachu3 = {...pikachu}

pikachu3.fuerza = 100

console.log(pikachu.fuerza);
console.log(pikachu3.fuerza);

//
//

let  operacion = (a,b, ...rest)=>{
    console.log("rest",rest);
    console.log(a+b);
}

operacion(10,50,30,100)