import React, { useEffect, useRef } from 'react';

const TechAnimatedBackground = ({ className = '' }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    // Tech symbols and code snippets
    const techSymbols = ['React', 'Node.js', 'JS', 'HTML', 'CSS', 'MongoDB', '{', '}', '<', '>', '/', '()', '[]', '=>', '&&', '||', 'const', 'let', 'var', 'function', 'async', 'await'];
    const codeSnippets = ['console.log()', 'useState()', 'useEffect()', 'express()', 'mongoose', 'npm install', 'git commit', 'API', 'JSON', 'HTTP'];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const particles = [];
        const matrixDrops = [];
        const geometricShapes = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class for floating tech elements
        class TechParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 20 + 10;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.text = techSymbols[Math.floor(Math.random() * techSymbols.length)];
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
                this.pulse = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.rotation += this.rotationSpeed;
                this.pulse += 0.02;

                // Wrap around screen
                if (this.x < -50) this.x = canvas.width + 50;
                if (this.x > canvas.width + 50) this.x = -50;
                if (this.y < -50) this.y = canvas.height + 50;
                if (this.y > canvas.height + 50) this.y = -50;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                
                const pulseSize = this.size + Math.sin(this.pulse) * 2;
                ctx.font = `${pulseSize}px 'Courier New', monospace`;
                ctx.fillStyle = `rgba(100, 255, 218, ${this.opacity})`;
                ctx.textAlign = 'center';
                ctx.fillText(this.text, 0, 0);
                
                ctx.restore();
            }
        }

        // Matrix rain drop class
        class MatrixDrop {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = -20;
                this.speed = Math.random() * 3 + 1;
                this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                this.opacity = Math.random() * 0.7 + 0.3;
            }

            update() {
                this.y += this.speed;
                if (this.y > canvas.height + 20) {
                    this.y = -20;
                    this.x = Math.random() * canvas.width;
                    this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                }
            }

            draw() {
                ctx.font = '12px "Courier New", monospace';
                ctx.fillStyle = `rgba(0, 255, 65, ${this.opacity})`;
                ctx.fillText(this.text, this.x, this.y);
            }
        }

        // Geometric shape class
        class GeometricShape {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 100 + 50;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.01;
                this.opacity = Math.random() * 0.1 + 0.05;
                this.type = Math.floor(Math.random() * 3); // 0: triangle, 1: square, 2: hexagon
            }

            update() {
                this.rotation += this.rotationSpeed;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.strokeStyle = `rgba(100, 255, 218, ${this.opacity})`;
                ctx.lineWidth = 2;

                ctx.beginPath();
                if (this.type === 0) {
                    // Triangle
                    ctx.moveTo(0, -this.size / 2);
                    ctx.lineTo(-this.size / 2, this.size / 2);
                    ctx.lineTo(this.size / 2, this.size / 2);
                    ctx.closePath();
                } else if (this.type === 1) {
                    // Square
                    ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
                } else {
                    // Hexagon
                    for (let i = 0; i < 6; i++) {
                        const angle = (i * Math.PI) / 3;
                        const x = Math.cos(angle) * this.size / 2;
                        const y = Math.sin(angle) * this.size / 2;
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                }
                ctx.stroke();
                ctx.restore();
            }
        }

        // Initialize particles
        for (let i = 0; i < 15; i++) {
            particles.push(new TechParticle());
        }

        for (let i = 0; i < 8; i++) {
            matrixDrops.push(new MatrixDrop());
        }

        for (let i = 0; i < 5; i++) {
            geometricShapes.push(new GeometricShape());
        }

        // Animation loop
        const animate = () => {
            // Clear canvas with dark background
            ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw geometric shapes
            geometricShapes.forEach(shape => {
                shape.update();
                shape.draw();
            });

            // Update and draw matrix drops
            matrixDrops.forEach(drop => {
                drop.update();
                drop.draw();
            });

            // Update and draw tech particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connecting lines between nearby particles
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(100, 255, 218, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    // Pause animation when tab is not visible
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden && animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            } else if (!document.hidden) {
                // Restart animation when tab becomes visible
                const canvas = canvasRef.current;
                if (canvas) {
                    // Animation will restart in the main useEffect
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`tech-animated-background ${className}`}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 1,
                background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 50%, #16213e 100%)',
                pointerEvents: 'none'
            }}
        />
    );
};

export default TechAnimatedBackground;
