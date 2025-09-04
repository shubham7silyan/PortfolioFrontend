import React, { useEffect } from 'react';

const GoogleAnalytics = ({ trackingId = 'G-XXXXXXXXXX' }) => {
    useEffect(() => {
        // Initialize Google Analytics
        const initGA = () => {
            // Create gtag script
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
            document.head.appendChild(script);

            // Initialize gtag function
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', trackingId, {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
            });
        };

        // Only initialize in production
        if (process.env.NODE_ENV === 'production' && trackingId !== 'G-XXXXXXXXXX') {
            initGA();
        }
    }, [trackingId]);

    // Track custom events
    const trackEvent = (action, category, label, value) => {
        if (window.gtag && process.env.NODE_ENV === 'production') {
            window.gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }
    };

    // Track page views
    const trackPageView = (page_path) => {
        if (window.gtag && process.env.NODE_ENV === 'production') {
            window.gtag('config', trackingId, {
                page_path: page_path,
                page_title: document.title,
                page_location: window.location.href
            });
        }
    };

    // Expose tracking functions globally
    useEffect(() => {
        window.trackEvent = trackEvent;
        window.trackPageView = trackPageView;
    }, []);

    return null; // This component doesn't render anything
};

export default GoogleAnalytics;
