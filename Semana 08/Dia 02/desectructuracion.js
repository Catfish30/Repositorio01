let animales = ["perro", "gato","alce","pinguino","mosca"]

// let item0 = animales[0]
// arreglo desestrcuturado se crea variables
let[item0,item1,item2,item3,item4] = animales

console.log(item3);

let objVehiculo = {
    marca:"Tesla",
    modelo:"Model X",
    tipo:"Electrico",
    anio:2021,
    colores:["rojo","negro"],
    aireacondicionado:true,
    encender: function(){
        console.log("run,run");
    }
}

console.log(objVehiculo.modelo);

// Objeto desestructurado, para esto se tiene que saber las propiedas
let {marca,modelo,anio,tipo,colores,aireacondicionado,encender} = objVehiculo

console.log(anio);
encender()