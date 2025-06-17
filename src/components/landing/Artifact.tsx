'use client';
import React from "react";
import BookCallBtn from "../BookCallBtn";
import AnimatedText from "../gsp/AnimatedText";
import TypingEffect from "../gsp/TypingEffect";
import SplitText from "../reactbits/splitText";

interface ArtifactProps {
  animation?: boolean;
}

export default function Artifact({ animation }: ArtifactProps) {
  return (
    <div className="w-full relative overflow-hidden bg-white">
      <div className=" w-[90%] max-w-[104.73vh] mx-auto my-[6.757vh]">
        <div className="flex flex-col w-full">
          <div className="flex w-full flex-col md:flex-row justify-between">
            <SplitText
              text="artifacts"
              className=" w-full !text-center md:!text-left text-[3.219vh] md:text-[6.486vh] leading-[3.541vh] md:leading-[7.527vh] -tracking-[0.054vh] md:-tracking-[0.324vh] font-special-gothic-expanded-one uppercase"
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
            <div className=" w-full text-center md:text-right text-[1.609vh] md:text-[2.432vh] font-special-gothic-expanded-one uppercase leading-[2.146vh] md:leading-[2.824vh] -tracking-[0.043vh] md:-tracking-[0.122vh]">
              case stuides
            </div>
          </div>{" "}
          <h1 className=" text-black font-silkscreen pt-[2.027vh] text-[1.007vh] h-[7.432vh] leading-[1.309vh] uppercase">
            <TypingEffect
              key="typing-effect-stories"
              text={` Each artifact tells a story. \n a fragment of vision forged in the fires of creation. \n Born from whispers of code and pulses of intent, \n these are the echoes of ideas made real.`}
              speed={30}
              delay={500}
              className=" w-full text-center md:text-left text-[0.644vh] md:text-[1.007vh] leading-[1.073vh] md:leading-[1.309vh] font-silkscreen"
            />
          </h1>
        </div>{" "}        <div className=" mt-[2.146h] md:mt-[3.784vh] w-full text-center md:text-left text-[1.073vh] md:text-[2.703vh] uppercase font-inclusive-sans leading-[1.609vh] md:leading-[3.514vh]">
          <AnimatedText key={`artifact-1-${animation}`} delay={0}>
            HERE&apos;S A LOOK AT WHAT WE&apos;VE CREATED SO FAR.
          </AnimatedText>
          <AnimatedText key={`artifact-2-${animation}`} delay={0.2}>
            INTELLIGENT SYSTEMS, POWERFUL PLATFORMS, AND BOLD
          </AnimatedText>
          <AnimatedText key={`artifact-3-${animation}`} delay={0.4}>
            BRAND EXPERIENCES.EACH PROJECT IS A REFLECTION OF
          </AnimatedText>
          <AnimatedText key={`artifact-4-${animation}`} delay={0.6}>OUR PROCESS, OUR TECHNOLOGY,</AnimatedText>
          <AnimatedText key={`artifact-5-${animation}`} delay={0.8}>AND THE PEOPLE WE BUILD FOR.</AnimatedText>
        </div>
        <div className=" flex flex-row md:justify-start justify-center items-center gap-[1.609vh] md:gap-[2.027vh] mt-[3.378vh]">
          <button
            type="button"
            className=" min-w-[21.081vh] bg-[black] text-[#e0ef29] py-[1.689vh] px-[3.345vh] font-silkscreen text-[1.351vh] leading-[1.324vh] -tracking-[0.068vh] cursor-pointer hover:bg-transparent hover:text-[#000000] hover:border-[#000000] transition-all duration-300 hover:scale-105 border-dashed border-[#e0ef29] border-2"
          >
            VISIT CASE STUDIES
          </button>

          <BookCallBtn />
        </div>
        <div className="w-full mt-[3.219vh] md:mt-[7.027vh]">
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
