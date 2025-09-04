import React, { useEffect } from 'react';
import SEOHelmet from './SEOHelmet';
import CoreWebVitals from './CoreWebVitals';
import { preloadCriticalResources, optimizeImages, trackPageView } from '../utils/seoUtils';

const SEOOptimizer = ({ section = 'home', children }) => {
    useEffect(() => {
        // Preload critical resources
        preloadCriticalResources();
        
        // Optimize images
        optimizeImages();
        
        // Track page view
        trackPageView(section);
        
        // Enhanced schema markup with multiple types
        const addEnhancedSchemaMarkup = () => {
            const personSchema = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Shubham Silyan",
                "jobTitle": "Full Stack Developer",
                "description": "Passionate Full Stack Developer specializing in React.js, Node.js, and MongoDB",
                "url": "https://shubhamsilyan.com",
                "email": "shubham7silyan@gmail.com",
                "telephone": "+91-XXXXXXXXXX",
                "image": "https://shubhamsilyan.com/images/about_me_pic2.jpg",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Amritsar",
                    "addressRegion": "Punjab",
                    "addressCountry": "India",
                    "postalCode": "143001"
                },
                "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name": "Educational Institution"
                },
                "knowsAbout": [
                    "React.js", "Node.js", "MongoDB", "JavaScript", 
                    "HTML5", "CSS3", "Express.js", "Full Stack Development",
                    "Frontend Development", "Backend Development", "Database Design",
                    "RESTful APIs", "Git", "Responsive Design"
                ],
                "sameAs": [
                    "https://github.com/shubham7silyan",
                    "https://linkedin.com/in/shubhamsilyan",
                    "https://twitter.com/shubhamsilyan"
                ],
                "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance Developer"
                }
            };

            const websiteSchema = {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Shubham Silyan Portfolio",
                "url": "https://shubhamsilyan.com",
                "description": "Professional portfolio of Shubham Silyan, Full Stack Developer",
                "author": {
                    "@type": "Person",
                    "name": "Shubham Silyan"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://shubhamsilyan.com/?search={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            };

            const professionalServiceSchema = {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Shubham Silyan - Full Stack Development Services",
                "description": "Professional web development services specializing in React.js, Node.js, and MongoDB",
                "provider": {
                    "@type": "Person",
                    "name": "Shubham Silyan"
                },
                "areaServed": {
                    "@type": "Place",
                    "name": "India"
                },
                "serviceType": "Web Development",
                "url": "https://shubhamsilyan.com"
            };

            // Combine all schemas
            const combinedSchema = {
                "@context": "https://schema.org",
                "@graph": [personSchema, websiteSchema, professionalServiceSchema]
            };

            let scriptTag = document.getElementById('enhanced-schema-markup');
            if (!scriptTag) {
                scriptTag = document.createElement('script');
                scriptTag.id = 'enhanced-schema-markup';
                scriptTag.type = 'application/ld+json';
                document.head.appendChild(scriptTag);
            }
            scriptTag.textContent = JSON.stringify(combinedSchema);
        };

        // Add breadcrumb schema
        const addBreadcrumbSchema = () => {
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://shubhamsilyan.com"
                    }
                ]
            };

            if (section !== 'home') {
                const sectionNames = {
                    about: 'About',
                    skills: 'Skills',
                    projects: 'Projects',
                    contact: 'Contact'
                };

                breadcrumbSchema.itemListElement.push({
                    "@type": "ListItem",
                    "position": 2,
                    "name": sectionNames[section] || section,
                    "item": `https://shubhamsilyan.com/#${section}-section`
                });
            }

            let breadcrumbScript = document.getElementById('breadcrumb-schema');
            if (!breadcrumbScript) {
                breadcrumbScript = document.createElement('script');
                breadcrumbScript.id = 'breadcrumb-schema';
                breadcrumbScript.type = 'application/ld+json';
                document.head.appendChild(breadcrumbScript);
            }
            breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
        };

        // Add FAQ schema for common questions
        const addFAQSchema = () => {
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What technologies does Shubham Silyan specialize in?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Shubham Silyan specializes in React.js, Node.js, MongoDB, JavaScript, HTML5, CSS3, Express.js, and full stack web development."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where is Shubham Silyan located?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Shubham Silyan is based in Amritsar, Punjab, India and available for remote work worldwide."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What services does Shubham Silyan offer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Shubham Silyan offers full stack web development, frontend development with React.js, backend development with Node.js, database design with MongoDB, and responsive web design services."
                        }
                    }
                ]
            };

            let faqScript = document.getElementById('faq-schema');
            if (!faqScript) {
                faqScript = document.createElement('script');
                faqScript.id = 'faq-schema';
                faqScript.type = 'application/ld+json';
                document.head.appendChild(faqScript);
            }
            faqScript.textContent = JSON.stringify(faqSchema);
        };

        addEnhancedSchemaMarkup();
        addBreadcrumbSchema();
        addFAQSchema();

        // Add performance optimizations
        const optimizePerformance = () => {
            // Lazy load non-critical CSS
            const loadCSS = (href) => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                link.media = 'print';
                link.onload = function() { this.media = 'all'; };
                document.head.appendChild(link);
            };

            // Preconnect to external domains
            const preconnectDomains = [
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com',
                'https://cdnjs.cloudflare.com'
            ];

            preconnectDomains.forEach(domain => {
                const link = document.createElement('link');
                link.rel = 'preconnect';
                link.href = domain;
                if (domain.includes('gstatic')) {
                    link.crossOrigin = 'anonymous';
                }
                document.head.appendChild(link);
            });
        };

        optimizePerformance();

    }, [section]);

    return (
        <>
            <SEOHelmet section={section} />
            <CoreWebVitals />
            {children}
        </>
    );
};

export default SEOOptimizer;
