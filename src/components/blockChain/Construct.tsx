import Image from "next/image";
import React from "react";
import { TypingAnimation } from "../magicui/typing-animation";
import ScrollAnimatedText from "../framer/ScrollAnimatedText";
import BookCallBtn from "../universal/BookCallBtn";

export default function Construct() {
      const constructsText = [
    { text: "Our services are known as Constructs ", delay: 0 },
    { text: "decentralized systems born from consensus and", delay: 0.2 },
    { text: "shaped by code. Each Construct is built to evolve,", delay: 0.4 },
    { text: "govern, and serve, whether automating protocol", delay: 0.6 },
    { text: "logic, securing data flows, or powering adaptive", delay: 0.8 },
    { text: "on-chain experiences.", delay: 0.8 }
  ];

  const constructsItems = [
    {
      image: "group_1",
      title1: "Custom AI ",
      title2: "Model creation",
      description:
        "We craft models from the ground up. trained on your data, tuned to your goals, and designed to think like your domain.",
    },
    {
      image: "group_2",
      title1: "AI-Powered",
      title2: "Automation",
      description:
        "We design systems that act without asking — automating the routine, accelerating the complex, and adapting to change in real time.",
    },
    {
      image: "group_3",
      title1: "AI ",
      title2: "Integration",
      description:
        "We embed intelligence into the heart of your existing systems. connecting data, decisions, and users in seamless harmony.",
    },
    {
      image: "group_4",
      title1: "Conversational",
      title2: "AI & Chatbots",
      description:
        "We design intelligent agents that listen, respond, and learn. interfaces that speak in your voice and understand your users.",
    },
    {
      image: "group_5",
      title1: "Predictive",
      title2: "Analytics",
      description:
        "We use advanced frameworks like TensorFlow and PyTorch to build and train powerful AI models.",
    },
    {
      image: "group_6",
      title1: "AI for Business ",
      title2: "Intelligence",
      description:
        "We use advanced frameworks like TensorFlow and PyTorch to build and train powerful AI models.",
    },
  ];

  return (
    <div className=" py-[6.711vh] w-full bg-black">
      <div className=" w-[90%] max-w-[104.027vh] mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-start items-center">
          <h1 className=" font-special-gothic-expanded-one lg:text-[6.443vh] md:text-[5.443vh] text-[2.943vh] lg:leading-[7.477vh] lg:-tracking-[0.322vh] -tracking-[0.122vh] uppercase text-white">
            constructs
          </h1>
          <h1 className=" font-special-gothic-expanded-one lg:text-[2.416vh] md:text-[1.916vh] text-[1.516vh] leading-[2.805vh] -tracking-[0.121vh] uppercase text-white">
            services
          </h1>
        </div>
        <div className=" font-silkscreen text-[1.007vh] leading-[1.309vh] uppercase mt-[2.013vh]">
          <TypingAnimation
            startOnView
            supportHTML={true}
            duration={10}
            className="text-[0.951vh] w-full text-center lg:text-left md:text-[1.271vh] leading-[1.309vh] font-silkscreen text-white"
          >
            {
              "Fed with data, trained with intent — the mind begins to see beyond the static."
            }
          </TypingAnimation>
        </div>
        <div className="font-inclusive-sans lg:text-[2.685vh] md:text-[1.685vh] text-[1.085vh]  leading-[1.09vh] md:leading-[2.49vh] lg:leading-[3.49vh] lg:my-[3.356vh] md:my-[3.056vh]  my-[2.356vh] uppercase text-white text-center lg:text-left">
          {constructsText.map((item, index) => (
            <ScrollAnimatedText key={index} delay={item.delay}>
              {item.text}
            </ScrollAnimatedText>
          ))}
        </div>
        <div className="flex justify-center lg:justify-start">
          <BookCallBtn className="bg-[#ff8410] text-black leading-[1.315vh] -tracking-[0.067vh] border-black hover:bg-transparent hover:scale-105 hover:text-[#ff8410] hover:border-[#ff8410] transition-all duration-300 ease-in-out" />
        </div>
        <div className=" w-full mt-[2.711vh] md:mt-[4.711vh] lg:mt-[6.711vh] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[1.342vh]">
          {constructsItems.map((item, index) => (
            <div
              key={index}
              className=" group p-[0.985vh] lg:p-[2.685vh] md:p-[1.685vh] min-h-[20.268vh] md:min-h-[30.268vh] lg:min-h-[40.268vh] flex flex-col justify-start bg-transparent border border-white overflow-hidden relative"
            >
              <div className=" h-[0px] group-hover:h-[201.342vh] transition-all duration-800 aspect-square rounded-full absolute bottom-0 translate-y-1/2 left-0 -translate-x-1/2 bg-white"></div>
              <div className=" z-10">
                <Image
                  src={`/blockChain/construct/${item.image}_black.svg`}
                  alt={`Construct ${index + 1}`}
                  width={105}
                  height={105}
                  className=" group-hover:hidden block w-[7.047vh] h-[7.047vh] "
                />
                <Image
                  src={`/blockChain/construct/${item.image}_yellow.svg`}
                  alt={`Construct ${index + 1}`}
                  width={105}
                  height={105}
                  className=" group-hover:block hidden w-[7.047vh] h-[7.047vh]"
                />
              </div>
              <div className=" mt-[3.785vh] md:mt-[5.785vh] lg:mt-[7.785vh] z-10">
                <h1 className=" font-special-gothic-expanded-one text-[1.685vh] md:text-[2.085vh] lg:text-[2.685vh] leading-[3.49vh] uppercase group-hover:text-black text-white">
                  {item.title1}
                  <br />
                  {item.title2}
                </h1>
                <div className=" font-inclusive-sans text-[1.611vh] leading-[2.094vh] uppercase group-hover:text-black mt-[2.685vh] text-white">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
