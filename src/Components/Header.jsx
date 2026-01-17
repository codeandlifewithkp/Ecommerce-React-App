import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Modal from './Modal';
import icon from './icon.png';
import './css/Header.css';
import { FaCartShopping } from 'react-icons/fa6';
import { FaSearch, FaBars } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";

function Header() {
    const [open, setOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header>
            <Link to={'/'} className='brand-container'>
                <img src={icon} alt='icon' className='icon' />

                <div className='brand-text'>
                    <span className='brand-title'>Brand Name</span>
                    <span className='brand-subtitle'>Gaming Accessories</span>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className='navbar'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/store/'}>Store</NavLink>
                <NavLink to={'/custom-builds/'}>Custom Builds</NavLink>
                <button id='btn'>
                    <FaSearch />
                </button>
                <button id='btn'>
                    <FaCartShopping />
                </button>
                <button id='btn' onClick={() => setOpen(true)}>
                    <BiSolidUserCircle size={30} />
                </button>
            </nav>

            {/* Mobile Navigation */}
            <nav className='navbar-mobile'>
                <button id='btn' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <FaBars />
                </button>
                <div className='navbar-mobile-links' style={{ display: mobileMenuOpen ? 'flex' : 'none' }}>
                    <div className='navbar-mobile-search'>
                        <input type='text' placeholder='Search' />
                        <FaSearch />
                    </div>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/store/'}>Store</NavLink>
                    <NavLink to={'/custom-builds/'}>Custom Builds</NavLink>
                </div>
            </nav>
            <div className='navbar-mobile-actions'>
                <button id='btn'>
                    <FaCartShopping />
                </button>
                <button id='btn' onClick={() => setOpen(true)}>
                    <BiSolidUserCircle size={30} />
                </button>
            <Modal open={open} onClose={() => setOpen(false)} />
            </div>
        </header>
    );
}

export default Header;