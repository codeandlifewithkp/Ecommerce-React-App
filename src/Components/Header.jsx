import { Link, NavLink } from 'react-router';
import icon from './ecommerce.svg';
import './css/Header.css';

function Header () {
    return (
        <header>
            <Link to={'/'}><img src={icon} alt='icon' className='icon' /></Link>
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