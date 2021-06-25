
// for(contador;condicional;actualizacion){
    //Codigo a repetirse 
// }

// for(let cont = 0; cont<=10; cont++){
//     console.log(`Gatos :3 ${cont}`);
// }



// let nombres =["Daniel","Lezly","Jorge","Eduardo","Osman","Josue","Linder"];

// for(let i=0; i<nombres.length;i++){
//     console.log(`El nombres es ${nombres[i]}`);
// }



// let carta = ["Aji de Gallina","Pizza","Adobo","Carapulcra","Cuy Chactado","Lasagna"];
// let eleccion = +prompt("Indique la opcion deseada")

// for(let i = 0; i< carta.length;i++){
//     if(eleccion === i){
//         console.log(`Ud eligio ${carta[i]}`);
//         break;
//     }
//     console.log(`recorriendo ${i}`);
// }

// console.log("Final");


let binarios = [0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0]
let cont1 = 0
let cont0 = 0
for(let i = 0; i<binarios.length;i++){
    if( 1===binarios[i]){
        cont1++
    }else{
        cont0++
    }
}
console.log(`Numero de 0 ${cont0} y Numero 1 ${cont1}`);