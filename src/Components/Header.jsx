import { Link, NavLink } from 'react-router';
import icon from './icon.png';
import './css/Header.css';
import { FaCartShopping } from 'react-icons/fa6';

function Header() {
    return (
        <header>
            <Link to={'/'} className='brand-container'>
                <img src={icon} alt='icon' className='icon' />

                <div className='brand-text'>
                    <span className='brand-title'>Brand Name</span>
                    <span className='brand-subtitle'>Gaming Accessories</span>
                </div>
            </Link>
            <nav className='navbar'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/store/'}>Store</NavLink>
                <NavLink to={'/custom-builds/'}>Custom Builds</NavLink>
                <button id='btn'>
                    <FaCartShopping />
                </button>
            </nav>
        </header>
    );
}

export default Header;