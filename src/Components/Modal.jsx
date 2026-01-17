import { createPortal } from "react-dom";
import './css/Modal.css';

function Modal({ open, onClose }) {
    if (!open) return null;
    return createPortal(
        <>
            <div className="overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>User Profile</h2>
                        <button className="close-btn" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-content">
                        <p>Welcome back, Gamer!</p>
                    </div>
                </div>
            </div>
        </>,
        document.body
    )
}

export default Modal;