"use client";

import Image from "next/image";
import Link from "next/link";

import { XIcon } from "lucide-react";

import React, { useRef, useState, useEffect, Suspense } from "react";
import ReviewCard from "@/components/review-card";
import { AnimatePresence } from "motion/react";
import Footer from "@/components/Footer";
import MetaBalls from "@/components/ui/meta-balls";
// import FlowingMenu from "@/components/ui/flowing-menu";
import { motion, useScroll, useTransform } from "framer-motion";
// import { MorphingText } from "@/components/magicui/morphing-text";
// import DecryptedText from "@/components/reactbits/DecryptedText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import { TypingAnimation } from "@/components/magicui/typing-animation";
// import { footer } from "framer-motion/client";
// import { AudioToggle } from "@/components/AudioPlayer";
import dynamic from "next/dynamic";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Marquee } from "@/components/magicui/marquee";
import SplitText from "../components/reactbits/splitText";
import DecryptedText from "../components/reactbits/DecryptedText";
import { view } from "framer-motion/client";
import Loading from "./loading";
import { cn } from "@/lib/utils";

// Dynamically import AudioToggle with no SSR
const AudioToggle = dynamic(
  () => import("@/components/AudioPlayer").then((mod) => mod.AudioToggle),
  { ssr: false }
);

type PhaseKey = "star" | "circle" | "asterisk" | "triangle";
type PrimordialKey =
  | "primordial1"
  | "primordial2"
  | "primordial3"
  | "primordial4"
  | "primordial5";

