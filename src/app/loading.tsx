"use client";
import { Marquee } from "@/components/magicui/marquee";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Squares from "@/components/reactbits/Squares";
import MetaBalls from "@/components/ui/meta-balls";
import Image from "next/image";
import React from "react";

export default function Loading({setViewLoading}: { setViewLoading: (loading: boolean) => void }) {
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

    // Smooth scroll to the main content section
    setTimeout(() => {
        setViewLoading(true);
      // Scroll to the main content with smooth animation
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 300); // Small delay for visual transition
  };
  return (
    <div className=" w-full">
      <div className=" bg-black h-dvh relative">
        {/* <FlickeringGrid
              className="absolute inset-0 z-0"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
            /> */}
        <Squares
          speed={0.5}
          squareSize={40}
          direction="up"
          borderColor="#6b72803b"
          hoverFillColor="#000000"
        />
        <div className=" z-10 h-[80dvh] w-full absolute top-0 left-0 flex flex-col items-center justify-center">
          <div className=" h-[439px] w-full my-[50px]">
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
            className="font-silkscreen text-[23px] text-center leading-[42px] uppercase text-[#e0ef29] py-[72px]"
          >
            {`Welcome Seeker. we&apos;ve found your Signal.
            traverse the threshold here.`}
          </TypingAnimation>
          {/* <h1 className=" font-silkscreen text-[23px] text-center leading-[42px] uppercase text-[#E0EF29] py-[72px]">
            Welcome Seeker. we&apos;ve found your Signal.
            <br />
            traverse the threshold here.
          </h1> */}
          {/* <Image
            src="/homepage/hero/arrow_white.svg"
            alt="arrow"
            width={40}
            height={71}
            className="animate-bounce"
          /> */}
          <button
            onClick={handleClickEnter}
            className=" bg-[#e0ef29] min-w-[160px] py-[25px] px-[41px] text-[20px] text-center leading-[20px] -tracking-[1px] uppercase font-silkscreen text-[#030303] border border-dashed border-black"
          >
            ENTER
          </button>
        </div>
        <div className=" absolute bottom-0 left-0 right-0 z-10 w-[100%] ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {imageList.map((image, index) => (
              <Image
                key={index}
                src={`/homepage/ForgeCards/${image}`}
                alt="cognitionIcon"
                width={172}
                height={215}
              />
            ))}
          </Marquee>
        </div>
      </div>
      {/* <motion.div
            style={{
              height: useTransform(scrollYProgress1, [0, 0.9], [50, 0]),
              backgroundColor: "#000000",
              position: "relative",
              // marginTop: "100px",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "850%",
                width: "120%",
                left: "0%",
                borderRadius: "0 0 50% 50%",
                backgroundColor: "#000000",
                zIndex: 1000,
                position: "absolute",
                boxShadow: "0px 60px 100px rgba(255, 255, 255, 0.15)",
              }}
              className=" translate-x-[-10%] translate-y-[0%]"
            ></div>
          </motion.div> */}
    </div>
  );
}
