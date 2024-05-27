import { Link } from 'react-router-dom'; // importar link, no refresca la pagina

const userId = 0;

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/users/${userId}`}>Usuarios</Link>
    </div>
  )
}

export default HomePage