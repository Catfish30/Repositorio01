
// let perrito = {
//     nombre : "Prin",
//     edad : 8,
//     color : "caramelo",
//     habitos : ["escarbar", "engordar","ladrar como vieja"],

//     // Metodo: Es una funcion asociada a un objeto
//     Ladrar : () =>{
//         console.log("wuf wuf wuf");
//     }
// }

// perrito.Ladrar()

// perrito.nombre = "Prin vieja"

// console.log(perrito.nombre);

// perrito.tamanio = "Gorda"
// console.log(perrito.tamanio);

// let restaurante = {
//     nombre:"La nueva Palomino",
//     platillos:[
//         {
//             id:1,
//             nombrePlatillo:"Rocoto Relleno",
//             precio: 25
//         },
//         {
//             id:2,
//             nombrePlatillo:"Pepian de Cuy",
//             precio:36
//         },
//         {
//             id:3,
//             nombrePlatillo:"Chupe de camarones",
//             precio:40
//         }
//     ],
//     mostrarPlatillos: ()=>{
//         console.log(restaurante.platillos);
//     }
// }
// restaurante.mostrarPlatillos()

let series =[
    {
        nombre:"You",
        descripcion:"Una historia de amor del siglo XXI sobre un obsesivo, pero brillante mánager de 20 años de una librería, quien utiliza la era digital hiperconectada para enamorar a la mujer de sus sueños.",
        anio:2018,
        finalizada: false ,
        personajes:["Joe Goldberg","Love Quinn","Beck","Candace Stone"]
    },
    {
        nombre:"The Umbrella Academy",
        descripcion:"Una familia disfuncional de superhéroes se reúne para resolver el misterio de la muerte de su padre y la amenaza del apocalipsis.",
        anio: 2019,
        finalizada: false,
        personajes:["Number Five","Vanya Hargreeves","Klaus Hargreever","Luther Hargreeves"]
    },
    {
        nombre:"Los 100",
        descripcion:"Un apocalipsis nuclear destruye la vida humana en la Tierra. Los únicos supervivientes son los habitantes de las estaciones espaciales internacionales. Tres generaciones después, la escasez de recursos los obliga a tomar medidas desesperadas.",
        anio: 2014,
        finalizada: true,
        personajes:["Clarke Griffin","Bellamy Blake","Octavia Blake","Raven Reyes",""]
    },
    {
        nombre:"Breaking Bad",
        descripcion:"El profesor calmado de química de una secundaria, Walter White cree que su vida no puede ser peor. Su salario apenas le alcanza para sostener a su familia, una situación que no mejora cuando su esposa da a luz y su hijo adolescente sufre de parálisis cerebral, pero Walter queda anonadado cuando se entera que tiene un cáncer terminal.",
        anio: 2008,
        finalizada: true,
        personajes:["Walter White","Jesse Pinkman","Skyler White","Hank Schrader",""]
    },
]
for(let i = 0; i<series.length;i++){
    console.log(`La serie ${series[i].nombre} del anio ${series[i].anio} trata sobre '${series[i].descripcion}' y tiene como personajes ${series[i].personajes}`);
}