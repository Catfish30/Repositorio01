// function saludar (texto){
//     console.log(`Hola, ${texto}`);
// }

// saludar("como estas")
// saludar("pina fiel")

// function multiplicacion(a,b){
//     return a *b
// }


// console.log(multiplicacion(2,4))


let persona = {
    nombre:"Pina",
    apellido:"Fiel",
    edad:1,
    conduce:false,

    saludar: function(texto){
        console.log(texto);
    },
    despedirse:(despedida)=>{
        console.log(despedida);
    }

}
persona.edad = 2;

console.log(persona.apellido) 

persona.saludar("Hola Fina")

persona.despedirse("Adios")

console.log(persona.edad);