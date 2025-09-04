// SEO utility functions for React components
export const generatePageTitle = (section, name = "Shubham Silyan") => {
    const titles = {
        home: `${name} - Full Stack Developer | React.js & Node.js Expert`,
        about: `About ${name} - Full Stack Developer from Amritsar, Punjab`,
        skills: `${name}'s Skills - React.js, Node.js, MongoDB Expert`,
        projects: `${name}'s Projects - Full Stack Development Portfolio`,
        contact: `Contact ${name} - Hire Full Stack Developer`
    };
    return titles[section] || titles.home;
};

export const generateMetaDescription = (section) => {
    const descriptions = {
        home: "Passionate Full Stack Developer from Amritsar, Punjab. Expert in React.js, Node.js, MongoDB. Creating elegant, responsive websites with modern technologies. Available for freelance projects.",
        about: "Learn about Shubham Silyan, a 25-year-old Full Stack Developer from Amritsar, Punjab. Passionate about creating user-friendly websites with React.js, Node.js, and modern web technologies.",
        skills: "Explore Shubham Silyan's technical skills including React.js, Node.js, MongoDB, JavaScript, HTML5, CSS3, and modern web development frameworks.",
        projects: "View Shubham Silyan's portfolio of full stack development projects showcasing expertise in React.js, Node.js, MongoDB, and responsive web design.",
        contact: "Get in touch with Shubham Silyan for web development projects. Full Stack Developer available for freelance work in React.js, Node.js, and MongoDB."
    };
    return descriptions[section] || descriptions.home;
};

export const generateStructuredData = (section, baseUrl = "https://shubhamsilyan.com") => {
    const baseData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Shubham Silyan",
        "jobTitle": "Full Stack Developer",
        "url": baseUrl,
        "email": "shubham7silyan@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Amritsar",
            "addressRegion": "Punjab",
            "addressCountry": "India"
        },
        "knowsAbout": [
            "React.js", "Node.js", "MongoDB", "JavaScript", 
            "HTML5", "CSS3", "Express.js", "Full Stack Development"
        ],
        "sameAs": [
            "https://github.com/shubhamsilyan",
            "https://linkedin.com/in/shubhamsilyan",
            "https://twitter.com/shubhamsilyan"
        ]
    };

    if (section === 'projects') {
        return {
            ...baseData,
            "@type": ["Person", "CreativeWork"],
            "creator": baseData,
            "about": "Full Stack Development Projects"
        };
    }

    return baseData;
};

export const optimizeImages = () => {
    // Add intersection observer for lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
};

export const preloadCriticalResources = () => {
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontPreload.as = 'style';
    fontPreload.onload = function() { this.rel = 'stylesheet'; };
    document.head.appendChild(fontPreload);

    // Preload critical images
    const criticalImages = [
        '/images/about_me_pic2.jpg',
        '/images/divider.png'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
    });
};

export const trackPageView = (page) => {
    // Google Analytics 4 tracking
    if (window.gtag && process.env.NODE_ENV === 'production') {
        window.gtag('config', 'G-XXXXXXXXXX', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: `/${page}`
        });
        
        // Track custom event for section views
        window.gtag('event', 'page_view', {
            event_category: 'Portfolio Navigation',
            event_label: page,
            page_title: document.title
        });
    }
    
    console.log(`📈 Page view tracked: ${page}`);
};

export const trackContactForm = (formData) => {
    if (window.gtag && process.env.NODE_ENV === 'production') {
        window.gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Submission',
            value: 1
        });
    }
    console.log('📧 Contact form submission tracked');
};

export const trackProjectView = (projectName) => {
    if (window.gtag && process.env.NODE_ENV === 'production') {
        window.gtag('event', 'project_view', {
            event_category: 'Portfolio',
            event_label: projectName,
            value: 1
        });
    }
    console.log(`🔍 Project view tracked: ${projectName}`);
};

export const trackSkillsView = () => {
    if (window.gtag && process.env.NODE_ENV === 'production') {
        window.gtag('event', 'skills_view', {
            event_category: 'Portfolio',
            event_label: 'Skills Section',
            value: 1
        });
    }
    console.log('🛠️ Skills section view tracked');
};
