"use client";
import { cn } from "@/lib/utils";
import React, { useState, useMemo } from "react";
import SplitText from "./reactbits/splitText";
import TypingEffect from "./gsp/TypingEffect";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // Memoize SplitText so it only re-renders if its props change
  const splitTextMemo = useMemo(
    () => (
      <SplitText
        text="LIGHT THE SIGNAL"
        className="text-[6.443vh] font-special-gothic-expanded-one leading-[7.477vh] text-white text-center py-[4.43vh] w-full "
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
    []
  );

  return (
    <div className="w-full relative overflow-hidden bg-black py-[16.577vh]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          "opacity-25 dark:opacity-25 z-0"
        )}
      />
      <div className=" w-[90%] max-w-[104.027vh] mx-auto">
        <TypingEffect
          text={`THE SIGNAL FADES, BUT THE CONSTRUCT REMAINS. \n YOU'VE REACHED THE EDGE OF THE KNOWN. \n WHEN YOU'RE READY TO BUILD — WE AWAIT.`}
          speed={30}
          delay={500}
          className="font-silkscreen text-center text-[1.342vh] text-white w-full min-h-[6.757vh]"
        />

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
              className="w-full h-[6.577vh] p-[1.007vh] text-[1.342vh]  placeholder:!text-[1.342vh] border-[1.3px] border-[#000] bg-[#242425] focus:outline-none placeholder:!text-white text-white"
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
              className="w-full h-[14.362vh] p-[1.007vh] text-[1.342vh] placeholder:!text-[1.342vh] border border-[#000] bg-[#242425] focus:outline-none placeholder:!text-white text-white"
            />

            <div className=" flex flex-col justify-center items-center">
              <p className="font-silkscreen text-left text-[1.007vh] text-white py-[2.685vh]">
                TRANSMISSION ENDED // SYSTEM STANDBY ACTIVE // AWAITING NEW
                SIGNAL...
              </p>

              <button
                type="submit"
                className="cursor-pointer bg-[#e0ef29] py-[1.544vh] px-[5.067vh] text-black uppercase text-[1.342vh] font-silkscreen text-center leading-[1.315vh] -tracking-[0.067vh] border-2 border-dashed border-black hover:bg-transparent hover:scale-105 hover:text-[#e0ef29] hover:border-[#e0ef29] transition-all duration-300 ease-in-out"
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
