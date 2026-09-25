function Producto(props){
    return (
        <div>
            <h3>{props.nombre}</h3>
            <p>Precio: ${props.precio}</p>
            <button>Comprar</button>
        </div>
    )
}

export default Producto