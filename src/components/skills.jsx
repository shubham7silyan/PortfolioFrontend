import React, { useState, useMemo } from "react";
import '../index.css'
import pic1 from '../images/divider.png'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SkillsShowcase from './SkillsShowcase';

function Skil() {
    const [counterOn, setCounterOn] = useState(false);

    const skills = useMemo(() => [
        { name: "HTML5/CSS3", percentage: 90, delay: 0, icon: "🌐", color: "#FF6B6B", gradient: "linear-gradient(135deg, #FF6B6B, #4ECDC4)" },
        { name: "JavaScript", percentage: 75, delay: 200, icon: "⚡", color: "#4ECDC4", gradient: "linear-gradient(135deg, #4ECDC4, #45B7D1)" },
        { name: "Bootstrap", percentage: 90, delay: 400, icon: "🎨", color: "#45B7D1", gradient: "linear-gradient(135deg, #45B7D1, #96CEB4)" },
        { name: "ReactJs/NodeJs", percentage: 80, delay: 600, icon: "⚛️", color: "#96CEB4", gradient: "linear-gradient(135deg, #96CEB4, #FFEAA7)" }
    ], []);

    return (
        <div id="skill-section">
            {/* Enhanced Skills Counter Section */}
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="modern-skills-section">
                    <div className="skills-container">
                        <header className="skills-header">
                            <h1 className="skills-title">Skills Overview</h1>
                            <div className="skills-divider">
                                <img src={pic1} alt="decorative divider" width="150" loading="lazy" />
                            </div>
                            <p className="skills-subtitle">Proficiency levels in core technologies</p>
                        </header>
                        
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div 
                                    key={skill.name}
                                    className="skill-card-modern" 
                                    data-aos="fade-up" 
                                    data-aos-delay={skill.delay}
                                    style={{ 
                                        '--skill-color': skill.color,
                                        '--skill-gradient': skill.gradient,
                                        '--animation-delay': `${skill.delay}ms`
                                    }}
                                >
                                    <div className="skill-card-inner">
                                        <div className="skill-icon-wrapper">
                                            <div className="skill-icon-modern">
                                                <span>{skill.icon}</span>
                                            </div>
                                            <div className="skill-glow-ring"></div>
                                        </div>
                                        
                                        <div className="skill-content-modern">
                                            <div className="skill-percentage-display">
                                                <span className="percentage-number">
                                                    {counterOn && (
                                                        <CountUp 
                                                            start={0} 
                                                            end={skill.percentage} 
                                                            duration={2.5} 
                                                            delay={skill.delay / 1000} 
                                                        />
                                                    )}
                                                </span>
                                                <span className="percentage-symbol">%</span>
                                            </div>
                                            
                                            <h3 className="skill-name-modern">{skill.name}</h3>
                                            
                                            <div className="skill-progress-modern">
                                                <div className="progress-track-modern">
                                                    <div 
                                                        className="progress-fill-modern"
                                                        style={{ 
                                                            width: counterOn ? `${skill.percentage}%` : '0%',
                                                            transitionDelay: `${skill.delay}ms`
                                                        }}
                                                    >
                                                        <div className="progress-shine"></div>
                                                    </div>
                                                </div>
                                                <div className="progress-labels">
                                                    <span>Beginner</span>
                                                    <span>Expert</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="skill-background-pattern"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
            
            {/* New Comprehensive Skills Showcase */}
            <SkillsShowcase animzz="fade-up" />
        </div>
    );
}

export default React.memo(Skil);
