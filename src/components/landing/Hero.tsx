"use client";
import React, { useState } from "react";
import HeaderNavBar from "../universal/Header";
import DecryptedText from "../reactbits/DecryptedText";
import SplitText from "../reactbits/splitText";

export default function Hero() {
  const [isDecoded, setIsDecoded] = useState<boolean>(false);
  const greakArray = [
    "  ʍιʂʂιΘΠ ⇌ †Θ ΞηʜΔηςΞ ΞϝϝιςιΞηςψ, ʂΞςυяι†ψ, Δηδ †яΔηʂραяΞηςψ ΔςяΘʂʂ",
    "ιηδυʂ†яιΞʂ.  ϻΔκιηϻ †ʜΞ шΘяʟδ Δ ʂϻΔя†Ξя, ϻΘяΞ ςΘηηΞς†Ξδ, Δηδ Δ ʂΔϝΞя ρʟΔςΞ.",
    "†Θ ΔςʜιΞνΞ †ʜιʂ, шΞ вΞʟιΞνΞ ιη †ʜΞ ρΘшΞя Θϝ  [ϾΘǤΠι†ιΘΠ]’ʂ ΞϝϝιςιΞηςψ Δηδ",
    "[ςΘηʂΞηʂυʂ]’ʂ ʂΞςυяι†ψ Δηδ †яΔηʂραяΞηςψ.",
  ];

  const missionArray = [
    {
      text: "Our mission is to enhance efficiency, security, and transparency across ",
      key: "†яΔηʂραяΞης",
    },
    {
      text: "industries.Making the world a smarter, more connected, and a safer place.",
      key: "†яΔηʂς",
    },
    ,
    {
      text: "To achieve this, we believe in the power of Artificial intelligence's efficiency and",
      key: "Δʂρ",
    },
    {
      text: "Blockchain technology's security and transparency.",
      key: "†яΔηʂαяΞης",
    },
  ];

  return (
    <div className="w-full">
      <div className=" w-full bg-[#fff] min-h-dvh py-[2.703vh]">
        {/* Header */}
        <HeaderNavBar />

        <div className="w-[90%] max-w-[104.73vh] h-dvh flex flex-col items-center justify-center mx-auto">
          <SplitText
            text="BUILD THE"
            className=" w-full text-[58px] md:text-[100px] lg:text-[15.456vh] text-center leading-[50px] md:leading-[105px] lg:leading-[17.906vh] -tracking-[0.193vh] lg:-tracking-[0.77vh] text-[#000000] font-special-gothic-expanded-one uppercase"
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
          <SplitText
            text="UNBUILD"
            className=" w-full text-[68px] md:text-[126px] lg:text-[18.243vh] leading-[73px] md:leading-[128px] lg:leading-[15.557vh] -tracking-[0.193vh] md:-tracking-[9.5px] lg:-tracking-[0.966vh] text-[#000000] font-special-gothic-expanded-one uppercase"
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

          <div className="w-full min-h-[9.657vh] lg:min-h-[14.865vh] !font-inclusive-sans !text-[0.858vh] md:!text-[15px] lg:!text-[2.148vh] text-center !leading-[1.609vh] md:!leading-[19px] lg:!leading-[2.811vh] !uppercase !text-black my-[3.219vh] md:my-[60px] lg:my-[5vh]">
            {!isDecoded
              ? greakArray.map((text, index) => (
                  <div key={index}>
                    {text}
                    {index === 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </div>
                ))
              : missionArray.map((line, index) => {
                  if (!line) return null;
                  return (
                    <div key={index}>
                      <DecryptedText
                        text={line.text}
                        speed={100}
                        maxIterations={20}
                        characters={line.key}
                        animateOn="view"
                        className="revealed !text-[14px] md:!text-[15px] lg:!text-[2.148vh] !leading-[1.609vh] md:!leading-[19px] lg:!leading-[2.811vh]"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                      />
                      {index === 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </div>
                  );
                })}
          </div>
          <button
            onClick={() => setIsDecoded(true)}
            type="button"
            className={` bg-[#e0ef29] min-w-[20.94vh] cursor-pointer py-[1.678vh] px-[2.752vh] text-[1.342vh] text-center leading-[1.315vh] -tracking-[0.067vh] uppercase font-silkscreen text-[#030303] border-2 border-dashed border-black ${
              !isDecoded ? "animate-blink" : ""
            }`}
          >
            DECODE THE MESSAGE
          </button>
          <style jsx>{`
            @keyframes blink {
              0%,
              100% {
                background: #e0ef29;
                color: #000000;
                border: 2px dashed #000000;
              }
              50% {
                background: #ffffff;
                color: #000000;
                border: 2px dashed #000000;
              }
            }
            .animate-blink {
              animation: blink 1.5s infinite;
              transition: none !important;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
