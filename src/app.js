const Div = document.getElementById('productos')
const Cantidad = document.querySelector(".cantidad")
const Total = document.querySelector(".total")
const Comprar = document.getElementById("comprar")
const nombre = document.getElementById("nombre")
const tel = document.getElementById("cel")

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
    <div class="card" style="width: 20rem;">
        <img src="${e.imagen}" class="card-img-top" alt="productos">
        <div class="card-body">
            <h5 class="card-title">${e.nombre}</h5>

            <p class="btn btn-primary">+</p>
            <p class="x btn btn-primary">${e.n}</p>
            <p class="btn btn-primary">-</p>
            <p class="btn btn-primary"> U$D ${e.precio}</p>
            <p class="btn btn-primary"> Stock ${e.cantidad}/U</p>
        </div>
    </div>`;

   
    
  Div.appendChild(Tarjeta)


  Tarjeta.addEventListener("click", function (el) {
    
    el.preventDefault()

    
    if (el.target.textContent == "+" && e.cantidad > 0) {
      e.n += 1
      e.cantidad -= 1
      productos += 1
      total += e.precio

      el.target.nextElementSibling.textContent = e.n;
      el.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = `Stock ${e.cantidad}/U`

      Cantidad.textContent = `Cantidad de Productos : ${productos}`
      Total.textContent = `Total : U$D ${total}`

      localStorage.setItem("compra", JSON.stringify(productosTecnologicos))

    } else if (el.target.textContent == "-" && el.target.previousElementSibling.textContent > 0 ) {
      e.n -= 1;
      e.cantidad +=1
      productos -= 1
      total -= e.precio

      el.target.previousElementSibling.textContent = e.n;
      el.target.nextElementSibling.nextElementSibling.textContent = `Stock ${e.cantidad}/U`

      Cantidad.textContent = `Cantidad de Productos : ${productos}`
      Total.textContent = `Total : U$D ${total}`

      localStorage.setItem("compra", JSON.stringify(productosTecnologicos));

    }
  })

  

});



Comprar.addEventListener("click", function () {
  alert(`Hola ${nombre.value} el Total a Pagar es: U$D ${total}, la factura sera enviada al Numero: ${tel.value}`)

  nombre.value = ""
  tel.value = ""
})