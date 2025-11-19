import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <div className="hero-content">
        <h1>Hola, soy <span className="highlight">JUAN</span></h1>
        <h2>Desarrollador Frontend & Backend</h2>
        <p>
          Estudiante de Ingeniería en Informática en Duoc UC. Apasionado por crear apps robustas, visualmente elegantes y listas para producción.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">Ver proyectos</a>
          <a href="#contact" className="btn btn-outline">Contáctame</a>
        </div>
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
