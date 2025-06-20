"use client";
import ContactUs from "@/components/landing/ContactUs";
import Footer from "@/components/universal/Footer";
// import HeaderNavBar from "@/components/universal/Header";
// import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
// import FlowingMenu from "@/components/ui/flowing-menu";
// import { cn } from "@/lib/utils";
// import {
//   motion,

// } from "framer-motion";
// import Image from "next/image";
import React from "react";
// import SplitText from "@/components/reactbits/splitText";
// import AnimatedText from "@/components/gsp/AnimatedText";
// import TypingEffect from "@/components/gsp/TypingEffect";
import Hero from "@/components/blockChain/Hero";

// import AnimatedText from "@/components/gsp/AnimatedText";
// import Spline from '@splinetool/react-spline';
// import { TypingAnimation } from "../../components/magicui/typing-animation"
import RitualBlockchain from "@/components/blockChain/RitualBlockchain";
// import ScrollAnimatedText from "@/components/framer/ScrollAnimatedText";
import Cognition from "@/components/blockChain/Cognition";
import Construct from "@/components/blockChain/Construct";

export default function BlockchainPage() {
  // const demoItems = [
  //   {
  //     link: "#",
  //     text: "Problem Framing",
  //     image: "https://picsum.photos/600/400?random=1",
  //     ind: "1",
  //   },
  //   {
  //     link: "#",
  //     text: "Data Discovery",
  //     image: "https://picsum.photos/600/400?random=2",
  //     ind: "2",
  //   },
  //   {
  //     link: "#",
  //     text: "Model Selection & Design",
  //     image: "https://picsum.photos/600/400?random=3",
  //     ind: "3",
  //   },
  //   {
  //     link: "#",
  //     text: "Training & Evaluation",
  //     image: "https://picsum.photos/600/400?random=4",
  //     ind: "4",
  //   },
  //   {
  //     link: "#",
  //     text: "Fine-Tuning",
  //     image: "https://picsum.photos/600/400?random=4",
  //     ind: "5",
  //   },
  //   {
  //     link: "#",
  //     text: "Deployment",
  //     image: "https://picsum.photos/600/400?random=4",
  //     ind: "6",
  //   },
  //   {
  //     link: "#",
  //     text: "Monitoring & Support",
  //     image: "https://picsum.photos/600/400?random=4",
  //     ind: "7",
  //   },
  // ];

  // const consensusText = [
  //   { text: "the toolkit we use to build intelligent", delay: 0 },
  //   { text: "blockchain systems spans the full stack", delay: 0.2 },
  //   { text: "from training machine learning models and", delay: 0.4 },
  //   { text: "integrating decentralized data sources,\n\n", delay: 0.6 },
  //   { text: "to understanding natural language with", delay: 0.8 },
  //   { text: "on-chain logic, and deploying AI-driven", delay: 1.0 },
  //   { text: "smart contracts into the real world via", delay: 1.2 },
  //   { text: "decentralized infrastructure.", delay: 1.4 },
  // ];

  // const constructsText = [
  //   { text: "Our services are known as Constructs ", delay: 0 },
  //   { text: "decentralized systems born from consensus and", delay: 0.2 },
  //   { text: "shaped by code. Each Construct is built to evolve,", delay: 0.4 },
  //   { text: "govern, and serve, whether automating protocol", delay: 0.6 },
  //   { text: "logic, securing data flows, or powering adaptive", delay: 0.8 },
  //   { text: "on-chain experiences.", delay: 0.8 }
  // ];


  // const [activeCognitionIndex, setActiveCognitionIndex] =
  //   useState<string>("group_1");
  // const [previousCognitionIndex, setPreviousCognitionIndex] =
  //   useState<string>("group_1");
  // const [vhUnit, setVhUnit] = useState(
  //   typeof window !== "undefined" ? window.innerHeight / 100 : 8
  // );

  // const heroRef = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["start start", "end start"],
  // });

  // const cognitionSplitTextMemo = useMemo(
  //   () => (
  //     <SplitText
  //       text="consensus core"
  //       className=" font-special-gothic-expanded-one text-black lg:text-[6.443vh] text-[3.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase"
  //       delay={10}
  //       duration={2}
  //       ease="power3.out"
  //       splitType="chars"
  //       from={{ opacity: 0, y: 40 }}
  //       to={{ opacity: 1, y: 0 }}
  //       threshold={0.1}
  //       rootMargin="-100px"
  //       textAlign="center"
  //     />
  //   ),
  //   []
  // );

  // const imageY = useTransform(scrollYProgress, [0.1, 0.6], [540, 220]);
  // const splineY = useTransform(scrollYProgress, [0.1, 0.6], [540, -370]);

  // useEffect(() => {
  //   const updateVhUnit = () => {
  //     setVhUnit(window.innerHeight / 100);
  //   };

  //   let timeoutId: NodeJS.Timeout;
  //   const throttledUpdateVhUnit = () => {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(updateVhUnit, 16);
  //   };

  //   updateVhUnit();
  //   window.addEventListener("resize", throttledUpdateVhUnit);
  //   return () => {
  //     window.removeEventListener("resize", throttledUpdateVhUnit);
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  // const getActiveIndex = () => {
  //   return cognitionCoreItems.findIndex(
  //     (item) => item.image === activeCognitionIndex
  //   );
  // };

  // const getPreviousIndex = () => {
  //   return cognitionCoreItems.findIndex(
  //     (item) => item.image === previousCognitionIndex
  //   );
  // };
  // const handleCognitionClick = (newIndex: string) => {
  //   setPreviousCognitionIndex(activeCognitionIndex);
  //   setActiveCognitionIndex(newIndex);
  // };




  // const cognitionCoreItems = [
  //   {
  //     image: "group_1",
  //     title: "Deep Learning Frameworks",
  //     description:
  //       "We use advanced frameworks like TensorFlow and PyTorch to build and train powerful AI models.",
  //   },
  //   {
  //     image: "group_2",
  //     title: "Natural Language Processing (NLP) Tools",
  //     description:
  //       "Tools designed to analyze, understand, and generate human language. They enable applications like chatbots, sentiment analysis, translation, and text summarization.",
  //   },
  //   {
  //     image: "group_3",
  //     title: "Data Manipulation and Analysis",
  //     description:
  //       "Toolkits for cleaning, transforming, and exploring datasets. These are essential for preparing data for machine learning and drawing insights from structured or unstructured information.",
  //   },
  //   {
  //     image: "group_4",
  //     title: "Cloud-Based Machine Learning Services",
  //     description:
  //       "Scalable platforms offered by cloud providers (like AWS, Azure, or Google Cloud) that allow users to build, train, and deploy machine learning models without managing infrastructure.",
  //   },
  //   {
  //     image: "group_5",
  //     title: "Model Deployment and Serving Platforms",
  //     description:
  //       "Systems that host trained AI models and provide APIs or endpoints for real-time inference, ensuring high availability, scalability, and performance in production environments.",
  //   },
  //   {
  //     image: "group_6",
  //     title: "AI-Assisted Coding Tools",
  //     description:
  //       "Intelligent coding assistants that help developers write, debug, and optimize code using machine learning, such as code completion, generation, or review features.",
  //   },
  //   {
  //     image: "group_7",
  //     title: "AI Model Fine-Tuning",
  //     description:
  //       "Techniques and tools used to adapt pre-trained models to specific tasks or datasets, improving accuracy and performance in targeted applications.",
  //   },
  // ];

  // const constructsItems = [
  //   {
  //     image: "group_1",
  //     title1: "Custom AI ",
  //     title2: "Model creation",
  //     description:
  //       "We craft models from the ground up. trained on your data, tuned to your goals, and designed to think like your domain.",
  //   },
  //   {
  //     image: "group_2",
  //     title1: "AI-Powered",
  //     title2: "Automation",
  //     description:
  //       "We design systems that act without asking — automating the routine, accelerating the complex, and adapting to change in real time.",
  //   },
  //   {
  //     image: "group_3",
  //     title1: "AI ",
  //     title2: "Integration",
  //     description:
  //       "We embed intelligence into the heart of your existing systems. connecting data, decisions, and users in seamless harmony.",
  //   },
  //   {
  //     image: "group_4",
  //     title1: "Conversational",
  //     title2: "AI & Chatbots",
  //     description:
  //       "We design intelligent agents that listen, respond, and learn. interfaces that speak in your voice and understand your users.",
  //   },
  //   {
  //     image: "group_5",
  //     title1: "Predictive",
  //     title2: "Analytics",
  //     description:
  //       "We use advanced frameworks like TensorFlow and PyTorch to build and train powerful AI models.",
  //   },
  //   {
  //     image: "group_6",
  //     title1: "AI for Business ",
  //     title2: "Intelligence",
  //     description:
  //       "We use advanced frameworks like TensorFlow and PyTorch to build and train powerful AI models.",
  //   },
  // ];

  // const handleBookCallClick = () => {
  //   window.open("https://cal.com/coullax/30min", "_blank");
  // };

  return (
    <div className=" w-full">
      <Hero />


      <RitualBlockchain/>

      
      {/* <div className="pt-[10.135vh] pb-[13.514vh] w-full bg-black">
        <div className=" w-[90%] max-w-[104.027vh] mx-auto">
          <SplitText
            text=" Ritual of Build"
            className="font-special-gothic-expanded-one lg:text-[6.443vh] text-[4.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase mt-[3.356vh] text-white"
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
              className="text-[0.751vh] w-full text-center lg:text-left md:text-[1.271vh] leading-[1.309vh] font-silkscreen text-white"
            >
              {
                "Fed with data, trained with intent — the mind begins to see beyond the static."
              }
            </TypingAnimation>
          </div>
          <div className=" font-inclusive-sans text-[1.685vh] lg:text-[2.685vh] leading-[3.49vh] uppercase text-white">
            <AnimatedText key={`cognition-1-${activeCognitionIndex}`} delay={0}>
              Our blockchain process is more than
            </AnimatedText>
            <AnimatedText
              key={`cognition-2-${activeCognitionIndex}`}
              delay={0.2}
            >
              decentralization. It’s about architecting
            </AnimatedText>
            <AnimatedText
              key={`cognition-3-${activeCognitionIndex}`}
              delay={0.4}
            >
              systems that self verify, adapt, and persist.
            </AnimatedText>
            <AnimatedText
              key={`cognition-4-${activeCognitionIndex}`}
              delay={0.6}
            >
              From genesis block to scalable
            </AnimatedText>
            <AnimatedText
              key={`cognition-5-${activeCognitionIndex}`}
              delay={0.8}
            >
              infrastructure, we engineer protocols
            </AnimatedText>
            <AnimatedText
              key={`cognition-6-${activeCognitionIndex}`}
              delay={1.0}
            >
              that encode trust, evolve with consensus,
            </AnimatedText>
            <AnimatedText
              key={`cognition-7-${activeCognitionIndex}`}
              delay={1.2}
            >
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
       </div> */}

      {/* <div className=" py-[6.711vh] relative w-full bg-white">
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
              <TypingAnimation
                startOnView
                supportHTML={true}
                duration={10}
                className="text-[0.751vh] w-full text-center lg:text-left md:text-[1.271vh] leading-[1.309vh] font-silkscreen text-black"
              >
                {
                  "Fed with data, trained with intent — the mind begins to see beyond the static."
                }
              </TypingAnimation>
            </div>{" "}

            <div className="font-inclusive-sans text-[2.685vh] leading-[3.49vh] uppercase text-black relative">
              {consensusText.map((item, index) => (
                <ScrollAnimatedText
                  key={`cognition-${index + 1}-${activeCognitionIndex}`}
                  delay={item.delay}
                >
                  {item.text}
                </ScrollAnimatedText>
              ))}
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
      </div> */}
      <Cognition />

      {/* <div className=" py-[6.711vh] w-full bg-black">
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
              <ScrollAnimatedText
                key={index}
                delay={item.delay}
              >
                {item.text}
              </ScrollAnimatedText>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleBookCallClick}
              className="cursor-pointer bg-[#ff8410] py-[1.278vh] lg:py-[1.678vh] md:px-[4.772vh] px-[3.772vh] lg:px-[5.772vh] text-black uppercase text-[1.342vh] font-silkscreen text-center leading-[1.315vh] -tracking-[0.067vh] border-2 border-dashed border-black hover:bg-transparent hover:scale-105 hover:text-[#ff8410] hover:border-[#ff8410] transition-all duration-300 ease-in-out"
            >
              book a call
            </button>
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
      </div> */}
      <Construct />


      <ContactUs theme="white" />

      <Footer />
    </div>
  );
}