import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
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
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      
    </BrowserRouter>
  )
}
// Navigate sirve para redireccionar a alguna pagina
// por ejemplo, a un usuario que se le expiro la sesion abierta
// se reeplaza la pagina pero no la ruta, a menos que se use replace

export default App