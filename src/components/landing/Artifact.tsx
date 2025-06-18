"use client";
import React from "react";
import BookCallBtn from "../BookCallBtn";
import SplitText from "../reactbits/splitText";
import ScrollAnimatedText from "../framer/ScrollAnimatedText";
import { TypingAnimation } from "../magicui/typing-animation";

export default function Artifact() {
  return (
    <div className="w-full relative overflow-hidden bg-white">
      <div className=" w-[90%] max-w-[104.73vh] mx-auto my-[6.757vh]">
        <div className="flex flex-col w-full">
          <div className="flex w-full flex-col lg:flex-row justify-between">
            <SplitText
              text="artifacts"
              className="w-full !text-center lg:!text-left text-[5.365vh] md:text-[6.443vh] leading-[5.901vh] md:leading-[7.477vh] -tracking-[0.215vh] md:-tracking-[0.322vh] font-special-gothic-expanded-one uppercase"
              delay={10}
              duration={2}
              ease="elastic.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <div className=" w-full text-center lg:text-right text-[2.146vh] md:text-[2.416vh] font-special-gothic-expanded-one uppercase leading-[2.146vh] md:leading-[2.824vh] -tracking-[0.043vh] md:-tracking-[0.122vh]">
              case stuides
            </div>
          </div>{" "}
          <h1 className=" text-black font-silkscreen pt-[2.146vh] md:pt-[2.966vh] text-[1.007vh] h-[7.432vh] leading-[1.309vh] uppercase">
            <TypingAnimation
              startOnView
              supportHTML={true}
              duration={10}
              className="w-full text-center lg:text-left text-[0.644vh] md:text-[1.007vh] leading-[1.073vh] md:leading-[1.309vh] font-silkscreen"
            >
              {
                "Each artifact tells a story. <br /> a fragment of vision forged in the fires of creation. <br /> Born from whispers of code and pulses of intent, <br /> these are the echoes of ideas made real."
              }
            </TypingAnimation>
          </h1>
        </div>
        <div className=" mt-[2.146h] md:mt-[3.784vh] w-full text-center lg:text-left text-[1.288vh] md:text-[1.864vh] lg:text-[2.685vh] uppercase font-inclusive-sans leading-[1.609vh] md:leading-[2.288vh] lg:leading-[3.49vh]">
          <ScrollAnimatedText delay={0}>
            HERE&apos;S A LOOK AT WHAT WE&apos;VE CREATED SO FAR.
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.2}>
            INTELLIGENT SYSTEMS, POWERFUL PLATFORMS, AND BOLD
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.4}>
            BRAND EXPERIENCES.EACH PROJECT IS A REFLECTION OF
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.6}>
            OUR PROCESS, OUR TECHNOLOGY,
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.8}>
            AND THE PEOPLE WE BUILD FOR.
          </ScrollAnimatedText>
        </div>
        <div className=" flex flex-row lg:justify-start justify-center items-center gap-[1.609vh] md:gap-[2.027vh] mt-[3.378vh]">
          <button
            type="button"
            className=" min-w-[21.081vh] bg-[black] text-[#e0ef29] py-[1.689vh] px-[3.345vh] font-silkscreen text-[1.351vh] leading-[1.324vh] -tracking-[0.068vh] cursor-pointer hover:bg-transparent hover:text-[#000000] hover:border-[#000000] transition-all duration-300 hover:scale-105 border-dashed border-[#e0ef29] border-2"
          >
            VISIT CASE STUDIES
          </button>

          <BookCallBtn />
        </div>
        <div className="w-full mt-[4.292vh] md:mt-[5.085vh] lg:mt-[7.027vh]">
          <div className="w-full flex justify-start items-center gap-[1.609vh] md:gap-[0.858vh] overflow-x-scroll">
            <div className="bg-[#e8e8e8] h-[26.824vh] md:h-[25.541vh] aspect-square">
              <p>Skillchecker.ai</p>
            </div>
            <div className=" bg-[#e8e8e8] h-[26.824vh] md:h-[25.541vh] aspect-square">
              <p>Skillchecker.ai</p>
            </div>
            <div className=" bg-[#e8e8e8] h-[26.824vh] md:h-[25.541vh] aspect-square">
              <p>Skillchecker.ai</p>
            </div>
            <div className="bg-[#e8e8e8] h-[26.824vh] md:h-[25.541vh] aspect-square">
              <p>Skillchecker.ai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
