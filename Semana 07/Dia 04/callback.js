const alumnos =["Pina","Prin","Cavi","Mani"]

const buscarAlumno = (nombre,callback)=>{
    setTimeout(() => {
        for(let i=0;i<alumnos.length;i++){
            if(alumnos[i]===nombre){
                callback(true)
                return
            }
        }
        callback(false)
    }, 1000);
}

buscarAlumno("Prin",(existe)=>{
    if(existe ===true){
        console.log("El Alumno esta dretro de la BD");
        
    }else{
        console.log("Alumno no encontrado");
    }
})