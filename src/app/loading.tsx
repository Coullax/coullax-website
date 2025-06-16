"use client";
import { Marquee } from "@/components/magicui/marquee";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Squares from "@/components/reactbits/Squares";
import MetaBalls from "@/components/ui/meta-balls";
import Image from "next/image";
import React from "react";

export default function Loading({
  setViewLoading,
}: {
  setViewLoading: (loading: boolean) => void;
}) {
  const imageList = [
    "synthesisIcon_yellow.svg",
    "motilithIcon_yellow.svg",
    "cognitionIcon_yellow.svg",
    "consensusIcon_yellow.svg",
    "etherIcon_yellow.svg",
    "weaveIcon_yellow.svg",
  ];

  const handleClickEnter = () => {
    // localStorage.setItem("viewLoadingScreen", "true");

    setTimeout(() => {
      setViewLoading(true);
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 300);
  };
  return (
    <div className=" w-full">
      <div className=" bg-black h-dvh relative">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="up"
          borderColor="#6b72803b"
          hoverFillColor="#000000"
        />
        <div className=" z-10 h-[80dvh] w-full absolute top-0 left-0 flex flex-col items-center justify-center">
          <div className=" h-[29.662vh] w-full">
            <MetaBalls
              color="#ffffff"
              cursorBallColor="#ffffff"
              cursorBallSize={2}
              ballCount={40}
              animationSize={30}
              enableMouseInteraction={true}
              enableTransparency={true}
              hoverSmoothness={0.109}
              clumpFactor={0.7}
              speed={0.3}
            />
          </div>
          <TypingAnimation
            duration={50}
            className="font-silkscreen text-[2.162vh] text-center leading-[2.811vh] uppercase text-[#e0ef29] py-[4.865vh]"
          >
            {`Welcome Seeker. we&apos;ve found your Signal.
            traverse the threshold here.`}
          </TypingAnimation>

          <button
            onClick={handleClickEnter}
            type="button"
            className=" bg-[#e0ef29] min-w-[10.811vh] py-[1.689vh] px-[1.351vh] text-[1.351vh] text-center leading-[1.324vh] -tracking-[0.068vh] uppercase font-silkscreen text-[#030303] border-2 border-dashed border-black cursor-pointer hover:text-[#e0ef29] hover:bg-transparent hover:border-[#e0ef29] transition-colors duration-300 ease-in-out flex items-center justify-center gap-2"
          >
            ENTER
          </button>
        </div>
        <div className=" absolute bottom-0 left-0 right-0 z-10 w-[100%] ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {imageList.map((image, index) => (
              <div
                key={index}
                style={{
                  width: "12vh",
                  height: "15vh",
                  position: "relative",
                  display: "inline-block",
                }}
                className=" "
              >
                <Image
                  src={`/homepage/ForgeCards/${image}`}
                  alt="cognitionIcon"
                  fill
                  className=" w-[14.527vh] h-[11.642vh] object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
