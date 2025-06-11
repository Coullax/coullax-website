'use client';

import React, { useEffect, useState } from 'react';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            // Add a small delay before showing the banner for better UX
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleClose = (choice: 'accepted' | 'rejected') => {
        setIsClosing(true);
        // Store the user's choice
        localStorage.setItem('cookieConsent', choice);
        
        // Add a small delay before hiding the banner for smooth animation
        setTimeout(() => {
            setShowBanner(false);
            setIsClosing(false);
        }, 300);
    };

    const handleAccept = () => {
        handleClose('accepted');
        // Here you can initialize your analytics or other cookie-dependent services
    };

    const handleReject = () => {
        handleClose('rejected');
    };

    if (!showBanner) return null;

    return (
        <div 
            className={` !z-[1000] fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${
                showBanner ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            } ${isClosing ? 'translate-y-full opacity-0' : ''}`}
        >
            <div className="w-[90%] max-w-[1200px] mx-auto py-6 px-4 ">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-900">🍪 Cookie Settings</h3>
                        <p className="text-sm text-gray-600 max-w-2xl">
                            We use cookies to enhance your browsing experience and analyze our traffic. 
                            By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies. 
                            <button 
                                onClick={() => window.open('/privacy-policy', '_blank')}
                                className="text-black underline hover:no-underline ml-1"
                            >
                                Learn more
                            </button>
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <button
                            onClick={handleReject}
                            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            Reject All
                        </button>
                        <button
                            onClick={handleAccept}
                            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-[#000] rounded-md hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent; 