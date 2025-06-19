"use client";

import { useEffect, useState } from "react";

interface ParallaxStarsBackgroundProps {
  className?: string;
  smallStarsCount?: number;
  mediumStarsCount?: number;
  bigStarsCount?: number;
}

const ParallaxStarsBackground: React.FC<ParallaxStarsBackgroundProps> = ({
  className = "",
  smallStarsCount = 700,
  mediumStarsCount = 200,
  bigStarsCount = 100,
}) => {
  const [shadowsSmall, setShadowsSmall] = useState("");
  const [shadowsMedium, setShadowsMedium] = useState("");
  const [shadowsBig, setShadowsBig] = useState("");

  // Function to generate multiple box shadows (equivalent to SASS function)
  const generateMultipleBoxShadow = (n: number): string => {
    const shadows: string[] = [];
    // Get viewport dimensions, fallback to reasonable defaults
    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 1920;
    const viewportHeight =
      typeof window !== "undefined" ? window.innerHeight : 1080;

    // Extend beyond viewport for parallax effect
    const maxWidth = Math.max(viewportWidth, 1920);
    const maxHeight = Math.max(viewportHeight * 2, 2160); // Double height for vertical scroll

    for (let i = 0; i < n; i++) {
      const x = Math.floor(Math.random() * maxWidth);
      const y = Math.floor(Math.random() * maxHeight);
      shadows.push(`${x}px ${y}px #ff8410`);
    }
    return shadows.join(", ");
  };

  useEffect(() => {
    // Generate shadows on component mount and window resize
    const generateShadows = () => {
      setShadowsSmall(generateMultipleBoxShadow(smallStarsCount));
      setShadowsMedium(generateMultipleBoxShadow(mediumStarsCount));
      setShadowsBig(generateMultipleBoxShadow(bigStarsCount));
    };

    generateShadows();

    // Regenerate on window resize to adapt to new dimensions
    const handleResize = () => generateShadows();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [smallStarsCount, mediumStarsCount, bigStarsCount]);

  return (
    <>
      <div className={` overflow-hidden w-full ${className}`}>
        {/* Small stars */}
        <div
          className="stars-small absolute"
          style={{
            width: "1px",
            height: "1px",
            background: "transparent",
            boxShadow: shadowsSmall,
          }}
        />

        {/* Medium stars */}
        <div
          className="stars-medium absolute"
          style={{
            width: "2px",
            height: "2px",
            background: "transparent",
            boxShadow: shadowsMedium,
          }}
        />

        {/* Big stars */}
        <div
          className="stars-big absolute"
          style={{
            width: "3px",
            height: "3px",
            background: "transparent",
            boxShadow: shadowsBig,
          }}
        />
      </div>
      {/* CSS Animation Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700");

        .stars-small {
          animation: animStar 50s linear infinite;
        }

        .stars-small::after {
          content: "";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${shadowsSmall};
        }

        .stars-medium {
          animation: animStar 100s linear infinite;
        }

        .stars-medium::after {
          content: "";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${shadowsMedium};
        }

        .stars-big {
          animation: animStar 150s linear infinite;
        }

        .stars-big::after {
          content: "";
          position: absolute;
          top: 2000px;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${shadowsBig};
        }

        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </>
  );
};

export default ParallaxStarsBackground;
