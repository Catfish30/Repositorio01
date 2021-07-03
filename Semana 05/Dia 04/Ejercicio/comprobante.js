class Comprobante {
    //Predefinimos los valores de la clase
    //El constructor no siempre tiene que construir todo el objeto
    comp_id = 0;
    comp_fecha = new Date() ;
    comp_total = 0;
    detalles = []; //Items de la compra

    constructor(comp_id, comp_fecha){
        //Contruccion del id y fecha
        this.comp_id = comp_id;
        this.comp_fecha = comp_fecha;
    }
        //Creamos objetos de tipo Detalle y los agregamos aqui, detalles sera un arreglo de objDetalle
    agregarDetalle(objDetalle){
        this.detalles.push(objDetalle)
    }

    calcularSubTotal(cant,p_unit){
        return cant*p_unit
    }
    // static hace que no se requiera crear un nuevo objeto (no necesita una instancia)
    static mostrarFecha(){
        console.log(new Date());
    }
}