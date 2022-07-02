import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import RegistroOperaciones from './components/RegistroOpecariones.js'
import ActualizarOperacion from './components/ActualizarOperacion.js'
import NavBar from './components/NavBar.js'
import ContenedorOperaciones from './components/ListaOperaciones/ContenedorOperaciones.js'

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/operaciones/:filter' element={<ContenedorOperaciones/>}/>
        <Route path='/nueva' element={<RegistroOperaciones/>} />
        <Route path='/update' element={<ActualizarOperacion/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
