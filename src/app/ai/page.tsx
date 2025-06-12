"use client";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeaderNavBar from "@/components/Header";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import FlowingMenu from "@/components/ui/flowing-menu";
import { cn } from "@/lib/utils";
import { desc, image } from "framer-motion/client";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import React, { useState, useRef } from "react";

export default function AIPage() {
  const [activeCognitionIndex, setActiveCognitionIndex] =
    useState<string>("group_1");
  const [previousCognitionIndex, setPreviousCognitionIndex] =
    useState<string>("group_1");

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const getActiveIndex = () => {
    return cognitionCoreItems.findIndex(
      (item) => item.image === activeCognitionIndex
    );
  };

  const getPreviousIndex = () => {
    return cognitionCoreItems.findIndex(
      (item) => item.image === previousCognitionIndex
    );
  };

  const handleCognitionClick = (newIndex: string) => {
    setPreviousCognitionIndex(activeCognitionIndex);
    setActiveCognitionIndex(newIndex);
  };

  const demoItems = [
    {
      link: "#",
      text: "Problem Framing",
      image: "https://picsum.photos/600/400?random=1",
      ind: "1",
    },
    {
      link: "#",
      text: "Data Discovery",
      image: "https://picsum.photos/600/400?random=2",
      ind: "2",
    },
    {
      link: "#",
      text: "Model Selection & Design",
      image: "https://picsum.photos/600/400?random=3",
      ind: "3",
    },
    {
      link: "#",
      text: "Training & Evaluation",
      image: "https://picsum.photos/600/400?random=4",
      ind: "4",
    },
    {
      link: "#",
      text: "Fine-Tuning",
      image: "https://picsum.photos/600/400?random=4",
      ind: "5",
    },
    {
      link: "#",
      text: "Deployment",
      image: "https://picsum.photos/600/400?random=4",
      ind: "6",
    },
    {
      link: "#",
      text: "Monitoring & Support",
      image: "https://picsum.photos/600/400?random=4",
      ind: "7",
    },
  ];

  const cognitionCoreItems = [
    {
      image: "group_1",
    },
    {
      image: "group_2",
    },
    {
      image: "group_3",
    },
    {
      image: "group_4",
    },
    {
      image: "group_5",
    },
    {
      image: "group_6",
    },
    {
      image: "group_7",
    },
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

  const handleBookCallClick = () => {
    window.open("https://cal.com/coullax/30min", "_blank");
  };

  return (
    <div className=" w-full">
      <div
        ref={heroRef}
        className=" w-full h-dvh bg-[#effaff] relative overflow-hidden"
      >
        {/* header */}
        <HeaderNavBar />

        <div className=" w-[90%] max-w-[1550px] mx-auto flex flex-col items-center justify-center">
          <div className=" w-full flex flex-col items-center justify-center mt-[150px]">
            <Image
              src="/ai/aiIcon.svg"
              alt="AI Icon"
              width={68.2}
              height={54.4}
              className=" mb-[20px]"
            />
            <h1 className=" w-full font-special-gothic-expanded-one text-[30px] leading-[34.8px] -tracking-[1.5px] uppercase text-center">
              ARTIFICIAL INTELLIGENCE
            </h1>
          </div>
          <div className=" w-full flex flex-col items-center justify-center my-[50px]">
            <h1 className=" font-special-gothic-expanded-one text-[110px] text-center leading-[127.6px] -tracking-[5.5px] uppercase">
              Systems That Learn,
              <br />
              Minds That Scale
            </h1>
            <div className=" font-inclusive-sans text-[36px] text-center leading-[46.8px] uppercase py-[47px]">
              we build/ integrate AI that thinks, learns, and evolves.
            </div>
            <button
              onClick={handleBookCallClick}
              className="cursor-pointer bg-[#0505cb] py-[25px] px-[86px] text-white uppercase text-[20px] font-silkscreen text-center leading-[19.6px] -tracking-[1px] border-2 border-dashed border-white hover:bg-transparent hover:scale-105 hover:text-[#0505cb] hover:border-[#0505cb] transition-all duration-300 ease-in-out"
            >
              book a call
            </button>
          </div>
        </div>
        <motion.div
          style={{ y: imageY }}
          className=" absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4"
        >
          <Image
            src="/ai/aiHuman.webp"
            alt="AI Human"
            width={822}
            height={709}
          />
        </motion.div>
        <div className=" absolute bottom-0 left-0 w-full">
          <VelocityScroll
            fontSize="font-normal md:text-[35px] md:leading-[1.16] font-silkscreen"
            defaultVelocity={0.2}
            className="text-white !font-inclusive-sans uppercase !text-[20px] !leading-[26px] bg-[#0505cb] py-[20px]"
            numRows={1}
          >
            72% of global organisations are now using AI — a major leap in
            adoption |
          </VelocityScroll>
        </div>
      </div>

      <div className=" py-[100px] w-full">
        <div className=" w-[90%] max-w-[1550px] mx-auto">
          <h1 className=" font-special-gothic-expanded-one text-[96px] leading-[111.4px] -tracking-[4.8px] uppercase mt-[50px]">
            Ritual of Build
          </h1>
          <div className=" my-[50px] text-[15px] leading-[19.5px] font-silkscreen">
            through signal, ritual, and intent — the few become part of the
            whole.
          </div>
          <div className=" font-inclusive-sans text-[40px] leading-[52px] uppercase">
            Working with us is easy. We follow a clear, no
            <br /> fuss process that keeps things moving fast and
            <br /> smooth, from first chat to final delivery.
          </div>

          <FlowingMenu items={demoItems} />
        </div>
      </div>

      <div className=" py-[100px] relative w-full bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            "opacity-25 dark:opacity-25 z-0"
          )}
        />
        <div className=" w-[90%] max-w-[1550px] mx-auto">
          <div className=" w-full py-[50px] mt-[77px]">
            <h1 className=" font-special-gothic-expanded-one text-white text-[96px] leading-[111.4px] -tracking-[4.8px] uppercase">
              cognition core
            </h1>
            <div className=" font-silkscreen text-[15px] leading-[19.5px] uppercase text-white my-[50px]">
              The pulse of artificial thought, <br />
              wired with intention and built to evolve.
            </div>
            <div className=" font-inclusive-sans text-[40px] leading-[52px] uppercase text-white">
              the toolkit we use to build intelligent systems.
              <br />
              from training models to understanding
              <br /> language and deploying AI into the real world.
            </div>
          </div>{" "}
          <div className=" pt-[100px] py-[40px] pr-[40px] ">
            <div className=" w-full grid grid-cols-7 gap-[97.6px] relative">
              {" "}
              <motion.div
                key={activeCognitionIndex}
                initial={{
                  x: getPreviousIndex() * (130 + 97.6),
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  x: getActiveIndex() * (130 + 97.6),
                  opacity: [0, 0.1, 0.1, 0],
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  opacity: {
                    times: [0, 0.3, 0.7, 1],
                    duration: 1.2,
                  },
                }}
                className="bg-[#E0EF29] w-[130px] h-[130px] absolute top-0 left-0 rounded-full"
                style={{
                  filter: "blur(2px)",
                  boxShadow: "0 0 20px rgba(224, 239, 41, 0.2)",
                }}
              />
              {cognitionCoreItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center items-center relative z-10 cursor-pointer"
                  onClick={() => handleCognitionClick(item.image)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    className="bg-[#E0EF29] w-full h-full absolute top-0 left-0 rounded-lg"
                  />

                  <motion.div
                    animate={{
                      scale: activeCognitionIndex === item.image ? 1.1 : 1,
                      rotate:
                        activeCognitionIndex === item.image ? [0, 5, 0] : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={`/ai/cognition/${item.image}_${
                        activeCognitionIndex === item.image ? "yellow" : "white"
                      }.svg`}
                      alt={`Cognition Core ${index + 1}`}
                      width={130}
                      height={130}
                      className="w-full h-auto relative z-20"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className=" mt-[154px]">
              <h1 className=" text-[#e0ef29] font-special-gothic-expanded-one text-[40px] leading-[52px] uppercase">
                Deep Learning Frameworks
              </h1>
              <div className=" mt-[40px] text-[40px] font-inclusive-sans leading-[52px] uppercase text-white">
                We use advanced frameworks like TensorFlow and PyTorch to
                <br />
                build and train powerful AI models.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-[100px] w-full">
        <div className=" w-[90%] max-w-[1550px] mx-auto">
          <div className=" w-full flex flex-row justify-between items-start">
            <h1 className=" font-special-gothic-expanded-one text-[96px] leading-[111.4px] -tracking-[4.8px] uppercase">
              constructs
            </h1>
            <h1 className=" font-special-gothic-expanded-one text-[36px] leading-[41.8px] -tracking-[1.8px] uppercase">
              services
            </h1>
          </div>
          <div className=" font-silkscreen text-[15px] leading-[19.5px] uppercase mt-[30px]">
            Every Construct is a fragment of the Entity,
            <br />
            thinking on your behalf.
          </div>
          <div className=" font-inclusive-sans text-[40px] leading-[52px] my-[50px] uppercase">
            Our services are known as{" "}
            <span className=" font-bold">Constructs</span>.<br />
            systems born from cognition and shaped by signal.
            <br />
            Each Construct is built to learn, evolve, and serve
            <br /> whether it's automating decisions, analyzing
            <br /> complex data, or powering adaptive experiences.
          </div>
          <button
            onClick={handleBookCallClick}
            className="cursor-pointer bg-[#0505cb] py-[25px] px-[86px] text-white uppercase text-[20px] font-silkscreen text-center leading-[19.6px] -tracking-[1px] border-2 border-dashed border-white hover:bg-transparent hover:scale-105 hover:text-[#0505cb] hover:border-[#0505cb] transition-all duration-300 ease-in-out"
          >
            book a call
          </button>
          <div className=" w-full mt-[100px] grid grid-cols-3 gap-[20px]">
            {constructsItems.map((item, index) => (
              <div
                key={index}
                className=" group p-[40px] min-h-[600px] flex flex-col justify-start bg-transparent hover:bg-black border border-black"
              >
                <div>
                  <Image
                    src={`/ai/construct/${item.image}_black.svg`}
                    alt={`Construct ${index + 1}`}
                    width={105}
                    height={105}
                    className=" group-hover:hidden block"
                  />
                  <Image
                    src={`/ai/construct/${item.image}_yellow.svg`}
                    alt={`Construct ${index + 1}`}
                    width={105}
                    height={105}
                    className=" group-hover:block hidden"
                  />
                </div>
                <div className=" mt-[116px]">
                  <h1 className=" font-special-gothic-expanded-one text-[40px] leading-[52px] uppercase group-hover:text-white">
                    {item.title1}
                    <br />
                    {item.title2}
                  </h1>
                  <div className=" font-inclusive-sans text-[24px] leading-[31.2px] uppercase group-hover:text-white mt-[40px]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactUs />

      <Footer />
    </div>
  );
}
