
// Ejercicio 01

// let contador = 1;

// while(contador <=20){
//     console.log(`${contador}`);
//     contador += 2
// }  

// while(contador <=20){
//     if(contador % 2 == 0){
//         console.log(`${contador}`);
//     }
//         contador += 1;
// }

// let numeros = [25,36,-50,1,45,-14,-87,92,124,-63]

//Ejercicio 02

// let numpos = 0
// let numneg = 0

// let posicion = 0

// while(posicion <numeros.length){
//     if(numeros[posicion]<0){
//         numneg +=1
//     }else{
//         numpos +=1
//     }
//     posicion +=1
// }
// console.log(`Numeros Negativos: ${numneg}`);
// console.log(`Numeros Positivos: ${numpos}`);

//Ejercicio 03



// let contador = 0;

let suma = 0;
let contador= 0;
let nota;

do{
    nota = +prompt("Ingresa tu nota");
    if(nota>=12){
        console.log(`Aprobado`);
    }else{
        console.log(`Desaprobado`);
    }
}while(nota != -1)
        console.log("Fin del programa");
