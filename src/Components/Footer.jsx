import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import './css/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Gaming Gear Ecommerce Store. All rights reserved.</p>
                </div>
                <div className="footer-social">
                    <div className="footer-social-icons">
                    <p>Follow Us</p>
                        <a href="https://www.facebook.com/codeandlifekp" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.youtube.com/@codeandlifewithkp" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                        <a href="https://www.instagram.com/code_and_life_kp" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-info-container">
                <div className="footer-info">
                    <div className="footer-info-item">
                        <GrMapLocation />
                        <span>Ahmedabad, Gujarat, India - 380001</span>
                    </div>
                    <div className="footer-info-item">
                        <IoIosMail />
                        <a href="mailto:kp.codeandlife@gmail.com">kp.codeandlife@gmail.com</a>
                    </div>
                    <div className="footer-info-item">
                        <FaPhone />
                        <a href="tel:+917016028198">+917016028198</a>
                    </div>
                    <div className="footer-info-item">
                        <IoTimeOutline />
                        <span>Mon-Fri: 9am-6pm</span>
                    </div>
                </div>
                
                <div className="footer-links">
                    <Link to="/about">About</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/return-policy">Return Policy</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/terms-of-use">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;