//new Factura(id,fecha,igv)

let factura1 = new Factura(1, new Date(),18)

console.table(factura1);

let detalle_fact1 = new Detalle(1,2,"Memoria RAM",450)

console.table(detalle_fact1);

factura1.agregarDetalle(detalle_fact1)
factura1.recalculo()

console.table(factura1);

Comprobante.mostrarFecha()