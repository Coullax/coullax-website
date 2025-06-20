"use client";
import ContactUs from "@/components/landing/ContactUs";
import Footer from "@/components/universal/Footer";
// import HeaderNavBar from "@/components/universal/Header";
// import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import FlowingMenu from "@/components/ui/flowing-menu";
// import { cn } from "@/lib/utils";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
import React from "react";
import SplitText from "@/components/reactbits/splitText";
// import AnimatedText from "@/components/gsp/AnimatedText";
import TypingEffect from "@/components/gsp/TypingEffect";
// import Hero from "@/components/ai/Hero";
import Construct from "@/components/ai/Construct";
import Cognition from "@/components/ai/Cognition";

export default function AIPage() {
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
  //       text="cognition core"
  //       className=" font-special-gothic-expanded-one text-white text-[6.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase"
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

  // const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
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
      {/* <div
        ref={heroRef}
        className=" w-full h-dvh bg-[#effaff] relative overflow-hidden"
      >
        <HeaderNavBar />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" w-[90%] max-w-[104.027vh] mx-auto flex flex-col items-center justify-center"
        >
          <div className=" w-full flex flex-col items-center justify-center mt-[13.423vh]">
            <Image
              src="/ai/aiIcon.svg"
              alt="AI Icon"
              width={68.2}
              height={54.4}
              className=" mb-[1.705vh] w-[4.608vh] h-[3.651vh]"
            />
            <h1 className=" w-full font-special-gothic-expanded-one text-[2.027vh] leading-[2.336vh] -tracking-[0.101vh] uppercase text-center">
              ARTIFICIAL INTELLIGENCE
            </h1>
          </div>
          <div className=" w-full flex flex-col items-center justify-center my-[3.356vh]">
            <h1 className=" font-special-gothic-expanded-one text-[7.383vh] text-center leading-[8.564vh] -tracking-[0.372vh] uppercase">
              Systems That Learn,
              <br />
              Minds That Scale
            </h1>
            <div className=" font-inclusive-sans text-[2.416vh] text-center leading-[3.141vh] uppercase py-[3.154vh]">
              we build/ integrate AI that thinks, learns, and evolves.
            </div>
            <button
              onClick={handleBookCallClick}
              className="cursor-pointer bg-[#0505cb] mh-[70px] py-[1.678vh] px-[4.865vh] text-white uppercase text-[1.342vh] font-silkscreen text-center leading-[1.315vh] -tracking-[0.067vh] border-2 border-dashed border-white hover:bg-transparent hover:scale-105 hover:text-[#0505cb] hover:border-[#0505cb] transition-all duration-300 ease-in-out"
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
            src="/ai/aiHuman.webp"
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
      </div> */}
      {/* <Hero /> */}

      <div className=" py-[6.711vh] w-full">
        <div className=" w-[90%] max-w-[104.027vh] mx-auto">
          {/* <h1 className=" font-special-gothic-expanded-one text-[6.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase mt-[3.356vh]">
            Ritual of Build
          </h1> */}
          <SplitText
            text=" Ritual of Build"
            className="font-special-gothic-expanded-one text-[6.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase mt-[3.356vh]"
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
              text="through signal, ritual, and intent — the few become part of the whole."
              speed={30}
              delay={500}
              className="text-[1.007vh] leading-[1.309vh] font-silkscreen"
            />
          </div>
          {/* <div className=" font-inclusive-sans text-[2.685vh] leading-[3.49vh] uppercase">
            <AnimatedText key={`ritual-1-${activeCognitionIndex}`} delay={0}>
              Working with us is easy. We follow a clear, no
            </AnimatedText>
            <AnimatedText key={`ritual-2-${activeCognitionIndex}`} delay={0.2}>
              fuss process that keeps things moving fast and
            </AnimatedText>
            <AnimatedText key={`ritual-3-${activeCognitionIndex}`} delay={0.4}>
              smooth, from first chat to final delivery.
            </AnimatedText>
          </div> */}

          <FlowingMenu items={demoItems} />
        </div>
      </div>

      {/* <div className=" py-[6.711vh] relative w-full bg-black">
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
            <div className=" font-silkscreen text-[1.007vh] leading-[1.309vh] uppercase text-white my-[3.356vh]">
              <TypingEffect
                text={`The pulse of artificial thought, \n wired with intention and built to evolve.`}
                speed={30}
                delay={500}
                className="text-[1.007vh] leading-[1.309vh] font-silkscreen"
              />
            </div>{" "}
            <div className=" font-inclusive-sans text-[2.685vh] leading-[3.49vh] uppercase text-white relative">
              <AnimatedText
                key={`cognition-1-${activeCognitionIndex}`}
                delay={0}
              >
                the toolkit we use to build intelligent systems.
              </AnimatedText>
              <AnimatedText
                key={`cognition-2-${activeCognitionIndex}`}
                delay={0.2}
              >
                from training models to understanding
              </AnimatedText>
              <AnimatedText
                key={`cognition-3-${activeCognitionIndex}`}
                delay={0.4}
              >
                language and deploying AI into the real world.
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
                      src={`/ai/cognition/${item.image}_${
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
              <h1 className=" text-[#e0ef29] font-special-gothic-expanded-one text-[2.685vh] leading-[3.49vh] uppercase">
                {
                  cognitionCoreItems.find(
                    (item) => item.image === activeCognitionIndex
                  )?.title
                }
              </h1>
              <div className=" mt-[2.685vh] min-h-[11.067vh] text-[2.685vh] font-inclusive-sans leading-[3.49vh] uppercase text-white">
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

      {/* <div className=" py-[6.711vh] w-full">
        <div className=" w-[90%] max-w-[104.027vh] mx-auto">
          <div className=" w-full flex flex-row justify-between items-start">
            <SplitText
              text="constructs"
              className=" font-special-gothic-expanded-one text-[6.443vh] leading-[7.477vh] -tracking-[0.322vh] uppercase"
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
            <h1 className=" font-special-gothic-expanded-one text-[2.416vh] leading-[2.805vh] -tracking-[0.121vh] uppercase">
              services
            </h1>
          </div>
          <div className=" font-silkscreen text-[1.007vh] leading-[1.309vh] uppercase mt-[2.013vh]">
            <TypingEffect
              text={`Every Construct is a fragment of the Entity, \n thinking on your behalf.`}
              speed={30}
              delay={500}
              className="text-[1.007vh] leading-[1.309vh] font-silkscreen"
            />
          </div>
          <div className=" font-inclusive-sans text-[2.685vh] leading-[3.49vh] my-[3.356vh] uppercase">
            <AnimatedText
              key={`constructs-1-${activeCognitionIndex}`}
              delay={0}
            >
              Our services are known as{" "}
              <span className=" font-bold">Constructs</span>.
            </AnimatedText>
            <AnimatedText
              key={`constructs-2-${activeCognitionIndex}`}
              delay={0.2}
            >
              systems born from cognition and shaped by signal.
            </AnimatedText>
            <AnimatedText
              key={`constructs-3-${activeCognitionIndex}`}
              delay={0.4}
            >
              Each Construct is built to learn, evolve, and serve
            </AnimatedText>
            <AnimatedText
              key={`constructs-4-${activeCognitionIndex}`}
              delay={0.6}
            >
              whether it&apos;s automating decisions, analyzing
            </AnimatedText>
            <AnimatedText
              key={`constructs-5-${activeCognitionIndex}`}
              delay={0.8}
            >
              complex data, or powering adaptive experiences.
            </AnimatedText>
          </div>
          <button
            onClick={handleBookCallClick}
            className="cursor-pointer bg-[#0505cb] py-[1.678vh] px-[5.772vh] text-white uppercase text-[1.342vh] font-silkscreen text-center leading-[1.315vh] -tracking-[0.067vh] border-2 border-dashed border-white hover:bg-transparent hover:scale-105 hover:text-[#0505cb] hover:border-[#0505cb] transition-all duration-300 ease-in-out"
          >
            book a call
          </button>
          <div className=" w-full mt-[6.711vh] grid grid-cols-3 gap-[1.342vh]">
            {constructsItems.map((item, index) => (
              <div
                key={index}
                className=" group p-[2.685vh] min-h-[40.268vh] flex flex-col justify-start bg-transparent border border-black overflow-hidden relative"
              >
                <div className=" h-[0px] group-hover:h-[201.342vh] transition-all duration-1000 aspect-square rounded-full absolute bottom-0 translate-y-1/2 left-0 -translate-x-1/2 bg-black"></div>
                <div className=" z-10">
                  <Image
                    src={`/ai/construct/${item.image}_black.svg`}
                    alt={`Construct ${index + 1}`}
                    width={105}
                    height={105}
                    className=" group-hover:hidden block w-[7.047vh] h-[7.047vh] "
                  />
                  <Image
                    src={`/ai/construct/${item.image}_yellow.svg`}
                    alt={`Construct ${index + 1}`}
                    width={105}
                    height={105}
                    className=" group-hover:block hidden w-[7.047vh] h-[7.047vh]"
                  />
                </div>
                <div className=" mt-[7.785vh] z-10">
                  <h1 className=" font-special-gothic-expanded-one text-[2.685vh] leading-[3.49vh] uppercase group-hover:text-white">
                    {item.title1}
                    <br />
                    {item.title2}
                  </h1>
                  <div className=" font-inclusive-sans text-[1.611vh] leading-[2.094vh] uppercase group-hover:text-white mt-[2.685vh]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <Construct />

      <ContactUs />

      <Footer />
    </div>
  );
}
