import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
    title = "Shubham Silyan - Full Stack Developer | React.js & Node.js Expert",
    description = "Passionate Full Stack Developer from Amritsar, Punjab. Expert in React.js, Node.js, MongoDB. Creating elegant, responsive websites with modern technologies.",
    keywords = "Shubham Silyan, Full Stack Developer, React.js, Node.js, MongoDB, Web Developer, JavaScript, Portfolio, Amritsar, Punjab, India",
    image = "/og-image.jpg",
    url = "https://shubhamsilyan.com",
    section = "home"
}) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Shubham Silyan",
        "jobTitle": "Full Stack Developer",
        "description": description,
        "url": url,
        "email": "shubham7silyan@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Amritsar",
            "addressRegion": "Punjab",
            "addressCountry": "India"
        },
        "knowsAbout": [
            "React.js", "Node.js", "MongoDB", "JavaScript", 
            "HTML5", "CSS3", "Express.js", "Full Stack Development",
            "Frontend Development", "Backend Development", "Web Design"
        ],
        "sameAs": [
            "https://github.com/shubhamsilyan",
            "https://linkedin.com/in/shubhamsilyan",
            "https://twitter.com/shubhamsilyan"
        ]
    };

    React.useEffect(() => {
        // Add additional meta tags for enhanced SEO
        const addMetaTag = (name, content) => {
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.name = name;
                document.head.appendChild(tag);
            }
            tag.content = content;
        };

        // Enhanced meta tags
        addMetaTag('application-name', 'Shubham Silyan Portfolio');
        addMetaTag('apple-mobile-web-app-title', 'Shubham Silyan');
        addMetaTag('apple-mobile-web-app-capable', 'yes');
        addMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
        addMetaTag('mobile-web-app-capable', 'yes');
        addMetaTag('msapplication-TileColor', '#d63447');
        addMetaTag('msapplication-config', '/browserconfig.xml');
        
        // Performance hints
        addMetaTag('format-detection', 'telephone=no');
        addMetaTag('referrer', 'origin-when-cross-origin');
        
        // Security headers
        addMetaTag('X-Content-Type-Options', 'nosniff');
        addMetaTag('X-Frame-Options', 'DENY');
        addMetaTag('X-XSS-Protection', '1; mode=block');
        
    }, [section]);

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Shubham Silyan" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />
            
            {/* Open Graph Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}${image}`} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Shubham Silyan Portfolio" />
            <meta property="og:locale" content="en_US" />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${url}${image}`} />
            <meta name="twitter:creator" content="@shubhamsilyan" />
            
            {/* Additional SEO Tags */}
            <meta name="geo.region" content="IN-PB" />
            <meta name="geo.placename" content="Amritsar, Punjab, India" />
            <meta name="geo.position" content="31.6340;74.8723" />
            <meta name="ICBM" content="31.6340, 74.8723" />
            
            {/* Performance and Security */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
            
            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            
            {/* Section-specific meta tags */}
            {section === 'about' && (
                <>
                    <meta property="og:type" content="profile" />
                    <meta property="profile:first_name" content="Shubham" />
                    <meta property="profile:last_name" content="Silyan" />
                </>
            )}
            
            {section === 'projects' && (
                <meta property="og:type" content="article" />
            )}
        </Helmet>
    );
};

export default SEOHead;
