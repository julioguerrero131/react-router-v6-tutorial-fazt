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
                    <NavLink className={({ isActive }) => (isActive) ? 'active' : 'blue'} to="/user">
                        Users
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
// para que no se refresque la pagina, usar: NavLink
// cambia el estado de la app, sin refrescar pagina

export default NavBar