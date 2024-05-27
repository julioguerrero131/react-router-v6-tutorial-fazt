import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => (isActive) ? 'active' : 'blue'} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive) ? 'active' : 'blue'} to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive) ? 'active' : 'blue'} to="/users">
                        Users
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
// NAVLINK
// para que no se refresque la pagina, usar: NavLink
// cambia el estado de la app, sin refrescar pagina

// LINK
// reemplazo de la etiqueta a

export default NavBar