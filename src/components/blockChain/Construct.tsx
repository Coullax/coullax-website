import Image from "next/image";
import React, { JSX } from "react";
import { TypingAnimation } from "../magicui/typing-animation";
import ScrollAnimatedText from "../framer/ScrollAnimatedText";
import BookCallBtn from "../universal/BookCallBtn";

/**
 * Interface defining the structure of a construct item
 * @interface ConstructItem
 * image - Path to the default state image
 * hoverImage - Path to the hover state image
 * title1 - First part of the service title
 * title2 - Second part of the service title
 * description - Service description text
 */
interface ConstructItem {
  image: string;
  hoverImage: string;
  title1: string;
  title2: string;
  description: string;
}

/**
 * Construct Component
 * 
 * A React component that displays blockchain construct services.
 * Features animated text, service cards with hover effects, and a call-to-action button.
 * 
 * @component
 * @returns {JSX.Element} The rendered Construct component
 */
export default function Construct(): JSX.Element {
  const constructsText = [
    { text: "Our services are known as Constructs ", delay: 0 },
    { text: "decentralized systems born from consensus and", delay: 0.2 },
    { text: "shaped by code. Each Construct is built to evolve,", delay: 0.4 },
    { text: "govern, and serve, whether automating protocol", delay: 0.6 },
    { text: "logic, securing data flows, or powering adaptive", delay: 0.8 },
    { text: "on-chain experiences.", delay: 0.8 },
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
        {/* Header section with title and services label */}
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-start items-center">
          <h1 className=" w-full !text-center lg:!text-left text-[3.219vh] md:text-[5.508vh] font-special-gothic-expanded-one -tracking-[0.215vh] md:-tracking-[0.085vh] lg:leading-[7.477vh] uppercase text-white">
            constructs
          </h1>
          <h1 className=" w-full text-center lg:text-right text-[2.146vh] md:text-[2.416vh] font-special-gothic-expanded-one leading-[2.146vh] lg:leading-[2.805vh] -tracking-[0.043vh] md:-tracking-[0.121vh] uppercase text-white">
            services
          </h1>
        </div>
        
        {/* Animated typing text section */}
        <h1 className=" text-black font-silkscreen pt-[2.146vh] md:pt-[2.966vh] text-[0.644vh] md:text-[1.007vh] md:h-[6.081vh] leading-[1.309vh] uppercase">
          <TypingAnimation
            startOnView
            supportHTML={true}
            duration={10}
            className="text-[0.751vh] md:text-[1.271vh] lg:text-[1.007vh] w-full text-center lg:text-left leading-[0.966vh] md:leading-[1.309vh] font-silkscreen text-white"
          >
            {
              "Fed with data, trained with intent — the mind begins to see beyond the static."
            }
          </TypingAnimation>
        </h1>
        
        {/* Scroll-animated description text */}
        <div className=" mt-[3.219vh] md:mt-[4.237vh] lg:mt-[3.758vh] w-full text-white text-center lg:text-left text-[1.288vh] md:text-[1.864vh] lg:text-[2.685vh] uppercase font-inclusive-sans leading-[1.609vh] md:leading-[2.288vh] lg:leading-[3.49vh]">
          {constructsText.map((item, index) => (
            <ScrollAnimatedText key={index} delay={item.delay}>
              {item.text}
            </ScrollAnimatedText>
          ))}
        </div>
        
        {/* Call-to-action button */}
        <div className="flex justify-center lg:justify-start my-[3.219vh] md:my-[4.237vh] lg:my-[3.356vh]">
          <BookCallBtn className="bg-[#ff8410] text-black leading-[1.315vh] -tracking-[0.067vh] border-black hover:bg-transparent hover:scale-105 hover:text-[#ff8410] hover:border-[#ff8410] transition-all duration-300 ease-in-out" />
        </div>
        
        {/* Grid of construct service cards */}
        <div className=" w-full mt-[2.711vh] md:mt-[4.711vh] lg:mt-[6.711vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.146vh] md:gap-[1.864vh] lg:gap-[1.342vh]">
          {constructsItems.map((item, index) => (
            <ConstructItemCard
              key={index}
              image={`/blockChain/construct/${item.image}_black.svg`}
              hoverImage={`/blockChain/construct/${item.image}_yellow.svg`}
              title1={item.title1}
              title2={item.title2}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * ConstructItemCard Component
 * 
 * A card component that displays individual construct service information.
 * Features hover effects with image transitions and background animations.
 * 
 * @component
 * @param {ConstructItem} props - The component props
 * @param {string} props.image - Path to the default state image
 * @param {string} props.hoverImage - Path to the hover state image
 * @param {string} props.title1 - First part of the service title
 * @param {string} props.title2 - Second part of the service title
 * @param {string} props.description - Service description text
 * @returns {JSX.Element} The rendered ConstructItemCard component
 */
const ConstructItemCard = ({
  image,
  hoverImage,
  title1,
  title2,
  description,
}: ConstructItem): JSX.Element => {
  return (
    <div className=" group p-[1.609vh] lg:p-[2.685vh] md:p-[1.685vh] min-h-[20.268vh] md:min-h-[30.268vh] lg:min-h-[40.268vh] flex flex-col justify-start bg-transparent border border-white overflow-hidden relative">
      {/* Animated background overlay on hover */}
      <div className=" h-[0px] group-hover:h-[201.342vh] transition-all duration-800 absolute bottom-0  left-0  bg-white w-full"></div>
      
      {/* Service icon with hover state transition */}
      <div className=" z-10">
        <Image
          src={image}
          alt={`Construct Image`}
          width={105}
          height={105}
          className=" group-hover:hidden block w-[7.047vh] h-[7.047vh] "
        />
        <Image
          src={hoverImage}
          alt={`Construct Hover Image`}
          width={105}
          height={105}
          className=" group-hover:block hidden w-[7.047vh] h-[7.047vh]"
        />
      </div>
      
      {/* Service content - title and description */}
      <div className=" mt-[3.785vh] md:mt-[5.785vh] lg:mt-[7.785vh] z-10">
        <h1 className="flex flex-col font-special-gothic-expanded-one text-[2.146vh] md:text-[2.085vh] lg:text-[2.685vh] leading-[2.575vh] md:leading-[2.49vh] lg:leading-[3.49vh] uppercase group-hover:text-black text-white">
          <span>{title1}</span>
          <span>{title2}</span>
        </h1>
        <div className=" font-inclusive-sans text-[1.395vh] leading-[1.609vh] lg:leading-[2.094vh] uppercase group-hover:text-black mt-[2.685vh] text-white">
          {description}
        </div>
      </div>
    </div>
  );
};
