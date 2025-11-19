import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero />

      <section id="projects" aria-labelledby="galeria" style={{ padding: '2rem 1rem', background: '#f9fafb' }}>
        <h2 id="galeria" style={{ margin: 0, marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'center', color: '#111827' }}>
          Galería / Proyectos
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {[
            {
              id: 1,
              title: 'App Boutique',
              desc: 'Registro/login con verificación SMS, backend en Railway y frontend en GitHub Pages.',
              img: 'https://via.placeholder.com/600x400?text=App+Boutique',
            },
            {
              id: 2,
              title: 'Quiz Técnico Inglés',
              desc: 'App educativa con quizzes interactivos para practicar inglés técnico aplicado a desarrollo.',
              img: 'https://via.placeholder.com/600x400?text=Quiz+Inglés',
            },
            {
              id: 3,
              title: 'Gestor de Productos',
              desc: 'CRUD completo con React, Node.js y MySQL, desplegado en Railway con conexión funcional.',
              img: 'https://via.placeholder.com/600x400?text=Gestor+Productos',
            },
          ].map((card) => (
            <article
              key={card.id}
              style={{
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
              <img
                src={card.img}
                alt={card.title}
                style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', color: '#00d8ff' }}>{card.title}</h3>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#374151' }}>{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
