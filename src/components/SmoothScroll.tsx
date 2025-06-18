'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Detect if device is mobile or tablet
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Configure settings based on device type
    const scrollConfig = {
      duration: isMobile || isTouchDevice ? 1.0 : 1.8, // Shorter duration for mobile
      easing: (t: number) => {
        if (isMobile || isTouchDevice) {
          // Simpler, less aggressive easing for mobile
          return t * (2 - t);
        } else {
          // Advanced easing for desktop
          return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
      },
      lerp: isMobile || isTouchDevice ? 0.12 : 0.06, // Higher lerp for mobile (less smooth but more responsive)
      wheelMultiplier: 0.7, // Only affects desktop wheel scrolling
      touchMultiplier: isMobile || isTouchDevice ? 0.8 : 1.2, // Reduced for mobile/tablet
    };

    // Initialize Lenis smooth scrolling with device-specific settings
    const lenis = new Lenis(scrollConfig);

    // Enhanced RAF loop with performance optimization
    let isRunning = true;
    
    function raf(time: number) {
      if (isRunning) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
    }    requestAnimationFrame(raf);

    // Clean up Lenis on component unmount
    return () => {
      isRunning = false;
      lenis.destroy();
    };
  }, [isClient]);

  return null; // This component doesn't render anything
}
