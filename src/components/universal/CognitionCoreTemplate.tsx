"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SplitText from "../reactbits/splitText";
import { TypingAnimation } from "../magicui/typing-animation";
import ScrollAnimatedText from "../framer/ScrollAnimatedText";

interface CognitionCoreTemplateProps {
  titleText?: string;
  titleTextClassName?: string;
  typingText?: string;
  typingTextClassName?: string;
  animationColor?: string;
  descriptionClassName?: string;
  cognitionCoreItems?: {
    image: string;
    title: string;
    description: string;
  }[];
  description?: { text: string; delay: number; lineBreak?: boolean }[];
  cognitionCoreTitleStyle?: string;
  cognitionCoreDescriptionStyle?: string;
  imagePath?: string;
  imageType?: "svg" | "png";
}

export default function CognitionCoreTemplate({
  titleText,
  titleTextClassName = "",
  typingText = "",
  typingTextClassName = "",
  description = [],
  animationColor = "#E0EF29",
  descriptionClassName,
  cognitionCoreItems = [],
  cognitionCoreTitleStyle = "",
  cognitionCoreDescriptionStyle = "",
  imagePath = "",
  imageType = "svg",
}: CognitionCoreTemplateProps) {
  const [activeCognitionIndex, setActiveCognitionIndex] =
    useState<string>("group_1");
  const [vhUnit, setVhUnit] = useState(
    typeof window !== "undefined" ? window.innerHeight / 100 : 8
  );
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [previousCirclePosition, setPreviousCirclePosition] = useState({
    x: 0,
    y: 0,
  });
  const [circleSize, setCircleSize] = useState({ width: 0, height: 0 });
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVhUnit = () => {
      setVhUnit(window.innerHeight / 100);
    };

    let timeoutId: NodeJS.Timeout;
    const throttledUpdateVhUnit = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateVhUnit, 16);
    };

    updateVhUnit();
    window.addEventListener("resize", throttledUpdateVhUnit);
    return () => {
      window.removeEventListener("resize", throttledUpdateVhUnit);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const updateCirclePosition = () => {
      const activeIndex = getActiveIndex();

      if (imageRefs.current[activeIndex] && containerRef.current) {
        const activeElement = imageRefs.current[activeIndex];
        const containerRect = containerRef.current.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();

        const newPosition = {
          x: activeRect.left - containerRect.left,
          y: activeRect.top - containerRect.top,
        };

        const newSize = {
          width: activeRect.width,
          height: activeRect.height,
        };

        setCirclePosition(newPosition);
        setCircleSize(newSize);
      }
    };

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(updateCirclePosition, 50);

    // Also update on window resize
    window.addEventListener("resize", updateCirclePosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateCirclePosition);
    };
  }, [activeCognitionIndex, vhUnit]);

  const getActiveIndex = () => {
    return cognitionCoreItems.findIndex(
      (item) => item.image === activeCognitionIndex
    );
  };

  const handleCognitionClick = (newIndex: string) => {
    // Set previous position BEFORE changing the active index
    const currentActiveIndex = getActiveIndex();
    if (imageRefs.current[currentActiveIndex] && containerRef.current) {
      const currentElement = imageRefs.current[currentActiveIndex];
      const containerRect = containerRef.current.getBoundingClientRect();
      const currentRect = currentElement.getBoundingClientRect();
      setPreviousCirclePosition({
        x: currentRect.left - containerRect.left,
        y: currentRect.top - containerRect.top,
      });
    }

    setActiveCognitionIndex(newIndex);
  };

  return (
    // <div className=" w-full">
    //         <div
    //           className={cn(
    //             "absolute inset-0",
    //             "[background-size:20px_20px]",
    //             "[background-image:radial-gradient(#676B6E_1px,transparent_1px)]",
    //             "dark:[background-image:radial-gradient(#676B6E_1px,transparent_1px)]",
    //             "opacity-25 dark:opacity-25 z-0",
    //           )}
    //         />

    // </div>
    <div className=" w-[90%] max-w-[104.027vh] mx-auto">
      <div className=" w-full py-[3.773vh] lg:py-[6.757vh] ">
        <SplitText
          text={titleText || "Cognition Core"}
          className={cn(
            " font-special-gothic-expanded-one w-full !text-center lg:!text-left text-[3.814vh] md:text-[6.443vh] md:leading-[7.477vh] -tracking-[0.215vh] md:-tracking-[0.322vh] uppercase",
            titleTextClassName
          )}
          delay={10}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className=" font-silkscreen w-[90%] lg:w-full mx-auto text-[1.007vh] leading-[1.309vh] uppercase py-[2.146vh] md:py-[2.966vh] lg:my-[0.676vh]">
          <TypingAnimation
            startOnView
            supportHTML={true}
            duration={10}
            className={cn(
              "text-[0.751vh] md:text-[5.932vh] lg:text-[1.007vh] w-full text-center lg:text-left leading-[0.966vh] md:leading-[1.309vh] font-silkscreen",
              typingTextClassName
            )}
          >
            {typingText}
          </TypingAnimation>
        </div>
        <div
          className={cn(
            "w-full text-center lg:text-left text-[1.288vh] md:text-[1.864vh] lg:text-[2.685vh] uppercase font-inclusive-sans leading-[1.609vh] md:leading-[2.288vh] lg:leading-[3.49vh]",
            descriptionClassName
          )}
        >
          {description?.map((item, index) => (
            <React.Fragment key={index}>
              <ScrollAnimatedText
                delay={item.delay}
                className={cn("text-black", descriptionClassName)}
              >
                {item.text}
              </ScrollAnimatedText>
              {item.lineBreak && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className=" pt-[3.755vh] md:pt-[3.814vh] lg:pt-[6.711vh] lg:pr-[2.083vh] ">
        {" "}
        <div
          ref={containerRef}
          className=" w-full flex flex-row gap-[2.146vh] md:gap-[3.814vh] lg:gap-[6.55vh] items-center relative justify-center lg:justify-start "
        >
          <motion.div
            key={`${activeCognitionIndex}-${vhUnit}`}
            initial={{
              x: previousCirclePosition.x,
              y: previousCirclePosition.y,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              x: circlePosition.x,
              y: circlePosition.y,
              opacity: [0, 0.1, 0.1, 0],
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              opacity: {
                times: [0, 0.3, 0.7, 1],
                duration: 1.2,
              },
            }}
            className={`bg-[${animationColor}] absolute top-1/2 -translate-y-1/2 left-0 rounded-full pointer-events-none`}
            style={{
              filter: "blur(2px)",
              boxShadow: "0 0 20px rgba(224, 239, 41, 0.2)",
              width: `${circleSize.width}px`,
              height: `${circleSize.width}px`,
            }}
          />{" "}
          {cognitionCoreItems.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="flex justify-start items-center relative z-10 cursor-pointer"
              onClick={() => handleCognitionClick("group_" + (index + 1))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className={`bg-[${animationColor}] w-full h-full absolute top-0 left-0 rounded-lg`}
              />

              <motion.div
                className="relative"
                animate={{
                  scale: activeCognitionIndex === item.image ? 1.1 : 1,
                  // rotate: activeCognitionIndex === item.image ? [0, 5, 0] : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                {/* Base white image */}
                <Image
                  src={`${imagePath}/${item.image}_white.${imageType}`}
                  alt={`Cognition Core image ${index + 1}`}
                  width={130}
                  height={130}
                  className="relative z-20 w-[8.725vh] h-[8.725vh]"
                />

                {/* Colored overlay image with animation */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full z-30"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{
                    clipPath:
                      activeCognitionIndex === item.image
                        ? "inset(0 0 0 0)"
                        : "inset(100% 0 0 0)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={`${imagePath}/${item.image}_yellow.${imageType}`}
                    alt={`Cognition Core colored image ${index + 1}`}
                    width={130}
                    height={130}
                    className="w-[8.725vh] h-[8.725vh]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className=" mt-[1.609vh] md:mt-[4.237vh] lg:mt-[10.336vh]">
          <h1
            className={cn(
              "w-full text-center lg:text-left text-[1.288vh] md:text-[1.864vh] lg:text-[2.685vh] uppercase font-special-gothic-expanded-one leading-[1.609vh] md:leading-[2.288vh] lg:leading-[3.49vh] font-bold",
              cognitionCoreTitleStyle
            )}
          >
            {
              cognitionCoreItems.find(
                (item) => item.image === activeCognitionIndex
              )?.title
            }
          </h1>
          <div
            className={cn(
              "mt-[2.685vh] min-h-[7.511vh] md:min-h-[10.169vh] lg:min-h-[11.067vh] w-full text-center lg:text-left text-[1.288vh] md:text-[1.864vh] lg:text-[2.685vh] uppercase font-inclusive-sans leading-[1.609vh] md:leading-[2.288vh] lg:leading-[3.49vh]",
              cognitionCoreDescriptionStyle
            )}
          >
            {
              cognitionCoreItems.find(
                (item) => item.image === activeCognitionIndex
              )?.description
            }
          </div>
        </div>
      </div>
    </div>
  );
}
