console.log("Hola soy JavaScript");
let cantidadProductos = 0;
cantidadProductos = cantidadProductos + 1;
console.log(cantidadProductos);
const nombreCafeteria = "Café Duoc";
console.log(nombreCafeteria);
//nombreCafeteria = "JAIMITO";

// ahora veamos ejemplos de modificacion
const titulo = document.getElementById("titulo-sitio");
console.log(titulo);

titulo.textContent = "Bienvenido a Café DUOC";

const botonBienvenida = document.getElementById("boton-bienvenida");
const mensajeBienvenida = document.getElementById("mensaje-bienvenida");

botonBienvenida.addEventListener("click",function(){
    //console.log("El usuario presionó el botón");
    mensajeBienvenida.textContent = 
    "¡Bienvenido! Esperemos que disfrutes los productos";

    botonBienvenida.textContent="Bienvenida mostrada";
});

//promociones
const botonPromocion = document.getElementById("boton-promocion");
const promocion = document.getElementById("promocion");

botonPromocion.addEventListener("click",function(){
    //promocion.classList.remove("d-none");
    promocion.classList.toggle("d-none");

    if(promocion.classList.contains("d-none")){
        botonPromocion.textContent="Mostrar promoción";
    }
    else{
        botonPromocion.textContent="Ocultar Promoción";
    }
});

//contador de productos
const botonesAgregar = document.querySelectorAll(".boton-agregar");
const contador = document.getElementById("contador-productos");

let cantidadProductos2 = 0;

botonesAgregar.forEach(function(boton){
    boton.addEventListener("click",function(){
        cantidadProductos2 =cantidadProductos2+1;

        contador.textContent=cantidadProductos2;

    });
});