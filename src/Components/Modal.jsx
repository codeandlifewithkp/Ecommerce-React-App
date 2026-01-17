import { createPortal } from "react-dom";
import './css/Modal.css';

function Modal({ open, onClose }) {
    if (!open) return null;
    return createPortal(
        <>
            <div className="overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <button className="close-btn" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-content">
                        <p>Welcome back, Gamer!</p>
                        <p>Enter your credentials to access your account.</p><br />
                        <form className="modal-form">
                            <input type="text" placeholder="Username" /><br />
                            <input type="password" placeholder="Password" /><br />
                            <a href="#">Don't Have Account?</a><br />
                            <button className="modal-btn" type="submit">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>,
        document.body
    )
}

export default Modal;