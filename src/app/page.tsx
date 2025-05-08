"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLineUpRight,
  Brain,
  CubeTransparent,
  Lightning,
  ShieldCheck,
} from "@phosphor-icons/react";
import { ArrowRight } from "lucide-react";

export default function Home() {
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
        <div className=" w-[90%] max-w-[1200px] mx-auto my-[140px] ">
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
                <div className=" bg-[#549f99] flex flex-col justify-between rounded-[25px] min-h-[385px] w-full md:w-[50%] ">
                  <div className=" w-full flex justify-between  px-[45px] py-[30px]">
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
                <div className=" bg-[#605ec2] flex flex-col justify-between rounded-[25px] min-h-[385px] w-full md:w-[50%] ">
                  <div className=" w-full flex justify-between  px-[45px] py-[30px]">
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
            {/* </div> */}
          </div>
        </div>

        <div className="w-full relative bg-gradient-to-t from-[#d1ecb1] to-[#fffef1] overflow-hidden my-[140px] py-[85px]">
          <div className=" w-[90%] max-w-[1200px] mx-auto  ">
            <div className="flex flex-col justify-start items-start gap-[55px] p-0">
              <div className="min-h-[156.1px] w-full flex flex-col justify-between items-start p-0">
                <div className=" flex flex-row justify-center items-center rounded-full bg-[#171717] py-[10px] px-[22px]">
                  <span className="w-full font-bold leading-[23px] text-[20px] text-[#fff]">
                    Smooth Process, Solid Results
                  </span>
                </div>
                <span className="w-full max-w-[570px] h-[69px] flex-grow-0  text-[20px] font-medium [font-stretch:normal] not-italic leading-[1.16] tracking-[normal] text-left text-[#575757]">
                  Working with us is easy. We follow a clear, no fuss process
                  that keeps things moving fast and smooth, from first chat to
                  final delivery.
                </span>
              </div>
              <Image
                src="/Homepage/Arrow.png"
                alt="image1"
                width={1200}
                height={554}
                className="object-contain w-[346px]"
              />

              <div className="w-full flex md:flex-row flex-col md:items-start gap-[25px] p-0 justify-between items-center">
                <div className="min-w-[281px] w-full flex flex-col justify-start items-start px-[25px] py-[24px] rounded-[25px] bg-[#f3f8f8]">
                  <span className="h-[23px] self-stretch flex-grow-0  text-[20px] font-bold [font-stretch:normal] not-italic leading-[1.16] tracking-[-1px] text-left text-[#2c4a40] mb-[120px]">
                    Kickoff
                  </span>
                  <span className="w-[166px] h-[95px] flex-grow-0  text-[16px] font-normal [font-stretch:normal] not-italic leading-[1.19] tracking-[normal] text-left text-[#2c4a40]">
                    We start with a friendly deep dive, getting to know your
                    goals, ideas, and wildest visions.
                  </span>
                </div>

                <div className="min-w-[281px] w-full flex flex-col justify-start items-start px-[25px] py-[24px] rounded-[25px] bg-[#c5d7d8]">
                  <span className="h-[23px] self-stretch flex-grow-0  text-[20px] font-bold [font-stretch:normal] not-italic leading-[1.16] tracking-[-1px] text-left text-[#2c4a40] mb-[120px]">
                    Kickoff
                  </span>
                  <span className="w-[166px] h-[95px] flex-grow-0  text-[16px] font-normal [font-stretch:normal] not-italic leading-[1.19] tracking-[normal] text-left text-[#2c4a40]">
                    We start with a friendly deep dive, getting to know your
                    goals, ideas, and wildest visions.
                  </span>
                </div>

                <div className="min-w-[281px] w-full flex flex-col justify-start items-start px-[25px] py-[24px] rounded-[25px] bg-[#163b31]">
                  <span className="h-[23px] self-stretch flex-grow-0  text-[20px] font-bold [font-stretch:normal] not-italic leading-[1.16] tracking-[-1px] text-left text-[#2c4a40] mb-[120px]">
                    Kickoff
                  </span>
                  <span className="w-[166px] h-[95px] flex-grow-0  text-[16px] font-normal [font-stretch:normal] not-italic leading-[1.19] tracking-[normal] text-left text-[#2c4a40]">
                    We start with a friendly deep dive, getting to know your
                    goals, ideas, and wildest visions.
                  </span>
                </div>

                <div className="min-w-[281px]  w-full flex flex-col justify-start items-start px-[25px] py-[24px] rounded-[25px] bg-[#f2fe65]">
                  <span className="h-[23px] self-stretch flex-grow-0  text-[20px] font-bold [font-stretch:normal] not-italic leading-[1.16] tracking-[-1px] text-left text-[#2c4a40] mb-[120px]">
                    Kickoff
                  </span>
                  <span className="w-[166px] h-[95px] flex-grow-0  text-[16px] font-normal [font-stretch:normal] not-italic leading-[1.19] tracking-[normal] text-left text-[#2c4a40]">
                    We start with a friendly deep dive, getting to know your
                    goals, ideas, and wildest visions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative  overflow-hidden ">
          <div className=" w-[90%] max-w-[1200px] mx-auto md:mb-[140px] mb-[40px]">
            <div className=" flex flex-col md:justify-start items-center ">
              <div className="w-[284.5px] h-[42.1px]  flex flex-row justify-center items-center rounded-[63.6px] bg-[#000]"></div>
              <div className="w-full flex md:flex-row md:gap-[85px] gap-[35px] flex-col mt-[60px] py-[30px] justify-center items-center">
                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/fiverr.png"
                    alt="image1"
                    width={75}
                    height={35}
                    className="object-contain"
                  />
                </div>

                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/pornopoli.png"
                    alt="image1"
                    width={75}
                    height={35}
                    className="object-contain"
                  />
                </div>
                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/vesa.png"
                    alt="image1"
                    width={75}
                    height={35}
                    className="object-contain"
                  />
                </div>
                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/crypto.png"
                    alt="image1"
                    width={75}
                    height={35}
                    className="object-contain"
                  />
                </div>
                <div className="w-[172px] h-[40px] flex items-center justify-center">
                  <Image
                    src="/Homepage/asvoria.png"
                    alt="image1"
                    width={75}
                    height={35}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] max-w-[1200px] mx-auto">
            <div className="w-full md:w-[1198px] h-auto md:h-[783px] flex-grow-0 flex flex-col justify-start items-start md:gap-[60px] gap-[20px] p-0">
              <div className="min-h-[156.1px] w-full flex flex-col justify-between items-start p-0">
                <div className="w-full max-w-[310.5px] h-[42.1px] flex-grow-0 flex flex-row justify-center items-center gap-[6.4px] px-[22.3px] py-[9.5px] rounded-[63.6px] bg-[#171717]"></div>
                <span className="w-full max-w-[570px] h-[69px] flex-grow-0  text-[20px] font-medium [font-stretch:normal] not-italic leading-[1.16] tracking-[normal] text-left text-[#575757]">
                  Working with us is easy. We follow a clear, no fuss process
                  that keeps things moving fast and smooth, from first chat to
                  final delivery.
                </span>
              </div>

              <div className="w-full h-auto md:h-[566.9px] flex flex-col gap-[10px] md:gap-[22.6px]">
                <div className="flex flex-row gap-[10px] md:gap-[22.6px]">
                  <div className="w-[179.4px] md:w-[256.3px] h-[262.0px] md:h-[374.3px] px-[25px] py-[23.8px] bg-[#8eabb7] rounded-3xl"></div>
                  <div className="w-[213.7px] md:w-[448.2px] h-auto md:h-[374px] gap-[10px] md:gap-[22.6px] flex flex-col rounded-3xl">
                    <div className="h-[88.9px] md:h-[127px] bg-[#ce6b6b] rounded-3xl gap-[18.6px]"></div>
                    <div className="h-auto md:h-[232px] rounded-3xl gap-[10px] md:gap-[22.6px] flex flex-row">
                      <div className="h-[162.4px] md:h-[232px] w-[148.4px] md:w-[212px] bg-[#d1ecb1] rounded-3xl"></div>
                      <div className="h-[162.4px] md:h-[232px] w-[148.4px] md:w-[212px] bg-[#b1cfc4] rounded-3xl"></div>
                    </div>
                  </div>
                  <div className="w-[313.7px] md:w-[448.2px] h-[262.0px] md:h-[374.3px] bg-[#2f6665] rounded-3xl"></div>
                </div>
                <div className="flex flex-row gap-[10px] md:gap-[22.6px]">
                  <div className="w-[411.4px] md:w-[587.7px] h-[119.0px] md:h-[170px] px-[25px] py-[23.8px] rounded-3xl bg-[#163b31]"></div>
                  <div className="w-[411.4px] md:w-[587.7px] h-[119.0px] md:h-[170px] px-[25px] py-[23.8px] rounded-3xl bg-[#d1ecb1]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative  overflow-hidden ">
          <div className=" w-[90%] max-w-[1200px] mx-auto ">
            <div className="w-[1200px] h-[457.1px] flex-grow-0 flex flex-col justify-start items-center gap-[45px] mt-[140px]">
              <div className="w-[284.5px] h-[42.1px] flex-grow-0 flex flex-row justify-center items-center gap-[6.4px] px-[22.3px] py-[9.5px] rounded-[63.6px] bg-[#000]"></div>
              <span className="w-[706px] h-[115px] flex-grow-0  text-[20px] font-medium [font-stretch:normal] not-italic leading-[1.16] tracking-[normal] text-center text-[#575757] py-[45px]">
                Our mission is to enhance efficiency, security, and transparency
                across industries. Making the world a smarter, more connected,
                and a safer placeTo achieve this, we believe in the power of
                Artificial intelligence’s efficiency and Blockchain technology’s
                security and transparency.
              </span>
              <div className="w-[1200px] h-[210px] flex-grow-0 flex flex-row justify-center items-start gap-[25px] p-0">
                <div className="w-[280px] h-[210px] flex-grow-0 flex flex-col justify-start items-center gap-[15px] pt-[25px] px-[15px] pb-[15px] rounded-[20px] bg-[#f9f9f9]"></div>
                <div className="w-[280px] h-[210px] flex-grow-0 flex flex-col justify-start items-center gap-[15px] pt-[25px] px-[15px] pb-[15px] rounded-[20px] bg-[#f9f9f9]"></div>
                <div className="w-[280px] h-[210px] flex-grow-0 flex flex-col justify-start items-center gap-[15px] pt-[25px] px-[15px] pb-[15px] rounded-[20px] bg-[#f9f9f9]"></div>
                <div className="w-[280px] h-[210px] flex-grow-0 flex flex-col justify-start items-center gap-[15px] pt-[25px] px-[15px] pb-[15px] rounded-[20px] bg-[#f9f9f9]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative  overflow-hidden">
          <div className=" w-[90%] max-w-[1200px] mx-auto ">
            <div className="w-[1200px] h-[584.6px] flex-grow-0 flex flex-col justify-start items-center gap-[20px] my-[140px]">
              <div className="h-[367.1px] self-stretch flex-grow-0 flex flex-col justify-start items-start gap-[45px] p-0">
                <div className="w-[355.5px] h-[42.1px] flex-grow-0 flex flex-row justify-center items-center gap-[6.4px] px-[22.3px] py-[9.5px] rounded-[63.6px] bg-[#000]"></div>
                <div className="w-[1200px] h-[280px] flex flex-col  md:flex-row justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] ">
                  <div className="w-[589px] h-[280px]  p-[15px] rounded-[20px] bg-[#f9f9f9]"></div>
                  <div className="w-[589px] h-[280px]  p-[15px] rounded-[20px] bg-[#f9f9f9]"></div>
                </div>
              </div>

              <div className="w-[1200px] h-[160.5px] flex-grow-0 flex flex-row justify-start items-start gap-[20px] my-[40px]">
                <div className="w-[335px] h-[160.5px] flex-grow-0 flex flex-col justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] bg-[#f3f8f8]"></div>
                <div className="w-[335px] h-[160.5px] flex-grow-0 flex flex-col justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] bg-[#f3f8f8]"></div>
                <div className="w-[335px] h-[160.5px] flex-grow-0 flex flex-col justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] bg-[#f3f8f8]"></div>
                <div className="w-[335px] h-[160.5px] flex-grow-0 flex flex-col justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] bg-[#f3f8f8]"></div>
              </div>
              <span className="w-[145px] h-[17px] flex-grow-0  text-[16px] font-medium [font-stretch:normal] not-italic leading-[1.04] tracking-[normal] text-center text-[#5f90ef]">
                Read more reviews
              </span>
            </div>
          </div>
        </div>

        <div className="w-full relative  overflow-hidden">
          <div className=" w-[90%] max-w-[1200px] mx-auto my-[140px]">
            <div className="h-[186.1px] self-stretch flex-grow-0 flex flex-col justify-start items-center gap-[22px] p-[30px] rounded-[25px] bg-[#e5e6ff]"></div>
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
    </div>
  );
}
