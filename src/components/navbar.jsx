import React, { useState, useEffect } from "react";
import '../index.css'

function Nav(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    // Initialize theme on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Use saved theme, or default to dark if no preference saved
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to dark
        const isDark = initialTheme === 'dark';
        
        setIsDarkMode(isDark);
        document.documentElement.setAttribute('data-theme', initialTheme);
        
        // Save to localStorage if not already saved
        if (!savedTheme) {
            localStorage.setItem('theme', initialTheme);
        }
    }, []);

    // Add scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`} id="home-section">
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="navbar-logo" data-aos={props.ani}>
                        <button 
                            onClick={scrollToTop}
                            className="logo-btn"
                            aria-label="Go to Home"
                        >
                            <span className="logo-text">S</span>
                            <div className="logo-glow"></div>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="navbar-menu">
                        <div className="nav-items">
                            <button 
                                onClick={() => scrollToSection('projects-section')}
                                className="nav-item"
                                data-aos={props.ani}
                            >
                                <span>Projects</span>
                                <div className="nav-item-bg"></div>
                            </button>
                            <button 
                                onClick={() => scrollToSection('skill-section')}
                                className="nav-item"
                                data-aos={props.ani}
                            >
                                <span>Skills</span>
                                <div className="nav-item-bg"></div>
                            </button>
                            <button 
                                onClick={scrollToTop}
                                className="nav-item brand-name"
                                data-aos={props.ani}
                            >
                                <span>Shubham Silyan<span className="accent-dot">.</span></span>
                                <div className="nav-item-bg"></div>
                            </button>
                            <button 
                                onClick={() => scrollToSection('about-section')}
                                className="nav-item"
                                data-aos={props.ani}
                            >
                                <span>About</span>
                                <div className="nav-item-bg"></div>
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact-section')}
                                className="nav-item"
                                data-aos={props.ani}
                            >
                                <span>Contact</span>
                                <div className="nav-item-bg"></div>
                            </button>
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <div className="navbar-toggle" data-aos={props.ani}>
                        <button 
                            onClick={toggleTheme}
                            className="theme-btn"
                            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                        >
                            <div className="theme-icon">
                                <div className={`icon-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
                                    {isDarkMode ? '🌙' : '☀️'}
                                </div>
                            </div>
                            <div className="theme-glow"></div>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-btn" data-aos={props.ani}>
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="hamburger"
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-content">
                    <button 
                        onClick={() => { scrollToSection('projects-section'); setIsMobileMenuOpen(false); }}
                        className="mobile-nav-item"
                    >
                        <span>Projects</span>
                    </button>
                    <button 
                        onClick={() => { scrollToSection('skill-section'); setIsMobileMenuOpen(false); }}
                        className="mobile-nav-item"
                    >
                        <span>Skills</span>
                    </button>
                    <button 
                        onClick={() => { scrollToSection('about-section'); setIsMobileMenuOpen(false); }}
                        className="mobile-nav-item"
                    >
                        <span>About</span>
                    </button>
                    <button 
                        onClick={() => { scrollToSection('contact-section'); setIsMobileMenuOpen(false); }}
                        className="mobile-nav-item"
                    >
                        <span>Contact</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default React.memo(Nav);