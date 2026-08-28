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
});

