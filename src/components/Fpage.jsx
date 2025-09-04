import React, { useMemo, useState, useEffect } from "react";
import '../index.css'
import GradientBackground from './GradientBackground';

function Fpage(props) {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    
    const staticText = useMemo(() => 
        "As an entry-level front-end developer, I specialize in web development with a focus on HTML, CSS, and JavaScript. I am an enthusiastic newcomer, a self-starter with a passion for leveraging technical skills to contribute to organizational success. My Bachelor of Computer Applications has honed my ability to create web applications, and I am eager to work in an environment that allows me to further expand my knowledge within the industry."
    , []);

    useEffect(() => {
        // Use requestIdleCallback for non-blocking typing animation
        const typeText = () => {
            if (window.requestIdleCallback) {
                window.requestIdleCallback(() => {
                    setIsTyping(true);
                    let index = 0;
                    const timer = setInterval(() => {
                        if (index < staticText.length) {
                            setDisplayText(staticText.slice(0, index + 1));
                            index++;
                        } else {
                            clearInterval(timer);
                            setIsTyping(false);
                        }
                    }, 20); // Faster typing for better UX
                });
            } else {
                // Fallback for browsers without requestIdleCallback
                setTimeout(() => {
                    setDisplayText(staticText);
                }, 100);
            }
        };

        // Delay typing animation to prioritize critical rendering
        const delayTimer = setTimeout(typeText, 500);
        return () => clearTimeout(delayTimer);
    }, [staticText]);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="cover-v1" id="home-section">
            {/* Modern Gradient Background */}
            <GradientBackground />
            
            {/* Content */}
            <div className="hero-content">
                <div className="bio-container">
                    <div className="bio">
                        <p>
                            {displayText}
                            {isTyping && <span className="cursor">|</span>}
                        </p>
                    </div>
                </div>

                <button 
                    onClick={scrollToAbout}
                    className="mouse-wrap smoothscroll"
                    aria-label="Scroll to About section"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    <span className="mouse">
                        <span className="scroll"></span>
                    </span>
                    <span className="mouse-label">Scroll</span>
                </button>
            </div>
            
            <style jsx>{`
                .cursor {
                    animation: blink 1s infinite;
                    color: #dc3545;
                }
                
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
        </div>
    );
}

export default React.memo(Fpage);