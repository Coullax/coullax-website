"use client";
import React from "react";
import SplitText from "../reactbits/splitText";
import { cn } from "@/lib/utils";
import BookCallBtn from "../universal/BookCallBtn";
import { TypingAnimation } from "../magicui/typing-animation";
import ScrollAnimatedText from "../framer/ScrollAnimatedText";

export default function Summon() {
  return (
    <div className="w-full relative overflow-hidden bg-[#000] py-[15vh]">
      <div className="w-[90%] md:max-w-[104.73vh] mx-auto ">
        <div className="w-full flex flex-col items-center">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
              "opacity-25 dark:opacity-25 z-0"
            )}
          />

          <SplitText
            text="THE SUMMON"
            className="text-[#fff] font-special-gothic-expanded-one text-[4.292vh] md:text-[6.443vh] leading-[4.828vh] md:leading-[7.527vh] -tracking-[0.324vh] uppercase"
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
        </div>

        <h1 className="justify-center text-[0.751vh] md:text-[1.271vh] lg:text-[1.007vh] pt-[2.027vh] leading-[1.318vh] text-center uppercase font-silkscreen text-white min-h-[5.405vh]">
          <TypingAnimation
            startOnView
            supportHTML={true}
            duration={10}
            className="text-[0.751vh] md:text-[1.271vh] lg:text-[1.007vh] leading-[0.966vh] md:leading-[1.309vh] font-silkscreen"
          >
            {
              "Speak, and the signal will reach us. Across realms of silence and syntax, <br /> your intent will be felt. This is not a form. it is a calling."
            }
          </TypingAnimation>
        </h1>

        <div className=" mt-[3.219vh] md:mt-[3.784vh] text-[1.288vh] md:text-[1.864vh] lg:text-[2.685vh] leading-[1.609vh] md:leading-[2.288vh] lg:leading-[3.49vh] text-center uppercase font-inclusive-sans text-white">
          {/* <span className="justify-center text-[1.073vh] md:text-[2.703vh] leading-[1.609vh] md:leading-[3.514vh] text-center uppercase font-inclusive-sans text-white"> */}

          <ScrollAnimatedText delay={0}>
            Have a project in mind? Let&apos;s align.
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.2}>
            Book a call to explore how we can bring your vision
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.4}>
            to life through intelligent systems and
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.6}>
            purposeful design.
          </ScrollAnimatedText>
          {/* </span> */}
        </div>
        <div className=" z-10 flex flex-col justify-center items-center mt-[3.378vh]">
          <BookCallBtn className="hover:!text-[#e0ef29] z-10 hover:!border-[#e0ef29] transition-all duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
