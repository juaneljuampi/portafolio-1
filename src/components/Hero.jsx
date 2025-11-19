import React, { useState } from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ModalContact from './ModalContacto';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container" id="hero">
      <div className="hero-content">
        <h1>Hola, soy <span className="highlight">JUAN CORTES</span></h1>
        <h2></h2>
        <p>
          Soy Desarrollador Fullstack Junior con experiencia en proyectos reales, integración de APIs, despliegue en producción y enfoque en UI profesional. He desarrollado apps completas con React, Node.js, MySQL y servicios como Railway, GitHub Pages y Sinch.
        </p>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/juan-cortes-nunez" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/juaneljuampi" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
        </div>

        <div className="hero-buttons">
          <button className="btn" onClick={handleScrollToProjects}>Ver proyectos</button>
          <button className="btn btn-outline" onClick={() => setShowModal(true)}>Contáctame</button>
        </div>
      </div>

      <ModalContact isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Hero;
