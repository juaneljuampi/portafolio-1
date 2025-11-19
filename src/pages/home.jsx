import React, { useState } from 'react';
import Hero from '../components/Hero';
import ImageModal from '../components/ImageModal';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (images, title) => {
    setModalImages(images);
    setModalTitle(title);
    setShowModal(true);
  };

  return (
    <>
      <Hero />

      <section id="projects" aria-labelledby="galeria" style={{ padding: '2rem 1rem', background: '#f9fafb' }}>
        <h2 id="galeria" style={{ margin: 0, marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'center', color: '#111827' }}>
          Galería / Proyectos
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {[
            {
              id: 1,
              title: 'App web Boutique',
              desc: 'Aplicación fullstack para gestión de productos con registro/login, verificación por SMS y despliegue en producción.',
              images: [
                `${process.env.PUBLIC_URL}/img/imgfrontend.png`,
                `${process.env.PUBLIC_URL}/img/card.png`,
                `${process.env.PUBLIC_URL}/img/inicioode carrito.png`,
                `${process.env.PUBLIC_URL}/img/modal.png`,
                `${process.env.PUBLIC_URL}/img/validacionsesion.png`,
                `${process.env.PUBLIC_URL}/img/iniciosesion.png`,
                `${process.env.PUBLIC_URL}/img/registro.png`,
                `${process.env.PUBLIC_URL}/img/paneladmin.png`,
                `${process.env.PUBLIC_URL}/img/productosadmin.png`,
                `${process.env.PUBLIC_URL}/img/registros.png`,
                `${process.env.PUBLIC_URL}/img/adminuser.png`,
              ],
              
              repoLink: 'https://github.com/juaneljuampi/app-boutique',
            },
            {
              id: 2,
              title: 'Quiz Técnico Inglés',
              desc: 'App educativa con quizzes interactivos para practicar inglés técnico aplicado a desarrollo.',
              images: [
                `${process.env.PUBLIC_URL}/img/imgfrontend.png`,
              ],
              docLink: 'https://github.com/juaneljuampi/quiz-ingles#readme',
              repoLink: 'https://github.com/juaneljuampi/quiz-ingles',
            },

          ].map((card) => (
            <article key={card.id} style={{
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              overflow: 'hidden',
              background: '#ffffff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '0.5rem',
                padding: '0.5rem',
              }}>
                {card.images.slice(0, 3).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${card.title} ${i + 1}`}
                    style={{
                      height: '150px',
                      borderRadius: 6,
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', color: '#00d8ff' }}>{card.title}</h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#374151' }}>{card.desc}</p>

                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => openModal(card.images, card.title)}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '1rem',
                      backgroundColor: '#00d8ff',
                      color: '#000',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    Ver imágenes
                  </button>

                  <a
                    href={card.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '1rem',
                      backgroundColor: '#00d8ff',
                      color: '#000',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    Ver repositorio
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ImageModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        images={modalImages}
        title={modalTitle}
      />
    </>
  );
}

export default Home;
