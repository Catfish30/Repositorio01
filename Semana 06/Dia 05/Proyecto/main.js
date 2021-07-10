let listaBebidas = [
    {
        id: 1,
        nombre: "Coca Cola",
        descripcion : "Bebida refrescante y revitalizante para mantenerte activo y lleno de vitalidad",
        precio: 5,
        imagen: "https://www.cocacola.es/content/dam/GO/CokeZone/Spain/Coca-Cola-Full-Red-vidrio-Sabor-Original.jpg"
    },
    {
        id: 2,
        nombre: "Red Bull",
        descripcion : "Red Bull Energy Drink es una bebida funcional que te da alas cuando las necesitas.",
        precio: 7,
        imagen: "https://labnutrition.vteximg.com.br/arquivos/ids/158559-1000-1000/red-bull-azul.png?v=637316492995900000"
    },
    {
        id: 3,
        nombre: "Limonada",
        descripcion : "Bebida refrescante elaborada con agua natural o mineral, azúcar y jugo de limón",
        precio: 3,
        imagen: "https://d1uz88p17r663j.cloudfront.net/resized/65106099693f2073b5531828ea560b67_LIMONADA_BRASILE%C3%91A_1200_600.jpg"
    },
    {
        id: 4,
        nombre: "Chicha Morada",
        descripcion : "Bebida refrescante elaborada a base de maiz morado y limon",
        precio: 3,
        imagen: "https://cdn.colombia.com/gastronomia/2015/06/01/chicha-morada-1758.jpg"
    },
]

let contenido = document.getElementById("contenido");

let tbodyCarrito = document.getElementById("tbody-carrito");

let carrito = [];

let dibujarTarjetas = ()=>{
    let htmlTarjetas = "";

        listaBebidas.forEach((bebida)=>{
            htmlTarjetas = htmlTarjetas +
            `<div class="tarjeta">
            <div class="imagen">
                <img src="${bebida.imagen}">
            </div>
            <div class="texto">bebida
                <h4>${bebida.nombre}</h4>
                <p>${bebida.descripcion}</p>
                <div class="precio">
                <span>S/ ${bebida.precio}</span>
                <button class="btn-agregar" data-idbebida="${bebida.id}">
                    Agregar
                </button>
                </div>
            </div>
        </div>`;
        });

   contenido.innerHTML = htmlTarjetas;
};

dibujarTarjetas()

let btnAgregar = document.getElementsByClassName("btn-agregar");

let arreloBtnAgregar = Array.from(btnAgregar);

arreloBtnAgregar.forEach((boton)=>{
    boton.addEventListener("click",()=>{
        let idObtenido = +boton.getAttribute("data-idbebida");
        let bebidaObtenida = buscarBebidaPorId(idObtenido);

        agregarACarrito(bebidaObtenida)
    })
})

let buscarBebidaPorId = (id) => {
    for (let i = 0; i < listaBebidas.length; i++) {
      if (id === listaBebidas[i].id) {
        return listaBebidas[i];
      }
    }
  };

  let agregarACarrito = (bebidaAPedir) => {
    let indiceBebida = carrito.findIndex((Pedido) => {
      if (Pedido.bebida.id === bebidaAPedir.id) {
        return Pedido; 
      }
    });
 
    if (indiceBebida === -1) {
      let pedido = {
        bebida: bebidaAPedir,
        cantidad: 1,
      };
      carrito.push(pedido);
    }else{
      carrito[indiceBebida].cantidad++
    }
    dibujarCarrito()
  };
  
  let dibujarCarrito = () => {
    let htmlCarrito = ""
  
    carrito.forEach((pedido) => {
      htmlCarrito = htmlCarrito + 
      `<tr>
        <td>${pedido.bebida.nombre}</td>
        <td>${pedido.cantidad}</td>
        <td>${pedido.bebida.precio}</td>
        <td>${pedido.cantidad * pedido.bebida.precio}</td>
      </tr>`
    })
  
    tbodyCarrito.innerHTML = htmlCarrito
  }