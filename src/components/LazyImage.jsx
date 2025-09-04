import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
    src, 
    alt, 
    width, 
    height, 
    className = '', 
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+'
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(process.env.NODE_ENV !== 'production');
    const imgRef = useRef();

    useEffect(() => {
        // Skip intersection observer in development to prevent reload loops
        if (process.env.NODE_ENV !== 'production') {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div 
            ref={imgRef}
            className={`lazy-image-container ${className}`}
            style={{ 
                width: width || 'auto', 
                height: height || 'auto',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Placeholder */}
            {!isLoaded && (
                <img
                    src={placeholder}
                    alt=""
                    width={width}
                    height={height}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'blur(5px)',
                        transition: 'opacity 0.3s ease'
                    }}
                />
            )}
            
            {/* Actual Image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    onLoad={handleLoad}
                    loading="lazy"
                    decoding="async"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                    }}
                />
            )}
        </div>
    );
};

export default LazyImage;
