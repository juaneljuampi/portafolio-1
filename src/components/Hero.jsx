import React, { useState } from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ModalContact from './ModalContacto';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="hero-container" id="hero">
      <div className="hero-content">
        <h1>Hola, soy <span className="highlight">JUAN</span></h1>
        <h2>Desarrollador Frontend & Backend</h2>
        <p>
          Estudiante de Ingeniería en Informática en Duoc UC. Apasionado por crear apps robustas, visualmente elegantes y listas para producción.
        </p>



        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/juan-cortes-nunez" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/juaneljuampi" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <p>
            
          </p>
                <div className="hero-buttons">
          
          <button className="btn btn-outline" onClick={() => setShowModal(true)}>Contáctame</button>
        </div>
        </div>
      </div>

      <ModalContact isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Hero;
