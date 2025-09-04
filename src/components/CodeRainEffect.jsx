import React, { useEffect, useRef } from 'react';

const CodeRainEffect = ({ intensity = 'low', className = '' }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    const techKeywords = [
        'React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML', 'CSS',
        'async', 'await', 'const', 'let', 'var', 'function', 'return',
        'import', 'export', 'useState', 'useEffect', 'props', 'state',
        'API', 'JSON', 'HTTP', 'GET', 'POST', 'PUT', 'DELETE',
        'npm', 'git', 'commit', 'push', 'pull', 'merge', 'branch'
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const drops = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize drops
        const columns = Math.floor(canvas.width / 20);
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * canvas.height;
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 20, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff41';
            ctx.font = '14px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = techKeywords[Math.floor(Math.random() * techKeywords.length)];
                ctx.fillText(text, i * 20, drops[i]);

                if (drops[i] * Math.random() > canvas.height * 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 20;
            }

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

    return (
        <canvas
            ref={canvasRef}
            className={`code-rain-effect ${className}`}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 3,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

export default CodeRainEffect;
