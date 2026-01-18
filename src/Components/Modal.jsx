import { useState } from "react";
import { createPortal } from "react-dom";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import './css/Modal.css';

function Modal({ open, onClose }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    if (!open) return null;
    return createPortal(
        <>
            <div className="overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
                        <button className="close-btn" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-content">
                        {isSignUp ? (
                            <>
                                <p>Create your account to join the elite.</p><br />
                                <form className="modal-form">
                                    <input type="text" placeholder="Full Name" required /><br />
                                    <input type="email" placeholder="Email Address" required /><br />
                                    <div className="password-container">
                                        <input type={showPassword ? "text" : "password"} placeholder="Password" required />
                                        <button type="button" className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                                        </button>
                                    </div><br />
                                    <div className="password-container">
                                        <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" required />
                                        <button type="button" className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                            {showConfirmPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                                        </button>
                                    </div><br />
                                    <p className="toggle-text">Already have an account? <span onClick={() => setIsSignUp(false)}>Log In</span></p><br />
                                    <button className="modal-btn" type="submit">Sign Up</button>
                                </form>
                            </>
                        ) : (
                            <>
                                <p>Welcome back, Gamer!</p>
                                <p>Enter your credentials to access your account.</p><br />
                                <form className="modal-form">
                                    <input type="text" placeholder="Email/Mobile Number" required /><br />
                                    <div className="password-container">
                                        <input type={showPassword ? "text" : "password"} placeholder="Password" required />
                                        <button type="button" className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                                        </button>
                                    </div><br />
                                    <p className="toggle-text">Don't Have Account? <span onClick={() => setIsSignUp(true)}>Sign Up</span></p><br />
                                    <button className="modal-btn" type="submit">Log in</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>,
        document.body
    )
}

export default Modal;