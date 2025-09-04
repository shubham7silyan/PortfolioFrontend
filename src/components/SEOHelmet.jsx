import React from 'react';

const SEOHelmet = ({ 
    title = "Shubham Silyan - Full Stack Developer | React.js & Node.js Expert",
    description = "Passionate Full Stack Developer from Amritsar, Punjab. Expert in React.js, Node.js, MongoDB. Creating elegant, responsive websites with modern technologies.",
    keywords = "Shubham Silyan, Full Stack Developer, React.js, Node.js, MongoDB, Web Developer, JavaScript, Portfolio, Amritsar, Punjab, India",
    image = "/og-image.jpg",
    url = "https://shubhamsilyan.com",
    section = "home"
}) => {
    React.useEffect(() => {
        // Update document title
        document.title = title;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }
        
        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', keywords);
        
        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = url;
        
        // Update Open Graph tags
        const updateOGTag = (property, content) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };
        
        updateOGTag('og:title', title);
        updateOGTag('og:description', description);
        updateOGTag('og:image', `${url}${image}`);
        updateOGTag('og:url', url);
        
        // Update Twitter Card tags
        const updateTwitterTag = (name, content) => {
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };
        
        updateTwitterTag('twitter:title', title);
        updateTwitterTag('twitter:description', description);
        updateTwitterTag('twitter:image', `${url}${image}`);
        
    }, [title, description, keywords, image, url]);

    return null; // This component doesn't render anything
};

export default SEOHelmet;
