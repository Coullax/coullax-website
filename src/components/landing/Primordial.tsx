'use client';
import React from "react";
import SplitText from "../reactbits/splitText";
import TypingEffect from "../gsp/TypingEffect";
import AnimatedText from "../gsp/AnimatedText";
import BookCallBtn from "../BookCallBtn";
import Image from "next/image";

type PrimordialKey =
  | "primordial1"
  | "primordial2"
  | "primordial3"
  | "primordial4"
  | "primordial5";

interface PrimordialProps {
  activePrimordial: PrimordialKey;
  setActivePrimordial: (primordial: PrimordialKey) => void;
}

export default function Primordial({ activePrimordial, setActivePrimordial }: PrimordialProps) {
  const primordials = {
    primordial1: {
      image: "primordial_img_1.webp",
      title: "Efficiency",
      subtitle: "vector",
      description:
        "Our systems are designed to be fast, focused, and streamlined. We aim to reduce waste and increase clarity in every layer of work.",
    },
    primordial2: {
      image: "primordial_img_2.webp",
      title: "Security",
      subtitle: "Pylon",
      description:
        "We ensure everything we build is protected. from data to infrastructure. Security isn't an afterthought, it's the foundation.",
    },
    primordial3: {
      image: "primordial_img_3.webp",
      title: "Transparency",
      subtitle: "veil",
      description:
        "We believe in open systems, honest communication, and traceable actions. Nothing hidden, everything accountable.",
    },
    primordial4: {
      image: "primordial_img_4.webp",
      title: "Connectivity",
      subtitle: "nexus",
      description:
        "We build connections. between people, platforms, and processes. The stronger the link, the stronger the system.",
    },
    primordial5: {
      image: "primordial_img_5.webp",
      title: "adaptability",
      subtitle: "flux",
      description:
        "The world changes fast.  so do we. Our solutions are flexible and built to grow, shift, and evolve with your needs.",
    },
  };

  return (
    <div className=" w-full bg-[#F0F0F0] py-[6.711vh]">
      <div className="w-[90%] max-w-[104.027vh] mx-auto">
        <div className=" w-full flex flex-col md:flex-row justify-between items-start">
          <SplitText
            text="PRIMORDIALs"
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
          <h1 className=" w-full text-center md:text-right text-[1.609vh] md:text-[2.416vh] font-special-gothic-expanded-one leading-[2.146vh] md:leading-[2.805vh] -tracking-[0.043vh] md:-tracking-[0.121vh] uppercase">
            core values
          </h1>
        </div>
        <h1 className=" text-black font-silkscreen pt-[2.146vh] md:pt-[2.013vh] text-[0.644vh] md:text-[1.007vh] md:h-[6.081vh] leading-[1.309vh] uppercase">
          <TypingEffect
            text={`Before thought had form, they carved meaning into the void. \n The first to build. The first to break silence. \n From their glyphs, all creation followed.`}
            speed={30}
            delay={500}
            className="text-[0.644vh] w-full text-center md:text-left md:text-[1.007vh] leading-[1.073vh] md:leading-[1.309vh] font-silkscreen"
          />
        </h1>
        <div className=" mt-[2.146vh] w-full text-center md:text-left md:mt-[3.758vh] text-[1.073vh] md:text-[2.685vh] uppercase font-inclusive-sans leading-[1.609vh] md:leading-[3.49vh]">
          <AnimatedText key={`paramordial-1-${activePrimordial}`} delay={0}>
            Every product we deliver is shaped by a set of principles
          </AnimatedText>
          <AnimatedText key={`paramordial-2-${activePrimordial}`} delay={0.2}>
            that balance vision with precision, value with impact,
          </AnimatedText>
          <AnimatedText key={`paramordial-3-${activePrimordial}`} delay={0.4}>
            and innovation with reliability.
          </AnimatedText>
        </div>
        <div className=" my-[2.682vh] w-full text-center md:text-left md:my-[3.356vh] text-[0.644vh] md:text-[1.007vh] font-silkscreen leading-[1.073vh] md:leading-[1.309vh] uppercase">
          [VECTOR / PYLON / VEIL / NEXUS / FLUX.]
        </div>

        <div className=" w-full flex md:justify-start justify-center py-[2.146vh] md:py-0">
          <BookCallBtn />
        </div>

        <div className="flex flex-row justify-center md:justify-start items-center gap-[1.073vh] md:gap-[1.275vh] my-[2.146vh] md:my-[5.034vh]">
          <div
            className={` ${
              activePrimordial === "primordial1"
                ? "bg-[#dedede]"
                : "bg-transparent"
            } flex justify-center items-center h-[6.974vh] md:h-[10.403vh] aspect-square`}
          >
            <Image
              src="/HomePage/primordials/primordial_1.svg"
              width={155}
              height={155}
              alt="Star"
              className=" cursor-pointer h-[6.974vh] md:h-[10.403vh]  w-[6.974vh] md:w-[10.403vh]"
              onClick={() => setActivePrimordial("primordial1")}
            />
          </div>

          <div
            className={` ${
              activePrimordial === "primordial2"
                ? "bg-[#dedede]"
                : "bg-transparent"
            } flex justify-center items-center h-[6.974vh] md:h-[10.403vh] aspect-square`}
          >
            <Image
              src="/HomePage/primordials/primordial_2.svg"
              width={155}
              height={155}
              alt="Circle"
              className=" cursor-pointer h-[6.974vh] md:h-[10.403vh]  w-[6.974vh] md:w-[10.403vh]"
              onClick={() => setActivePrimordial("primordial2")}
            />
          </div>

          <div
            className={` ${
              activePrimordial === "primordial3"
                ? "bg-[#dedede]"
                : "bg-transparent"
            } flex justify-center items-center h-[6.974vh] md:h-[10.403vh] aspect-square`}
          >
            <Image
              src="/HomePage/primordials/primordial_3.svg"
              width={155}
              height={155}
              alt="Asterisk"
              className=" cursor-pointer h-[6.974vh] md:h-[10.403vh]  w-[6.974vh] md:w-[10.403vh]"
              onClick={() => setActivePrimordial("primordial3")}
            />
          </div>

          <div
            className={` ${
              activePrimordial === "primordial4"
                ? "bg-[#dedede]"
                : "bg-transparent"
            } flex justify-center items-center h-[6.974vh] md:h-[10.403vh] aspect-square`}
          >
            <Image
              src="/HomePage/primordials/primordial_4.svg"
              alt="Triangle"
              width={155}
              height={155}
              className=" cursor-pointer h-[6.974vh] md:h-[10.403vh]  w-[6.974vh] md:w-[10.403vh]"
              onClick={() => setActivePrimordial("primordial4")}
            />
          </div>

          <div
            className={` ${
              activePrimordial === "primordial5"
                ? "bg-[#dedede]"
                : "bg-transparent"
            } flex justify-center items-center h-[6.974vh] md:h-[10.403vh] aspect-square`}
          >
            <Image
              src="/HomePage/primordials/primordial_5.svg"
              alt="Triangle"
              width={155}
              height={155}
              className=" cursor-pointer h-[6.974vh] md:h-[10.403vh] w-[6.974vh] md:w-[10.403vh]"
              onClick={() => setActivePrimordial("primordial5")}
            />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row border-2 border-black justify-between items-start gap-0">
          <div className="aspect-square md:w-[25.034vh] w-full">
            <Image
              src={`/HomePage/primordials/${primordials[activePrimordial].image}`}
              alt="Primordial Image"
              width={373}
              height={373}
              className=" w-full md:w-[25.034vh] object-cover"
            />
          </div>
          <div className=" w-full py-[3.255vh] px-[2.146vh] md:px-0 md:pr-[3.624vh] md:pl-[5.034vh]">
            <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center text-[2.682vh] md:text-[3.221vh] leading-[3.004vh] md:leading-[4.188vh] uppercase">
              <h1 className=" font-special-gothic-expanded-one">
                {primordials[activePrimordial].title}
              </h1>
              <h1 className=" font-silkscreen">
                {primordials[activePrimordial].subtitle}
              </h1>
            </div>
            <div className=" mt-[3.219vh] font-inclusive-sans text-[1.931vh] md:text-[2.685vh] leading-[2.361vh] md:leading-[3.06vh] text-center md:text-left w-full">
              {primordials[activePrimordial].description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
