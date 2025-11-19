import React from 'react';
import Hero from './components/Hero';

function App() {
    const heroStyle = {
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
    };

    const ctaStyle = {
        display: 'inline-block',
        marginTop: '1.25rem',
        padding: '0.65rem 1.15rem',
        background: '#fff',
        color: '#4a2fa6',
        borderRadius: 8,
        textDecoration: 'none',
        fontWeight: 600,
    };

    return (
        <>
            <section style={heroStyle}>
                <div>
                    <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', margin: 0 }}>
                        Hola, soy Juan — Desarrollador Frontend
                    </h1>
                    <p style={{ marginTop: '1rem', fontSize: '1.125rem', opacity: 0.95 }}>
                        Creo experiencias web modernas y accesibles usando React y tecnologías modernas.
                    </p>
                    <a href="#contact" style={ctaStyle}>
                        Contáctame
                    </a>
                </div>
            </section>

            <Hero />
            {/* Aquí irán las demás secciones */}
        </>
    );
}

export default App;
