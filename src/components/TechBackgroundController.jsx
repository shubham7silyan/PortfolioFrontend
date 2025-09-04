import React from 'react';
import TechAnimatedBackground from './TechAnimatedBackground';
import TechParticleSystem from './TechParticleSystem';
import CodeRainEffect from './CodeRainEffect';

const TechBackgroundController = ({ 
    enableCanvas = true, 
    enableParticles = true, 
    enableCodeRain = true,
    intensity = 'medium' 
}) => {
    return (
        <div 
            className="tech-background-controller"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 1,
                pointerEvents: 'none',
                background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 50%, #16213e 100%)'
            }}
        >
            {enableCanvas && <TechAnimatedBackground />}
            {enableCodeRain && <CodeRainEffect intensity="low" />}
            {enableParticles && <TechParticleSystem isActive={true} />}
        </div>
    );
};

export default TechBackgroundController;
