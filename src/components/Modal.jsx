import React from 'react';
import './Modal.css'; // Optional: create CSS for styling the modal

const Modal = ({ isOpen, onClose, imageUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt="Enlarged view" className="modal-image" />
                <button className="modal-close" onClick={onClose}>✖</button>
            </div>
        </div>
    );
};

export default Modal;