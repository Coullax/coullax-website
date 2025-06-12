"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { TypingAnimation } from "./magicui/typing-animation";
import SplitText from "./reactbits/splitText";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full relative overflow-hidden bg-black py-[18vh]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          "opacity-25 dark:opacity-25 z-0"
        )}
      />
      <div className=" w-[90%] max-w-[1038px] mx-auto">
        <TypingAnimation className="font-silkscreen text-center text-[2vh] text-white ">
          {`[THE SIGNAL FADES, BUT THE CONSTRUCT REMAINS.
              YOU'VE REACHED THE EDGE OF THE KNOWN.
              WHEN YOU'RE READY TO BUILD — WE AWAIT.`}
        </TypingAnimation>

        <SplitText
          text="LIGHT THE SIGNAL"
          className="text-[7vh] font-special-gothic-expanded-one leading-[1.3] text-white text-center py-[5vh] w-full "
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

        {/* <p className="font-silkscreen text-left text-[15px] text-[#000] py-[66px]">
            THE SIGNAL FADES, BUT THE CONSTRUCT REMAINS.
            <br />
            YOU&apos;VE REACHED THE EDGE OF THE KNOWN.
            <br />
            WHEN YOU&apos;RE READY TO BUILD — WE AWAIT.
          </p> */}

        <div className=" flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="z-10 space-y-6 w-full max-w-[1038px] "
          >
            {/* Email Input */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="YOUR EMAIL"
                className="w-full h-[98px] p-2 border-[1.3px] border-[#000] bg-[#242425] focus:outline-none placeholder:!text-white px-[15px] text-white"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="THE MESSAGE"
                rows={4}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="w-full  h-[214px] p-2 border border-[#000]  bg-[#242425] focus:outline-none placeholder:!text-white px-[15px]  text-white"
              />
            </div>

            {/* Submit Button */}
            <div className=" flex flex-col justify-center items-center">
              <p className="font-silkscreen text-left text-[15px] text-white py-[40px]">
                TRANSMISSION ENDED // SYSTEM STANDBY ACTIVE // AWAITING NEW
                SIGNAL...
              </p>

              <button
                type="button"
                className="w-full max-w-[312px] h-[70px] bg-[#e0ef29] text-black py-2 font-silkscreen text-[20px] cursor-pointer hover:bg-transparent transition-all duration-300 hover:scale-105 border-dashed border-black hover:border-[#e0ef29] hover:text-[#e0ef29] border-2 "
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
