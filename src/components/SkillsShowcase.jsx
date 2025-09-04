import React, { useState, useEffect, useRef } from 'react';
import './SkillsShowcase.css';

const SkillsShowcase = ({ animzz }) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const containerRef = useRef(null);
    const particlesRef = useRef([]);

    const skillCategories = [
        {
            title: "Frontend Development",
            icon: "🎨",
            color: "#FF6B6B",
            gradient: "linear-gradient(135deg, #FF6B6B, #4ECDC4)",
            skills: [
                { name: "React.js", level: 95, description: "Core frontend framework", icon: "⚛️" },
                { name: "React Router DOM", level: 90, description: "Routing & navigation", icon: "🛣️" },
                { name: "Vite / CRA", level: 85, description: "Development/build tools", icon: "⚡" },
                { name: "Tailwind CSS", level: 92, description: "Utility-first styling", icon: "🎨" },
                { name: "Vanilla CSS / SCSS", level: 88, description: "Custom styling", icon: "🎭" },
                { name: "Framer Motion", level: 80, description: "Animations & transitions", icon: "🎬" },
                { name: "Zustand", level: 85, description: "Lightweight state management", icon: "🐻" },
                { name: "React Hook Form", level: 87, description: "Form validation", icon: "📝" },
                { name: "Axios / Fetch API", level: 90, description: "API communication", icon: "🌐" },
                { name: "Responsive Design", level: 95, description: "Mobile-first approach", icon: "📱" },
                { name: "SEO Optimization", level: 85, description: "Semantic HTML, metadata", icon: "🔍" }
            ]
        },
        {
            title: "Backend Development",
            icon: "⚙️",
            color: "#4ECDC4",
            gradient: "linear-gradient(135deg, #4ECDC4, #45B7D1)",
            skills: [
                { name: "Node.js", level: 92, description: "Server-side runtime", icon: "🟢" },
                { name: "Express.js", level: 90, description: "REST API framework", icon: "🚀" },
                { name: "Mongoose", level: 88, description: "MongoDB ODM", icon: "🍃" },
                { name: "JWT Authentication", level: 85, description: "Secure login & tokens", icon: "🔐" },
                { name: "Bcrypt", level: 87, description: "Password hashing", icon: "🛡️" },
                { name: "Express Validator", level: 83, description: "Input validation", icon: "✅" },
                { name: "Helmet", level: 80, description: "Security middleware", icon: "⛑️" },
                { name: "Rate Limiting", level: 82, description: "API protection", icon: "🚦" },
                { name: "CORS Configuration", level: 85, description: "Secure cross-origin", icon: "🌍" }
            ]
        },
        {
            title: "Databases & Storage",
            icon: "🗄️",
            color: "#45B7D1",
            gradient: "linear-gradient(135deg, #45B7D1, #96CEB4)",
            skills: [
                { name: "MongoDB", level: 90, description: "NoSQL database", icon: "🍃" },
                { name: "MongoDB Atlas", level: 85, description: "Cloud DB hosting", icon: "☁️" },
                { name: "Redis", level: 78, description: "Caching & queue storage", icon: "🔴" },
                { name: "CSV/XLSX Processing", level: 82, description: "Data import/export", icon: "📊" },
                { name: "File Upload Handling", level: 85, description: "Attachments & URLs", icon: "📎" }
            ]
        },
        {
            title: "AI & Automation",
            icon: "🤖",
            color: "#96CEB4",
            gradient: "linear-gradient(135deg, #96CEB4, #FFEAA7)",
            skills: [
                { name: "OpenAI API", level: 80, description: "LLM Integration", icon: "🧠" },
                { name: "Keyword Classification", level: 75, description: "AI categorization", icon: "🏷️" },
                { name: "Knowledge Base Retrieval", level: 78, description: "Full-text search", icon: "📚" },
                { name: "Automated Decision-Making", level: 73, description: "Auto-close logic", icon: "🎯" }
            ]
        },
        {
            title: "Real-Time & Collaboration",
            icon: "⚡",
            color: "#FFEAA7",
            gradient: "linear-gradient(135deg, #FFEAA7, #FDCB6E)",
            skills: [
                { name: "Socket.io", level: 85, description: "Real-time chat & sync", icon: "💬" },
                { name: "BullMQ", level: 78, description: "Queue management", icon: "📋" },
                { name: "WebSockets", level: 82, description: "Live communication", icon: "🔗" }
            ]
        },
        {
            title: "DevOps & Deployment",
            icon: "🚀",
            color: "#FDCB6E",
            gradient: "linear-gradient(135deg, #FDCB6E, #E17055)",
            skills: [
                { name: "Docker & Compose", level: 80, description: "Containerized environment", icon: "🐳" },
                { name: "Railway", level: 85, description: "Backend hosting", icon: "🚂" },
                { name: "Firebase Hosting", level: 82, description: "Frontend hosting", icon: "🔥" },
                { name: "Netlify", level: 88, description: "Static site deployment", icon: "🌐" },
                { name: "Render", level: 83, description: "Backend deployment", icon: "🎭" },
                { name: "Hostinger", level: 85, description: "Domain integration", icon: "🏠" },
                { name: "CI/CD Basics", level: 75, description: "Automated deployment", icon: "🔄" }
            ]
        },
        {
            title: "Testing & Debugging",
            icon: "🔧",
            color: "#E17055",
            gradient: "linear-gradient(135deg, #E17055, #A29BFE)",
            skills: [
                { name: "Postman", level: 90, description: "API testing", icon: "📮" },
                { name: "Console & Logging", level: 88, description: "Frontend/backend debugging", icon: "🖥️" },
                { name: "Winston & Morgan", level: 82, description: "Structured logging", icon: "📝" }
            ]
        },
        {
            title: "Project Management",
            icon: "📊",
            color: "#A29BFE",
            gradient: "linear-gradient(135deg, #A29BFE, #6C5CE7)",
            skills: [
                { name: "Git & GitHub", level: 92, description: "Version control", icon: "🐙" },
                { name: "Project Documentation", level: 85, description: "PDF, README", icon: "📄" },
                { name: "Agile Workflows", level: 80, description: "Modular development", icon: "🔄" }
            ]
        },
        {
            title: "UI/UX Design",
            icon: "🎨",
            color: "#6C5CE7",
            gradient: "linear-gradient(135deg, #6C5CE7, #FF6B6B)",
            skills: [
                { name: "Figma to Code", level: 88, description: "Pixel-perfect conversion", icon: "🎯" },
                { name: "Component Architecture", level: 90, description: "Reusable components", icon: "🧩" },
                { name: "User-Centric Design", level: 85, description: "Dashboards & forms", icon: "👤" }
            ]
        }
    ];

    useEffect(() => {
        // Create floating particles
        const createParticles = () => {
            const container = containerRef.current;
            if (!container) return;

            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'floating-particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                particle.style.animationDuration = `${3 + Math.random() * 4}s`;
                container.appendChild(particle);
                particlesRef.current.push(particle);
            }
        };

        createParticles();

        return () => {
            particlesRef.current.forEach(particle => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            });
            particlesRef.current = [];
        };
    }, []);

    const getSkillBarWidth = (level) => {
        return `${level}%`;
    };

    const getSkillColor = (level) => {
        if (level >= 90) return '#10b981'; // Green
        if (level >= 80) return '#3b82f6'; // Blue
        if (level >= 70) return '#f59e0b'; // Yellow
        return '#ef4444'; // Red
    };

    return (
        <div className="skills-showcase-container" ref={containerRef}>
            <div className="skills-showcase" data-aos={animzz}>
                <div className="skills-header">
                    <h2 className="skills-title">Technical Expertise</h2>
                    <p className="skills-subtitle">Comprehensive full-stack development capabilities</p>
                </div>

                <div className="skills-navigation">
                    {skillCategories.map((category, index) => (
                        <button
                            key={index}
                            className={`nav-pill ${activeCategory === index ? 'active' : ''}`}
                            onClick={() => setActiveCategory(index)}
                            style={{
                                '--category-color': category.color,
                                '--category-gradient': category.gradient
                            }}
                        >
                            <span className="nav-icon">{category.icon}</span>
                            <span className="nav-text">{category.title}</span>
                        </button>
                    ))}
                </div>

                <div className="skills-content">
                    <div className="category-header">
                        <div className="category-icon-wrapper">
                            <div 
                                className="category-icon"
                                style={{ background: skillCategories[activeCategory].gradient }}
                            >
                                {skillCategories[activeCategory].icon}
                            </div>
                        </div>
                        <div className="category-info">
                            <h3 className="category-title">{skillCategories[activeCategory].title}</h3>
                            <p className="category-count">
                                {skillCategories[activeCategory].skills.length} Technologies
                            </p>
                        </div>
                    </div>

                    <div className="skills-grid">
                        {skillCategories[activeCategory].skills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-card"
                                onMouseEnter={() => setHoveredSkill(index)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                style={{
                                    '--skill-color': getSkillColor(skill.level),
                                    '--category-gradient': skillCategories[activeCategory].gradient,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="skill-header">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <div className="skill-info">
                                        <h4 className="skill-name">{skill.name}</h4>
                                        <p className="skill-description">{skill.description}</p>
                                    </div>
                                    <div className="skill-level-badge">{skill.level}%</div>
                                </div>
                                
                                <div className="skill-progress">
                                    <div className="progress-track">
                                        <div 
                                            className="progress-fill"
                                            style={{
                                                width: hoveredSkill === index ? getSkillBarWidth(skill.level) : '0%',
                                                background: getSkillColor(skill.level)
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="skill-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-stats">
                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Technologies</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">9</div>
                        <div className="stat-label">Categories</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">85%</div>
                        <div className="stat-label">Avg Proficiency</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsShowcase;
