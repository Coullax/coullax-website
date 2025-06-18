"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  supportHTML?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  supportHTML = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });
  const [displayedText, setDisplayedText] = useState<string>("");
  const [displayedHTML, setDisplayedHTML] = useState<React.ReactNode>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);  
  const processText = (text: string) => {
    if (!supportHTML) return text;
    
    return text.replace(/<br\s*\/?>/gi, '\n');
  };

  const processedText = processText(children);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);
  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < processedText.length) {
        const currentText = processedText.substring(0, i + 1);
        setDisplayedText(currentText);
        
        if (supportHTML) {
          // Convert line breaks back to <br/> tags for display
          const htmlText = currentText.replace(/\n/g, '<br/>');
          setDisplayedHTML(
            <span dangerouslySetInnerHTML={{ __html: htmlText }} />
          );
        }
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [processedText, duration, started, supportHTML]);
  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        className
      )}
      {...props}
    >
      {supportHTML ? displayedHTML : displayedText}
      <span className="animate-pulse">|</span>
    </MotionComponent>
  );
}
