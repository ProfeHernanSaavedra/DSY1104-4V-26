import Saludo from "./components/Saludo"
import Producto from "./components/Producto"
import Contador from "./components/Contador"
import Button from 'react-bootstrap/Button'

const nombre = "Hernán"
const edad = 40

function App (){
  return (
    <div>
      <h1>Mi primera Aplicación en React</h1>
      <p>Desarrollo FullStack II</p>
      <h3>Hola {nombre}</h3>
      <h3>Edad: {edad}</h3>
      <h4>El próximo año tendras {edad + 1}</h4>
      <Button variant="primary" >Ingresar</Button>
      <hr></hr>
      <Saludo />
      <hr />
      <h2>Venta de productos</h2>
      <Producto 
        nombre = "Notebool DELL"
        precio = "790.990"
      />
      <Producto 
        nombre = "Monitor AOC"
        precio = "180.990"
      />
      <Producto 
        nombre = "Mouse Genius"
        precio = "1.990"
      />

      <hr />
      <Contador />
    </div>
  )

}
export default App