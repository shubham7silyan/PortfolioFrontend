import React, { Suspense, lazy } from 'react';

// Lazy load heavy components
const LazyProjectShowcase = lazy(() => import('./ProjectShowcase'));
const LazyOptimizedVanta = lazy(() => import('./OptimizedVanta'));

// Loading fallback component
const LoadingFallback = ({ height = '200px' }) => (
    <div 
        style={{ 
            height, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite'
        }}
    >
        <style>
        {`
            @keyframes loading {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
            }
        `}
        </style>
        <span style={{ color: '#666', fontSize: '14px' }}>Loading...</span>
    </div>
);

// Performance-optimized component wrapper
const PerformanceOptimizer = ({ children, enableLazyLoading = true }) => {
    // Skip all DOM manipulation in development to prevent reload loops
    React.useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            return;
        }

        // Only run optimizations in production
        const optimizeImages = () => {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                }
                if (!img.hasAttribute('decoding')) {
                    img.setAttribute('decoding', 'async');
                }
            });
        };

        optimizeImages();
    }, []);

    if (!enableLazyLoading) {
        return <>{children}</>;
    }

    return (
        <Suspense fallback={<LoadingFallback />}>
            {children}
        </Suspense>
    );
};

// Export lazy components for use in main app
export { LazyProjectShowcase, LazyOptimizedVanta, LoadingFallback };
export default PerformanceOptimizer;
