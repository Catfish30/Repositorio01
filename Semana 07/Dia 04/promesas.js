const hornearTorta = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(false){
                resolve("La torta esta lista")
            }else{
                reject("Fochis con la torta")
            }
        },5000)
    })
}

hornearTorta()
.then((resultado)=>{
    console.log(resultado);
})
.catch((error)=>{
    console.log(error);
})