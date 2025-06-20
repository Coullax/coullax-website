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
            <div className={cn("pt-[10.135vh] lg:pb-[6.757vh] pb-[0.757vh] md:pb-[2.757vh] w-full bg-black", backgroundcolor)}>
                <div className="w-[90%] max-w-[104.027vh] mx-auto text-center lg:text-left">
                    <SplitText
                        text=" Ritual of Build"
                        className={cn("font-special-gothic-expanded-one lg:text-[6.486vh] md:text-[5.443vh]  text-[5.043vh] lg:leading-[7.477vh] md:leading-[6.477vh]  leading-[5.477vh] lg:-tracking-[0.322vh] -tracking-[0.122vh] uppercase  text-black lg:!align-left align-center", splitTextStyle)}
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
                    <div className=" my-[3.356vh] leading-[1.309vh] font-silkscreen">
                        <TypingAnimation
                            startOnView
                            supportHTML={true}
                            duration={10}
                            className={cn("text-[0.951vh] w-full text-center lg:text-left lg:text-[1.041vh]  md:text-[1.000vh] leading-[1.309vh] font-silkscreen text-white", TypingTextColor)}
                        >
                            {typingText}
                        </TypingAnimation>
                    </div>

                    {cognitionText.length > 0 && (
                        <div className={cn("font-inclusive-sans text-[1.885vh] lg:text-[2.685vh] md:text-[2.085vh] leading-[1.89vh] md:leading-[2.89vh] lg:leading-[3.49vh] uppercase text-white lg:text-left text-center", cognitionTextColor)}>
                            {cognitionText.map((line, index) => (
                                <ScrollAnimatedText key={`cognition-${index}`} delay={index * 0.2}>
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
