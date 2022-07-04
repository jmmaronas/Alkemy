import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import RegistroOperaciones from './components/RegistroOpecariones.js'
import ActualizarOperacion from './components/ActualizarOperacion.js'
import ContenedorOperaciones from './components/ListaOperaciones/ContenedorOperaciones.js'
import  OperacionesProvider  from './components/context/operacionesContext.js'

function App() {

  return (
    <OperacionesProvider>
      <BrowserRouter>        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/operaciones/:filter' element={<ContenedorOperaciones />} />
          <Route path='/new' element={<RegistroOperaciones />} />
          <Route path='/update/:id' element={<ActualizarOperacion />} />
        </Routes>
      </BrowserRouter>
    </OperacionesProvider>
  )
}

export default App;