export default function Home() {
  // const cardRefs = useRef<HTMLDivElement[]>([]);
  // const glowRefs = useRef<HTMLDivElement[]>([]);
  // const contentRefs = useRef<HTMLDivElement[]>([]);
  const [openReviewModal, setOpenReviewModal] = useState<boolean>(false);
  const container1 = useRef(null);
  // const container2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<PhaseKey>("star");
  const container2 = useRef(null);
  const [manualIndex, setManualIndex] = useState<number | null>(null);
  const [isDecoded, setIsDecoded] = useState<boolean>(false);
  // const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [viewLoading, setViewLoading] = useState<boolean>(false);
  const [activePrimordial, setActivePrimordial] =
    useState<PrimordialKey>("primordial1");

  // Handle transition from manual back to automatic morphing
  useEffect(() => {
    if (manualIndex !== null) {
      // After a manual selection, wait a bit then resume automatic morphing
      const timer = setTimeout(() => {
        setManualIndex(null);
      }, 4000); // Resume automatic morphing after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [manualIndex]);

  const navigationList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Case Studies", link: "/case-studies" },
    { name: "Careers", link: "/careers" },
  ];

  const imageList = [
    "motilithIcon_yellow.svg",
    "synthesisIcon_yellow.svg",
    "cognitionIcon_yellow.svg",
    "consensusIcon_yellow.svg",
    "etherIcon_yellow.svg",
    "weaveIcon_yellow.svg",
  ];

  const phases = {
    star: {
      icon: "/HomePage/phase/phase1_image_yellow.svg",
      title: "FIRST LIGHT",
      subtitle: "Initial Phase",
      description:
        "This is where it all begins. The first spark of connection. The moment your vision enters the grid. First Light marks the start of the journey. where your signal is received, and the Forge prepares to shape what comes next.",
      footer:
        "Before the construct. Before the signal. There was the First Light. A rupture in the silence. A flicker through the void. The awakening spark that summoned the Seeker, encoded the vision, and aligned the path.",
    },
    circle: {
      icon: "/HomePage/phase/phase2_image_yellow.svg",
      title: "THE GLYPH",
      subtitle: "Research phase",
      description:
        "With your vision as our compass, we map possibilities, identify needs, and define the system's architecture. Through research, analysis, and strategic planning, we carve the blueprint that guides every layer of what comes next.",
      footer:
        "From the noise, meaning crystallizes. Symbols form. not drawn, but discovered. Each line, a thread of logic. Each curve, a fragment of intent. The Glyph is carved: not to be admired, but to be followed.",
    },
    asterisk: {
      icon: "/HomePage/phase/phase3_image_yellow.svg",
      title: "THE FRAME",
      subtitle: "Building phase",
      description:
        "We now bring the vision to life . shaping interfaces, engineering logic, designing systems that respond and evolve. Whether it's software, brand identity, or workflow design, this is where your solution takes true form.",
      footer:
        "The Forge awakens. Particles assemble. Code and concept bind. Through fire and function, a Construct emerges — not static, but living. Not built to exist, but to move.",
    },
    triangle: {
      icon: "/HomePage/phase/phase4_image_yellow.svg",
      title: "THE ASCENSION",
      subtitle: "Launch & post launch Phase",
      description:
        "We deploy the product to the world. but that's not where it ends. We continue listening, refining, and evolving. Feedback loops guide growth. We ensure it remains aligned, functional, and future ready.",
      footer:
        "The Construct breathes. Signal out. Echo in. What was once blueprint becomes broadcast. And yet, this is not a conclusion — it is a rhythm. A continuum. The Pulse persists.",
    },
  };

  const primordials = {
    primordial1: {
      image: "primordial_img_1.webp",
      title: "Efficiency",
      subtitle: "vector",
      description:
        "This is where it all begins. The first spark of connection. The moment your vision enters the grid. First Light marks the start of the journey. where your signal is received, and the Forge prepares to shape what comes",
    },
    primordial2: {
      image: "primordial_img_2.webp",
      title: "Security",
      subtitle: "Pylon",
      description:
        "This is where it all begins. The first spark of connection. The moment your vision enters the grid. First Light marks the start of the journey. where your signal is received, and the Forge prepares to shape what comes",
    },
    primordial3: {
      image: "primordial_img_3.webp",
      title: "Transparency",
      subtitle: "veil",
      description:
        "This is where it all begins. The first spark of connection. The moment your vision enters the grid. First Light marks the start of the journey. where your signal is received, and the Forge prepares to shape what comes",
    },
    primordial4: {
      image: "primordial_img_4.webp",
      title: "Connectivity",
      subtitle: "nexus",
      description:
        "This is where it all begins. The first spark of connection. The moment your vision enters the grid. First Light marks the start of the journey. where your signal is received, and the Forge prepares to shape what comes",
    },
    primordial5: {
      image: "primordial_img_5.webp",
      title: "adaptability",
      subtitle: "flux",
      description:
        "This is where it all begins. The first spark of connection. The moment your vision enters the grid. First Light marks the start of the journey. where your signal is received, and the Forge prepares to shape what comes",
    },
  };

  // Image sources (original and red versions)
  // const images = {
  //   star: '/images/star.png',
  //   redStar: '/images/red-star.png',
  //   circle: '/images/circle.png',
  //   redCircle: '/images/red-circle.png',
  //   asterisk: '/images/asterisk.png',
  //   redAsterisk: '/images/red-asterisk.png',
  //   triangle: '/images/triangle.png',
  //   redTriangle: '/images/red-triangle.png',
  // };

  // const demoItems = [
  //   {
  //     link: "#",
  //     text: "Precision Engineered",
  //     image: "https://picsum.photos/600/400?random=1",
  //   },
  //   {
  //     link: "#",
  //     text: "Value Driven",
  //     image: "https://picsum.photos/600/400?random=2",
  //   },
  //   {
  //     link: "#",
  //     text: "Battle  Tested",
  //     image: "https://picsum.photos/600/400?random=3",
  //   },
  //   {
  //     link: "#",
  //     text: "Fortified by Design",
  //     image: "https://picsum.photos/600/400?random=4",
  //   },
  // ];

  // const servicesList = [
  //   {
  //     title: "Web & Software Development",
  //     textColor: "text-[#2a3b40]",
  //     background: "bg-[#d4ebf3]",
  //     list: ["Automation Solutions", "Websites & Software", "Mobile Apps"],
  //   },
  //   {
  //     title: "Research",
  //     textColor: "text-[#333a4d]",
  //     background: "bg-[#dbdcfd]",
  //     list: ["Automation Solutions", "Websites & Software", "Mobile Apps"],
  //   },
  //   {
  //     title: "Design & Branding",
  //     textColor: "text-[#244733]",
  //     background: "bg-[#d6f2e8]",
  //     list: ["Automation Solutions", "Websites & Software", "Mobile Apps"],
  //   },
  // ];

  // const processList = [
  //   {
  //     title: "Kickoff",
  //     backGround: "bg-[#ffffff]",
  //     textColor: "text-[#2c4a40]",
  //     description:
  //       "We start with a friendly deep dive, getting to know your goals, ideas, and wildest visions.",
  //   },
  //   {
  //     title: "Blueprint",
  //     backGround: "bg-[#c5d7d8]",
  //     textColor: "text-[#1d3633]",
  //     description:
  //       "We map out the plan. Clear timlelines, smart solutions, and a creative game plan you can vibe with.",
  //   },
  //   {
  //     title: "Build",
  //     backGround: "bg-[#163b31]",
  //     textColor: "text-[#f2fe65]",
  //     description:
  //       "This is where the magic happens. Our team gets to work, blending tech and creativity.",
  //   },
  //   {
  //     title: "Launch & Beyond",
  //     backGround: "bg-[#e0ef29]",
  //     textColor: "text-[#163b31]",
  //     description:
  //       'We don\'t just hit "go" and disappear. We launch, support, and grow with you, every step after.',
  //   },
  // ];

  const reviewList1 = [
    {
      name: "nikodejonghe",
      profile: "/HomePage/review_profile/Mark.svg",
      ratings: "5",
      feedback: "Very good communication and quality of work!",
    },
    {
      name: "cristianodev",
      profile: "/HomePage/review_profile/Mark2.svg",
      ratings: "5",
      feedback:
        "A nice designer, he got the concept right away and he was able to give me multiple revisions until we got the concept we were looking for.",
    },
    {
      name: "jossiecotto",
      profile: "/HomePage/review_profile/Mark4.svg",
      ratings: "5",
      feedback:
        "The artist made sure I got to know the process. He approached to our communication in the best manner and was always taking my references in details. I will keep business with him because I feel confident working with people that have word, talent, high-end skills, and make it easy for first timers. I loved working with him for 4 days, everything was real easy and beautiful!",
    },
    {
      name: "msgeorgiarose",
      profile: "/HomePage/review_profile/Mark5.svg",
      ratings: "5",
      feedback:
        "The output turned out great as coullax was willing to make necessary changes to meet our needs. Would work with them again.",
    },
    {
      name: "jamin",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "Creating an AMAZING NFT Collection. Super prompt, great to work with...SUPERIOR results!!!",
    },
    {
      name: "radamosch",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "Creating an AMAZING NFT Collection. Super prompt, great to work with...SUPERIOR results!!!",
    },
    {
      name: "jaimeko",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "Incredible communication through a very easy process. Will be using again coullax is incredible! Will be able to fulfill all wants and needs!",
    },
    {
      name: "ozziesinatra",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "Incredibly patient & understanding team of artists. I am beyond proud of them & the collection we conceived. Thank you.",
    },
    {
      name: "zac",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "Coullax really went into detail and, although we had a lot of requests, fulfilled them all with great patience. Awesome designs!",
    },
    {
      name: "joelcotterell",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "A real treat to work with. Coullax was patient with my requests and even went the extra mile. I cant recommend Coullax enough. I have fallen in love with the artwork",
    },
  ];

  const reviewList2 = [
    {
      name: "alextima",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "Best experience I've had . Professional and smooth. Communication and understanding of my requests was impressive. Delivered a quality product.",
    },
    {
      name: "joeyaji",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "The Coullax team is very talented, creative and communicative. We had a very large project project of 8000 nfts and the team worked incredibly hard and created a very beautiful collection that will go on to sell out. We will be using them again for our next project. \n" +
        "I recommend them very highly. Thank you Coullax team! Excited to work together again in the future.",
    },
    {
      name: "zac",
      profile: "/HomePage/review_profile/Mark6.svg",
      ratings: "5",
      feedback:
        "Coullax really went into detail and, although we had a lot of requests, fulfilled them all with great patience. Awesome designs!",
    },
    {
      name: "efrencreates",
      profile: "/HomePage/review_profile/Mark7.svg",
      ratings: "5",
      feedback: "very knowledgeable and professional, best I could find!",
    },
    {
      name: "ryanmcgur",
      profile: "/HomePage/review_profile/Mark9.svg",
      ratings: "5",
      feedback:
        "Creating an AMAZING NFT Collection. Super prompt, great to work with...SUPERIOR results!!!",
    },
    {
      name: "shiakch",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "He is the best seller i ve ever meet, trust me. He is very responsive, hard working, and effective. He finish the work within a short time frame with high quality work! Ask him show u around!",
    },
    {
      name: "scottvole",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "Super good communication, was sendt pictures troughout the design to make sure i was happy with the design, altso super well done, exacly what i asked for:fire:",
    },
    {
      name: "workflow",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "This seller was nothing but a charm throughout the whole procedure. I cant say enough how grateful I am for the work and patience that was put into the collection. 10/10 Thank you so much ! def coming back",
    },
    {
      name: "mattnehls",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "really responsive and easy to work with. Couldnt have found a better artist for the job!",
    },
    {
      name: "victor",
      profile: "/HomePage/review_profile/Mark1.svg",
      ratings: "5",
      feedback:
        "The seller has most definitely exceeded my expectations ! He is hands down experienced in his work. Polite, fast replies, careful listener. Would definitely recommend. Can't wait for the full project. Thank you again !",
    },
  ];

  // const brandLogo = [
  //   {
  //     image: "/HomePage/brandLogo/thehidden.png",
  //     height: 65,
  //     width: 267,
  //   },
  //   {
  //     image: "/HomePage/brandLogo/pornopoli.png",
  //     height: 65,
  //     width: 263,
  //   },
  //   {
  //     image: "/HomePage/brandLogo/baddays.png",
  //     height: 65,
  //     width: 173,
  //   },
  //   {
  //     image: "/HomePage/brandLogo/asvoria.png",
  //     height: 65,
  //     width: 245,
  //   },
  //   {
  //     image: "/HomePage/brandLogo/fiverr.png",
  //     height: 65,
  //     width: 214,
  //   },
  //   {
  //     image: "/HomePage/brandLogo/skillcheckerlight.png",
  //     height: 65,
  //     width: 243,
  //   },
  // ];

  // const texts = ["COGNITION", "CONSENSUS", "CONSTRUCT"];
  // const definitions = [
  //   `We engineer intelligent products using artificial<br />intelligence — systems that learn, adapt, and evolve.`,
  //   `We build trusted systems using blockchain technology.<br />Networks that secure, verify, and operate without compromise.`,
  //   `We design and build digital ecosystems. Grounded in research,<br />guided by strategy, and brought to life through thoughtful code and bold identity.`,
  // ];

  const greakArray = [
    "  ʍιʂʂιΘΠ ⇌ †Θ ΞηʜΔηςΞ ΞϝϝιςιΞηςψ, ʂΞςυяι†ψ, Δηδ †яΔηʂραяΞηςψ ΔςяΘʂʂ",
    "ιηδυʂ†яιΞʂ.  ϻΔκιηϻ †ʜΞ шΘяʟδ Δ ʂϻΔя†Ξя, ϻΘяΞ ςΘηηΞς†Ξδ, Δηδ Δ ʂΔϝΞя ρʟΔςΞ.",
    "†Θ ΔςʜιΞνΞ †ʜιʂ, шΞ вΞʟιΞνΞ ιη †ʜΞ ρΘшΞя Θϝ  [ϾΘǤΠι†ιΘΠ]’ʂ ΞϝϝιςιΞηςψ Δηδ",
    "[ςΘηʂΞηʂυʂ]’ʂ ʂΞςυяι†ψ Δηδ †яΔηʂραяΞηςψ.",
  ];

  const missionArray = [
    {text: "Our mission is to enhance efficiency, security, and transparency across ", key: "†яΔηʂραяΞης."},
    {text: "industries.Making the world a smarter, more connected, and a safer place.", key: "†яΔηʂς."},,
    {text: "To achieve this, we believe in the power of Artificial intelligence's efficiency and", key: "Δʂρ."},
    {text: "Blockchain technology's security and transparency.", key: "†яΔηʂαяΞης."},
  ];

  const firstRow = reviewList1.slice(0, reviewList1.length / 2);
  const secondRow = reviewList2.slice(reviewList2.length / 2);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  // const handleActiveIndexChange = (index: number) => {
  //   setActiveIndex(index);
  // };

  // const handleMouseMove = (
  //   e: MouseEvent<HTMLDivElement>,
  //   index: number
  // ): void => {
  //   const card = cardRefs.current[index];
  //   const glow = glowRefs.current[index];
  //   const content = contentRefs.current[index];

  //   if (!card || !glow || !content) return;

  //   const rect = card.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;

  //   const centerX = rect.width / 2;
  //   const centerY = rect.height / 2;

  //   const percentX = (x - centerX) / centerX;
  //   const percentY = -((y - centerY) / centerY);

  //   card.style.transform = `perspective(1000px) rotateY(${percentX * 6
  //     }deg) rotateX(${percentY * 6}deg)`;
  //   content.style.transform = `translateZ(50px)`;
  //   glow.style.opacity = "1";
  //   glow.style.backgroundImage = `
  //     radial-gradient(
  //       circle at ${x}px ${y}px,
  //       #ffffff44,
  //       #0000000f
  //     )
  //   `;
  // };

  // const handleMouseLeave = (index: number): void => {
  //   const card = cardRefs.current[index];
  //   const glow = glowRefs.current[index];
  //   const content = contentRefs.current[index];

  //   if (!card || !glow || !content) return;

  //   card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  //   content.style.transform = "translateZ(0px)";
  //   glow.style.opacity = "0";
  // };

  // const slideUp = {
  //   initial: {
  //     y: 300,
  //   },
  //   enter: {
  //     y: 0,
  //     transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  //   },
  // };

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container1,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2,
    offset: ["start end", "end end"],
  });

  const handleClickEnter = () => {
    // localStorage.setItem("viewLoadingScreen", "true");

    // Smooth scroll to the main content section
    setTimeout(() => {
      setViewLoading(true);
      // Scroll to the main content with smooth animation
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 300); // Small delay for visual transition
  };

  return (
    <div className=" w-full bg-[#fff]">
      {!viewLoading ? (
        <Loading setViewLoading={setViewLoading} />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Hero Section */}

          <div className="w-full">
            <div className=" w-full bg-[#fff] min-h-dvh py-[40px]">
              {/* Header */}
              <div className="w-[90%] max-w-[1550px] flex items-center justify-between mx-auto py-[2.5vh]">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={226}
                  height={25}
                  className="cursor-pointer"
                />
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center gap-[35px] font-bold leading-[23px] font-stretch-normal font-plus-jakarta-sans text-[20px]">
                    {navigationList.map((navigation, index) => (
                      <Link key={index} href={navigation.link}>
                        {navigation.name}
                      </Link>
                    ))}
                    <Suspense>
                      <AudioToggle />
                    </Suspense>
                  </div>
                </div>
              </div>

              <div className="w-[90%] max-w-[1550px] h-[90dvh] flex flex-col items-center justify-center mx-auto">
                <h1 className=" text-[230px] text-center leading-[267px] text-[#000000] font-special-gothic-expanded-one uppercase">
                  BUILD THE
                  <br />{" "}
                  <span className=" text-[286px] leading-[332px] -tracking-[14px]">
                    UNBUILD
                  </span>
                </h1>

                  <span className="w-full !font-inclusive-sans !text-[32px] text-center !leading-[42px] !uppercase !text-black my-[76px]">
                    {!isDecoded ? (
                      greakArray.map((text, index) => (
                        <div key={index}>
                          {text}
                          {index === 1 && (
                            <>
                              <br />
                              <br />
                            </>
                          )}
                        </div>
                      ))
                    ) : (
                      missionArray.map((line: any, index) => (
                        <div key={index}>
                          <DecryptedText
                            text={line.text}
                            speed={100}
                            maxIterations={20}
                            characters={line.key}
                            animateOn="view"
                            className="revealed"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                          />
                          {index === 1 && (
                            <>
                              <br />
                              <br />
                            </>
                          )}
                        </div>
                      ))
                    )}
                  </span>
            <button  onClick={() => setIsDecoded(true)} className=" bg-[#e0ef29] min-w-[312px] py-[25px] px-[41px] text-[20px] text-center leading-[20px] -tracking-[1px] uppercase font-silkscreen text-[#030303] border border-dashed border-black">
              DECODE THE MESSAGE
            </button>
 
              </div>
              {/* <div className="w-[90%] max-w-[1550px] flex items-center justify-between mx-auto py-[2.5vh]">
            <Image
              src="/logo.png"
              alt="logo"
              width={228}
              height={33}
              className="cursor-pointer"
            />

            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center gap-[35px] font-bold leading-[23px] font-stretch-normal font-plus-jakarta-sans text-[20px]">
                {navigationList.map((navigation, index) => (
                  <Link key={index} href={navigation.link}>
                    {navigation.name}
                  </Link>
                ))}
                          <Suspense >
                          <AudioToggle />
                        </Suspense>

              </div>
            </div>
          </div>

          <div className=" w-full">
            <div className=" h-[30vh] mx-auto">
              <MetaBalls
                color="#000"
                cursorBallColor="#000"
                cursorBallSize={2}
                ballCount={40}
                animationSize={30}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.109}
                clumpFactor={0.7}
                speed={0.3}
              />
            </div>{" "}
            <div className=" py-[4vh] w-full flex flex-row justify-center items-center gap-[5px]">
              <div
                onClick={() => {
                  setManualIndex(0);
                  setActiveIndex(0);
                }}
                className={` ${
                  activeIndex === 0 ? "bg-[#f04a34]" : "bg-black"
                } w-[2.5vh] aspect-square rounded-full transition-colors ease-in-out cursor-pointer`}
              ></div>
              <div
                onClick={() => {
                  setManualIndex(1);
                  setActiveIndex(1);
                }}
                className={` ${
                  activeIndex === 1 ? "bg-[#f04a34]" : "bg-black"
                } w-[2.5vh] aspect-square transition-colors ease-in-out cursor-pointer`}
              ></div>
              <div
                onClick={() => {
                  setManualIndex(2);
                  setActiveIndex(2);
                }}
                className={`${
                  activeIndex === 2 ? "bg-[#f04a34]" : "bg-black"
                } h-[31px] aspect-square transition-colors ease-in-out cursor-pointer`}
                style={{
                  width: "2.5vh",
                  height: "2.5vh",
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>
            </div>
            <div className=" w-full h-[23vh]">
              <MorphingText
                texts={texts}
                setActiveIndex={setActiveIndex}
                manualIndex={manualIndex === null ? undefined : manualIndex}
                className="leading-[21vh] text-[20vh] uppercase -tracking-[14px] font-inclusive-sans"
              />
            </div>
            <div className=" w-full h-[11vh] text-center">
              <MorphingText
                texts={definitions}
                setActiveIndex={setActiveIndex}
                manualIndex={manualIndex === null ? undefined : manualIndex}
                className="leading-[2.5vh] my-[8vh] text-[2vh] uppercase font-kode-mono"
              />
            </div>
            <Image
              src="/HomePage/hero/arrow.svg"
              alt="Down arrow"
              className=" mx-auto h-[6vh]"
              width={100}
              height={100}
            />
          </div> */}
        </div>
        {/* <motion.div
          style={{
            height: useTransform(scrollYProgress1, [0, 0.9], [50, 0]),
            backgroundColor: "#FFFFFF",
            position: "relative",
            marginTop: "100px",
            width: "100%",
          }}
        >
          <div
            style={{
              height: "1550%",
              width: "120%",
              left: "0%",
              borderRadius: "0 0 50% 50%",
              backgroundColor: "#FFFFFF",
              zIndex: 999,
              position: "absolute",
              boxShadow: "0px 60px 100px rgba(255, 255, 255, 0.15)",
            }}
            className=" translate-x-[-10%] translate-y-[0%]"
          ></div>
        </motion.div> */}
      </div>
      {/* <div className="w-full h-[61px] relative mt-[80px] overflow-hidden ">
        <VelocityScroll
          fontSize="text-4xl font-normal md:text-[35px] md:leading-[1.16] font-silkscreen"
          defaultVelocity={0.2}
          className="text-[#000] "
          numRows={1}
        >
          AI, Machine Learning, Web3, Data science.Software.Research,
          Chatbot,DeFi,Dapp,AI, Machine Learning, Web3, Data science, Software ,
          Research, Chatbot,DeFiDeFi
          AI, Machine Learning,  Web3, Data science.Software.Research, Chatbot,DeFi,Dapp,AI, Machine Learning,  Web3, Data science, Software , Research, Chatbot,DeFiDeFi


        </VelocityScroll>
      </div> */}
          <motion.div
            // style={{ y: useTransform(scrollYProgress2, [0, 1], [100, 0]) }}
            // ref={container2}
            className="relative w-full bg-[#000000] py-[100px]"
          >
            {/* <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black"> */}
            <div
              className={cn(
                "absolute inset-0",
                "[background-size:20px_20px]",
                "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                "opacity-25 dark:opacity-25 z-0"
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            {/* <div className="pointer-events-none absolute inset-0 flex items-center opacity-15 justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}

            <div className=" z-10 py-[50px] w-[90%] max-w-[1550px] mx-auto">
              <h1 className=" text-white font-silkscreen text-[15px] leading-[20px]">
                Shaped by glyph, born of will. Created in silence, between
                signals.
                <br /> The crucible of ideas, fueled by intent. This is where we
                build the unbuilt.
              </h1>
              <SplitText
                text="THE FORGE"
                className=" mt-[50px] text-white font-special-gothic-expanded-one text-[243px] leading-[282px] -tracking-[12px] uppercase"
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
              <div className=" text-[40px] font-inclusive-sans text-white leading-[52px] uppercase my-[56px]">
                This is where vision meets velocity.
                <br />
                Where raw ideas are melted down, reshaped, and forged
                <br /> into real, working systems. The Forge is Coullax&apos;s
                <br /> creative engine. a space of experimentation,
                <br /> engineering, and relentless iteration.
              </div>
              <button className=" bg-[#e0ef29] min-w-[312px] py-[25px] px-[86px] text-[20px] text-center leading-[20px] -tracking-[1px] uppercase font-silkscreen text-[#030303] border border-dashed border-black">
                BOOK A CALL
              </button>
              <div className=" mt-[100px] z-10">
                <div className=" w-full grid grid-cols-2 gap-[50px] mb-[50px]">
                  <div
                    className=" z-10 w-full py-[30px] px-[32px] min-h-[580px] text-white flex flex-col justify-between items-start bg-transparent "
                    style={{
                      backgroundImage: `url('/HomePage/ForgeCards/aiBackground.webp')`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className=" w-full flex flex-row justify-between items-center">
                      <h1 className=" text-[48px] font-silkscreen leading-[50px] -tracking-[2.4px]">
                        COGNITION
                      </h1>
                      <Image
                        src="/HomePage/ForgeCards/cognitionIcon.svg"
                        width={167}
                        height={99}
                        alt="studiosAndLabsIcon"
                      />
                    </div>
                    <h1 className=" text-[80px] font-special-gothic-expanded-one leading-[93px] -tracking-[4px] uppercase">
                      ARTIFICIAL
                      <br />
                      INTELLIGENCE
                    </h1>
                  </div>
                  <div
                    className=" z-10 w-full py-[30px] px-[32px] min-h-[580px] text-white flex flex-col justify-between items-start"
                    style={{
                      backgroundImage: `url('/HomePage/ForgeCards/blockchainBackground.webp')`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className=" w-full flex flex-row justify-between items-center">
                      <h1 className=" text-[48px] font-silkscreen leading-[50px] -tracking-[2.4px]">
                        CONSENSUS
                      </h1>
                      <Image
                        src="/HomePage/ForgeCards/consensusIcon.svg"
                        width={167}
                        height={99}
                        alt="studiosAndLabsIcon"
                      />
                    </div>
                    <h1 className=" text-[80px] font-special-gothic-expanded-one leading-[93px] -tracking-[4px] uppercase">
                      BLOCKCHAIN
                    </h1>
                  </div>
                </div>
                <div className=" bg-black z-10">
                  <div className=" z-50 my-[50px] border border-white py-[28px] px-[29px] min-h-[365px] text-white flex flex-col justify-between items-start">
                    <h1 className=" text-[40px] font-special-gothic-expanded-one leading-[47px] -tracking-[2px]">
                      STUDIOS AND LABS
                    </h1>
                    <div className="  w-full flex flex-row justify-between items-center">
                      <h1 className=" text-[35px] font-silkscreen leading-[36px] -tracking-[2px]">
                        ETHER
                      </h1>
                      <Image
                        src="/HomePage/ForgeCards/etherIcon.svg"
                        width={167}
                        height={99}
                        alt="studiosAndLabsIcon"
                      />
                    </div>
                  </div>
                </div>
                <div className=" z-10 w-full grid grid-cols-3 gap-[50px] mb-[50px]">
                  <div className="  z-10 w-full bg-white border border-white py-[28px] px-[29px] min-h-[365px] text-black flex flex-col justify-between items-start">
                    <h1 className=" text-[40px] font-special-gothic-expanded-one leading-[47px] -tracking-[2px] uppercase">
                      Web & <br />
                      Software
                    </h1>
                    <div className=" w-full flex flex-row justify-between items-center">
                      <h1 className=" text-[35px] font-silkscreen leading-[36px] -tracking-[2px]">
                        WEAVE
                      </h1>
                      <Image
                        src="/HomePage/ForgeCards/weaveIcon.svg"
                        width={167}
                        height={99}
                        alt="studiosAndLabsIcon"
                      />
                    </div>
                  </div>
                  <div className=" z-10 w-full border bg-black border-white py-[28px] px-[29px] min-h-[365px] text-white flex flex-col justify-between items-start">
                    <h1 className=" text-[40px] font-special-gothic-expanded-one leading-[47px] -tracking-[2px]">
                      Research & <br />
                      Strategy
                    </h1>
                    <div className=" w-full flex flex-row justify-between items-center">
                      <h1 className=" text-[35px] font-silkscreen leading-[36px] -tracking-[2px]">
                        SYNTHESIS
                      </h1>
                      <Image
                        src="/HomePage/ForgeCards/synthesisIcon.svg"
                        width={167}
                        height={99}
                        alt="studiosAndLabsIcon"
                      />
                    </div>
                  </div>
                  <div className=" bg-black z-10 w-full border border-white py-[28px] px-[29px] min-h-[365px] text-white flex flex-col justify-between items-start">
                    <h1 className=" text-[40px] font-special-gothic-expanded-one leading-[47px] -tracking-[2px]">
                      MOBILE <br />
                      DEVELOPMENT
                    </h1>
                    <div className=" w-full flex flex-row justify-between items-center">
                      <h1 className=" text-[35px] font-silkscreen leading-[36px] -tracking-[2px]">
                        MOTILITH
                      </h1>
                      <Image
                        src="/HomePage/ForgeCards/motilithIcon.svg"
                        width={160}
                        height={99}
                        alt="studiosAndLabsIcon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-[15px] leading-[20px] uppercase font-silkscreen text-white">
                [Directive / Builds / Main]
              </div>

              {/* <h1 className=" text-[#E0EF29] text-[153px] font-silkscreen leading-[1.16] -tracking-[7.63px] text-center">
            The Entity Listens...
            <DecryptedText
              text="The Entity Listens..."
              speed={100}
              maxIterations={20}
              characters="ABCD1234!?"
              animateOn="hover"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </h1>
          <div className=" mt-[50px] flex items-center min-h-[114px] justify-center">
            <TypingAnimation className="text-[#E0EF29] text-[15px] font-silkscreen leading-[20px] text-center">
              {`[Signal / Directive / 02A] \n
              The Entity has spoken.Its words drift through noise and time. To hear is not enough.Decode. Understand. Align.`}
            </TypingAnimation>
          </div>
          <div className=" my-[80px] min-h-[545px] text-center">
            {!isDecoded ? (
              greakArray.map((text, index) => (
                <div key={index}>
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={4}
                    blurStrength={20}
                    textClassName=" !text-[#FFFFFF] !text-[52px] !font-inclusive-sans !leading-[68px] !uppercase !font-normal"
                  >
                    {text}
                  </ScrollReveal>
                  {index === 2 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </div>
              ))
            ) : (
              <span className="text-[#FFFFFF] text-[50px] font-inclusive-sans leading-[68px] uppercase font-normal">
                {missionArray.map((line, index) => (
                  <div key={index}>
                    <DecryptedText
                      text={line}
                      speed={100}
                      maxIterations={20}
                      characters="ηψΔϻ†"
                      animateOn="view"
                      className="revealed"
                      parentClassName="all-letters"
                      encryptedClassName="encrypted"
                    />
                    {index === 2 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </div>
                ))}
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setIsDecoded(true)}
              className={` h-[94px] bg-[#e0ef29] cursor-pointer text-black min-w-[422px] text-[20px] leading-[20px] -tracking-[1px] font-silkscreen flex items-center justify-center transition-none gap-2 ${
                !isDecoded ? "animate-blink" : ""
              }`}
            >
              DECODE THE MESSAGE
              <svg
                width="18"
                height="18"
                viewBox="0 0 32 32"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="16,26 6,12 26,12" fill="#000" />
              </svg>
            </button>
          </div>

          <style jsx>{`
            @keyframes blink {
              0%,
              100% {
                background: #e0ef29;
                color: #000000;
                border: 2px solid #000000;
              }
              50% {
                background: #000000;
                color: #e0ef29;
                border: 2px solid #e0ef29;
              }
            }
            .animate-blink {
              animation: blink 1.5s infinite;
              transition: none !important;
            }
          `}</style> */}
            </div>
          </motion.div>
          <VelocityScroll
            fontSize="text-4xl font-normal md:text-[35px] md:leading-[1.16] font-silkscreen"
            defaultVelocity={0.2}
            className="text-white !font-special-gothic-expanded-one uppercase !text-[60px] !leading-[70px] !-tracking-[3px] bg-[#0505cb] py-[30px] "
            numRows={1}
          >
            AI, Machine Learning, Web3, Data science.Software.Research,
            Chatbot,DeFi,Dapp,AI, Machine Learning, Web3, Data science, Software
            , Research, Chatbot,DeFiDeFi
          </VelocityScroll>
          <div className="w-[90%] max-w-[1550px] mx-auto py-[100px]">
            <div className=" w-full flex flex-row justify-between items-start">
              <SplitText
                text="The ritual"
                className=" text-[96px] font-special-gothic-expanded-one leading-[111px] -tracking-[5px] uppercase"
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
              <h1 className=" text-[36px] font-special-gothic-expanded-one leading-[42px] -tracking-[2px] uppercase">
                process
              </h1>
            </div>
            <h1 className=" text-black font-silkscreen pt-[30px] text-[15px] leading-[20px]">
              It begins in stillness. A glyph. A pulse. A knowing.
              <br />
              Not all who enter understand, but all who emerge are changed.
            </h1>
            <div className=" mt-[56px] text-[40px] uppercase font-inclusive-sans leading-[52px]">
              The RITUAL is our process of transformation where
              <br /> abstract ideas, complex technologies, and raw
              <br /> ambition are fused into powerful digital systems.
            </div>
            <div className=" my-[50px] text-[15px] font-silkscreen leading-[20px] uppercase">
              [Firstlight / Schema / Construct / Lift.]
            </div>
            <button className=" bg-[#e0ef29] min-w-[312px] py-[25px] px-[86px] text-[20px] text-center leading-[20px] -tracking-[1px] uppercase font-silkscreen text-[#030303] border border-dashed border-black">
              BOOK A CALL
            </button>
            <div className=" mt-[100px]">
              <div className=" flex flex-row justify-start items-center gap-[30px]">
                <div
                  className={` rounded-full ${
                    activeImage === "star" ? "bg-[#e0ef29]" : "bg-[#d9d9d9]"
                  } h-[22px] aspect-square`}
                ></div>
                <div
                  className={` rounded-full ${
                    activeImage === "circle" ? "bg-[#e0ef29]" : "bg-[#d9d9d9]"
                  } h-[22px] aspect-square`}
                ></div>
                <div
                  className={` rounded-full ${
                    activeImage === "asterisk" ? "bg-[#e0ef29]" : "bg-[#d9d9d9]"
                  } h-[22px] aspect-square`}
                ></div>
                <div
                  className={` rounded-full ${
                    activeImage === "triangle" ? "bg-[#e0ef29]" : "bg-[#d9d9d9]"
                  } h-[22px] aspect-square`}
                ></div>
              </div>
              <div className=" border border-black mt-[40px]">
                <div className="grid grid-cols-4 gap-[90px] pt-[50px] pb-[65px] px-[40px]">
                  <div className="flex justify-center items-center col-span-[300px]">
                    <Image
                      src={
                        activeImage === "star"
                          ? "/HomePage/phase/phase1_image_red.svg"
                          : "/HomePage/phase/phase1_image_black.svg"
                      }
                      width={290}
                      height={290}
                      alt="Star"
                      className=" cursor-pointer"
                      onClick={() => setActiveImage("star")}
                    />
                  </div>

                  <div className="flex justify-center items-center col-span-[300px]">
                    <Image
                      src={
                        activeImage === "circle"
                          ? "/HomePage/phase/phase2_image_red.svg"
                          : "/HomePage/phase/phase2_image_black.svg"
                      }
                      width={290}
                      height={290}
                      alt="Circle"
                      className=" cursor-pointer"
                      onClick={() => setActiveImage("circle")}
                    />
                  </div>

                  <div className="flex justify-center items-center col-span-[300px]">
                    <Image
                      src={
                        activeImage === "asterisk"
                          ? "/HomePage/phase/phase3_image_red.svg"
                          : "/HomePage/phase/phase3_image_black.svg"
                      }
                      width={290}
                      height={290}
                      alt="Asterisk"
                      className=" cursor-pointer"
                      onClick={() => setActiveImage("asterisk")}
                    />
                  </div>

                  <div className="flex justify-center items-center col-span-[300px]">
                    <Image
                      src={
                        activeImage === "triangle"
                          ? "/HomePage/phase/phase4_image_red.svg"
                          : "/HomePage/phase/phase4_image_black.svg"
                      }
                      alt="Triangle"
                      width={290}
                      height={290}
                      className=" cursor-pointer"
                      onClick={() => setActiveImage("triangle")}
                    />
                  </div>
                </div>
                <div className="w-full border-t border-[#000000] py-[28px] px-[29px]">
                  <div className="flex justify-between items-center ">
                    <h2 className="text-[48px] text-black font-special-gothic-expanded-one leading-[56px] -tracking-[2.4px] ">
                      {phases[activeImage].subtitle}
                    </h2>

                    <h2 className="text-[48px] font-bold text-black font-silkscreen -tracking-[2.4px] leading-[56px]">
                      {phases[activeImage].title}
                    </h2>
                  </div>

                  <p className="text-[40px] my-[61px] font-inclusive-sans text-black leading-[48px] ">
                    {phases[activeImage].description}
                  </p>
                  <p className="text-[15px] text-black uppercase leading-[18px] font-silkscreen">
                    {phases[activeImage].footer}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full bg-[#F0F0F0] py-[100px]">
            <div className="w-[90%] max-w-[1550px] mx-auto">
              <div className=" w-full flex flex-row justify-between items-start">
                <SplitText
                  text="PRIMORDIALs"
                  className=" text-[96px] font-special-gothic-expanded-one leading-[111px] -tracking-[5px] uppercase"
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
                <h1 className=" text-[36px] font-special-gothic-expanded-one leading-[42px] -tracking-[2px] uppercase">
                  core values
                </h1>
              </div>
              <h1 className=" text-black font-silkscreen pt-[30px] text-[15px] leading-[20px]">
                Before thought had form, they carved meaning into the void.
                <br />
                The first to build. The first to break silence.
                <br />
                From their glyphs, all creation followed.
              </h1>
              <div className=" mt-[56px] text-[40px] uppercase font-inclusive-sans leading-[52px]">
                Every product we deliver is shaped by a set of principles
                <br /> that balance vision with precision, value with impact,
                <br /> and innovation with reliability.
              </div>
              <div className=" my-[50px] text-[15px] font-silkscreen leading-[20px] uppercase">
                [VECTOR / PYLON / VEIL / NEXUS / FLUX.]
              </div>
              <button className=" bg-[#e0ef29] min-w-[312px] py-[25px] px-[86px] text-[20px] text-center leading-[20px] -tracking-[1px] uppercase font-silkscreen text-[#030303] border border-dashed border-black">
                BOOK A CALL
              </button>
              <div className="flex flex-row justify-start items-center gap-[19px] my-[75px]">
                <div
                  className={` ${
                    activePrimordial === "primordial1"
                      ? "bg-[#dedede]"
                      : "bg-transparent"
                  } flex justify-center items-center h-[155px] aspect-square`}
                >
                  <Image
                    src="/HomePage/primordials/primordial_1.svg"
                    width={155}
                    height={155}
                    alt="Star"
                    className=" cursor-pointer"
                    onClick={() => setActivePrimordial("primordial1")}
                  />
                </div>

                <div
                  className={` ${
                    activePrimordial === "primordial2"
                      ? "bg-[#dedede]"
                      : "bg-transparent"
                  } flex justify-center items-center h-[155px] aspect-square`}
                >
                  <Image
                    src="/HomePage/primordials/primordial_2.svg"
                    width={155}
                    height={155}
                    alt="Circle"
                    className=" cursor-pointer"
                    onClick={() => setActivePrimordial("primordial2")}
                  />
                </div>

                <div
                  className={` ${
                    activePrimordial === "primordial3"
                      ? "bg-[#dedede]"
                      : "bg-transparent"
                  } flex justify-center items-center h-[155px] aspect-square`}
                >
                  <Image
                    src="/HomePage/primordials/primordial_3.svg"
                    width={155}
                    height={155}
                    alt="Asterisk"
                    className=" cursor-pointer"
                    onClick={() => setActivePrimordial("primordial3")}
                  />
                </div>

                <div
                  className={` ${
                    activePrimordial === "primordial4"
                      ? "bg-[#dedede]"
                      : "bg-transparent"
                  } flex justify-center items-center h-[155px] aspect-square`}
                >
                  <Image
                    src="/HomePage/primordials/primordial_4.svg"
                    alt="Triangle"
                    width={155}
                    height={155}
                    className=" cursor-pointer"
                    onClick={() => setActivePrimordial("primordial4")}
                  />
                </div>

                <div
                  className={` ${
                    activePrimordial === "primordial5"
                      ? "bg-[#dedede]"
                      : "bg-transparent"
                  } flex justify-center items-center h-[155px] aspect-square`}
                >
                  <Image
                    src="/HomePage/primordials/primordial_5.svg"
                    alt="Triangle"
                    width={155}
                    height={155}
                    className=" cursor-pointer"
                    onClick={() => setActivePrimordial("primordial5")}
                  />
                </div>
              </div>
              <div className=" flex flex-row border-2 border-black justify-between items-start gap-0">
                <div className=" h-[373px] aspect-square ">
                  <Image
                    src={`/HomePage/primordials/${primordials[activePrimordial].image}`}
                    alt="Primordial Image"
                    width={373}
                    height={373}
                  />
                </div>
                <div className=" w-full py-[45px] px-[50px]">
                  <div className=" flex justify-between items-center text-[48px] leading-[62px] uppercase">
                    <h1 className=" font-special-gothic-expanded-one">
                      {primordials[activePrimordial].title}
                    </h1>
                    <h1 className=" font-silkscreen">
                      {primordials[activePrimordial].subtitle}
                    </h1>
                  </div>
                  <div className=" mt-[30px] font-inclusive-sans text-[40px] leading-[46px] w-full">
                    {primordials[activePrimordial].description}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-[90%] max-w-[1550px] mx-auto ">
        <p className="font-silkscreen text-[16px]  text-[#0505cb] text-right mt-[150px]">
          Node -Sector 01 / Uplink: True
        </p>
        <div className=" flex flex-col items-center ">
          <h1 className=" text-[#0505cb] font-silkscreen text-[275px] relative leading-[1.16] -tracking-[13.75px] text-center">
            The forge
          </h1>
        </div>
        <div className="font-inclusive-sans my-[55px] md:text-[48px] text-[48px] uppercase">
          This is where vision meets velocity.
          <br /> Where raw ideas are melted down, reshaped, and forged into
          real, working systems. The Forge is Coullax&apos;s creative engine. a
          space of experimentation, engineering, and relentless iteration.
        </div>

        <span className="font-silkscreen text-[16px] text-[#0505cb] justify-start ">
          [Coullax / The Forge / Construct.]
        </span>

        <div className="grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-6 mt-[120px] mb-[50px] gap-[50px] ">
          <div
            className="col-span-3 px-[32px] py-[31px] border-2 border-black relative group overflow-hidden"
            onMouseEnter={() => setHoveredCard("cognition")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <Image
                src="/HomePage/service_cover/ai_cover.png"
                alt="AI Cover"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative z-10 h-full">
              <span className="font-silkscreen text-[40px] font-bold group-hover:text-white transition-colors duration-300">
                COGNITION
              </span>
              <div className="flex flex-row justify-between mt-[193px]">
                <span className="font-inclusive-sans text-[35px] group-hover:text-white transition-colors duration-300">
                  Artificial <br></br>Intelligence
                </span>
                <Image
                  src={`/HomePage/ForgeCards/${
                    hoveredCard === "cognition"
                      ? "card1-1-hover.png"
                      : "card1-1.png"
                  }`}
                  alt="Card illustration"
                  width={168}
                  height={99}
                  className="transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div
            className="col-span-3 px-[32px] py-[31px] border-2 border-black relative group overflow-hidden"
            onMouseEnter={() => setHoveredCard("consensus")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <Image
                src="/HomePage/service_cover/blockchain_cover.png"
                alt="Blockchain Cover"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative z-10 h-full">
              <span className="font-silkscreen text-[40px] font-bold group-hover:text-white transition-colors duration-300">
                CONSENSUS
              </span>
              <div className="flex flex-row justify-between mt-[193px]">
                <span className="font-inclusive-sans text-[35px] group-hover:text-white transition-colors duration-300">
                  Blockchain<br></br>Intelligence
                </span>
                <Image
                  src={`/HomePage/ForgeCards/${
                    hoveredCard === "consensus"
                      ? "card1-2-hover.png"
                      : "card1-2.png"
                  }`}
                  alt="Card illustration"
                  width={168}
                  height={99}
                  className="transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div
            className="col-span-2 px-[32px] py-[31px] border-2 border-black relative group overflow-hidden"
            onMouseEnter={() => setHoveredCard("synthesis")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <Image
                src="/HomePage/service_cover/research_cover.png"
                alt="Research Cover"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative z-10 h-full">
              <span className="font-silkscreen text-[40px] font-bold group-hover:text-white transition-colors duration-300">
                SYNTHESIS
              </span>
              <div className="flex flex-row justify-between mt-[165px]">
                <span className="font-inclusive-sans text-[35px] group-hover:text-white transition-colors duration-300">
                  Research & <br></br>Strategy
                </span>
                <Image
                  src={`/HomePage/ForgeCards/${
                    hoveredCard === "synthesis"
                      ? "card1-3-hover.png"
                      : "card1-3.png"
                  }`}
                  alt="Card illustration"
                  width={168}
                  height={99}
                  className="transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div
            className="col-span-2 px-[32px] py-[31px] border-2 border-black relative group overflow-hidden"
            onMouseEnter={() => setHoveredCard("weave")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <Image
                src="/HomePage/service_cover/web_cover.png"
                alt="Web Cover"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative z-10 h-full">
              <span className="font-silkscreen text-[40px] font-bold group-hover:text-white transition-colors duration-300">
                WEAVE
              </span>
              <div className="flex flex-row justify-between mt-[165px]">
                <span className="font-inclusive-sans text-[35px] group-hover:text-white transition-colors duration-300">
                  Web & <br></br>Software
                </span>
                <Image
                  src={`/HomePage/ForgeCards/${
                    hoveredCard === "weave"
                      ? "card1-4-hover.png"
                      : "card1-4.png"
                  }`}
                  alt="Card illustration"
                  width={168}
                  height={99}
                  className="transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div
            className="col-span-2 px-[32px] py-[31px] border-2 border-black relative group overflow-hidden"
            onMouseEnter={() => setHoveredCard("form")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <Image
                src="/HomePage/service_cover/design_cover.png"
                alt="Design Cover"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative z-10 h-full">
              <span className="font-silkscreen text-[40px] font-bold group-hover:text-white transition-colors duration-300">
                FORM
              </span>
              <div className="flex flex-row justify-between mt-[165px]">
                <span className="font-inclusive-sans text-[35px] group-hover:text-white transition-colors duration-300">
                  Design & <br></br>Branding
                </span>
                <Image
                  src={`/HomePage/ForgeCards/${
                    hoveredCard === "form" ? "card1-5-hover.png" : "card1-5.png"
                  }`}
                  alt="Card illustration"
                  width={168}
                  height={99}
                  className="transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <span className="font-silkscreen text-[16px] justify-start ">
          [Coullax / The Forge / Construct.]
        </span>
      </div> */}

          {/* <div className="max-w-full bg-black h-[300px] mt-[50px]"></div> */}

          {/* <div className="bg-[#e0ef29]  pt-[83px]">
        <div className="w-[90%] max-w-[1550px] mx-auto ">
          <div className=" flex justify-between items-start">
            <span className="font-silkscreen text-[64px] relative">
              THE SUMMON
            </span>
            <span className="font-silkscreen text-[15px] ">
              We / Listen / Align / Construct.
            </span>
          </div>
          <div className="font-silkscreen uppercase mt-[85px] mb-[65px]">
            Not all are called.Fewer still respond//connect.If your <br></br>
            intent is true, channel it below.The Entity// We listens.<br></br>
            The threshold responds.
          </div>

          <div className="flex border border-black justify-center items-center mb-[85px]">
            <span className="justify-center text-[52px] text-center uppercase font-inclusive-sans">
              Have a project in mind? Let's align.<br></br>
              Book a call to explore how we can bring your vision <br></br>to
              life through intelligent systems and <br></br>
              purposeful design.
            </span>
          </div>

          <div className=" flex flex-col justify-center items-center ">
            <button
              type="button"
              className="w-full max-w-[422px] h-[94px] bg-[#0505cb] text-[#e0ef29] font-silkscreen text-[20px] mt-[50px] mb-[82.5px]"
            >
              BOOK A CALL
            </button>
          </div>
        </div>
      </div> */}

          <div className="w-full relative  overflow-hidden bg-[#000]  py-[282px]">
            <div className="w-[90%] max-w-[1550px] mx-auto ">
              <div className="w-full flex flex-col items-center">
                {/* <span className="font-silkscreen text-[64px] relative">
              THE SUMMON
            </span> */}
                THE SUMMON
                <SplitText
                  text="THE SUMMON"
                  className=" text-[#fff] font-special-gothic-expanded-one text-[96px]"
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
              </div>

              <div className="flex justify-center items-center mt-[30px]  ">
                <span className="justify-center text-[15px] text-center uppercase font-silkscreen text-white">
                  Speak, and the signal will reach us. Across realms of silence
                  and syntax,<br></br>your intent will be felt. This is not a
                  form. it is a calling.
                </span>
              </div>

              <div className="flex justify-center items-center mt-[56px]  ">
                <span className="justify-center text-[52px] text-center uppercase font-inclusive-sans text-white">
                  Have a project in mind? Let&apos;s align.<br></br>
                  Book a call to explore how we can bring your vision <br></br>
                  to life through intelligent systems and <br></br>
                  purposeful design.
                </span>
              </div>
              {/* <div className="font-silkscreen uppercase my-[65px] text-[20px] leading-[1.19] text-center">
            Not all are called.Fewer still respond//connect.If your intent is
            true, channel it below.The Entity// We listens. The threshold
            responds.
          </div> */}
              <div className=" flex flex-col justify-center items-center mt-[50px]">
                <button
                  type="button"
                  className="w-full max-w-[312px] h-[70px] bg-[#e0ef29] text-black py-2 font-silkscreen text-[20px]  cursor-pointer hover:bg-transparent hover:text-[#e0ef29] hover:border hover:border-[#000] transition-all duration-300 hover:scale-105 border-dashed border-black border"
                >
                  BOOK A CALL
                </button>
              </div>
            </div>
          </div>

          {/* <div className="w-full relative">
        <div className="w-[90%] max-w-[1550px] mx-auto">
          <div className="flex-grow-0 flex flex-col justify-start items-start">
            <div className="w-full flex flex-col justify-between items-start md:p-0">
              <div className=" flex flex-row justify-center items-center rounded-full py-[10px] mt-[140px]">
                <span className="w-full font-bold leading-[52.2px] text-[45px] text-[#000] -tracking-[2.25px]">
                  This is where we ace the game
                </span>
              </div>

              <div className="mt-[45px] text-[#575757] font-medium text-[20px] leading-[23px]">
                Working with us is easy We follow a clear no fuss process that
                <br />
                keeps things moving fast and smooth, from first chat to final
                <br />
                delivery.
              </div>

              <div className="w-full flex flex-col md:flex-row justify-start items-center gap-[40px] my-[40px]">
                <div
                  ref={(el) => {
                    if (el) cardRefs.current[1] = el;
                  }}
                  onMouseMove={(e) => handleMouseMove(e, 1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                  className=" bg-[#549f99] min-h-[385px] relative flex flex-col justify-between rounded-[25px] w-full md:w-[50%] "
                >
                  <div
                    ref={(el) => {
                      if (el) glowRefs.current[1] = el;
                    }}
                    className=" w-full min-h-[385px] absolute rounded-[25px] top-0 left-0"
                  ></div>
                  <div
                    ref={(el) => {
                      if (el) contentRefs.current[1] = el;
                    }}
                    className=" w-full flex justify-between  px-[45px] py-[30px]"
                  >
                    <Brain size={70} color="#ffffff" weight="regular" />
                    <div>
                      <ArrowLineUpRight size={35} color="#ffffff" />
                      <div className=" mt-[15px] flex flex-col justify-start items-start">
                        <div className=" h-[42px] aspect-square bg-[#d1ecb1]"></div>
                        <div className=" h-[42px] aspect-square bg-[#e3ffe6]"></div>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-[#d1ecb1] px-[34px] h-[121px] rounded-b-[25px] flex justify-start items-center">
                    <span className=" text-[36px] -tracking-[1.8px] leading-[42px] font-bold text-[#0b251a]">
                      Artificial
                      <br />
                      INTELLIGENCE
                    </span>
                  </div>
                </div>
                <div
                  ref={(el) => {
                    if (el) cardRefs.current[2] = el;
                  }}
                  onMouseMove={(e) => handleMouseMove(e, 2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                  className=" bg-[#605ec2] flex flex-col justify-between rounded-[25px] min-h-[385px] w-full md:w-[50%] "
                >
                  <div
                    ref={(el) => {
                      if (el) glowRefs.current[2] = el;
                    }}
                    className=" w-full min-h-[385px] absolute rounded-[25px] top-0 left-0"
                  ></div>
                  <div
                    ref={(el) => {
                      if (el) contentRefs.current[2] = el;
                    }}
                    className=" w-full flex justify-between  px-[45px] py-[30px]"
                  >
                    <div>
                      <CubeTransparent
                        size={76}
                        color="#ffffff"
                        weight="regular"
                      />
                      <div className=" mt-[15px] flex flex-col justify-start items-start">
                        <div className=" h-[21px] aspect-square bg-[#343377]"></div>
                        <div className=" h-[21px] aspect-square bg-[#e1e2ff]"></div>
                      </div>
                    </div>
                    <ArrowLineUpRight size={35} color="#ffffff" />
                  </div>
                  <div className=" bg-[#b9b8ef] px-[34px] h-[121px] rounded-b-[25px] flex justify-start items-center">
                    <span className=" text-[36px] -tracking-[1.8px] leading-[42px] font-bold text-[#343377]">
                      Blockchain
                      <br />
                      TECHNOLOGY
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-[25px]">
                {servicesList.map((service, index) => (
                  <div
                    key={index}
                    className={` ${service.background} w-full py-[24px] px-[25px] rounded-[25px] min-h-[180px]`}
                  >
                    <span
                      className={` ${service.textColor} self-stretch flex-grow-0 text-[20px] font-bold leading-[23px] -tracking-[1px] text-left`}
                    >
                      {service.title}
                    </span>
                    <div
                      className={` ${service.textColor} self-stretch mt-[20px] w-full flex flex-col text-[16px] leading-[16px] justify-start items-start gap-[10.8px] p-0`}
                    >
                      {service.list.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

          {/* <div className="w-full relative  overflow-hidden ">
        <div className=" w-full mt-[80px] mb-[140px]">
          <VelocityScroll
            fontSize="text-4xl font-bold md:text-[50px] md:leading-[4.4rem]"
            defaultVelocity={0.2}
            className="text-[#c1c0b0] "
          >
            AI. Machine Learning. Web3. Data science. Software . Research.
            Chatbot. Deep learning. Blockchain. DeFi. Smart contract.
            Cryptography. Decentralization. Cryptocurrency. Product design. User
            Experience. Development. User Interface. Brand Experience. Research
            and Development. Branding and Designing. AI. Machine Learning. Data
            science. Research.
          </VelocityScroll>
        </div>
      </div> */}

          {/* <div className="w-full relative bg-gradient-to-t from-[#d1ecb1] to-[#fff] overflow-hidden mb-[40px] md:mb-[140px] pb-[85px]">
        <div className=" w-[90%] max-w-[1200px] mx-auto  ">
          <div className="flex flex-col justify-start items-start gap-[54px] p-0">
            <div className="w-full flex flex-col justify-between items-start">
              <div className=" flex flex-row justify-center items-center rounded-full bg-[#171717] py-[10px] px-[22px]">
                <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff]">
                  Smooth Process, Solid Results
                </span>
              </div>
              <span className="w-full mt-[45px] text-[20px] font-medium leading-[23px] text-left text-[#575757]">
                Working with us is easy. We follow a clear, no fuss process
                <br />
                that keeps things moving fast and smooth, from first chat to
                <br />
                final delivery.
              </span>
            </div>
            <Image
              src="/HomePage/Arrow.png"
              alt="image1"
              width={1200}
              height={10}
              className="object-contain w-[346px]"
            />

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
              {processList.map((process, index) => (
                <div
                  key={index}
                  className={` min-h-[230px]  md:min-h-[288px] ${process.backGround} ${process.textColor}  w-full flex flex-col justify-between items-start px-[25px] py-[24px] rounded-[25px]`}
                >
                  <span className="text-[36px] font-bold leading-[42px] -tracking-[1.8px] text-left">
                    {process.title}
                  </span>
                  <span className=" w-[250px] md:w-[170px] text-[16px] leading-[19px] text-left">
                    {process.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

          {/* <div className="w-full relative overflow-hidden bg-[#e0f1eb]">
        <div className="w-[90%] md:w-[90%] max-w-[1200px] mx-auto py-[80px]">
          <div className="min-h-[156.1px] w-full flex flex-col justify-between items-start pb-[60px]">
            <div className="flex flex-row justify-center items-center px-[22px] py-[10px] rounded-[64px] bg-[#171717] text-white mb-[45px]">
              <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff]">
                These are our Superpowers
              </span>
            </div>
            <span className="w-full max-w-[570px]  flex-grow-0  text-[20px] font-medium leading-[1.16] tracking-[normal] text-left text-[#575757]">
              Working with us is easy. We follow a clear, no fuss process that
              keeps things moving fast and smooth, from first chat to final
              delivery.
            </span>
          </div>

          <div className="w-full grid grid-cols-4 md:grid-cols-5 md:gap-[22px] gap-[10px]">
            <div className="order-1 md:order-1 md:col-span-1 col-span-2 bg-[#8eabb7] rounded-3xl px-[20px] py-[24px] flex flex-col">
              <span className="text-2xl font-[600]">Top notch quality</span>
              <span className="text-[16px] mt-[30px]">
                Guaranteed quality outcomes every time.<br></br>If not, we offer
                a full <br></br>money-back guarantee as our commitment to
                excellence.
              </span>
            </div>
            <div className="order-3 md:order-2 md:col-span-2 col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-4 md:gap-[18px] gap-[10px]">
                <div className="col-span-2 md:col-span-4 bg-[#fff]  rounded-3xl px-[25px] py-[23px] flex flex-col">
                  <span className="text-2xl font-[600]">
                    Project Supervision
                  </span>
                  <span className="text-[16px] mt-[16px] font-normal">
                    One-to-one meticulous care for every client from our project
                    supervisors.
                  </span>
                </div>
                <div className="col-span-1 md:col-span-2 bg-[#d1ecb1]  rounded-3xl py-[23px] px-[24px] flex flex-col">
                  <span className="text-2xl font-[600]">
                    World class talent
                  </span>
                  <span className="text-[16px] mt-[29px] font-normal text-left">
                    Zero hassle <br></br>finding world <br></br>class top talent
                  </span>
                </div>
                <div className="col-span-1 md:col-span-2 bg-[#b1cfc4] rounded-3xl py-[23px] px-[24px] flex flex-col">
                  <span className="text-2xl font-[600] mt-[110px]">
                    24x7 customer support
                  </span>
                </div>
              </div>
            </div>
            <div className="order-2 md:order-3 col-span-2 bg-[#2f6665]  rounded-3xl px-[25px] py-[23px] flex flex-col">
              <span className="text-2xl font-[600] text-white">
                Cost Effective
              </span>
              <span className="text-[16px] mt-[30px] text-white">
                We charge fractions for the services that typically cost
                fortunes.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:gap-[22px] gap-[10px] md:mt-[23px] mt-[10px]">
            <div className="col-span-1 bg-[#ffffff]  md:text-center text-left rounded-3xl px-[25px] py-[23px] flex flex-col">
              <span className="text-2xl font-[600] mt-[50px] mb-[50px]">
                Detailed project updates on time
              </span>
            </div>
            <div className="col-span-1 bg-[#d1ecb1]  rounded-3xl  py-[23px] px-[40px] flex flex-col justify-center md:justify-start">
              <span className="text-2xl font-[600] text-center md:text-left mt-[50px] mb-[50px] md:mt-[20px] md:mb-[0px] ">
                Team work
              </span>
              <span className="text-[16px] mt-[30px] hidden md:block">
                {" "}
                We assemble the team for you, covering all aspects, so you
                don&apos;t have to worry about gathering the team yourself.
              </span>
            </div>
          </div>
        </div>
      </div> */}

          {/* <div className="w-full relative  overflow-hidden ">
        <div className=" w-[90%] max-w-[1200px] mx-auto ">
          <div className="flex flex-col md:justify-start md:items-start items-center justify-center gap-[45px] md:mt-[140px] mt-[40px] py-[45px]">
            <div className=" flex flex-row justify-center items-center rounded-full bg-[#171717] py-[10px] px-[22px]">
              <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff]">
                Smooth Process, Solid Results
              </span>
            </div>
            <span className="flex-grow-0  not-italic leading-[1.16]  text-[#575757] text-[20px] max-w-[706px]">
              Our mission is to enhance efficiency, security, and transparency
              across industries. Making the world a smarter, more connected, and
              a safer place <br></br>
              <br></br>
              To achieve this, we believe in the power of Artificial
              intelligence&apos;s efficiency and Blockchain technology&apos;s
              security and transparency.
            </span>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] p-0">
              <div className="flex flex-col items-end   rounded-[20px] bg-[#e2e2fa] p-[15px]">
                <div className="flex justify-center items-center rounded-full bg-[#fff] w-[64px] aspect-square">
                  <Users size={37} />
                </div>

                <div className="w-full justify-start items-start flex flex-col mt-[31px]">
                  <span className="text-[36px] font-[600] mb-[15px]">
                    Over
                    <NumberTicker
                      value={150}
                      className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white ml-1"
                    />
                  </span>
                  <span className="text-[16px] font-[600]">
                    Satisfied clients<br></br>
                    worldwide
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end   rounded-[20px] bg-[#e2e2fa] p-[15px]">
                <div className="flex justify-center items-center rounded-full bg-[#fff] w-[64px] aspect-square">
                  <Laptop size={37} />
                </div>

                <div className="w-full justify-start items-start flex flex-col mt-[31px]">
                  <span className="text-[36px] font-[600] mb-[15px]">
                    {" "}
                    <NumberTicker
                      value={400}
                      className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white mr-1"
                    />
                    +
                  </span>
                  <span className="text-[16px] font-[600]">
                    {" "}
                    Successfully <br></br> Finished projects
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end   rounded-[20px] bg-[#e2e2fa] p-[15px]">
                <div className="flex justify-center items-center rounded-full bg-[#fff] w-[64px] aspect-square">
                  <Globe size={37} />
                </div>

                <div className="w-full justify-start items-start flex flex-col mt-[31px]">
                  <span className="text-[36px] font-[600] mb-[15px]">
                    <NumberTicker
                      value={7500}
                      className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white mr-1"
                    />
                    +
                  </span>
                  <span className="text-[16px] font-[600]">
                    {" "}
                    Hours of saving the world from <br></br>
                    bad experiences.
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end   rounded-[20px] bg-[#e2e2fa] p-[15px]">
                <div className="flex justify-center items-center rounded-full bg-[#fff] w-[64px] aspect-square">
                  <HandFist size={37} />
                </div>

                <div className="w-full justify-start items-start flex flex-col mt-[31px]">
                  <span className="text-[36px] font-[600] mb-[15px]">
                    <NumberTicker
                      value={30}
                      className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white mr-1"
                    />
                    +
                  </span>
                  <span className="text-[16px] font-[600]">
                    Countries across
                    <br></br>
                    the globe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

          {/* <div className="w-full relativeoverflow-hidden">
        <div className=" w-[90%] max-w-[1200px] my-[40px] md:my-[140px] mx-auto ">
          <div className=" flex rounded-full w-fit bg-[#171717] py-[10px] px-[22px]">
            <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff] text-center">
              Check out what the folks are saying
            </span>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:gap-[30px] my-[45px]">
            <HeroVideoDialog
              className="block dark:hidden rounded-[20px] lg:w-[40%]"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/xNcPXrL9Y_Q?si=esZ_b6fz7nm61zVv"
              thumbnailSrc={"/HomePage/review_profile/Thumb.png"}
              thumbnailAlt="Hero Video"
            />

            <div className=" overflow-y-hidden relative lg:w-[30%] lg:max-h-[350px] max-h-[140px]">
              
              <Marquee
                pauseOnHover
                vertical
                className="[--duration:20s] hidden lg:block"
              >
                {firstRow.map((review, index: number) => (
                  <ReviewCard
                    review={review}
                    key={index}
                    index={index}
                    setOpenReviewModal={setOpenReviewModal}
                  />
                ))}
              </Marquee>
              <Marquee
                pauseOnHover
                className="[--duration:20s] block lg:hidden"
              >
                {firstRow.map((review, index: number) => (
                  <ReviewCard
                    vertical
                    review={review}
                    key={index}
                    index={index}
                    setOpenReviewModal={setOpenReviewModal}
                  />
                ))}
              </Marquee>
            </div>
            <div className=" overflow-y-hidden relative lg:w-[30%] lg:max-h-[350px] max-h-[140px]">
              
              <Marquee
                pauseOnHover
                reverse
                vertical
                className="[--duration:40s] hidden lg:block"
              >
                {secondRow.map((review, index) => (
                  <ReviewCard
                    review={review}
                    key={index}
                    index={index}
                    setOpenReviewModal={setOpenReviewModal}
                  />
                ))}
              </Marquee>
              <Marquee
                pauseOnHover
                reverse
                className="[--duration:20s] block lg:hidden"
              >
                {firstRow.map((review, index: number) => (
                  <ReviewCard
                    vertical
                    review={review}
                    key={index}
                    index={index}
                    setOpenReviewModal={setOpenReviewModal}
                  />
                ))}
              </Marquee>
            </div>
          </div>
          <button
            onClick={() => setOpenReviewModal(true)}
            className=" text-[#5f90ef] cursor-pointer p-0"
          >
            Read more reviews
          </button>
        </div>
      </div> */}

          {/* <div className="w-full relative  overflow-hidden ">
        <div className=" w-full">
          <div className=" flex flex-row justify-start items-start rounded-full bg-[#171717] py-[10px] px-[22px] w-[90%] sm:w-fit mx-auto">
            <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff] text-center">
              Awesome peoplewho worked with us
            </span>
          </div>
          <div className="w-full flex md:flex-row md:gap-[85px] mt-[80px] gap-[35px] flex-col justify-around items-center">
            <Marquee pauseOnHover className="[--duration:20s]">
              {brandLogo.map((logo, index: number) => (
                <Image
                  key={index}
                  src={logo.image}
                  alt={`image${index}`}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain mr-[150px]"
                />
              ))}

            </Marquee>
          </div>
        </div>
      </div> */}

          {/* <div className="w-full relative  overflow-hidden bg-[#000] py-[200px]">
        <div className=" w-[90%] max-w-[1550px] mx-auto">
          <div className="w-full flex justify-center items-center ">
          <h1 className=" font-silkscreen text-[250px] relative uppercase text-[#e0ef29] leading-[1.16] -tracking-[12.5px] text-center">
            The ritual
          </h1>
          </div>
          <p className="font-inclusive-sans text-[52px] text-[#fff] leading-[1.3] text-left my-[50px] uppercase">
            The RITUAL is our process of transformation where abstract ideas,
            complex technologies, and raw ambition are fused into powerful
            digital systems.
          </p>

          <p className="font-silkscreen text-left text-[15px] text-[#e0ef29] leading-[1.3] mt-[5px]">
            [Firstlight / Schema / Construct / Lift.]
          </p>

          <div className="mt-[100px] border border-[#e0ef29]">
            <div className="w-full">
              <div className="grid grid-cols-4 gap-0 pt-[50px] pb-[65px] px-[20px]">
                <div className="flex justify-center items-center col-span-[300px]">
                  <Image
                    src={
                      activeImage === "star"
                        ? "/HomePage/phase/phase1_image_red.svg"
                        : "/HomePage/phase/phase1_image_white.svg"
                    }
                    width={290}
                    height={290}
                    alt="Star"
                    className=" cursor-pointer"
                    onClick={() => setActiveImage("star")}
                  />
                </div>

                <div className="flex justify-center items-center col-span-[300px]">
                  <Image
                    src={
                      activeImage === "circle"
                        ? "/HomePage/phase/phase2_image_red.svg"
                        : "/HomePage/phase/phase2_image_white.svg"
                    }
                    width={290}
                    height={290}
                    alt="Circle"
                    className=" cursor-pointer"
                    onClick={() => setActiveImage("circle")}
                  />
                </div>

                <div className="flex justify-center items-center col-span-[300px]">
                  <Image
                    src={
                      activeImage === "asterisk"
                        ? "/HomePage/phase/phase3_image_red.svg"
                        : "/HomePage/phase/phase3_image_white.svg"
                    }
                    width={290}
                    height={290}
                    alt="Asterisk"
                    className=" cursor-pointer"
                    onClick={() => setActiveImage("asterisk")}
                  />
                </div>

                <div className="flex justify-center items-center col-span-[300px]">
                  <Image
                    src={
                      activeImage === "triangle"
                        ? "/HomePage/phase/phase4_image_red.svg"
                        : "/HomePage/phase/phase4_image_white.svg"
                    }
                    alt="Triangle"
                    width={290}
                    height={290}
                    className=" cursor-pointer"
                    onClick={() => setActiveImage("triangle")}
                  />
                </div>
              </div>


              <div className="w-full border-t border-[#e0ef29] py-[28px] px-[29px]">
                <div className="flex justify-between items-center ">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src={phases[activeImage].icon}
                      width={70}
                      height={70}
                      alt="Star"
                      className=" cursor-pointer"
                      onClick={() => setActiveImage("star")}
                    />
                    <h2 className="text-[40px] font-bold text-[#e0ef29] font-silkscreen leading-[1.16] -tracking-[2px] ">
                      {phases[activeImage].title}
                    </h2>
                  </div>

                  <h2 className="text-[48px] font-bold text-white font-inclusive-sans -tracking-[2.4px] leading-[1.16]">
                    {phases[activeImage].subtitle}
                  </h2>
                </div>

                <p className="text-[40px] my-[61px] font-inclusive-sans text-[#fff] leading-[1.19] ">
                  {phases[activeImage].description}
                </p>
                <p className="text-[20px] text-[#e0ef29] uppercase leading-[1.19] font-silkscreen">
                  {phases[activeImage].footer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
          {/*
      <div className="w-full relative  overflow-hidden ">
        <div className=" w-[90%] max-w-[1550px] mx-auto my-[176px]">
          <h1 className="text-[250px] font-silkscreen leading-[1.3]  -tracking-[12.5px] text-[#0505cb] text-center ">
            The Facets
          </h1>
          <p className="font-inclusive-sans text-[52px] text-[#000] leading-[1.3] text-left my-[50px]">
            EVERY [ARTIFACT//PRODUCT] WE DELIVER IS SHAPED BY A SET OF
            PRINCIPLES THAT BALANCE VISION WITH PRECISION, VALUE WITH IMPACT,
            AND INNOVATION WITH RELIABILITY.
          </p>
          <p className="font-silkscreen text-left text-[15px] text-[#000] leading-[1.3]">
            [Construct / Reforge / Loop.]
          </p>

          <div
            style={{ height: "600px", position: "relative" }}
            className="mt-[75px]"
          >
            <FlowingMenu items={demoItems} />
          </div>
        </div>
      </div> */}
          <div className="bg-[#e0ef29] font-bold">
            <VelocityScroll fontSize="text-[60px]" numRows={1}>
              JOIN THE BUILD.
            </VelocityScroll>
          </div>
          <div className="w-full relative  overflow-hidden bg-white">
            <div className=" w-[90%] max-w-[1550px] mx-auto my-[100px]">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <SplitText
                    text="artifacts"
                    className="text-[96px] font-special-gothic-expanded-one uppercase"
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
                  <span className="text-[36px] font-special-gothic-expanded-one uppercase">
                    case stuides
                  </span>
                </div>
                <span className="text-[15px] font-silkscreen mt-[30px] mb-[6px]">
                  Each artifact tells a story.<br></br>a fragment of vision
                  forged in the fires of creation<br></br>.Born from whispers of
                  code and pulses of intent,<br></br>these are the echoes of
                  ideas made real.
                </span>
              </div>
              <p className="font-inclusive-sans text-[40px] leading-[1.3] text-left my-[50px]">
                HERE&apos;S A LOOK AT WHAT WE&apos;VE CREATED SO FAR. <br />
                INTELLIGENT SYSTEMS, POWERFUL PLATFORMS, AND BOLD <br />
                BRAND EXPERIENCES.EACH PROJECT IS A REFLECTION OF <br />
                OUR PROCESS, OUR TECHNOLOGY, <br />
                AND THE PEOPLE WE BUILD FOR.
              </p>
              <div className=" flex flex-row gap-[30px]">
                <button
                  type="button"
                  className="w-full max-w-[312px] h-[70px] bg-[black] text-[#e0ef29] py-2 font-silkscreen text-[20px]  cursor-pointer hover:bg-transparent hover:text-[#e0ef29] hover:border hover:border-[#e0ef29] transition-all duration-300 hover:scale-105 border-dashed border-white border"
                >
                  VISIT CASE STUDIES
                </button>
                <button
                  type="button"
                  className="w-full max-w-[312px] h-[70px] bg-[#e0ef29] text-black py-2 font-silkscreen text-[20px]  cursor-pointer hover:bg-transparent hover:text-[#e0ef29] hover:border hover:border-[#e0ef29] transition-all duration-300 hover:scale-105 border-dashed border-black border"
                >
                  BOOK A CALL
                </button>
              </div>

              <div className="w-full grid grid-cols-4 gap-[12.7px]  mt-[104px] h-[378px]">
                <div className="col-span-[378px] bg-[#e8e8e8]">
                  <p>Skillchecker.ai</p>
                </div>
                <div className="col-span-[378px] bg-[#e8e8e8]">
                  <p>Skillchecker.ai</p>
                </div>
                <div className="col-span-[378px] bg-[#e8e8e8]">
                  <p>Skillchecker.ai</p>
                </div>
                <div className="col-span-[378px] bg-[#e8e8e8]">
                  <p>Skillchecker.ai</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-full relative  overflow-hidden">
        <div className=" w-[90%] max-w-[1200px] mx-auto my-[140px]">
          <div className="min-h-[260px] self-stretch flex-grow-0 flex flex-col justify-center items-center gap-[22px] p-[30px] rounded-[25px] bg-[#d1ecb1]">
            <h1 className="text-[20px] font-bold leading-[1.16] text-black -tracking-[1px] text-center">
              Want to know more ?
            </h1>
            <p className="text-[16px] font-normal leading-[1.04] text-black text-center">
              Hop on a quick 1-to-1 meeting for any questions or to kickstart
              your project with custom requirements.
            </p>
            <a
              href="https://cal.com/coullax/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" bg-[#6abb79] cursor-pointer hover:bg-[#7dd98e] rounded-full flex justify-center p-[9px] mb-[7px]">
                <div className=" bg-[#fffef1] border-[2px] rounded-full h-[24px] w-[24px] aspect-square flex justify-center items-center">
                  <ArrowRight className=" h-[15px] aspect-square" />
                </div>
                <span className=" ml-[6px] text-[20px] font-semibold leading-[23px] -tracking-[1px] pr-[5px]">
                  Let&apos;s talk
                </span>
              </button>
            </a>
          </div>
        </div>
      </div> */}

          {/* <div className="w-full relative  overflow-hidden mb-[80px]">
        <VelocityScroll
          fontSize="text-4xl font-bold md:text-7xl md:leading-[5.5rem]"
          defaultVelocity={0.5}
          className="text-[#eeeddf]"
        >
          Efficiency. Security. Transparency.Efficiency. Security. Transparency.
        </VelocityScroll>
      </div> */}

          <div className="w-full relative  overflow-hidden bg-black">
            <div className=" w-[90%] max-w-[1038px] mx-auto">
              <TypingAnimation className="font-silkscreen text-center text-[20px] text-white mt-[247px]">
                {`[THE SIGNAL FADES, BUT THE CONSTRUCT REMAINS.
              YOU'VE REACHED THE EDGE OF THE KNOWN.
              WHEN YOU'RE READY TO BUILD — WE AWAIT.`}
              </TypingAnimation>

              <SplitText
                text="LIGHT THE SIGNAL"
                className="text-[94px] font-special-gothic-expanded-one font-SpecialGothicOne leading-[1.3] text-white text-center py-[66px] "
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

              <div className="flex flex-col justify-center items-center">
                <form className="space-y-6 w-full max-w-[1038px] ">
                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="YOUR EMAIL"
                      className="w-full h-[98px] p-2 border-[1.3px] border-[#000] bg-[#242425] focus:outline-none placeholder:!text-white px-[15px]  text-white"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="THE MESSAGE"
                      rows={4}
                      className="w-full  h-[214px] p-2 border border-[#000]  bg-[#242425] focus:outline-none placeholder:!text-white px-[15px]  text-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className=" flex flex-col justify-center items-center">
                    <p className="font-silkscreen text-left text-[15px] text-white py-[40px]">
                      TRANSMISSION ENDED // SYSTEM STANDBY ACTIVE // AWAITING
                      NEW SIGNAL...
                    </p>

                    <button
                      type="button"
                      className="w-full max-w-[422px] h-[94px] bg-[#e0ef29] text-black py-2 font-silkscreen text-[20px] cursor-pointer hover:bg-transparent hover:text-[#e0ef29] hover:border hover:border-[#e0ef29] transition-all duration-300 hover:scale-105 mb-[247px]"
                    >
                      CONTACT US
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <Footer />

          <AnimatePresence>
            {openReviewModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setOpenReviewModal(false)}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
              >
                <motion.div
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
                >
                  <motion.button className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black">
                    <XIcon className="size-5" />
                  </motion.button>
                  <div className="relative isolate z-[1] size-full overflow-hidden p-[25px] rounded-2xl border-2 overflow-y-auto hide-scrollbar bg-[#fffef1] border-white">
                    <h1 className=" text-center text-xl font-semibold">
                      Check out what the <br /> Folks are saying
                    </h1>
                    <div className=" flex flex-col lg:flex-row justify-between gap-[20px] mt-[20px]">
                      <div className=" flex flex-col justify-start items-center gap-5 w-full lg:w-[50%]">
                        {firstRow.map((review, index: number) => (
                          <ReviewCard
                            review={review}
                            key={index}
                            index={index}
                            setOpenReviewModal={setOpenReviewModal}
                          />
                        ))}
                      </div>
                      <div className=" flex flex-col justify-start items-center gap-5 w-full lg:w-[50%]">
                        {secondRow.map((review, index: number) => (
                          <ReviewCard
                            review={review}
                            key={index}
                            index={index}
                            setOpenReviewModal={setOpenReviewModal}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
