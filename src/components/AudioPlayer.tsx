'use client'
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioContextType {
  isPlaying: boolean;
  toggleAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Initialize audio only on client side
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/background-music.mp3');
      audioRef.current.loop = true;

      // Try to autoplay
      const attemptAutoplay = async () => {
        try {
          if (audioRef.current) {
            audioRef.current.volume = 0;
            await audioRef.current.play();
            
            // Fade in volume
            let vol = 0;
            const fadeIn = setInterval(() => {
              if (audioRef.current && vol < 1) {
                vol = Math.min(vol + 0.1, 1);
                audioRef.current.volume = vol;
                
                if (vol >= 1) {
                  clearInterval(fadeIn);
                }
              } else {
                clearInterval(fadeIn);
              }
            }, 100);
            
            setIsPlaying(true);
          }
        } catch (error) {
          console.log("Autoplay failed:", error);
          setIsPlaying(false);
        }
      };

      attemptAutoplay();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current || !isMounted) return;

    if (isPlaying) {
      // Fade out
      let vol = audioRef.current.volume;
      const fadeOut = setInterval(() => {
        if (audioRef.current && vol > 0) {
          vol = Math.max(vol - 0.1, 0);
          audioRef.current.volume = vol;
          
          if (vol <= 0) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            clearInterval(fadeOut);
          }
        } else {
          clearInterval(fadeOut);
        }
      }, 50);
    } else {
      // Fade in
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        let vol = 0;
        const fadeIn = setInterval(() => {
          if (audioRef.current && vol < 1) {
            vol = Math.min(vol + 0.1, 1);
            audioRef.current.volume = vol;
            
            if (vol >= 1) {
              clearInterval(fadeIn);
            }
          } else {
            clearInterval(fadeIn);
          }
        }, 50);
      }).catch(error => {
        console.log("Audio playback failed:", error);
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Don't render anything until mounted on client
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const AudioToggle: React.FC = () => {
  const { isPlaying, toggleAudio } = useAudio();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render the button until mounted on client
  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={toggleAudio}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </button>
  );
}; 