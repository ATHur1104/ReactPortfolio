import React, { useState, useRef, useEffect } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

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

      context.fillStyle = 'black'; // Background color
      context.fillRect(0, 0, canvas.width, canvas.height);

      const colors = ['green', 'pink', 'red', 'orange', 'yellow', 'blue', 'purple', 'white'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      context.fillStyle = randomColor; // Particle color
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

    drawParticles(); // Start the animation loop

    // Event listener for window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
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

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='page'>
        {renderPage()}
      </div>
    </div>
  );
};

export default PortfolioContainer;
