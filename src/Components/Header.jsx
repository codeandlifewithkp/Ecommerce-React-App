import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Modal from './Modal';
import icon from './icon.png';
import './css/Header.css';
import { FaCartShopping } from 'react-icons/fa6';
import { FaSearch } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";

function Header() {
    const [open, setOpen] = useState(false);
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
                    <FaSearch />
                </button>
                <button id='btn'>
                    <FaCartShopping />
                </button>
                <button id='btn' onClick={() => setOpen(true)}>
                    <BiSolidUserCircle size={30} />
                </button>
            </nav>
            <Modal open={open} onClose={() => setOpen(false)} />
        </header>
    );
}

export default Header;