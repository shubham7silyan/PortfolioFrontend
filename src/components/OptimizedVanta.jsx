import React, { useEffect, useRef, useState } from 'react';

const OptimizedVanta = ({ 
    effect = 'NET',
    options = {},
    className = '',
    children 
}) => {
    const vantaRef = useRef();
    const [vantaEffect, setVantaEffect] = useState(null);
    const [isVisible, setIsVisible] = useState(process.env.NODE_ENV !== 'production');

    useEffect(() => {
        // Skip intersection observer in development to prevent reload loops
        if (process.env.NODE_ENV !== 'production') {
            return;
        }

        // Only load Vanta if user prefers motion and component is visible
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (vantaRef.current) {
            observer.observe(vantaRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        // Dynamically import Vanta and Three.js only when needed
        const loadVanta = async () => {
            try {
                // Load Three.js first
                if (!window.THREE) {
                    await new Promise((resolve, reject) => {
                        const script = document.createElement('script');
                        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
                        script.onload = resolve;
                        script.onerror = reject;
                        document.head.appendChild(script);
                    });
                }

                // Load Vanta.js
                if (!window.VANTA) {
                    await new Promise((resolve, reject) => {
                        const script = document.createElement('script');
                        script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
                        script.onload = resolve;
                        script.onerror = reject;
                        document.head.appendChild(script);
                    });
                }

                // Initialize Vanta effect with performance optimizations
                if (window.VANTA && window.VANTA[effect] && vantaRef.current) {
                    const vanta = window.VANTA[effect]({
                        el: vantaRef.current,
                        THREE: window.THREE,
                        // Performance optimizations
                        points: 8, // Reduced from default
                        maxDistance: 20, // Reduced from default
                        spacing: 20, // Increased for better performance
                        showDots: false, // Disable dots for better performance
                        ...options
                    });
                    setVantaEffect(vanta);
                }
            } catch (error) {
                console.warn('Failed to load Vanta.js:', error);
            }
        };

        loadVanta();

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, [isVisible, effect, options]);

    // Pause animation when tab is not visible
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (vantaEffect) {
                if (document.hidden) {
                    vantaEffect.pause();
                } else {
                    vantaEffect.play();
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [vantaEffect]);

    return (
        <div 
            ref={vantaRef} 
            className={`vanta-container ${className}`}
            style={{ 
                position: 'relative',
                minHeight: '100vh',
                willChange: 'transform' // Optimize for animations
            }}
        >
            {children}
        </div>
    );
};

export default OptimizedVanta;
