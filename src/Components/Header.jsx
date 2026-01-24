import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import icon from "./icon.png";
import "./css/Header.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaBars } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";

function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const executeSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/store?search=${encodeURIComponent(searchTerm)}`);
      setSearchOpen(false);
      setMobileMenuOpen(false);
      setSearchTerm("");
    } else {
      setSearchOpen(false);
    }
  };

  const handleDesktopSearch = () => {
    if (!searchOpen) {
      setSearchOpen(true);
    } else {
      executeSearch();
    }
  };

  return (
    <header>
      <Link to={"/"} className="brand-container">
        <img src={icon} alt="icon" className="icon" />

        <div className="brand-text">
          <span className="brand-title">WORLD OF MSD</span>
          <span className="brand-subtitle">Gaming Accessories</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="navbar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/store/"}>Store</NavLink>
        <NavLink to={"/custom-builds/"}>Custom Builds</NavLink>
        <div className="search" ref={searchRef}>
          <input
            type="text"
            placeholder="Search Products..."
            className={searchOpen ? "active" : ""}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && executeSearch()}
          />
          <button id="btn" onClick={handleDesktopSearch}>
            <FaSearch />
          </button>
        </div>
        <button id="btn">
          <FaCartShopping />
        </button>
        <button id="btn" onClick={() => setOpen(true)}>
          <BiSolidUserCircle size={30} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="navbar-mobile">
        <button id="btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <FaBars />
        </button>
        <div
          className="navbar-mobile-links"
          style={{ display: mobileMenuOpen ? "flex" : "none" }}
        >
          <div className="navbar-mobile-search">
            <input
              type="text"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && executeSearch()}
            />
            <button id="btn" onClick={executeSearch}>
              <FaSearch />
            </button>
          </div>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/store/"}>Store</NavLink>
          <NavLink to={"/custom-builds/"}>Custom Builds</NavLink>
        </div>
      </nav>
      <div className="navbar-mobile-actions">
        <button id="btn">
          <FaCartShopping />
        </button>
        <button id="btn" onClick={() => setOpen(true)}>
          <BiSolidUserCircle size={30} />
        </button>
        <Modal open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}

export default Header;
