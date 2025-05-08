"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLineUpRight,
  Brain,
  CubeTransparent,
  Globe,
  Laptop,
  Lightning,
  ShieldCheck,
  Star,
  Users,
} from "@phosphor-icons/react";
import { ArrowRight } from "lucide-react";
import { HandFist } from "@phosphor-icons/react/dist/ssr";
import React, { useRef, MouseEvent } from "react";

export default function Home() {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const glowRefs = useRef<HTMLDivElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const navigationList = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const servicesList = [
    {
      title: "Web & Software Development",
      textColor: "text-[#2a3b40]",
      background: "bg-[#d4ebf3]",
      list: ["Automation Solutions", "Websites & Software", "Mobile Apps"],
    },
    {
      title: "UI/UX",
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
                <Link key={index} href={navigation.href}>
                  {navigation.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative overflow-hidden">
        <div className=" w-[90%] max-w-[1200px] mx-auto my-[40px] md:my-[140px] ">
          <div className="bg-[#1e201f] rounded-[25px] px-[80px] py-[57px]">
            <div className=" flex flex-row justify-start items-center gap-[20px] ">
              <Lightning
                size={32}
                weight="bold"
                className="text-white ml-[16px]"
              />
              <ShieldCheck size={32} weight="bold" className="text-white" />
              <CubeTransparent size={32} weight="bold" className="text-white" />
            </div>
            <div className=" mt-[30px]">
              <span className="text-[20px] font-bold bg-[#414342] rounded-full text-[#c6c6c6] py-[10px] px-[22px]">
                Efficiency. Security. Transparency.
              </span>
            </div>
            <div className="mt-[30px]">
              <p className=" text-[#fffef1] text-[45px] leading-[47px] font-bold -tracking-[2.25px]">
                Making Tech Work Smarter
                <br />
                and Safer for Everyone
              </p>
            </div>
            <div className="mt-[30px]">
              <button className=" bg-[#e3ffe6] rounded-full flex justify-center p-[9px] mb-[7px]">
                <div className=" bg-[#6abb79] border-[2px] rounded-full h-[24px] w-[24px] aspect-square flex justify-center items-center">
                  <ArrowRight className=" h-[15px] aspect-square" />
                </div>
                <span className=" ml-[6px] text-[20px] font-semibold leading-[23px] -tracking-[1px] pr-[5px]">
                  Let&apos;s talk
                </span>
              </button>
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

        <div className="w-full relative bg-gradient-to-t from-[#d1ecb1] to-[#fffef1] overflow-hidden my-[40px] md:my-[140px] py-[85px]">
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
                src="/Homepage/Arrow.png"
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

        <div className="w-full relative  overflow-hidden ">
          <div className=" w-[90%] max-w-[1200px] mx-auto">
            <div className=" flex flex-col md:justify-start items-center ">
              <div className=" flex flex-row justify-center items-center rounded-full bg-[#171717] py-[10px] px-[22px]">
                <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff]">
                  Awesome peoplewho worked with us
                </span>
              </div>
              <div className="w-full flex md:flex-row md:gap-[85px] gap-[35px] flex-col mt-[60px] py-[30px] justify-center items-center">
                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/fiverr.png"
                    alt="image1"
                    width={76}
                    height={36}
                    className="object-contain"
                  />
                </div>

                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/pornopoli.png"
                    alt="image1"
                    width={119}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/vesa.png"
                    alt="image1"
                    width={70}
                    height={31}
                    className="object-contain"
                  />
                </div>
                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/crypto.png"
                    alt="image1"
                    width={141}
                    height={34}
                    className="object-contain"
                  />
                </div>
                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/asvoria.png"
                    alt="image1"
                    width={133}
                    height={19}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative overflow-hidden bg-[#e0f1eb]">
          <div className="w-[95%] md:w-[90%] max-w-[1200px] mx-auto py-[80px]">


            <div className="min-h-[156.1px] w-full flex flex-col justify-between items-start pb-[60px]">
              <div className="flex flex-row justify-center items-center px-[22px] py-[10px] rounded-[64px] bg-[#171717] text-white mb-[45px]">
                <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff]">
                  These are our Superpowers
                </span>
              </div>
              <span className="w-full max-w-[570px]  flex-grow-0  text-[20px] font-medium leading-[1.16] tracking-[normal] text-left text-[#575757]">
                Working with us is easy. We follow a clear, no fuss process
                that keeps things moving fast and smooth, from first chat to
                final delivery.
              </span>
            </div>

            <div className="w-full h-auto lg:h-[566.9px] flex flex-col gap-[10px] lg:gap-[22.6px]">
              <div className="flex flex-row gap-[10px] lg:gap-[22.6px]">

                <div className="w-[179.4px] lg:w-[256.3px] h-[262.0px] lg:h-[374.3px] px-[25px] py-[23.8px] bg-[#8eabb7] rounded-3xl"></div>


                <div className="w-[213.7px] lg:w-[448.2px] h-auto lg:h-[374px] gap-[10px] lg:gap-[22.6px] flex flex-col rounded-3xl">
                  <div className="h-[88.9px] lg:h-[127px] bg-[#ce6b6b] rounded-3xl gap-[18.6px]"></div>
                  <div className="h-auto lg:h-[232px] rounded-3xl gap-[10px] lg:gap-[22.6px] flex flex-row">
                    <div className="h-[162.4px] lg:h-[232px] w-[148.4px] lg:w-[212px] bg-[#d1ecb1] rounded-3xl"></div>
                    <div className="h-[162.4px] lg:h-[232px] w-[148.4px] lg:w-[212px] bg-[#b1cfc4] rounded-3xl"></div>
                  </div>
                  <div className="w-[313.7px] md:w-[448.2px] h-[262.0px] md:h-[374.3px] bg-[#2f6665] rounded-3xl"></div>
                </div>

                <div className="w-[313.7px] lg:w-[448.2px] h-[262.0px] lg:h-[374.3px] bg-[#2f6665] rounded-3xl"></div>

              </div>


              <div className="flex flex-row gap-[10px] lg:gap-[22.6px]">
                <div className="w-[411.4px] lg:w-[587.7px] h-[119.0px] lg:h-[170px] px-[25px] py-[23.8px] rounded-3xl bg-[#163b31]"></div>
                <div className="w-[411.4px] lg:w-[587.7px] h-[119.0px] lg:h-[170px] px-[25px] py-[23.8px] rounded-3xl bg-[#d1ecb1]"></div>
              </div>
            </div>


          </div>
        </div>

        <div className="w-full relative  overflow-hidden ">
          <div className=" w-[90%] max-w-[1200px] mx-auto ">
            <div className="flex flex-col md:justify-start md:items-start items-center justify-center gap-[45px] md:mt-[140px] mt-[40px]">
            <div className=" flex flex-row justify-center items-center rounded-full bg-[#171717] py-[10px] px-[22px]">
                  <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff]">
                    Smooth Process, Solid Results
                  </span>
                </div>
              <span className="flex-grow-0  not-italic leading-[1.16]  text-[#575757] text-[20px] max-w-[706px]">
                Our mission is to enhance efficiency, security, and transparency
                across industries. Making the world a smarter, more connected,
                and a safer place <br></br><br></br>
                To achieve this, we believe in the power of
                Artificial intelligence’s efficiency and Blockchain technology’s
                security and transparency.
              </span>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] p-0">
              <div className="flex flex-col items-end   rounded-[20px] bg-[#e2e2fa] p-[15px]">
                <div className="flex justify-center items-center rounded-full bg-[#fff] w-[64px] aspect-square">
                  <Users size={37} />
                </div>

                  <div className="w-full justify-start items-start flex flex-col mt-[31px]">
                    <span className="text-[36px] font-[600] mb-[15px]"> Over 150</span>
                    <span className="text-[16px] font-[600]">Satisfied clients<br></br>
                    worldwide</span>

                  </div>
                </div>

                <div className="flex flex-col items-end   rounded-[20px] bg-[#e2e2fa] p-[15px]">
                <div className="flex justify-center items-center rounded-full bg-[#fff] w-[64px] aspect-square">
                <Laptop size={37} />
                </div>

                  <div className="w-full justify-start items-start flex flex-col mt-[31px]">
                    <span className="text-[36px] font-[600] mb-[15px]">400+</span>
                    <span className="text-[16px] font-[600]"> Successfully <br></br> Finished
                      projects</span>
                  </div>
                </div>


                <div className="flex flex-col items-end   rounded-[20px] bg-[#e2e2fa] p-[15px]">
                <div className="flex justify-center items-center rounded-full bg-[#fff] w-[64px] aspect-square">
                  <Globe size={37} />
                </div>

                  <div className="w-full justify-start items-start flex flex-col mt-[31px]">
                    <span className="text-[36px] font-[600] mb-[15px]">2000+</span>
                    <span className="text-[16px] font-[600]"> Hours of saving the world from <br></br>
                    bad experiences.</span>

                  </div>
                </div>


                <div className="flex flex-col items-end   rounded-[20px] bg-[#e2e2fa] p-[15px]">
                <div className="flex justify-center items-center rounded-full bg-[#fff] w-[64px] aspect-square">
                  <HandFist  size={37} />
                </div>

                  <div className="w-full justify-start items-start flex flex-col mt-[31px]">
                    <span className="text-[36px] font-[600] mb-[15px]">30+</span>
                    <span className="text-[16px] font-[600]">Countries across
                   <br></br>
                   the globe</span>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="w-full relativeoverflow-hidden">
          <div className=" w-[90%] max-w-[1200px] my-[40px] md:my-[140px] mx-auto ">
            <div className=" flex flex-row mx-auto justify-center items-center rounded-full w-fit bg-[#171717] py-[10px] px-[22px]">
              <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff]">
                Check out what the folks are saying
              </span>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-[20px] mt-[45px]">
              <div className=" bg-[#f3f1e4] p-[15px] w-full md:w-[50%] rounded-[20px]">
                <Image
                  src="/Homepage/jossieCotto.webp"
                  alt="jossie Cotto"
                  width={88}
                  height={88}
                  className=" mx-auto rounded-full"
                />
                <h1 className=" text-[22px] font-semibold text-center leading-[23px] mt-[19px]">
                  Jossie Cotto
                </h1>
                <p className=" text-[16px] text-center leading-[17px] pt-[7px]">
                  Film Director, Hollywood, California
                </p>
                <p className=" text-[16px] text-center font-medium leading-[19px] px-[105px] pt-[22px]">
                  &quot;There might be people do something similar to what you
                  want. But coullax works to the details. they always pay
                  attention to all the stuff that matters to you as a
                  client&quot;
                </p>
              </div>
              <div className=" bg-[#f3f1e4] p-[15px] w-full md:w-[50%] rounded-[20px]">
                <Image
                  src="/Homepage/jossieCotto.webp"
                  alt="jossie Cotto"
                  width={88}
                  height={88}
                  className=" mx-auto rounded-full"
                />
                <h1 className=" text-[22px] font-semibold text-center leading-[23px] mt-[19px]">
                  Jossie Cotto
                </h1>
                <p className=" text-[16px] text-center leading-[17px] pt-[7px]">
                  Film Director, Hollywood, California
                </p>
                <p className=" text-[16px] text-center font-medium leading-[19px] px-[105px] pt-[22px]">
                  &quot;There might be people do something similar to what you
                  want. But coullax works to the details. they always pay
                  attention to all the stuff that matters to you as a
                  client&quot;
                </p>
              </div>
            </div>
            <div className=" my-[20px] flex flex-row justify-start items-center gap-[20px] overflow-x-scroll hide-scrollbar">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className=" bg-[#f3f1e4] rounded-[20px] p-[15px] w-[335px] flex-shrink-0 inline-block"
                >
                  <div className=" flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center gap-[10px]">
                      <Image
                        src="/Homepage/jossieCotto.webp"
                        alt="jossie Cotto"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <p className=" leading-[15px] text-[14px] font-semibold">
                        alextima10
                      </p>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[5px]">
                      <p className=" leading-[15px] text-[14px] font-semibold">
                        5
                      </p>
                      <Star size={15} color="#eaa134" weight="fill" />
                    </div>
                  </div>
                  <p className=" pt-[11px] text-[14px] leading-[16px] font-plus-jakarta-sans">
                    Best experience I&apos;ve had . Professional and smooth.
                    Communication and understanding of my requests was
                    impressive. Delivered a quality product.
                  </p>
                </div>
              ))}
            </div>
            <div className=" w-full flex flex-col justify-center items-center">
              <button className=" mx-auto text-[#5f90ef] cursor-pointer">
                Read more reviews
              </button>
            </div>
          </div>
        </div>

        <div className="w-full relative  overflow-hidden">
          <div className=" w-[90%] max-w-[1200px] mx-auto mb-[140px]">
            <div className="min-h-[260px] self-stretch flex-grow-0 flex flex-col justify-center items-center gap-[22px] p-[30px] rounded-[25px] bg-[#d1ecb1]">
              <h1 className="text-[20px] font-bold leading-[1.16] text-black -tracking-[1px] text-center">
                Want to know more ?
              </h1>
              <p className="text-[16px] font-normal leading-[1.04] text-black text-center">
                Hop on a quick 1-to-1 meeting for any questions or to kickstart
                your project with custom requirements.
              </p>
              <button className=" bg-[#6abb79] rounded-full flex justify-center p-[9px] mb-[7px]">
                <div className=" bg-[#fffef1] border-[2px] rounded-full h-[24px] w-[24px] aspect-square flex justify-center items-center">
                  <ArrowRight className=" h-[15px] aspect-square" />
                </div>
                <span className=" ml-[6px] text-[20px] font-semibold leading-[23px] -tracking-[1px] pr-[5px]">
                  Let&apos;s talk
                </span>
              </button>
            </div>
          </div>
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
      </div>

  );
}
