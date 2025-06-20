"use client";
import { Marquee } from "@/components/magicui/marquee";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Squares from "@/components/reactbits/Squares";
import MetaBalls from "@/components/ui/meta-balls";
import Image from "next/image";
import React from "react";

import synthesisIcon_yellow from "../../../public/loading/synthesisIcon_yellow.png";
import motilithIcon_yellow from "../../../public/loading/motilithIcon_yellow.png";
import cognitionIcon_yellow from "../../../public/loading/cognitionIcon_yellow.png";
import consensusIcon_yellow from "../../../public/loading/consensusIcon_yellow.png";
import etherIcon_yellow from "../../../public/loading/etherIcon_yellow.png";
import weaveIcon_yellow from "../../../public/loading/weaveIcon_yellow.png";

export default function Landing({
  setViewLoading,
}: {
  setViewLoading: (loading: boolean) => void;
}) {
  const imageList = [
    synthesisIcon_yellow,
    motilithIcon_yellow,
    cognitionIcon_yellow,
    consensusIcon_yellow,
    etherIcon_yellow,
    weaveIcon_yellow,
  ];

  const handleClickEnter = () => {
    // localStorage.setItem("viewLoadingScreen", "true");
    sessionStorage.setItem("viewLoadingScreen", "true");

    setTimeout(() => {
      setViewLoading(true);
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className=" w-full bg-black">
      <div className=" bg-black h-dvh w-full fixed top-0 left-0 z-20">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="up"
          borderColor="#6b72803b"
          hoverFillColor="#000000"
        />
        <div className=" z-10 h-[80dvh] w-full absolute top-0 left-0 flex flex-col items-center justify-center">
          <div className=" h-[300px] sm:h-[350px] lg:h-[29.662vh] w-full">
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
            startOnView
            supportHTML={true}
            duration={50}
            className="font-silkscreen text-[1.609vh] lg:text-[2.162vh] text-center leading-[1.931vh] lg:leading-[2.811vh] uppercase text-[#e0ef29] my-[4.292vh] sm:my-[4.237vh] lg:my-[4.865vh] h-[4.292vh] sm:h-[4.237vh] lg:h-[5.405vh]"
          >
            {
              "Welcome Seeker. we&apos;ve found your Signal. <br /> traverse the threshold here."
            }
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
          <Marquee pauseOnHover className="[--duration:20s] my-[30px]">
            {imageList.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`icon ${index}`}
                priority
                quality={100}
                height={592.6}
                width={592.6}
                className=" w-auto h-[6.974vh] sm:h-[8.475vh] lg:h-[11.662vh] object-contain mr-[3.219vh] sm:mr-[3.39vh] lg:mr-[5.27vh]"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
