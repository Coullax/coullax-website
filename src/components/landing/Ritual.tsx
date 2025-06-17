'use client';
import React from "react";
import SplitText from "../reactbits/splitText";
import TypingEffect from "../gsp/TypingEffect";
import AnimatedText from "../gsp/AnimatedText";
import BookCallBtn from "../BookCallBtn";
import Image from "next/image";

type PhaseKey = "star" | "circle" | "asterisk" | "triangle";

interface RitualProps {
  activeImage: PhaseKey;
  setActiveImage: (image: PhaseKey) => void;
}

export default function Ritual({ activeImage, setActiveImage }: RitualProps) {
  const phases = {
    star: {
      icon: "/HomePage/phase/phase1_image_yellow.svg",
      title: "FIRST LIGHT",
      subtitle: "Initial Phase",
      description:
        "This is where it all begins. The first spark of connection. The moment your vision enters the grid. First Light marks the start of the journey. where your signal is received, and the Forge prepares to shape what comes next.",
      footer:
        "Before the construct. Before the signal. There was the First Light. A rupture in the silence. A flicker through the void. The awakening spark that summoned the Seeker, encoded the vision, and aligned the path.",
    },
    circle: {
      icon: "/HomePage/phase/phase2_image_yellow.svg",
      title: "THE GLYPH",
      subtitle: "Research phase",
      description:
        "With your vision as our compass, we map possibilities, identify needs, and define the system's architecture. Through research, analysis, and strategic planning, we carve the blueprint that guides every layer of what comes next.",
      footer:
        "From the noise, meaning crystallizes. Symbols form. not drawn, but discovered. Each line, a thread of logic. Each curve, a fragment of intent. The Glyph is carved: not to be admired, but to be followed.",
    },
    asterisk: {
      icon: "/HomePage/phase/phase3_image_yellow.svg",
      title: "THE FRAME",
      subtitle: "Building phase",
      description:
        "We now bring the vision to life . shaping interfaces, engineering logic, designing systems that respond and evolve. Whether it's software, brand identity, or workflow design, this is where your solution takes true form.",
      footer:
        "The Forge awakens. Particles assemble. Code and concept bind. Through fire and function, a Construct emerges — not static, but living. Not built to exist, but to move.",
    },
    triangle: {
      icon: "/HomePage/phase/phase4_image_yellow.svg",
      title: "THE ASCENSION",
      subtitle: "Launch & post launch Phase",
      description:
        "We deploy the product to the world. but that's not where it ends. We continue listening, refining, and evolving. Feedback loops guide growth. We ensure it remains aligned, functional, and future ready.",
      footer:
        "The Construct breathes. Signal out. Echo in. What was once blueprint becomes broadcast. And yet, this is not a conclusion — it is a rhythm. A continuum. The Pulse persists.",
    },
  };
  return (
    <div className="w-[90%] md:max-w-[104.027vh] mx-auto py-[6.711vh]">
      <div className=" w-full flex flex-col md:flex-row justify-between items-start">
        <SplitText
          text="The ritual"
          className=" text-[3.219vh] w-full !text-center md:!text-left md:text-[6.443vh] font-special-gothic-expanded-one leading-[3.541vh] md:leading-[7.477vh] -tracking-[0.054vh] md:-tracking-[0.322vh] uppercase"
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
        <h1 className=" text-[1.609vh] md:text-[2.416vh] w-full text-center md:text-right font-special-gothic-expanded-one leading-[2.146vh] md:leading-[2.805vh] -tracking-[0.043vh] md:-tracking-[0.121vh] uppercase">
          process
        </h1>
      </div>
      <h1 className=" text-black font-silkscreen pt-[2.013vh] h-[4.392vh] text-[2.013vh] leading-[0.858vh] md:leading-[1.309vh] uppercase">
        <TypingEffect
          text={`It begins in stillness. A glyph. A pulse. A knowing. \n Not all who enter understand, but all who emerge are changed.`}
          speed={30}
          delay={500}
          className="text-[0.644vh]  md:text-[1.007vh] w-full text-center md:text-left leading-[0.966vh] md:leading-[1.309vh] font-silkscreen"
        />
      </h1>
      <div className=" mt-[2.146vh] md:mt-[3.758vh] w-full text-center md:text-left text-[1.073vh] md:text-[2.685vh] uppercase font-inclusive-sans leading-[1.609vh] md:leading-[3.49vh]">
        <AnimatedText key={`retual-1-${activeImage}`} delay={0}>
          The RITUAL is our process of transformation where
        </AnimatedText>
        <AnimatedText key={`retual-2-${activeImage}`} delay={0.2}>
          abstract ideas, complex technologies, and raw
        </AnimatedText>
        <AnimatedText key={`retual-3-${activeImage}`} delay={0.4}>
          ambition are fused into powerful digital systems.
        </AnimatedText>
      </div>
      <div className=" my-[3.219vh] md:my-[3.356vh] w-full text-center md:text-left text-[0.644vh] md:text-[1.007vh] font-silkscreen leading-[1.073vh] md:leading-[1.309vh] uppercase">
        [Firstlight / Schema / Construct / Lift.]
      </div>

      <div className=" w-full flex md:justify-start justify-center py-[2.146vh] md:py-0">
        <BookCallBtn />
      </div>

      <div className=" mt-[3.219vh] md:mt-[6.711vh]">
        <div className=" flex flex-row justify-center md:justify-start items-center gap-[1.073vh] md:gap-[2.013vh]">
          <div
            className={` rounded-full ${
              activeImage === "star" ? "bg-[#0505cb]" : "bg-[#d9d9d9]"
            } h-[1.609vh] md:h-[1.486vh] aspect-square`}
          ></div>
          <div
            className={` rounded-full ${
              activeImage === "circle" ? "bg-[#0505cb]" : "bg-[#d9d9d9]"
            } h-[1.609vh] md:h-[1.486vh] aspect-square`}
          ></div>
          <div
            className={` rounded-full ${
              activeImage === "asterisk" ? "bg-[#0505cb]" : "bg-[#d9d9d9]"
            } h-[1.609vh] md:h-[1.486vh] aspect-square`}
          ></div>
          <div
            className={` rounded-full ${
              activeImage === "triangle" ? "bg-[#0505cb]" : "bg-[#d9d9d9]"
            } h-[1.609vh] md:h-[1.486vh] aspect-square`}
          ></div>
        </div>
        <div className=" border border-black mt-[2.685vh]">
          <div className="grid grid-cols-4 md:gap-[6.034vh] pt-[1.609vh] md:pt-[3.356vh] pb-[1.609vh] md:pb-[4.362vh] px-[1.073vh] md:px-[4.027vh]">
            <div className="flex justify-center items-center col-span-[6.974vh] md:col-span-[19.463vh]">
              <Image
                src={
                  activeImage === "star"
                    ? "/HomePage/phase/phase1_image_red.svg"
                    : "/HomePage/phase/phase1_image_black.svg"
                }
                width={290}
                height={290}
                alt="Star"
                className=" cursor-pointer w-[6.974vh] md:w-[19.463vh] h-[6.974vh] md:h-[19.463vh]"
                onClick={() => setActiveImage("star")}
              />
            </div>

            <div className="flex justify-center items-center col-span-[6.974vh] md:col-span-[19.463vh]">
              <Image
                src={
                  activeImage === "circle"
                    ? "/HomePage/phase/phase2_image_red.svg"
                    : "/HomePage/phase/phase2_image_black.svg"
                }
                width={290}
                height={290}
                alt="Circle"
                className=" cursor-pointer w-[6.974vh] md:w-[19.463vh] h-[6.974vh] md:h-[19.463vh]"
                onClick={() => setActiveImage("circle")}
              />
            </div>

            <div className="flex justify-center items-center col-span-[6.974vh] md:col-span-[19.463vh]">
              <Image
                src={
                  activeImage === "asterisk"
                    ? "/HomePage/phase/phase3_image_red.svg"
                    : "/HomePage/phase/phase3_image_black.svg"
                }
                width={290}
                height={290}
                alt="Asterisk"
                className=" cursor-pointer w-[6.974vh] md:w-[19.463vh] h-[6.974vh] md:h-[19.463vh]"
                onClick={() => setActiveImage("asterisk")}
              />
            </div>

            <div className="flex justify-center items-center col-span-[6.974vh] md:col-span-[19.463vh]">
              <Image
                src={
                  activeImage === "triangle"
                    ? "/HomePage/phase/phase4_image_red.svg"
                    : "/HomePage/phase/phase4_image_black.svg"
                }
                alt="Triangle"
                width={290}
                height={290}
                className=" cursor-pointer w-[6.974vh] md:w-[19.463vh] h-[6.974vh] md:h-[19.463vh]"
                onClick={() => setActiveImage("triangle")}
              />
            </div>
          </div>
          <div className="w-full border-t border-[#000000] py-[1.859vh] px-[1.933vh]">
            <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-0 items-center ">
              <h2 className=" text-[2.682vh] md:text-[3.221vh] text-center md:text-left text-black font-special-gothic-expanded-one md:leading-[3.738vh] -tracking-[0.161vh] ">
                {phases[activeImage].subtitle}
              </h2>

              <h2 className=" text-[1.609vh] md:text-[3.221vh] md:font-bold text-black font-silkscreen -tracking-[0.161vh] md:leading-[3.738vh]">
                {phases[activeImage].title}
              </h2>
            </div>

            <p className=" text-[1.609vh] md:text-[2.685vh] my-[3.219vh] md:my-[4.094vh] text-center md:text-left font-inclusive-sans text-black md:leading-[3.195vh] ">
              {phases[activeImage].description}
            </p>
            <p className=" text-[0.644vh] md:text-[1.007vh] text-black uppercase leading-[1.073vh] md:leading-[1.201vh] font-silkscreen">
              {phases[activeImage].footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
