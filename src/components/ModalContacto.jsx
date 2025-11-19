import React from 'react';
import './ModalContacto.css';

const ModalContacto = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contacto</h2>
        <p><strong>Nombre:</strong> Juan Cortés Núñez</p>
        <p><strong>Email:</strong> juan.tuemail@ejemplo.com</p>
        <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/juan-cortes-nunez" target="_blank" rel="noopener noreferrer">linkedin.com/in/juan-cortes-nunez</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/juaneljuampi" target="_blank" rel="noopener noreferrer">github.com/juaneljuampi</a></p>
        <button className="btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalContacto;
