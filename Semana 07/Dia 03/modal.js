let btnModal = document.getElementById("btnAbrir")

let miModal = document.getElementById("miModal")

let bsModal = new bootstrap.Modal(miModal)

console.log(bsModal);

btnModal.addEventListener("click",()=>{
    bsModal.show()
})