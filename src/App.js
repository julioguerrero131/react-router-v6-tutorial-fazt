import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
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
        <Route path="/user" element={<UserPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App