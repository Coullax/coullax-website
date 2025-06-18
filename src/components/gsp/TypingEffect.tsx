"use client";
import { useState, useEffect, useRef, useCallback } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

function TypingEffect({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startTyping = useCallback(() => {
    if (hasStarted || isComplete) return;

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
  }, [text, speed, delay, hasStarted, isComplete, onComplete]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startTyping();
          // Disconnect observer after first trigger
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      // Clean up intervals and timeouts
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [startTyping]);
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
    <span className="animate-pulse [animation-duration:1.2s]">|</span>
    </div>
  );
}

export default TypingEffect;
