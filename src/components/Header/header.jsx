import { NavLink, Link } from 'react-router-dom'
import './header.scss'
import kasaLogo from '../../assets/logo.svg'


function Header() {

    return (
        <header className='nav-container'>
            <Link to="/">
                <img className='nav-logo' src={kasaLogo} alt='Logo de Kasa'></img>
            </Link>
            <nav className='nav'>
                <NavLink className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'} to="/">
                    Accueil
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'} to="/test">
                    A Propos
                </NavLink>
            </nav>
        </header>
    )

}

export default Header;