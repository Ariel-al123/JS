console.log("Titulo de la pagina es: ", document.title);

let titulo = document.querySelector("#Titulo-principal");

console.log(titulo);

console.log(titulo.textContent);

titulo.textContent = "Texto Editado";
titulo.style.color = "peru";
titulo.style.backgroundColor = "green";
titulo.style.fontSize = "1.5rem";

titulo.textContent += "Titulo nuevo"


titulo.innerHTML = "Hola"

let parrafo = document.querySelector("#parrafo-principal");

parrafo.innerHTML += "nuevo elemnto";

let caja1 = document.querySelector("#caja1");

caja1.innerHTML += "<p> Parrafo con etiqueta p </p>"

caja1.classList.add("aprobado");


const bodega=[{nombre: "Producto 1", precio: 1200, cantidad: 10},
              { nombre: "Producto 2", precio: 1500, cantidad: 0},
              { nombre: "Producto 3", precio: 800, cantidad: 20}];

let caja = document.querySelector(".caja-vacia");

bodega.forEach( item => {

    let Clasecolor = "";

    if(item.cantidad >0){
        Clasecolor = "aprobado";
    } else {
        Clasecolor = "rechazado";
    }


    caja.innerHTML += `<div class="caja-producto ${Clasecolor}">
                            <h2>${item.nombre}</h2>
                            <p>Precio: $${item.precio}</p>
                            <p>Cantidad: ${item.cantidad}</p>
                        </div>`;



});