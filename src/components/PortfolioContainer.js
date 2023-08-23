import React, { useState, useRef, useEffect } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import './PortfolioContainer.css';

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 1 + 1,
      });
    }
    particlesRef.current = particles;

    const drawParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);

      const colors = ['green', 'pink', 'red', 'orange', 'yellow', 'blue', 'purple', 'white'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      context.fillStyle = randomColor;

      particles.forEach((particle) => {
        context.fillRect(particle.x, particle.y, particle.size, particle.size);
        particle.y += particle.speed;

        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(drawParticles);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    drawParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const handleResumeClick = () => {
    
  }

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100&display=swap');
        `}
      </style>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      <div className='page'>
        {renderPage()}
      </div>
    </div>
  );
};

export default PortfolioContainer;
