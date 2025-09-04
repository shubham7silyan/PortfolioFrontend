import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ProjectShowcase.css';

// Import images
import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import image6 from '../images/6.png';

// Project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Loanbaazar",
    description: "MERN-based loan comparison and application platform with eligibility checker, EMI calculator, and admin panel. Deployed on custom domain with secure backend integration.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Railway", "Hostinger"],
    image: image1,
    liveDemo: "https://loanbaazarfrontend-production.up.railway.app/",
    github: "https://github.com/shubham7silyan/loanbaazarfrontend",
    role: "Full-Stack Developer",
    keyFeatures: [
      "Loan eligibility checker & EMI calculator",
      "JWT-secured authentication",
      "Bank–borrower integration system",
      "Custom admin panel",
      "Deployed with Railway but later would be on hostinger"
    ]
  },
  {
    id: 2,
    title: "Agent Management System",
    description: "Full-stack MERN application for managing agents with CSV/XLSX uploads and intelligent data allocation algorithm. Includes secure authentication and admin dashboard.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "XLSX"],
    image: image2,
    liveDemo: "https://helpdeskfrontend1.onrender.com",
    github: "https://github.com/shubham7silyan/HelpDeskFrontend",
    role: "Full-Stack Developer",
    keyFeatures: [
      "CSV/XLSX bulk data upload",
      "Automated agent allocation",
      "JWT-based role authentication",
      "Admin dashboard for monitoring",
      "Scalable MERN architecture"
    ]
  },
  {
    id: 3,
    title: "Shubh Stock Advisor",
    description: "MERN-based stock advisory platform providing insights, recommendations, and portfolio tracking with secure backend and role-based access.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: image3,
    liveDemo: "https://stock-recommendation-frontend-production.up.railway.app/",
    github: "https://github.com/shubham7silyan/stock-recommendation-frontend",
    role: "Full-Stack Developer",
    keyFeatures: [
      "Portfolio management & stock tracking",
      "Custom insights & recommendations",
      "Role-based access with JWT",
      "Interactive and responsive UI",
      "Secure backend API"
    ]
  },
  {
    id: 4,
    title: "WatchParty",
    description: "Collaborative streaming application where users can watch movies and shows together in real time with synchronized playback and chat support. Currently in active development.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: image4,
    liveDemo: "#",
    github: "#",
    role: "Full-Stack Developer",
    keyFeatures: [
      "Real-time synchronized video playback",
      "Group chat integration",
      "Room-based sessions",
      "Responsive design for all devices",
      "Scalable backend with Socket.io"
    ],
    status: "In Development"
  },
  {
    id: 5,
    title: "Webflow Landing Page",
    description: "Responsive Webflow-inspired landing page converted from Figma design using HTML, CSS, and JavaScript. Optimized for SEO and performance.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: image5,
    liveDemo: "https://webflowwebsite.netlify.app/",
    github: "https://github.com/shubham7silyan/WebflowWebsite",
    role: "Frontend Developer",
    keyFeatures: [
      "Pixel-perfect Figma to code conversion",
      "this is my first project so not responsive in mobile",
      "Optimized images & performance",
      "SEO-friendly structure",
      "Cross-browser compatibility"
    ]
  },
  {
    id: 6,
    title: "Smart Helpdesk (WEXA AI)",
    description: "AI-powered helpdesk built on MERN stack with intelligent triage, automated ticket routing, and agent-assist features.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "JWT"],
    image: image6,
    liveDemo: "https://helpdeskfrontend-production.up.railway.app/login",
    github: "https://github.com/shubham7silyan/HelpDeskFrontend",
    role: "Full-Stack + AI Integrator",
    keyFeatures: [
      "AI-driven ticket triage",
      "Automated routing to right agent",
      "Real-time chat support",
      "Analytics dashboard",
      "JWT-based authentication system"
    ]
  }
];

function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Check theme on mount and listen for changes
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(theme === 'dark' || (!theme && prefersDark));
    };

    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-theme'] 
    });

    return () => observer.disconnect();
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < projects.length - 1) {
      nextProject();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevProject();
    }
  };

  const nextProject = () => {
    if (currentIndex === projects.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevProject = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="projects-section" id="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Swipe or click to explore my work</p>
      </div>
      
      <div className="deck-container">
        <div className="cards-stack">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'prev' : ''} ${index > currentIndex ? 'next' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                zIndex: projects.length - Math.abs(index - currentIndex),
                transform: `
                  translateX(${(index - currentIndex) * 20}px) 
                  translateY(${Math.abs(index - currentIndex) * -10}px) 
                  scale(${1 - Math.abs(index - currentIndex) * 0.05})
                  rotateZ(${(index - currentIndex) * -5}deg)
                `,
                backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'
              }}
            >
              <div className="card-content">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.liveDemo === "#" ? (
                        <span className="demo-link">Coming Soon</span>
                      ) : (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="demo-link">
                          Live Demo
                        </a>
                      )}
                      {project.github === "#" ? (
                        <span className="github-link">Coming Soon</span>
                      ) : (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-role">{project.role}</p>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="tech-stack">
                    <h4>Tech Stack:</h4>
                    <div className="tech-tags">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="key-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  {project.status && (
                    <div className="project-status">
                      <p>Status: {project.status}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="project-controls">
          <button 
            onClick={prevProject} 
            className="control-btn prev-btn"
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <button 
            onClick={nextProject} 
            className="control-btn next-btn"
            disabled={currentIndex === projects.length - 1}
          >
            →
          </button>
        </div>
      </div>
      
      <div className="projects-instructions">
        <p>💡 Swipe left/right or use controls to navigate • {currentIndex + 1} of {projects.length}</p>
      </div>
    </div>
  );
}

export default ProjectShowcase;
