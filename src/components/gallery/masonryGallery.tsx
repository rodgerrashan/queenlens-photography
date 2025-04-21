'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the masonry components to avoid SSR issues
// This is important for Next.js to prevent server-side rendering issues with the library
const ResponsiveMasonry = dynamic(
  () => import('react-responsive-masonry').then(mod => mod.ResponsiveMasonry),
  { ssr: false }
);

const Masonry = dynamic(
  () => import('react-responsive-masonry').then(mod => mod.default),
  { ssr: false }
);

// Placeholder component to show while masonry components are loading
const LoadingPlaceholder = () => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {Array(8).fill(0).map((_, i) => (
      <div key={i} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
    ))}
  </div>
);


interface GalleryImage {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL: string;
}


interface MasonryGalleryProps {
  images: GalleryImage[];
  columnsCountBreakPoints: { [key: number]: number };
  gapSize: number;
  animateLoad: boolean;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images, columnsCountBreakPoints, gapSize, animateLoad }) => {


  const [loadedImages, setLoadedImages] = useState<Record<string | number, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);

  // Handle component mounting - only render masonry on client side
  useEffect(() => {
    setIsMounted(true);
    
    // Check if images array is ready with proper structure
    const isValid = Array.isArray(images) && images.every(img => 
      img && typeof img === 'object' && img.src && 
      (img.width !== undefined) && (img.height !== undefined)
    );
    
    setImagesReady(isValid);
  }, [images]);

  // Track when each image loads
  const handleImageLoad = (imageId: number | string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  // Don't render anything during SSR
  if (!isMounted) {
    return <LoadingPlaceholder />;
  }

  // Safety check for images array
  if (!imagesReady) {
    return (
      <div className="p-4 text-red-500 bg-red-100 rounded">
        Invalid image data. Each image must have src, width, and height properties.
      </div>
    );
  }

  return (
    <div className='min-h-screen p-4'>
      {images.length > 0 && (
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter={`${gapSize}px`}>
            {images.map((image, index) => {
              const imageId = image.id || `image-${index}`;
              const isLoaded = loadedImages[imageId] || !animateLoad;
              
              return (
                <div 
                  key={imageId}
                  className="relative overflow-hidden rounded-lg transition-all duration-700"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt || ''}
                    width={image.width || 600}
                    height={image.height || 1200}
                    className="w-full h-auto"
                    placeholder={image.blurDataURL ? "blur" : "empty"}
                    blurDataURL={image.blurDataURL}
                    onLoad={() => handleImageLoad(imageId)}
                    priority={index < 8} // Load first few images with priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </div>
  );
};

export default MasonryGallery;