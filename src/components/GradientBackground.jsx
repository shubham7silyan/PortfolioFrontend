import React, { useEffect, useRef, useState } from 'react';
import './GradientBackground.css';

const GradientBackground = () => {
    const particlesContainerRef = useRef(null);
    const spheresRef = useRef([]);
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Detect theme preference
        const detectTheme = () => {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const bodyTheme = document.body.getAttribute('data-theme');
            
            // Check for explicit theme setting first, then system preference
            if (bodyTheme) {
                setIsDarkMode(bodyTheme === 'dark');
            } else {
                setIsDarkMode(darkModeQuery.matches);
            }
        };

        // Initial theme detection
        detectTheme();

        // Listen for theme changes
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const themeObserver = new MutationObserver(detectTheme);
        
        darkModeQuery.addEventListener('change', detectTheme);
        themeObserver.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });

        const particlesContainer = particlesContainerRef.current;
        if (!particlesContainer) return;

        const particleCount = 60;
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }

        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'gradient-particle';
            
            // Random size (small)
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Initial position
            resetParticle(particle);
            
            particlesContainer.appendChild(particle);
            
            // Animate
            animateParticle(particle);
        }
        
        function resetParticle(particle) {
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = '0';
            
            return {
                x: posX,
                y: posY
            };
        }
        
        function animateParticle(particle) {
            // Initial position
            const pos = resetParticle(particle);
            
            // Random animation properties
            const duration = Math.random() * 12 + 8;
            const delay = Math.random() * 5;
            
            setTimeout(() => {
                particle.style.transition = `all ${duration}s linear`;
                particle.style.opacity = Math.random() * 0.4 + 0.1;
                
                // Move in a slight direction
                const moveX = pos.x + (Math.random() * 30 - 15);
                const moveY = pos.y - Math.random() * 40;
                
                particle.style.left = `${moveX}%`;
                particle.style.top = `${moveY}%`;
                
                // Reset after animation completes
                setTimeout(() => {
                    if (particle.parentNode) {
                        animateParticle(particle);
                    }
                }, duration * 1000);
            }, delay * 1000);
        }

        // Enhanced mouse interaction for particles only
        let lastMouseTime = 0;
        const handleMouseMove = (e) => {
            const now = Date.now();
            
            // Update mouse position
            mousePositionRef.current = {
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            };

            // More frequent particle creation for closer following
            if (now - lastMouseTime > 30) {
                lastMouseTime = now;
                
                // Create multiple particles for denser trail
                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        createMouseParticle();
                    }, i * 15);
                }
            }
        };

        function createMouseParticle() {
            const particle = document.createElement('div');
            particle.className = `gradient-particle mouse-particle ${isDarkMode ? 'dark-theme' : 'light-theme'}`;
            
            // Varied sizes for organic feel
            const size = Math.random() * 6 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Position very close to mouse with minimal randomness
            const offsetX = (Math.random() - 0.5) * 1;
            const offsetY = (Math.random() - 0.5) * 1;
            
            particle.style.left = `${mousePositionRef.current.x + offsetX}%`;
            particle.style.top = `${mousePositionRef.current.y + offsetY}%`;
            particle.style.opacity = '0.9';
            
            particlesContainerRef.current.appendChild(particle);
            
            // Animate with very close following behavior
            setTimeout(() => {
                particle.style.transition = 'all 1.5s ease-out';
                
                // Very small spread for tight following
                const spreadX = (Math.random() - 0.5) * 4;
                const spreadY = (Math.random() - 0.5) * 4;
                
                particle.style.left = `${mousePositionRef.current.x + spreadX}%`;
                particle.style.top = `${mousePositionRef.current.y + spreadY}%`;
                particle.style.opacity = '0';
                particle.style.transform = `scale(${Math.random() * 1.2 + 0.3})`;
                
                // Remove after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.remove();
                    }
                }, 1500);
            }, 5);
        }

        // Continuous sphere following effect with closer tracking
        const updateSpherePositions = () => {
            const spheres = spheresRef.current;
            const mouse = mousePositionRef.current;
            
            spheres.forEach((sphere, index) => {
                if (sphere) {
                    // Increased intensity for closer following
                    const intensity = [0.12, 0.08, 0.15][index];
                    const moveX = (mouse.x - 50) * intensity;
                    const moveY = (mouse.y - 50) * intensity;
                    
                    // Apply transform while preserving animation
                    sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
                }
            });
            
            requestAnimationFrame(updateSpherePositions);
        };

        // Add event listeners
        document.addEventListener('mousemove', handleMouseMove);
        
        // Start continuous sphere animation
        updateSpherePositions();

        // Cleanup function
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            darkModeQuery.removeEventListener('change', detectTheme);
            themeObserver.disconnect();
            
            // Clear particles
            if (particlesContainer) {
                particlesContainer.innerHTML = '';
            }
        };
    }, [isDarkMode]);

    return (
        <div className="gradient-background-container">
            <div className="gradient-background">
                <div 
                    className="gradient-sphere sphere-1" 
                    ref={el => spheresRef.current[0] = el}
                ></div>
                <div 
                    className="gradient-sphere sphere-2" 
                    ref={el => spheresRef.current[1] = el}
                ></div>
                <div 
                    className="gradient-sphere sphere-3" 
                    ref={el => spheresRef.current[2] = el}
                ></div>
                <div className="gradient-glow"></div>
                <div className="gradient-grid-overlay"></div>
                <div className="gradient-noise-overlay"></div>
                <div 
                    className="gradient-particles-container" 
                    ref={particlesContainerRef}
                ></div>
            </div>
        </div>
    );
};

export default GradientBackground;
