
//Ejercicio 03

let n1 = 45;
let n2 = 10;
let n3 = 90;

if( n1>n2 && n1>n3){
    console.log(`El numero mayor es ${n1}`)
}else if(n2>n1 && n2>n3){
    console.log(`El numero mayor es ${n2}`)
}else{
    console.log(`El numero mayor es ${n3}`)
}

if(n1>n2){
    if(n1>n3){
        console.log(`El numero mayor es ${n1}`)
    }else{
        console.log(`El numero mayor es ${n3}`)
    }
}else if(n2>n3){
    console.log(`El numero mayor es ${n2}`)
}