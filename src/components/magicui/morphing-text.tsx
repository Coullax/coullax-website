"use client";

import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const morphTime = 2.5;
const cooldownTime = 3.0;

const useMorphingText = (texts: string[], setActiveIndex?: (index: number) => void, manualIndex?: number) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(cooldownTime); // Start with cooldown
  const timeRef = useRef(new Date());
  const lastManualIndexRef = useRef(manualIndex);
  const forceAnimationRef = useRef(false);

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (manualIndex !== undefined && manualIndex !== lastManualIndexRef.current) {
      // Manual index changed, set up for morphing to that text
      const targetIndex = manualIndex;
      textIndexRef.current = (targetIndex - 1 + texts.length) % texts.length;
      lastManualIndexRef.current = manualIndex;
      
      // Force start morphing animation immediately
      morphRef.current = 0;
      cooldownRef.current = 0; 
      forceAnimationRef.current = true;
      timeRef.current = new Date();
    }
  }, [manualIndex, texts]);



  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(
        8 / invertedFraction - 8,
        100,
      )}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.innerHTML = texts[textIndexRef.current % texts.length];
      current2.innerHTML = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts],
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
      forceAnimationRef.current = false; // Reset force flag
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
      // Update active index when morphing completes
      setActiveIndex?.((textIndexRef.current + 1) % texts.length);
    }
  }, [setStyles, texts, setActiveIndex]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    // Set initial active index
    setActiveIndex?.((textIndexRef.current + 1) % texts.length);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      // Add delta time to morph progress
      morphRef.current += dt;

      if (cooldownRef.current <= 0 || forceAnimationRef.current) {
        doMorph();
      } else {
        cooldownRef.current -= dt;
        doCooldown();
      }
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown, setActiveIndex, texts]);

  return { text1Ref, text2Ref };
};

interface MorphingTextProps {
  className?: string;
  texts: string[];
  setActiveIndex?: (index: number) => void;
  manualIndex?: number;
}

const Texts: React.FC<Pick<MorphingTextProps, "texts" | "setActiveIndex" | "manualIndex">> = ({ texts, setActiveIndex, manualIndex }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts, setActiveIndex, manualIndex);
  return (
    <>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text1Ref}
      />
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text2Ref}
      />
    </>
  );
};

const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
  setActiveIndex,
  manualIndex
}) => (
  <div
    className={cn(
      "relative mx-auto w-full text-center text-black [filter:url(#threshold)_blur(0.6px)]",
      className,
    )}
  >
    <Texts texts={texts} setActiveIndex={setActiveIndex} manualIndex={manualIndex} />
    <SvgFilters />
  </div>
);
