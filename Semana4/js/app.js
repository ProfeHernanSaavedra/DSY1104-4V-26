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
const ultimoProducto = document.getElementById("ultimo-producto");
let cantProductos = 0;

botonesAgregar.forEach(function(boton){
    boton.addEventListener("click",function(){
        const nombreProducto =boton.dataset.producto;

        cantProductos =cantProductos+1;

        contador.textContent=cantProductos;

        ultimoProducto.textContent =nombreProducto + " fue agregado correctamente";

    });
});


//**** manejo de formularios */

//rescatar id
//rescatar los datos de los input
//validaciones
//accion del boton ---> listener

const formulario = document.getElementById("formulario-reserva");
const campoNombre = document.getElementById("nombre");
const campoCorreo = document.getElementById("correo");
const campoPersonas = document.getElementById("personas");
const campoFecha = document.getElementById("fecha");
const campoHorario = document.getElementById("horario");
const mensajeResultado = document.getElementById("mensaje-resultado");

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();

    const nombre = campoNombre.value.trim();
    const correo = campoCorreo.value.trim();
    const personas = Number(campoPersonas.value);
    const fecha = campoFecha.value;
    const horario = campoHorario.value;

    if (
        nombre === "" || correo ==="" || fecha === "" || horario === "" 
    ){
        mensajeResultado.textContent = "Debe completar todos los campos";

        mensajeResultado.className = "alert alert-danger mt-4";

        return;
    }

    if (personas < 1 || personas > 10)
    {
        mensajeResultado.textContent = "La reserva debe ser entre 1 y 10 personas";
        
        mensajeResultado.className = "alert alert-danger mt-4";

        return;
    }

    mensajeResultado.textContent = "Reserva confirmada para "+nombre +" el dia "+
    fecha+ " a las " + horario + " para " + personas + " persona(s).";

    mensajeResultado.className = "alert alert-success mt-4";

    formulario.reset();

});
