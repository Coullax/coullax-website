"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SplitText from "../reactbits/splitText";
import ScrollAnimatedText from "../framer/ScrollAnimatedText";
import { cn } from "@/lib/utils";
import BookCallBtn from "../universal/BookCallBtn";
import { TypingAnimation } from "../magicui/typing-animation";

export default function Forge() {
  return (
    <div className="relative w-full bg-[#000000] py-[6.711vh]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          "opacity-25 dark:opacity-25"
        )}
      />
      <div className=" z-20 w-[90%] max-w-[104.027vh] mx-auto">
        <h1 className=" text-white font-silkscreen text-[1.073vh] md:text-[1.007vh] h-[2.703vh] leading-[1.309vh]">
          <TypingAnimation
            startOnView
            supportHTML={true}
            duration={10}
            className="text-[0.751vh] w-full text-center lg:text-left md:text-[1.271vh] leading-[1.309vh] font-silkscreen"
          >
            {
              "Shaped by glyph, born of will. Created in silence, between signals. <br /> The crucible of ideas, fueled by intent. This is where we build the unbuilt."
            }
          </TypingAnimation>
        </h1>
        <SplitText
          text="THE FORGE"
          className=" mt-[2.146vh] md:mt-[3.356vh] text-white w-full text-center lg:text-left font-special-gothic-expanded-one text-[5.365vh] md:text-[9.322vh] lg:text-[16.289vh] leading-[5.901vh] md:leading-[9.746vh] lg:leading-[18.899vh] -tracking-[0.193vh] md:-tracking-[0.339vh] lg:-tracking-[0.815vh] uppercase"
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
        <div className=" text-[1.288vh] md:text-[1.864vh] lg:text-[2.685vh] w-full text-center lg:text-left font-inclusive-sans text-white leading-[1.609vh] md:leading-[2.288vh] lg:leading-[3.49vh] uppercase my-[2.146vh] md:my-[3.758vh]">
          <ScrollAnimatedText delay={0}>
            This is where vision meets velocity.
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.2}>
            Where raw ideas are melted down, reshaped, and forged
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.4}>
            into real, working systems. The Forge is Coullax&apos;s
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.6}>
            creative engine. a space of experimentation,
          </ScrollAnimatedText>
          <ScrollAnimatedText delay={0.8}>
            engineering, and relentless iteration.
          </ScrollAnimatedText>
        </div>
        <div className=" w-full lg:mt-0 flex justify-center lg:justify-start items-center">
          <BookCallBtn />
        </div>
        <div className=" mt-[4.828vh] md:mt-[6.711vh] z-10">
          <div className=" z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-[3.219vh] md:gap-[3.39vh] lg:gap-[3.356vh] mb-[1.609vh] md:mb-[3.356vh]">
            <Link href={"/ai"} className=" z-10 w-full">
              <div
                className=" z-10 w-full py-[2.054vh] px-[2.624vh] min-h-[24.497vh] md:min-h-[38.926vh] text-white flex flex-col justify-between items-start bg-transparent hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{
                  backgroundImage: `url('/HomePage/ForgeCards/aiBackground.webp')`,
                  backgroundSize: "cover",
                }}
              >
                <div className=" w-full flex flex-row justify-between items-center">
                  <h1 className=" text-[2.682vh] md:text-[3.221vh] font-silkscreen leading-[3.336vh] -tracking-[0.161vh]">
                    COGNITION
                  </h1>
                  <Image
                    src="/HomePage/ForgeCards/cognitionIcon.svg"
                    width={167}
                    height={99}
                    alt="studiosAndLabsIcon"
                    className=" w-[11.208vh] h-[6.644vh]"
                  />
                </div>
                <h1 className=" text-[4.292vh] md:text-[5.369vh] font-special-gothic-expanded-one leading-[3.755vh] md:leading-[6.228vh] -tracking-[0.134vh] md:-tracking-[0.268vh] uppercase">
                  ARTIFICIAL
                  <br />
                  INTELLIGENCE
                </h1>
              </div>
            </Link>
            <Link href={"/blockchain"} className=" z-10 w-full">
              <div
                className=" z-10 w-full py-[2.054vh] px-[2.624vh] min-h-[24.497vh] md:min-h-[38.926vh] text-white flex flex-col justify-between items-start bg-transparent hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{
                  backgroundImage: `url('/HomePage/ForgeCards/blockchainBackground.webp')`,
                  backgroundSize: "cover",
                }}
              >
                <div className=" w-full flex flex-row justify-between md:items-center">
                  <h1 className=" text-[2.682vh] md:text-[3.221vh] font-silkscreen leading-[3.336vh] -tracking-[0.161vh]">
                    CONSENSUS
                  </h1>
                  <Image
                    src="/HomePage/ForgeCards/consensusIcon.svg"
                    width={167}
                    height={99}
                    alt="studiosAndLabsIcon"
                    className=" w-[11.208vh] h-[6.644vh]"
                  />
                </div>
                <h1 className=" text-[4.292vh] md:text-[5.369vh] font-special-gothic-expanded-one leading-[3.114vh] md:leading-[6.228vh] -tracking-[0.134vh] md:-tracking-[0.268vh] uppercase">
                  BLOCKCHAIN
                </h1>
              </div>
            </Link>
          </div>
          <div
            className=" z-10 my-[3.219vh] md:my-[3.39vh] lg:my-[3.356vh] bg-black border border-white py-[1.859vh] px-[1.946vh] min-h-[24.497vh] text-white flex flex-col justify-between items-start"
            style={{ zIndex: 10, position: "relative" }}
          >
            <h1 className=" text-[2.685vh] font-special-gothic-expanded-one leading-[3.114vh] -tracking-[0.134vh] uppercase">
              STUDIOS AND LABS
            </h1>
            <div className="  w-full flex flex-row justify-between items-center">
              <h1 className=" text-[2.349vh] font-silkscreen leading-[2.436vh] -tracking-[0.117vh]">
                ETHER
              </h1>
              <Image
                src="/HomePage/ForgeCards/etherIcon.svg"
                width={167}
                height={99}
                alt="studiosAndLabsIcon"
                className=" w-[11.208vh] h-[6.644vh]"
              />
            </div>
          </div>
          <div className=" z-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-[0vh] mb-[3.356vh]">
            <div className="  z-10 w-full bg-white border border-white py-[1.859vh] px-[1.946vh] min-h-[24.497vh] text-black flex flex-col justify-between items-start">
              <h1 className=" text-[2.685vh] font-special-gothic-expanded-one leading-[3.114vh] -tracking-[0.134vh] uppercase">
                Web & <br />
                Software
              </h1>
              <div className=" w-full flex flex-row justify-between items-center">
                <h1 className=" text-[2.349vh] font-silkscreen leading-[2.436vh] -tracking-[0.117vh]">
                  WEAVE
                </h1>
                <Image
                  src="/HomePage/ForgeCards/weaveIcon.svg"
                  width={167}
                  height={99}
                  alt="studiosAndLabsIcon"
                  className=" w-[11.208vh] h-[6.644vh]"
                />
              </div>
            </div>
            <div className=" z-10 w-full border bg-black border-white py-[1.859vh] px-[1.946vh] min-h-[24.497vh] text-white flex flex-col justify-between items-start">
              <h1 className=" text-[2.685vh] font-special-gothic-expanded-one leading-[3.114vh] -tracking-[0.134vh] uppercase">
                Research & <br />
                Strategy
              </h1>
              <div className=" w-full flex flex-row justify-between items-center">
                <h1 className=" text-[2.349vh] font-silkscreen leading-[2.436vh] -tracking-[0.117vh]">
                  SYNTHESIS
                </h1>
                <Image
                  src="/HomePage/ForgeCards/synthesisIcon.svg"
                  width={167}
                  height={99}
                  alt="studiosAndLabsIcon"
                  className=" w-[11.208vh] h-[6.644vh]"
                />
              </div>
            </div>
            <div className=" bg-black z-10 w-full border border-white py-[1.859vh] px-[1.946vh] min-h-[24.497vh] text-white flex flex-col justify-between items-start">
              <h1 className=" text-[2.685vh] font-special-gothic-expanded-one leading-[3.114vh] -tracking-[0.134vh]">
                MOBILE <br />
                DEVELOPMENT
              </h1>
              <div className=" w-full flex flex-row justify-between items-center">
                <h1 className=" text-[2.349vh] font-silkscreen leading-[2.436vh] -tracking-[0.117vh]">
                  MOTILITH
                </h1>
                <Image
                  src="/HomePage/ForgeCards/motilithIcon.svg"
                  width={160}
                  height={99}
                  alt="studiosAndLabsIcon"
                  className=" w-[11.208vh] h-[6.644vh]"
                />
              </div>{" "}
            </div>
          </div>
        </div>
        <div className=" text-[0.751vh] md:text-[1.271vh] lg:text-[1.007vh] leading-[1.309vh] uppercase font-silkscreen text-white">
          [Directive / Builds / Main]
        </div>
      </div>
    </div>
  );
}
