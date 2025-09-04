import React from 'react';
import { 
    FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, 
    FaDatabase, FaGitAlt, FaNpm, FaCode, FaTerminal 
} from 'react-icons/fa';
import { 
    SiMongodb, SiExpress, SiBootstrap, SiVisualstudiocode,
    SiGithub, SiPostman, SiFirebase, SiRedux
} from 'react-icons/si';

const TechParticleSystem = ({ isActive = true }) => {
    const techIcons = [
        { Icon: FaReact, color: '#61DAFB', name: 'React' },
        { Icon: FaNodeJs, color: '#339933', name: 'Node.js' },
        { Icon: FaJs, color: '#F7DF1E', name: 'JavaScript' },
        { Icon: FaHtml5, color: '#E34F26', name: 'HTML5' },
        { Icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
        { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
        { Icon: SiExpress, color: '#000000', name: 'Express' },
        { Icon: FaGitAlt, color: '#F05032', name: 'Git' },
        { Icon: FaNpm, color: '#CB3837', name: 'NPM' },
        { Icon: SiBootstrap, color: '#7952B3', name: 'Bootstrap' },
        { Icon: SiVisualstudiocode, color: '#007ACC', name: 'VS Code' },
        { Icon: SiGithub, color: '#181717', name: 'GitHub' },
        { Icon: SiPostman, color: '#FF6C37', name: 'Postman' },
        { Icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
        { Icon: SiRedux, color: '#764ABC', name: 'Redux' },
        { Icon: FaCode, color: '#64FFDA', name: 'Code' },
        { Icon: FaTerminal, color: '#4CAF50', name: 'Terminal' },
        { Icon: FaDatabase, color: '#336791', name: 'Database' }
    ];

    if (!isActive) return null;

    return (
        <div className="tech-particle-system">
            <style jsx>{`
                .tech-particle-system {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    pointer-events: none;
                    z-index: 2;
                    overflow: hidden;
                }

                .tech-particle {
                    position: absolute;
                    animation: float var(--duration) ease-in-out infinite;
                    will-change: transform;
                }

                .tech-particle:hover {
                    transform: scale(1.2) !important;
                    transition: transform 0.3s ease;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-20px) rotate(90deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(180deg);
                    }
                    75% {
                        transform: translateY(-30px) rotate(270deg);
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.4;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.8;
                        transform: scale(1.1);
                    }
                }

                @keyframes drift {
                    0% {
                        transform: translateX(0px);
                    }
                    50% {
                        transform: translateX(20px);
                    }
                    100% {
                        transform: translateX(0px);
                    }
                }

                .tech-particle.pulse {
                    animation: pulse 3s ease-in-out infinite;
                }

                .tech-particle.drift {
                    animation: drift 8s ease-in-out infinite;
                }

                @media (prefers-reduced-motion: reduce) {
                    .tech-particle {
                        animation: none;
                    }
                }
            `}</style>

            {Array.from({ length: 12 }, (_, index) => {
                const particle = techIcons[Math.floor(Math.random() * techIcons.length)];
                const { Icon, color } = particle;
                
                return (
                    <div
                        key={index}
                        className={`tech-particle ${Math.random() > 0.7 ? 'pulse' : ''} ${Math.random() > 0.8 ? 'drift' : ''}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            '--duration': `${Math.random() * 20 + 10}s`,
                            opacity: Math.random() * 0.6 + 0.4,
                            fontSize: `${Math.random() * 30 + 20}px`,
                            color: color,
                            filter: `drop-shadow(0 0 10px ${color}40)`,
                        }}
                    >
                        <Icon />
                    </div>
                );
            })}
        </div>
    );
};

export default TechParticleSystem;
