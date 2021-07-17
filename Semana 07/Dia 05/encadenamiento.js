const hornearTorta = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true){
                resolve("torta horneada")
            }else{
                reject("torta quemada")
            }
        },5000)
    })
}

const prepararGlaseado = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Glaseado Listo")
            reject("Se quemo el microondas")
        },4000)
    })
} 

const cubirTorta = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Torta Decorada")
            // reject("Pidamos Rappi no ma")
        },6000)
    })
}

hornearTorta()
.then((tortaHorneada)=>{
    console.log(tortaHorneada);
    return prepararGlaseado()
})
.then((tortaLista)=>{
    console.log(tortaLista);
})
.catch((tortaQuemada)=>{
    console.log(tortaQuemada);
})