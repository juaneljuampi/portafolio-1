import React, { useState } from 'react';

const ImageModal = ({ isOpen, onClose, images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>{title}</h2>
        <img
          src={images[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          style={styles.image}
        />
        <div style={styles.controls}>
          <button onClick={prevImage} style={styles.navBtn}>←</button>
          <span style={styles.counter}>{currentIndex + 1} / {images.length}</span>
          <button onClick={nextImage} style={styles.navBtn}>→</button>
        </div>
        <button onClick={onClose} style={styles.closeBtn}>Cerrar</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '800px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    color: '#00d8ff',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
    borderRadius: '8px',
    objectFit: 'contain',
    marginBottom: '1rem',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  navBtn: {
    fontSize: '1.5rem',
    background: '#00d8ff',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  },
  counter: {
    fontSize: '1rem',
    color: '#333',
  },
  closeBtn: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#00d8ff',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default ImageModal;
