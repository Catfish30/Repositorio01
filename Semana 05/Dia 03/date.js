
//El objeto date obtiene la fecha  del ordenador

let ahora = new Date()
console.log(ahora);

let anioActual = ahora.getFullYear()
console.log(anioActual);

let mesActual = ahora.getMonth()
console.log("Mes actual es:",mesActual);

let diaCalendario = ahora.getDate()
console.log(diaCalendario);

let diaSemana = ahora.getDay()
console.log(diaSemana);

//Nueva Fecha
let diaDeVacunacion = new Date(220,8,30)

console.log(diaDeVacunacion);

//TimeStamp

let timeStampAhora = ahora.getTime()

console.log(timeStampAhora);

let navidad = new Date(2021,11,25)

let diasNavidad = navidad - ahora

console.log(diasNavidad/1000/60/60/24);