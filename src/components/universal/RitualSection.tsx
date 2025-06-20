"use client";
import SplitText from "@/components/reactbits/splitText";
import { TypingAnimation } from "@/components/magicui/typing-animation";
// import FlowingMenu from "@/components/ui/flowing-menu";
import ScrollAnimatedText from "../framer/ScrollAnimatedText";
import { cn } from "@/lib/utils";

type RitualSectionProps = {
  demoItems: {
    link: string;
    text: string;
    image: string;
    ind: string;
  }[];
  typingText: string;
  splitTextStyle?: string;
  backgroundcolor?: string;
  TypingTextColor?: string;
  cognitionTextColor?: string;
  cognitionText?: string[];
};

export default function RitualSection({
  // demoItems,
  typingText,
  splitTextStyle = "",
  backgroundcolor = "",
  TypingTextColor = "",
  cognitionTextColor = "",
  cognitionText = [],
}: RitualSectionProps) {
  return (
    <>
      <div
        className={cn(
          "pt-[10.135vh] lg:pb-[6.757vh] pb-[0.757vh] md:pb-[2.757vh] w-full bg-black",
          backgroundcolor
        )}
      >
        <div className="w-[90%] max-w-[104.027vh] mx-auto text-center lg:text-left">
          <SplitText
            text=" Ritual of Build"
            className={cn(
              "w-full !text-center lg:!text-left text-[3.541vh] md:text-[5.508vh] font-special-gothic-expanded-one md:leading-[7.477vh] -tracking-[0.215vh] md:-tracking-[0.212vh] uppercase",
              splitTextStyle
            )}
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
          <div className=" my-[1.609vh] md:my-[2.966vh] lg:my-[3.356vh] leading-[1.309vh] font-silkscreen">
            <TypingAnimation
              startOnView
              supportHTML={true}
              duration={10}
              className={cn(
                "text-[0.751vh] md:text-[1.271vh] lg:text-[1.007vh] w-full text-center lg:text-left leading-[0.966vh] md:leading-[1.309vh] font-silkscreen",
                TypingTextColor
              )}
            >
              {typingText}
            </TypingAnimation>
          </div>

          {cognitionText.length > 0 && (
            <div
              className={cn(
                " pt-[1.609vh] md:pt-[1.695vh] lg-pt-0 w-full text-center lg:text-left text-[1.288vh] md:text-[1.864vh] lg:text-[2.685vh] uppercase font-inclusive-sans leading-[1.609vh] md:leading-[2.288vh] lg:leading-[3.49vh]",
                cognitionTextColor
              )}
            >
              {cognitionText.map((line, index) => (
                <ScrollAnimatedText
                  key={`cognition-${index}`}
                  delay={index * 0.2}
                >
                  {line}
                </ScrollAnimatedText>
              ))}
            </div>
          )}
          {/* 
                    <FlowingMenu
                        items={demoItems}
                        marqueeBackgroundColor="#ff8410"
                        spanTextColor="#000000"
                        roundedDivBackgroundColor="#000000"
                        roundedDivTextColor="#ffffff"
                    /> */}
        </div>
      </div>

      {/* <div className="w-full h-[17.816vh]">
                <VelocityScroll
                    defaultVelocity={1}
                    className=" font-special-gothic-expanded-one text-[#ff8410] text-center bg-black"
                    fontSize="text-[13.872vh] uppercase -tracking-[0.676vh]"
                    numRows={1}
                >
                    {velocityText}
                </VelocityScroll>
            </div> */}
    </>
  );
}
