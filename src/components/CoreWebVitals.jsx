import React, { useEffect, useState } from 'react';

const CoreWebVitals = () => {
    const [vitals, setVitals] = useState({});

    useEffect(() => {
        // Measure Core Web Vitals
        const measureVitals = async () => {
            try {
                // Dynamic import for web-vitals
                const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
                
                const vitalsData = {};
                
                getCLS((metric) => {
                    vitalsData.cls = metric.value;
                    console.log('📊 CLS (Cumulative Layout Shift):', metric.value);
                });
                
                getFID((metric) => {
                    vitalsData.fid = metric.value;
                    console.log('📊 FID (First Input Delay):', metric.value);
                });
                
                getFCP((metric) => {
                    vitalsData.fcp = metric.value;
                    console.log('📊 FCP (First Contentful Paint):', metric.value);
                });
                
                getLCP((metric) => {
                    vitalsData.lcp = metric.value;
                    console.log('📊 LCP (Largest Contentful Paint):', metric.value);
                });
                
                getTTFB((metric) => {
                    vitalsData.ttfb = metric.value;
                    console.log('📊 TTFB (Time to First Byte):', metric.value);
                });
                
                setVitals(vitalsData);
                
                // Send vitals to analytics (optional)
                if (process.env.NODE_ENV === 'production') {
                    // You can send to Google Analytics 4 or other analytics
                    console.log('📈 Core Web Vitals measured:', vitalsData);
                }
                
            } catch (error) {
                console.log('📊 Web Vitals measurement not available');
            }
        };

        measureVitals();
    }, []);

    // Performance observer for additional metrics
    useEffect(() => {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'navigation') {
                        console.log('📊 Navigation Timing:', {
                            domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
                            loadComplete: entry.loadEventEnd - entry.loadEventStart,
                            firstByte: entry.responseStart - entry.requestStart
                        });
                    }
                    
                    if (entry.entryType === 'paint') {
                        console.log(`📊 ${entry.name}:`, entry.startTime);
                    }
                }
            });
            
            observer.observe({ entryTypes: ['navigation', 'paint'] });
            
            return () => observer.disconnect();
        }
    }, []);

    return null; // This component doesn't render anything visible
};

export default CoreWebVitals;
