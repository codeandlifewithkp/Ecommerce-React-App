import { Link, NavLink } from 'react-router';
import './css/Header.css';

function Header () {
    return (
        <header>
            <nav className='navbar'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/Services/'}>Services</NavLink>
                <NavLink to={'/Contact-us/'}>Contact Us</NavLink>
                <NavLink to={'/About-us'}>About Us</NavLink>
            </nav>
        </header>
    );
}

export default Header;