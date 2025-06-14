"use client";
const QueenlensGalleryUpdate = () => {
  return (
    <div className=" bg-gray-50 py-5">
      <div
        className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl relative flex flex-col items-center justify-center rounded-xl mx-auto my-1 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url(https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '200px'
        }}
      >
        <div className="relative z-10 text-white text-center px-6 py-6 sm:py-8">
          <h1 className="text-xl sm:text-2xl font-bold mb-3">
            Massive Gallery Update Coming Soon
          </h1>
          <p className="mt-3 max-w-lg mx-auto text-gray-200 leading-relaxed text-sm">
            Get ready for an incredible expansion of our photography collection! We&apos;re adding hundreds of stunning new images across all categories - portraits, landscapes, events, and exclusive behind-the-scenes content.
          </p>
          
          <div className="mt-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white bg-opacity-20 text-white font-semibold text-xs tracking-wide animate-bounce">
              ✨ COMING SOON ✨
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueenlensGalleryUpdate;