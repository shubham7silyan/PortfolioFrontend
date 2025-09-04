import React, { memo, useMemo, useCallback, lazy, Suspense } from 'react';

// Lazy load heavy components
const LazyContactForm = lazy(() => import('./ContactForm'));
const LazyProjectGallery = lazy(() => import('./ProjectGallery'));

// Memoized Image Component with WebP support and lazy loading
const OptimizedImage = memo(({ src, alt, className, width, height }) => {
    const webpSrc = useMemo(() => {
        if (src.endsWith('.jpg') || src.endsWith('.png')) {
            return src.replace(/\.(jpg|png)$/i, '.webp');
        }
        return src;
    }, [src]);

    return (
        <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img 
                src={src}
                alt={alt}
                className={className}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
            />
        </picture>
    );
});

// Memoized Contact Form with optimized validation
const ContactForm = memo(() => {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Message: ''
    });

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                setFormData({ FirstName: '', LastName: '', Email: '', Message: '' });
                // Show success message
            }
        } catch (error) {
            console.error('Contact form error:', error);
        }
    }, [formData]);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                placeholder="First Name"
                required
            />
            <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
            />
            <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                placeholder="Your Message"
                required
            />
            <button type="submit">Send Message</button>
        </form>
    );
});

// Performance monitoring hook
const usePerformanceMonitor = () => {
    const [metrics, setMetrics] = useState(null);

    const measurePerformance = useCallback(() => {
        if ('performance' in window) {
            const navigation = performance.getEntriesByType('navigation')[0];
            const paint = performance.getEntriesByType('paint');
            
            setMetrics({
                loadTime: navigation.loadEventEnd - navigation.loadEventStart,
                domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
                firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime
            });
        }
    }, []);

    useEffect(() => {
        measurePerformance();
    }, [measurePerformance]);

    return metrics;
};

// Optimized App Component
const OptimizedApp = memo(() => {
    const performanceMetrics = usePerformanceMonitor();

    return (
        <div className="app">
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <LazyContactForm />
                <LazyProjectGallery />
            </Suspense>
            
            {process.env.NODE_ENV === 'development' && performanceMetrics && (
                <div className="performance-metrics">
                    <h4>Performance Metrics</h4>
                    <p>Load Time: {performanceMetrics.loadTime}ms</p>
                    <p>DOM Ready: {performanceMetrics.domContentLoaded}ms</p>
                    <p>First Paint: {performanceMetrics.firstPaint}ms</p>
                </div>
            )}
        </div>
    );
});

export { OptimizedImage, ContactForm, usePerformanceMonitor, OptimizedApp };
