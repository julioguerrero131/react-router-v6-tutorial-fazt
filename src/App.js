import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
// BROWSERROUTER
// Engloba toda la App
// Permite crear enlaces dentro de las etiquetas
// Cada componente podra ser visitado a traves de una URL

// ROUTE
// Permite definir una ruta (URL) a un componente

// Importar las otras paginas


function App() {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />

        <Route path="/users" element={<UsersPage/>} />
        <Route path="/usuarios" element={<Navigate replace to={'/users'}/>} />
        <Route path="/users/:id" element={<UserPage/>} />
        <Route path='/users/new' element={<p>New User</p>}/>

        <Route path="/dashboard/*" element={<Dashboard/>}>
          <Route path="welcome" element={<p>Welcome</p>} />
          <Route path="goodbye" element={<p>goodbye</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      
    </BrowserRouter>
  )
}
// Navigate sirve para redireccionar a alguna pagina
// por ejemplo, a un usuario que se le expiro la sesion abierta
// se reeplaza la pagina pero no la ruta, a menos que se use replace

// PARAMS: /ruta/:param

// SUBCOMPONENTE: necesita /ruta/*
// para aceptar es una ruta dentro de otra ruta

export default App