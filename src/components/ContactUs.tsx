"use client";
import { cn } from "@/lib/utils";
import React, { useState, useMemo } from "react";
import SplitText from "./reactbits/splitText";
import { TypingAnimation } from "./magicui/typing-animation";

type ThemeConfig = {
  background: string;
  typingText: string;
  splitText: string;
  formText: string;
  placeholderText: string;
  textBoxBg: string;
  buttonBg: string;
  buttonText: string;
  buttonHoverBg: string;
  buttonHoverText: string;
  buttonBorder: string;
};

// Define valid theme names
type ThemeName = "black" | "white";

// Update themes object with proper typing
const themes: Record<ThemeName, ThemeConfig> = {
  black: {
    textBoxBg: "bg-[#242425]",
    background: "bg-black",
    typingText: "text-white",
    splitText: "text-white",
    formText: "text-white",
    placeholderText: "placeholder:!text-white",
    buttonBg: "bg-[#e0ef29]",
    buttonText: "text-black",
    buttonHoverBg: "hover:bg-transparent",
    buttonHoverText: "hover:text-[#e0ef29]",
    buttonBorder: "border-black hover:border-[#e0ef29]",
  },
  white: {
    textBoxBg: "bg-[#fffbf8]",
    background: "bg-white",
    typingText: "text-black",
    splitText: "text-black",
    formText: "text-black",
    placeholderText: "placeholder:!text-black",
    buttonBg: "bg-[#ff8410]",
    buttonText: "text-black",
    buttonHoverBg: "hover:bg-transparent",
    buttonHoverText: "hover:text-[#ff8410]",
    buttonBorder: "border-black hover:border-[#ff8410]",
  },
};

// Update component props typing
interface ContactUsProps {
  theme?: ThemeName;
}

export default function ContactUs({ theme = "black" }: ContactUsProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const currentTheme = themes[theme] || themes.black;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  // Memoize SplitText so it only re-renders if its props change
  const splitTextMemo = useMemo(
    () => (
      <SplitText
        text="LIGHT THE SIGNAL"
        className={`text-[3.219vh] md:text-[5.932vh] lg:text-[6.443vh] font-special-gothic-expanded-one leading-[3.541vh] md:leading-[7.477vh] -tracking-[0.054vh] md:-tracking-[0.324vh] ${currentTheme.splitText} text-center py-[3.219vh] md:py-[4.43vh] w-full`}
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
    ),
    [currentTheme.splitText]
  );

  return (
    <div
      className={`w-full relative overflow-hidden ${currentTheme.background} py-[16.577vh]`}
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          "opacity-25 dark:opacity-25 z-0"
        )}
      />
      <div className=" w-[90%] md:max-w-[104.027vh] mx-auto">
        <TypingAnimation
          startOnView
          supportHTML={true}
          duration={10}
          className={`font-silkscreen text-center text-[0.751vh] md:text-[1.271vh] lg:text-[1.007vh] leading-[1.073vh] md:leading-[1.309vh] ${currentTheme.typingText} w-full lg:min-h-[6.757vh]`}
        >
          {
            "THE SIGNAL FADES, BUT THE CONSTRUCT REMAINS. <br /> YOU'VE REACHED THE EDGE OF THE KNOWN. <br /> WHEN YOU'RE READY TO BUILD — WE AWAIT."
          }
        </TypingAnimation>

        {splitTextMemo}

        <div className=" flex flex-col justify-center items-center w-full max-w-[69.664vh] mx-auto ">
          <form
            onSubmit={handleSubmit}
            className="z-10 space-y-[2.013vh] w-full"
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="YOUR EMAIL"
              className={`w-full h-[6.577vh] p-[1.007vh] text-[1.288vh] md:text-[1.342vh]  placeholder:!text-[1.342vh] ${currentTheme.placeholderText} ${currentTheme.formText} border-[0.139vh] border-[#000] ${currentTheme.textBoxBg} focus:outline-none `}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <textarea
              id="message"
              name="message"
              placeholder="THE MESSAGE"
              rows={4}
              onChange={(e) => {
                e.preventDefault();
                setMessage(e.target.value);
              }}
              value={message}
              className={`w-full h-[14.362vh] p-[1.007vh] text-[1.288vh] md:text-[1.342vh] ${currentTheme.placeholderText} ${currentTheme.formText} border border-[#000] ${currentTheme.textBoxBg} focus:outline-none`}
            />

            <div className=" flex flex-col justify-center items-center">
              <p
                className={`font-silkscreen text-left text-[0.751vh] md:text-[1.271vh] lg:text-[1.007vh] ${currentTheme.formText} py-[1.073vh] lg:py-[2.685vh]`}
              >
                TRANSMISSION ENDED // SYSTEM STANDBY ACTIVE // AWAITING NEW
                SIGNAL...
              </p>

              <button
                type="submit"
                className={`cursor-pointer ${currentTheme.buttonBg} mt-[2.146vh] md:mt-[3.39vh] lg:mt-0 py-[1.544vh] px-[5.067vh] ${currentTheme.buttonText} uppercase text-[1.342vh] font-silkscreen text-center leading-[1.315vh] -tracking-[0.067vh] border-2 border-dashed ${currentTheme.buttonBorder} ${currentTheme.buttonHoverBg} ${currentTheme.buttonHoverText} transition-all duration-300 ease-in-out`}
              >
                CONTACT US
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
