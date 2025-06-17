"use client";
import React from "react";
import SplitText from "../reactbits/splitText";
import { cn } from "@/lib/utils";
import TypingEffect from "../gsp/TypingEffect";
import BookCallBtn from "../BookCallBtn";

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

          {/* THE SUMMON */}
          <SplitText
            text="THE SUMMON"
            className=" text-[#fff] font-special-gothic-expanded-one text-[4.292vh] md:text-[6.486vh] leading-[4.828vh] md:leading-[7.527vh] -tracking-[0.324vh] uppercase"
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

        <h1 className="justify-center text-[1.014vh] pt-[2.027vh] leading-[1.318vh] text-center uppercase font-silkscreen text-white min-h-[5.405vh]">
          <TypingEffect
            text={` Speak, and the signal will reach us. Across realms of silence and syntax, \n your intent will be felt. This is not a form. it is a calling.`}
            speed={30}
            delay={500}
            className=" text-[0.644vh] md:text-[1.014vh] leading-[1.073vh] md:leading-[1.318vh] font-silkscreen"
          />
        </h1>

        <div className="flex justify-center items-center mt-[3.219vh] md:mt-[3.784vh]  ">
          <span className="justify-center text-[1.073vh] md:text-[2.703vh] leading-[1.609vh] md:leading-[3.514vh] text-center uppercase font-inclusive-sans text-white">
            Have a project in mind? Let&apos;s align.<br></br>
            Book a call to explore how we can bring your vision <br></br>
            to life through intelligent systems and <br></br>
            purposeful design.
          </span>
        </div>
        <div className=" z-10 flex flex-col justify-center items-center mt-[3.378vh]">
          <BookCallBtn className="hover:!text-[#e0ef29] z-10 hover:!border-[#e0ef29] transition-all duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
