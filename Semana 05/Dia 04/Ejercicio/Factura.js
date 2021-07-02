class Factura extends Comprobante {
    
        fact_igv_p = 0;
        fact_igv_t = 0;

    constructor(comp_id, comp_fecha, fact_igv_p){
        super(comp_id, comp_fecha)

        this.fact_igv_p = fact_igv_p;
    }

    // obtendra igv tras agregar nuevo detalle
    recalculo(){
        let total = 0;
        for(let i=0; i< this.detalles.length; i++){

            let cant = this.detalles[i].det_cant
            let prec = this.detalles[i].det_punit
            total += this.calcularSubTotal(cant, prec)
        }
        this.fact_igv_t = total* this.fact_igv_p / 100
        this.comp_total = total
    }
}