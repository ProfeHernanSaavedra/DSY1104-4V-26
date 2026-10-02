import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DetalleProducto from './pages/DetalleProducto'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Login from './pages/Login'
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/producto/:id"
          element={<DetalleProducto />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App
