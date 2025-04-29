'use client';

import { useState, useEffect, useMemo } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95');
  
  // Set the fixed expiration date - example: May 1, 2025 at 23:59:59
  const expirationDate = useMemo(() => new Date('2025-05-15T23:59:59'), []);
  
  // Unique ID for this specific popup campaign
  const popupId = 'queenlens-promo-popup-spring202505';

  useEffect(() => {
    // Check if popup was previously closed
    const popupClosed = typeof window !== 'undefined' && localStorage.getItem(popupId) === 'closed';
    
    let showTimer: NodeJS.Timeout;
    if (!popupClosed) {
      // Short delay before showing to allow for animation
      showTimer = setTimeout(() => {
        setVisible(true);
        setAnimationClass('opacity-100 scale-100');
      }, 500);
    }

    // Update countdown timer every second
    const timer = setInterval(() => {
      const now = new Date();
      const timeDiff = expirationDate.getTime() - now.getTime();
      
      if (timeDiff <= 0) {
        clearInterval(timer);
        closePopup();
        return;
      }
      
      // Calculate time remaining
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(timer);
    };
  }, [expirationDate]);

  const closePopup = () => {
    setAnimationClass('opacity-0 scale-95');
    // Store in localStorage that this popup has been closed
    if (typeof window !== 'undefined') {
      localStorage.setItem(popupId, 'closed');
    }
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  // Calculate percentage of time elapsed for progress bar
  const totalDuration = expirationDate.getTime() - new Date('2025-04-21T00:00:00').getTime(); // Starting from today
  const elapsed = expirationDate.getTime() - new Date().getTime();
  const percentRemaining = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm transition-opacity duration-300">
      <div className={`bg-gradient-to-br from-white to-gray-100 p-4 rounded-xl shadow-2xl text-center m-5 max-w-sm lg:max-w-md max-h-min relative transition-all duration-300 transform ${animationClass}`}>
        {/* Close button */}
        <button 
          onClick={closePopup} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors duration-200"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        
        {/* Content with animation */}
        <div className="w-fit py-1 px-2 mb-1 bg-amber-500 text-gray-950 rounded-full text-xs font-semibold ">LIMITED TIME OFFER</div>
        <div className=" flex justify-center items-center mb-1">
                            <Image
                              src="https://www.queenlens.lk/images/logo/smLogo.png"
                              alt="Queenlens Logo"
                              width={256}
                              height={256}
                            />
                          </div>
        
        
        <p className="text-gray-700 mb-4 text-lg">
          <span className="text-2xl font-bold text-gray-900 mx-1">Book your photoshoot now and get 10% OFF!</span>
        </p>
        
        {/* Countdown timer with visual indicator */}
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-2">Offer expires on:</div>
          <div className="flex justify-center gap-2 mb-3">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 text-gray-900 px-3 py-2 rounded-lg font-mono font-bold min-w-12">
                {timeRemaining.days}
              </div>
              <span className="text-xs mt-1 text-gray-500">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 text-gray-900 px-3 py-2 rounded-lg font-mono font-bold min-w-12">
                {timeRemaining.hours.toString().padStart(2, '0')}
              </div>
              <span className="text-xs mt-1 text-gray-500">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 text-gray-800 px-3 py-2 rounded-lg font-mono font-bold min-w-12">
                {timeRemaining.minutes.toString().padStart(2, '0')}
              </div>
              <span className="text-xs mt-1 text-gray-500">Mins</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 text-gray-800 px-3 py-2 rounded-lg font-mono font-bold min-w-12">
                {timeRemaining.seconds.toString().padStart(2, '0')}
              </div>
              <span className="text-xs mt-1 text-gray-500">Secs</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-gray-800 to-indigo-950 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${percentRemaining}%` }}
            ></div>
          </div>
        </div>
        
        {/* Call to action button */}
        <Link
        
          href="/contact?refcode=save10"
          onClick={(e) => {
            e.preventDefault();
            closePopup();
            window.location.href = '/contact?refcode=save10';
          }}
          className="inline-block bg-gradient-to-r from-gray-900 to-indigo-900 hover:from-gray-800 hover:to-indigo-800 text-white px-6 py-3 rounded-full font-bold shadow-lg transform transition duration-200 hover:scale-105 uppercase tracking-wide"
        >
          Claim Offer Now
        </Link>
        
        <p className="mt-4 text-xs text-gray-500">
          *Offer ends May 15, 2025 at 11:59 PM
        </p>
      </div>
    </div>
  );
}