"use client";
import { useState, useEffect, useRef, useCallback } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  autoStart?: boolean; // Add option to start immediately
}

function TypingEffect({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
  autoStart = false,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startTyping = useCallback(() => {
    if (hasStarted || isComplete || !text) return;

    setHasStarted(true);

    timeoutRef.current = setTimeout(() => {
      let currentIndex = 0;

      intervalRef.current = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      }, speed);
    }, delay);
  }, [text, speed, delay, hasStarted, isComplete, onComplete]);useEffect(() => {
    // If autoStart is true, start typing immediately
    if (autoStart) {
      startTyping();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startTyping();
          // Disconnect observer after first trigger
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Reduced threshold for better triggering
        rootMargin: "50px", // Add some margin for earlier triggering
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Fallback: start typing after a delay if intersection observer doesn't work
    const fallbackTimeout = setTimeout(() => {
      if (!hasStarted) {
        startTyping();
      }
    }, 2000); // Increased fallback delay

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
      // Clean up intervals and timeouts
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [startTyping, hasStarted, autoStart]);
  const processText = (text: string) => {
    return text.replace(/\n/g, "<br />");
  };
  return (
    <div ref={elementRef} className={`inline-block ${className}`}>
      <span
        dangerouslySetInnerHTML={{
          __html: processText(displayText),
        }}
      />
      {!isComplete && (
        <span className="animate-pulse [animation-duration:1.2s]">|</span>
      )}
    </div>
  );
}

export default TypingEffect;
