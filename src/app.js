const Div = document.getElementById('productos')
const Cantidad = document.querySelector(".cantidad")
const Total = document.querySelector(".total")
const Comprar = document.getElementById("comprar")
const nombre = document.getElementById("name")
const tel = document.getElementById("number")
const Card = document.getElementById("card")
const carritoProductos = document.getElementById("carritoProductos")
const ArrUrl = []
const load = document.querySelector(".load")
const mercado = document.querySelector(".mercado")


function loading(){
  load.style.display = "none"
  mercado.style.display = "block"
}

setTimeout(loading, "2500")

datosLocalStorage = localStorage.getItem("compra");

if (datosLocalStorage) {
  let arrayStorage = JSON.parse(datosLocalStorage);

  productosTecnologicos = arrayStorage;

}


let productos = 0
let total = 0



productosTecnologicos.forEach(e =>{
  const Tarjeta = document.createElement('div')
  e.n = 0
  Tarjeta.innerHTML = `
    <div class="card">
        <img src="${e.imagen}" class="card-img-top" alt="productos">
        <div class="card-body">
            <h5 class="card-title">${e.nombre}</h5>

            <p class="btn btn-primary">+</p>
            <p class="x btn btn-primary">${e.n}</p>
            <p class="btn btn-primary">-</p>
            <p class="btn btn-primary"> U$D ${e.precio}</p>
            <p class="btn btn-primary"> Stock ${e.cantidad}/U</p>
        </div>
    </div>`

    
  Div.appendChild(Tarjeta)

const agregarCarrito = function (el) {

  if (el.target.textContent == "+" && e.cantidad > 0) {
    e.n += 1
    e.cantidad -= 1
    productos += 1
    total += e.precio

    el.target.nextElementSibling.textContent = e.n;
    el.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = `Stock ${e.cantidad}/U`

    Cantidad.textContent = `Cantidad de Productos : ${productos}`
    Total.textContent = `Total : U$D ${total}`

//estas linea agrega al carrito los nombres y las cantidades de los productos

    ArrUrl.push(e.nombre)
    const conteo = contarElementosIguales(ArrUrl);

    function contarElementosIguales(array) {
      const contador = {};
    
      for (const elemento of array) {
        if (contador[elemento]) {
          contador[elemento]++;
        } else {
          contador[elemento] = 1;
        }
      }
    
      return contador;
    }


    let listaHTML = ""

    for (const elemento in conteo) {
      const cantidad = conteo[elemento];
      const elementoLI = `<ul><li>${elemento}: ${cantidad}</li></ul>`;
      listaHTML += elementoLI;
    }
    
    carritoProductos.innerHTML = `<div>${listaHTML}</div>`

    Card.appendChild(carritoProductos)

//se guarda en el local storage la lista con los productos comprados
    localStorage.setItem("compra", JSON.stringify(productosTecnologicos))
    
  }
}


  Tarjeta.addEventListener("click", function (el) {
    
    el.preventDefault()

    
    agregarCarrito(el)

    if (el.target.textContent == "-" && el.target.previousElementSibling.textContent > 0 ) {
      e.n -= 1; productos 
      e.cantidad +=1
      productos -= 1
      total -= e.precio

      el.target.previousElementSibling.textContent = e.n;
      el.target.nextElementSibling.nextElementSibling.textContent = `Stock ${e.cantidad}/U`

      Cantidad.textContent = `Cantidad de Productos : ${productos}`
      Total.textContent = `Total : U$D ${total}`

//estas linea quita al carrito los nombres y las cantidades de los productos

      const nombreAEliminar = e.nombre;
      let indiceElemento = -1;
      const conteo = contarElementosIguales(ArrUrl);

      function contarElementosIguales(array) {
        const contador = {};
      
        for (const elemento of array) {
          if (contador[elemento]) {
            contador[elemento]++;
          } else {
            contador[elemento] = 1;
          }
        }
      
        return contador;
      }
      

      ArrUrl.forEach((elemento, indice) => {
        if (elemento === nombreAEliminar) {
          indiceElemento = indice;
          return;
        }
      });

      if (indiceElemento !== -1) {
        ArrUrl.splice(indiceElemento, 1);

        if (conteo[nombreAEliminar]) {
          conteo[nombreAEliminar]--;
        }

        let listaHTML = "";

        for (const elemento in conteo) {
          const cantidad = conteo[elemento];
          const elementoLI = `<ul><li>${elemento}: ${cantidad}</li></ul>`;
          listaHTML += elementoLI;
        }

        carritoProductos.innerHTML = `<div>${listaHTML}</div>`

        Card.appendChild(carritoProductos)
        
      }

      localStorage.setItem("compra", JSON.stringify(productosTecnologicos));

    }
  })

  

});



Comprar.addEventListener("click", function () {

  Swal.fire({
    position: "center",
    icon: "success",
    title: `${nombre.value} Gracias por tu Compra`,
    text: `Tu monto a pagar es: U$D ${total} 
    Tu factura sera enviada al Numero: ${tel.value}`,
    showConfirmButton: true
  });
  nombre.value = ""
  tel.value = ""
})