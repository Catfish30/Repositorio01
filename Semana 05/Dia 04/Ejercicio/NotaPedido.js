class NotaPedido extends Comprobante{
    nota_exo = true;
    constructor(comp_id,comp_fecha,nota_exo){
        super(comp_id,comp_fecha)
        this.nota_exo = nota_exo
    }

    recalculo(){
        let total = 0;
        for(let d of this.detalles){
            total += this.calcularSubTotal(d.det_cant,d.det_punit)
        }
        this.comp_total = total
    }
}