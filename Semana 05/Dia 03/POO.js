
// class <Nombre_Clase>
//(Palabra reservada) el nombre de la clase debe iniciar en Mayusculas

class Perro{

    //0.Caracteristicas

    Nombre;
    Raza;
    Color;
    Tamanio;
    Edad;
    Habilidad;

    //1.Clase tiene un constructor es un metodo
    // El constructor en una clase es lo primero que se ejecuta y se hace obligatoriamente
    constructor(Nombre,Raza,Color,Tamanio,Edad,Habilidad){

        //en el constructorse va a construir el; objeto
        //this hace referencia al objeto que se esta trabajando

        this.Nombre = Nombre;
        this.Raza = Raza;
        this.Color = Color;
        this.Tamanio = Tamanio;
        this.Edad = Edad;
        this.Habilidad = Habilidad;

        console.log("Construyendo...");
    }
    
    aparecer(){
        console.log(`Una ${this.Nombre} pedorra a la vista`);
    }
}



let perrito = new Perro("Pina","Cocker","Caramelo","Mediana",2,"80%")
let viejita = new Perro("Prin","Cocker","Cafe","Mediana-Pequenia",8,"80%")

console.log(perrito);
console.log(viejita);

perrito.aparecer()

//

let personaConstructor = (nombre,edad) => {
    let objPersona ={
        Nombre: nombre,
        Edad:edad,
    }
    return objPersona
}
let alumno = personaConstructor("Michael",24)

console.log(alumno);

