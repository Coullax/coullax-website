import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function AnimatedText({ children, delay = 0, className = "" }: AnimatedTextProps) {
  const text = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const element = text.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      x: -200,
    });

    // Create animation with delay
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        scrub: 1,
        markers: false,
      },
      opacity: 1,
      x: 0,
      duration: 1,
      delay: delay,
      ease: "power3.out"
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return <div className={`block ${className}`} ref={text}>{children}</div>;
}

export default AnimatedText;