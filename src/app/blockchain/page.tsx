"use client";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeaderNavBar from "@/components/Header";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import FlowingMenu from "@/components/ui/flowing-menu";
import { cn } from "@/lib/utils";
import {
  motion,
  useScroll,
  useTransform,
  
} from "framer-motion";
import Image from "next/image";
import React, { useState, useRef,useEffect,useMemo } from "react";
import SplitText from "@/components/reactbits/splitText";
import AnimatedText from "@/components/gsp/AnimatedText";
import TypingEffect from "@/components/gsp/TypingEffect";



export default function BlockchainPage() {
  const [activeCognitionIndex, setActiveCognitionIndex] =
    useState<string>("group_1");
  const [previousCognitionIndex, setPreviousCognitionIndex] =
    useState<string>("group_1");
  const [vhUnit, setVhUnit] = useState(
    typeof window !== "undefined" ? window.innerHeight / 100 : 8
  );

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const cognitionSplitTextMemo = useMemo(
    () => (
      <SplitText
        text="cognition core"
        className=" font-special-gothic-expanded-one text-black text-[6.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase"
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

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  useEffect(() => {
    const updateVhUnit = () => {
      setVhUnit(window.innerHeight / 100);
    };

    let timeoutId: NodeJS.Timeout;
    const throttledUpdateVhUnit = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateVhUnit, 16);
    };

    updateVhUnit();
    window.addEventListener("resize", throttledUpdateVhUnit);
    return () => {
      window.removeEventListener("resize", throttledUpdateVhUnit);
      clearTimeout(timeoutId);
    };
  }, []);

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
      text: "Ideation & Use Case Definition",
      image: "https://picsum.photos/600/400?random=1",
      ind: "1",
    },
    {
      link: "#",
      text: "Technical & Economic Design",
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
      title: "Deep Learning Frameworks",
      description:
        "We use advanced frameworks like TensorFlow and PyTorch to build and train powerful AI models.",
    },
    {
      image: "group_2",
      title: "Natural Language Processing (NLP) Tools",
      description:
        "Tools designed to analyze, understand, and generate human language. They enable applications like chatbots, sentiment analysis, translation, and text summarization.",
    },
    {
      image: "group_3",
      title: "Data Manipulation and Analysis",
      description:
        "Toolkits for cleaning, transforming, and exploring datasets. These are essential for preparing data for machine learning and drawing insights from structured or unstructured information.",
    },
    {
      image: "group_4",
      title: "Cloud-Based Machine Learning Services",
      description:
        "Scalable platforms offered by cloud providers (like AWS, Azure, or Google Cloud) that allow users to build, train, and deploy machine learning models without managing infrastructure.",
    },
    {
      image: "group_5",
      title: "Model Deployment and Serving Platforms",
      description:
        "Systems that host trained AI models and provide APIs or endpoints for real-time inference, ensuring high availability, scalability, and performance in production environments.",
    },
    {
      image: "group_6",
      title: "AI-Assisted Coding Tools",
      description:
        "Intelligent coding assistants that help developers write, debug, and optimize code using machine learning, such as code completion, generation, or review features.",
    },
    {
      image: "group_7",
      title: "AI Model Fine-Tuning",
      description:
        "Techniques and tools used to adapt pre-trained models to specific tasks or datasets, improving accuracy and performance in targeted applications.",
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
        className="w-full h-dvh relative overflow-hidden bg-[radial-gradient(circle_at_50%_102%,#ffbf82,#df730e_11%,#000_57%)]"
      >
        {/* header */}
        <HeaderNavBar
          navItemsStyles="text-white hover:text-white"
          logoColor="white"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" w-[90%] max-w-[104.027vhvh] mx-auto flex flex-col items-center justify-center"
        >
          <div className=" w-full flex flex-col items-center justify-center mt-[13.423vh]">
            <Image
              src="/blockChain/blockchain.png"
              alt="AI Icon"
              width={68.2}
              height={54.4}
              className=" mb-[1.705vh] w-[3.552vw] h-[3.651vh]"
            />
            <h1 className=" w-full font-special-gothic-expanded-one text-[1.563vw] leading-[2.336vh] -tracking-[0.078vw] uppercase text-center text-[#ff8410]">
            BLOCKCHAIN TECHNOLOGY
            </h1>
          </div>
          <div className=" w-full flex flex-col items-center justify-center my-[3.356vh] text-white">
            <h1 className=" font-special-gothic-expanded-one text-[7.383vh] text-center leading-[8.564vh] -tracking-[0.286vw] uppercase">
            The Architecture of 
              <br />
              Decentralized Thought
            </h1>
            <div className=" font-inclusive-sans text-[2.416vh] text-center leading-[3.141vh] uppercase py-[3.154vh]">
            Blockchain engineered to grow, <br></br>
            resilient, autonomous, unstoppable.
            </div>
            <button
              onClick={handleBookCallClick}
              className="cursor-pointer bg-[#ff8410] mh-[4.73vh] py-[1.554vh] px-[4.865vh] text-black uppercase text-[1.622vh] font-silkscreen text-center leading-[1.315vh] -tracking-[0.081vh] border-1 border-dashed border-black hover:bg-transparent hover:scale-105 hover:text-[#ff8410] hover:border-[#ff8410] transition-all duration-300 ease-in-out"
            >
              book a call
            </button>
          </div>
        </motion.div>
        <motion.div
          style={{ y: imageY }}
          className=" absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[12%] w-[55.168vh] h-[47.584vh] overflow-hidden"
        >
          <Image
            src="/blockChain/hero.webp"
            alt="AI Human"
            width={822}
            height={709}
            className=" h-[47.584vh] w-[55.168vh]"
          />
        </motion.div>
        <div className=" absolute bottom-0 left-0 w-full">
          <VelocityScroll
            fontSize="font-normal text-white text-[1.611vh] !font-inclusive-sans uppercase leading-[1.745vh] py-[1.745vh]"
            defaultVelocity={0.2}
            className=" bg-[#0505cb]"
            numRows={1}
          >
            72% of global organisations are now using AI — a major leap in
            adoption |
          </VelocityScroll>
        </div>
      </div>

      <div className="pt-[10.135vh] pb-[13.514vh] w-full bg-black">
        <div className=" w-[90%] max-w-[104.027vh] mx-auto">
          {/* <h1 className=" font-special-gothic-expanded-one text-[6.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase mt-[3.356vh]">
            Ritual of Build
          </h1> */}
          <SplitText
            text=" Ritual of Build"
            className="font-special-gothic-expanded-one text-[6.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase mt-[3.356vh] text-white"
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
          <div className=" my-[3.356vh] text-[1.007vh] leading-[1.309vh] font-silkscreen">
            <TypingEffect
              text="Fed with data, trained with intent — the mind begins to see beyond the static."
              speed={30}
              delay={500}
              className="text-[1.007vh] leading-[1.309vh] font-silkscreen text-white"
            />
          </div>
          <div className=" font-inclusive-sans text-[2.685vh] leading-[3.49vh] uppercase text-white">
            <AnimatedText delay={0}>
            Our blockchain process is more than
            </AnimatedText>
            <AnimatedText delay={0.2}>
            decentralization. It’s about architecting 
            </AnimatedText>
            <AnimatedText delay={0.4}>
            systems that self verify, adapt, and persist.
            </AnimatedText>
            <AnimatedText delay={0.6}>
            From genesis block to scalable
            </AnimatedText>
            <AnimatedText delay={0.8}>
            infrastructure, we engineer protocols
            </AnimatedText>
            <AnimatedText delay={1.0}>
            that encode trust, evolve with consensus,
            </AnimatedText>
            <AnimatedText delay={1.2}>
            and endure with intention.
            </AnimatedText>
          </div>

          <FlowingMenu
            items={demoItems}
            marqueeBackgroundColor="#ff8410"        // Changes marquee background and rounded div text color
            spanTextColor="#000000"                // Changes span text color
            roundedDivBackgroundColor="#000000"    // Changes rounded div background color
            roundedDivTextColor="#ffffff"    // Changes rounded div background color
          />
        </div>
      </div>
      <div className="w-full h-[17.816vh]">
          <VelocityScroll
          defaultVelocity={1}
            className=" font-special-gothic-expanded-one text-[#ff8410] text-center bg-black"
            fontSize="text-[13.872vh] uppercase -tracking-[0.676vh]"
            numRows={1}
          >
           resilient | autonomous | unstoppable
          </VelocityScroll>
          </div>

      <div className=" py-[6.711vh] relative w-full bg-white">
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
          <div className=" w-full py-[3.356vh] mt-[5.168vh]">
            {cognitionSplitTextMemo}
            <div className=" font-silkscreen text-[1.007vh] leading-[1.309vh] uppercase text-black my-[3.356vh]">
              <TypingEffect
                text={`The pulse of decentralized trust, coded with purpose and built to adapt.`}
                speed={30}
                delay={500}
                className="text-[1.007vh] leading-[1.309vh] font-silkscreen"
              />
            </div>{" "}
            <div className=" font-inclusive-sans text-[2.685vh] leading-[3.49vh] uppercase text-black relative">
              <AnimatedText
                key={`cognition-1-${activeCognitionIndex}`}
                delay={0}
              >
                the toolkit we use to build intelligent
              </AnimatedText>
              <AnimatedText  key={`cognition-2-${activeCognitionIndex}`} delay={0.2}>
              blockchain systems spans the full stack
              </AnimatedText>
              <AnimatedText key={`cognition-3-${activeCognitionIndex}`} delay={0.4}>
              from training machine learning models and 
              </AnimatedText>
              <AnimatedText key={`cognition-4-${activeCognitionIndex}`} delay={0.6}>
              integrating decentralized data sources,<br></br> <br></br>
              </AnimatedText>
              <AnimatedText key={`cognition-5-${activeCognitionIndex}`} delay={0.8}>
              to understanding natural language with
              </AnimatedText>
              <AnimatedText key={`cognition-6-${activeCognitionIndex}`} delay={1.0}>
              on-chain logic, and deploying AI-driven 
              </AnimatedText>
              <AnimatedText key={`cognition-7-${activeCognitionIndex}`} delay={1.2}>
              smart contracts into the real world via 
              </AnimatedText>
              <AnimatedText key={`cognition-8-${activeCognitionIndex}`} delay={1.4}>
              decentralized infrastructure.
              </AnimatedText>
            </div>
          </div>{" "}
          <div className=" pt-[6.711vh] py-[2.685vh] pr-[2.083vh] ">
            {" "}
            <div className=" flex flex-row gap-[6.55vh] items-center relative justify-start">
              <motion.div
                key={`${activeCognitionIndex}-${vhUnit}`}
                initial={{
                  x: getPreviousIndex() * (8.725 * vhUnit + 6.55 * vhUnit),
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  x: getActiveIndex() * (8.725 * vhUnit + 6.55 * vhUnit),
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
                className="bg-[#E0EF29] w-[8.725vh] h-[8.725vh] absolute top-0 left-0 rounded-full"
                style={{
                  filter: "blur(2px)",
                  boxShadow: "0 0 20px rgba(224, 239, 41, 0.2)",
                }}
              />
              {cognitionCoreItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex justify-start items-center relative z-10 cursor-pointer"
                  onClick={() => handleCognitionClick("group_" + (index + 1))}
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
                      src={`/blockChain/cognition/${item.image}_${
                        activeCognitionIndex === item.image ? "yellow" : "white"
                      }.svg`}
                      alt={`Cognition Core ${index + 1}`}
                      width={130}
                      height={130}
                      className="relative z-20 w-[8.725vh] h-[8.725vh]"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className=" mt-[10.336vh]">
              <h1 className=" text-black font-special-gothic-expanded-one text-[2.685vh] leading-[3.49vh] uppercase">
                {
                  cognitionCoreItems.find(
                    (item) => item.image === activeCognitionIndex
                  )?.title
                }
              </h1>
              <div className=" mt-[2.685vh] min-h-[11.067vh] text-[2.685vh] font-inclusive-sans leading-[3.49vh] uppercase text-black">
                {
                  cognitionCoreItems.find(
                    (item) => item.image === activeCognitionIndex
                  )?.description
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-[6.711vh] w-full bg-black">
        <div className=" w-[90%] max-w-[104.027vh] mx-auto">
          <div className=" w-full flex flex-row justify-between items-start">
            <h1 className=" font-special-gothic-expanded-one text-[6.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase text-white">
              constructs
            </h1>
            <h1 className=" font-special-gothic-expanded-one text-[2.416vh] leading-[2.805vh] -tracking-[0.121vh] uppercase text-white">
              services
            </h1>
          </div>
          <div className=" font-silkscreen text-[1.007vh] leading-[1.309vh] uppercase mt-[2.013vh]">
            <TypingEffect
              text={`Every Construct is a fragment of the Entity, \n thinking on your behalf.`}
              speed={30}
              delay={500}
              className="text-[1.007vh] leading-[1.309vh] font-silkscreen text-white"
            />
          </div>
          <div className=" font-inclusive-sans text-[2.685vh] leading-[3.49vh] my-[3.356vh] uppercase text-white">
            <AnimatedText
              key={`constructs-1-${activeCognitionIndex}`}
              delay={0}
            >
              Our services are known as Constructs{" "}
            </AnimatedText>
            <AnimatedText
              key={`constructs-2-${activeCognitionIndex}`}
              delay={0.2}
            >
              decentralized systems born from consensus and
            </AnimatedText>
            <AnimatedText
              key={`constructs-3-${activeCognitionIndex}`}
              delay={0.4}
            >
              shaped by code. Each Construct is built to evolve,
            </AnimatedText>
            <AnimatedText
              key={`constructs-4-${activeCognitionIndex}`}
              delay={0.6}
            >
              govern, and serve, whether automating protocol
            </AnimatedText>
            <AnimatedText
              key={`constructs-5-${activeCognitionIndex}`}
              delay={0.8}
            >
              logic, securing data flows, or powering adaptive
            </AnimatedText>
            <AnimatedText
              key={`constructs-6-${activeCognitionIndex}`}
              delay={0.8}
            >
              on-chain experiences.
            </AnimatedText>
          </div>
          <button
            onClick={handleBookCallClick}
            className="cursor-pointer bg-[#ff8410] py-[1.678vh] px-[5.772vh] text-black uppercase text-[1.342vh] font-silkscreen text-center leading-[1.315vh] -tracking-[0.067vh] border-2 border-dashed border-black hover:bg-transparent hover:scale-105 hover:text-[#0505cb] hover:border-[#0505cb] transition-all duration-300 ease-in-out"
          >
            book a call
          </button>
          <div className=" w-full mt-[6.711vh] grid grid-cols-3 gap-[1.342vh]">
            {constructsItems.map((item, index) => (
              <div
                key={index}
                className=" group p-[2.685vh] min-h-[40.268vh] flex flex-col justify-start bg-transparent border border-white overflow-hidden relative"
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
                <div className=" mt-[7.785vh] z-10">
                  <h1 className=" font-special-gothic-expanded-one text-[2.685vh] leading-[3.49vh] uppercase group-hover:text-black text-white">
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

      <ContactUs />

      <Footer />
    </div>
  );
}