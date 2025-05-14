"use client";

import Image from "next/image";
import {
  ArrowLineUpRight,
  Brain,
  CubeTransparent,
  Globe,
  Laptop,
  Lightning,
  ShieldCheck,
  Users,
} from "@phosphor-icons/react";
import { ArrowRight, XIcon } from "lucide-react";
import { HandFist } from "@phosphor-icons/react/dist/ssr";
import { NumberTicker } from "../components/magicui/number-ticker";
import React, { useRef, MouseEvent, useState } from "react";
import { Marquee } from "@/components/magicui/marquee";
import ReviewCard from "@/components/review-card";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { AnimatePresence, motion } from "motion/react";
import { Ripple } from "@/components/magicui/ripple";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import HeaderNavBar from "@/components/Header";
// import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const glowRefs = useRef<HTMLDivElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const [openReviewModal, setOpenReviewModal] = useState<boolean>(false);

  // const navigationList = [
  //   { name: "Home", link: "/" },
  //   { name: "About", link: "/about" },
  //   { name: "Contact", link: "/contact" },
  //   { name: "Careers", link: "/careers" },
  // ];

  const servicesList = [
    {
      title: "Web & Software Development",
      textColor: "text-[#2a3b40]",
      background: "bg-[#d4ebf3]",
      list: ["Automation Solutions", "Websites & Software", "Mobile Apps"],
    },
    {
      title: "Research",
      textColor: "text-[#333a4d]",
      background: "bg-[#dbdcfd]",
      list: ["Automation Solutions", "Websites & Software", "Mobile Apps"],
    },
    {
      title: "Design & Branding",
      textColor: "text-[#244733]",
      background: "bg-[#d6f2e8]",
      list: ["Automation Solutions", "Websites & Software", "Mobile Apps"],
    },
  ];

  const processList = [
    {
      title: "Kickoff",
      backGround: "bg-[#ffffff]",
      textColor: "text-[#2c4a40]",
      description:
        "We start with a friendly deep dive, getting to know your goals, ideas, and wildest visions.",
    },
    {
      title: "Blueprint",
      backGround: "bg-[#c5d7d8]",
      textColor: "text-[#1d3633]",
      description:
        "We map out the plan. Clear timlelines, smart solutions, and a creative game plan you can vibe with.",
    },
    {
      title: "Build",
      backGround: "bg-[#163b31]",
      textColor: "text-[#f2fe65]",
      description:
        "This is where the magic happens. Our team gets to work, blending tech and creativity.",
    },
    {
      title: "Launch & Beyond",
      backGround: "bg-[#e0ef29]",
      textColor: "text-[#163b31]",
      description:
        'We don\'t just hit "go" and disappear. We launch, support, and grow with you, every step after.',
    },
  ];

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
        "The seller has most definitely exceeded my expectations ! He is hands down experienced in his work. Polite, fast replies, careful listener. Would definitely recommend. Can’t wait for the full project. Thank you again !",
    },
  ];

  const brandLogo = [
    {
      image: "/Homepage/brandLogo/thehidden.png",
      height: 65,
      width: 267,
    },
    {
      image: "/Homepage/brandLogo/pornopoli.png",
      height: 65,
      width: 263,
    },
    {
      image: "/Homepage/brandLogo/baddays.png",
      height: 65,
      width: 173,
    },
    {
      image: "/Homepage/brandLogo/asvoria.png",
      height: 65,
      width: 245,
    },
    {
      image: "/Homepage/brandLogo/fiverr.png",
      height: 65,
      width: 214,
    },
    {
      image: "/Homepage/brandLogo/skillcheckerlight.png",
      height: 65,
      width: 243,
    },
  ];

  const firstRow = reviewList1.slice(0, reviewList1.length / 2);
  const secondRow = reviewList2.slice(reviewList2.length / 2);

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    const card = cardRefs.current[index];
    const glow = glowRefs.current[index];
    const content = contentRefs.current[index];

    if (!card || !glow || !content) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = -((y - centerY) / centerY);

    card.style.transform = `perspective(1000px) rotateY(${
      percentX * 6
    }deg) rotateX(${percentY * 6}deg)`;
    content.style.transform = `translateZ(50px)`;
    glow.style.opacity = "1";
    glow.style.backgroundImage = `
      radial-gradient(
        circle at ${x}px ${y}px, 
        #ffffff44,
        #0000000f
      )
    `;
  };

  const handleMouseLeave = (index: number): void => {
    const card = cardRefs.current[index];
    const glow = glowRefs.current[index];
    const content = contentRefs.current[index];

    if (!card || !glow || !content) return;

    card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    content.style.transform = "translateZ(0px)";
    glow.style.opacity = "0";
  };

  return (
    <div className=" w-full pt-[50px] bg-[#fffef1]">
      <div className=" w-full">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <HeaderNavBar />
        </div>
      </div>

      {/* <div className=" w-full">
        <div className="w-[90%] max-w-[1200px] flex items-center justify-between mx-auto">
          <div>
            <div>
              <Image
                src="/logo.png"
                alt="logo"
                width={197}
                height={33}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-[35px] font-bold leading-[23px] font-stretch-normal font-plus-jakarta-sans text-[20px]">
              {navigationList.map((navigation, index) => (
                <Link key={index} href={navigation.link}>
                  {navigation.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {/* <SmoothCursor /> */}

      <div className="w-full relative overflow-hidden">
        <div className=" w-[90%] max-w-[1200px] mx-auto my-[60px] md:my-[140px] ">
          <div className=" bg-[#1e201f] z-10 relative rounded-[25px] px-[35px] lg:px-[80px] py-[57px] overflow-hidden ">
            <div className=" absolute top-0 -z-10 left-0 h-full w-full">
              <Ripple />
            </div>

            <div className=" flex flex-row justify-center items-center gap-[20px] ">
              <Lightning
                size={32}
                weight="bold"
                className="text-white lg:ml-[16px]"
              />
              <ShieldCheck size={32} weight="bold" className="text-white" />
              <CubeTransparent size={32} weight="bold" className="text-white" />
            </div>
            <div className=" mt-[30px] bg-[#414342] mx-auto rounded-full py-[10px] px-[22px] w-fit">
              <AnimatedShinyText>
                <span className=" lg:text-[20px] font-bold rounded-full ">
                  Efficiency. Security. Transparency.
                </span>
              </AnimatedShinyText>
            </div>
            <div className="mt-[30px]">
              <p className=" text-[#fffef1] text-center  text-[30px] lg:text-[45px] leading-[36px] lg:leading-[47px] font-bold -tracking-[2.25px]">
                Making Tech Work Smarter
                <br />
                and Safer for Everyone
              </p>
            </div>
            <div className="mt-[30px] relative w-full">
              <a
                href="https://cal.com/coullax/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" !z-50 cursor-pointer bg-[#e3ffe6] hover:bg-[#c9ebcc] rounded-full flex justify-center p-[9px] mb-[7px] mx-auto">
                  <div className=" bg-[#6abb79] border-[2px] rounded-full h-[24px] w-[24px] aspect-square flex justify-center items-center">
                    <ArrowRight className=" h-[15px] aspect-square" />
                  </div>
                  <span className=" ml-[6px] text-[20px] font-semibold leading-[23px] -tracking-[1px] pr-[5px]">
                    Let&apos;s talk
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex-grow-0 flex flex-col justify-start items-start">
            <div className="w-full flex flex-col justify-between items-start md:p-0">
              <div className=" flex flex-row justify-center items-center rounded-full bg-[#171717] py-[10px] px-[22px]">
                <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff]">
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
      </div>

      <div className="w-full relative  overflow-hidden ">
        <div className=" w-[90%] max-w-[1200px] mx-auto mt-[80px] mb-[140px]">
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
      </div>

      <div className="w-full relative bg-gradient-to-t from-[#d1ecb1] to-[#fffef1] overflow-hidden mb-[40px] md:mb-[140px] pb-[85px]">
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
              src={require("@/assets/HomePage/Arrow.png")}
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
      </div>

      <div className="w-full relative overflow-hidden bg-[#e0f1eb]">
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
      </div>

      <div className="w-full relative  overflow-hidden ">
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
              intelligence’s efficiency and Blockchain technology’s security and
              transparency.
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
      </div>

      <div className="w-full relativeoverflow-hidden">
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
              {/* <div
                className={`absolute w-5 h-full lg:w-full lg:h-5 right-0 top-0 bg-gradient-to-l lg:bg-gradient-to-b from-[#fffef1] to-transparent z-10 pointer-events-none`}
              />
              <div
                className={`absolute w-5 h-full lg:w-full lg:h-5 left-0 lg:right-0 bottom-0 bg-gradient-to-r lg:bg-gradient-to-t from-[#fffef1] to-transparent z-10 pointer-events-none`}
              /> */}
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
              {/* <div
                className={`absolute w-5 h-full lg:w-full lg:h-5 right-0 top-0 bg-gradient-to-l lg:bg-gradient-to-b from-[#fffef1] to-transparent z-10 pointer-events-none`}
              />
              <div
                className={`absolute w-5 h-full lg:w-full lg:h-5 left-0 lg:right-0 bottom-0 bg-gradient-to-r lg:bg-gradient-to-t from-[#fffef1] to-transparent z-10 pointer-events-none`}
              /> */}
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
      </div>

      <div className="w-full relative  overflow-hidden ">
        <div className=" w-full">
          {/* <div className=" flex flex-col md:justify-start items-start "> */}
          <div className=" flex flex-row justify-start items-start rounded-full bg-[#171717] py-[10px] px-[22px] w-fit mx-auto">
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
                  alt={"image1${index}"}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain mr-[150px]"
                />
              ))}

              {/* <div className="w-[172px] h-[40px] flex items-center justify-center">
              <Image
                  src="/Homepage/brandLogo/thehidden.png"
                  alt="image1"
                  width={267}
                  height={65}
                  className="object-contain"
                />
              </div>

              <div className="w-[172px] h-[40px] flex items-center justify-center">
              <Image
                  src="/Homepage/brandLogo/pornopoli.png"
                  alt="image1"
                  width={263}
                  height={65}
                  className="object-contain"
                />
              </div>
              <div className="w-[172px] h-[40px] flex items-center justify-center">
              <Image
                  src="/Homepage/brandLogo/baddays.png"
                  alt="image1"
                  width={173}
                  height={65}
                  className="object-contain"
                />
              </div>
              <div className="w-[172px] h-[40px] flex items-center justify-center">
              <Image
                  src="/Homepage/brandLogo/asvoria.png"
                  alt="image1"
                  width={245}
                  height={65}
                  className="object-contain"
                />
              </div>
              <div className="w-[172px] h-[40px] flex items-center justify-center">
              <Image
                  src="/Homepage/brandLogo/fiverr.png"
                  alt="image1"
                  width={214}
                  height={65}
                  className="object-contain"
                />
              </div>
              <div className="w-[172px] h-[40px] flex items-center justify-center">
              <Image
                  src="/Homepage/brandLogo/skillcheckerlight.png"
                  alt="image1"
                  width={243}
                  height={65}
                  className="object-contain"
                />
              </div> */}
            </Marquee>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="w-full relative  overflow-hidden">
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
      </div>

      <div className="w-full relative  overflow-hidden mb-[80px]">
        <VelocityScroll
          fontSize="text-4xl font-bold md:text-7xl md:leading-[5.5rem]"
          defaultVelocity={0.5}
          className="text-[#eeeddf]"
        >
          Efficiency. Security. Transparency.Efficiency. Security. Transparency.
        </VelocityScroll>
      </div>

      <div className="w-full relative  overflow-hidden bg-[#1e201f]">
        <div className=" w-[90%] max-w-[1200px] mx-auto mt-[65px] mb-[50px] ">
          <div className=" text-white py-4 flex flex-col lg:flex-row justify-between items-center px-6 space-y-8 lg:space-y-0">
            <div className="flex space-x-4 ">
              <Image
                src="/logo-light.png"
                alt="logo"
                width={197}
                height={33}
                className="cursor-pointer"
              />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300 text-sm">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-gray-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 text-sm">
                About Coullax
              </a>
            </div>
            <div className="flex space-x-4 text-white">
              <a href="#" className="hover:text-gray-300 rounded-full">
                <Image
                  src="/socialmedia-logo/ig.png"
                  alt="logo"
                  width={34}
                  height={34}
                  className="cursor-pointer"
                />
              </a>
              <a href="#" className="hover:text-gray-300 rounded-full">
                <Image
                  src="/socialmedia-logo/fb.png"
                  alt="logo"
                  width={34}
                  height={34}
                  className="cursor-pointer"
                />
              </a>
              <a href="#" className="hover:text-gray-300 rounded-full">
                <Image
                  src="/socialmedia-logo/x.png"
                  alt="logo"
                  width={34}
                  height={34}
                  className="cursor-pointer"
                />
              </a>
              <a href="#" className="hover:text-gray-300 rounded-full">
                <Image
                  src="/socialmedia-logo/tiktok.png"
                  alt="logo"
                  width={34}
                  height={34}
                  className="cursor-pointer"
                />
              </a>
              <a href="#" className="hover:text-gray-300 rounded-full">
                <Image
                  src="/socialmedia-logo/linkedin.png"
                  alt="logo"
                  width={34}
                  height={34}
                  className="cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center text-xs text-white font-normal leading-[1.16] tracking-[normal] text-center mt-[40px]">
            &copy; 2024 Coullax All Rights Reserved
          </div>
        </div>
      </div>

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
    </div>
  );
}
