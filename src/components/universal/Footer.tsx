"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="relative h-[45.815vh] md:h-[52.966vh] lg:h-[42.905vh] bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+45.815vh)] md:h-[calc(100vh+52.966vh)] lg:h-[calc(100vh+42.905vh)] -top-[100vh]">
        <div className="h-[42.905vh] sticky top-[calc(100vh-45.815vh)] md:top-[calc(100vh-52.966vh)] lg:top-[calc(100vh-42.905vh)]">
          <div className="bg-[#e0ef29] text-black pt-[3.356vh]">
            <div className="w-[90%] max-w-[104.027vh] mx-auto pt-[2.013vh] flex justify-center md:justify-between items-start flex-wrap">
              {/* Mission Statement */}
              <div className="hidden lg:block">
                <p className=" text-[0.858vh] md:text-[1.007vh] font-silkscreen uppercase text-black">
                  Our Mission Is To Enhance Efficiency,
                  <br /> Security, And Transparency Across
                  <br /> Industries. Making The World A Smarter,
                  <br /> More Connected, And A Safer Place.
                  <br />
                  <br /> To Achieve This, We Believe In The Power
                  <br /> Of Artificial Intelligence&apos;s Efficiency
                  <br /> And Blockchain Technology&apos;s Security
                  <br /> And Transparency.
                </p>
              </div>
              <div className=" lg:hidden w-full text-center">
                <p className="  text-[0.858vh] w-full text-center lg:text-left md:text-[1.007vh] text-black font-silkscreen uppercase">
                  Our Mission Is To Enhance Efficiency, Security, And
                  Transparency
                  <br /> Across Industries. Making The World A Smarter, More
                  Connected,
                  <br /> And A Safer Place.
                  <br />
                  <br /> To Achieve This, We Believe In The Power Of Artificial
                  Intelligence&apos;s
                  <br /> Efficiency And Blockchain Technology&apos;s <br />
                  Security And Transparency.
                </p>
              </div>

              {/* Navigation Columns */}
              <div className="flex mt-[3.219vh] lg:mt-0 flex-col-4 md:flex-row justify-around w-full gap-[2.146vh] md:gap-[4.421vh] lg:w-fit">
                {/* Home Column */}
                <div>
                  <h3 className="font-bold mb-2 font-inclusive-sans text-[1.342vh] underline leading-[1.557vh] -tracking-[0.067vh]">
                    Home
                  </h3>
                  <ul className="space-y-[1.073vh] md:space-y-[0.477vh] font-inclusive-sans text-[1.342vh] leading-[1.557vh] -tracking-[0.075vh] font-stretch-normal">
                    <li>
                      <a href="#" className="hover:underline">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="hover:underline">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Services
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Services Column */}
                <div>
                  <h3 className="font-bold mb-2 font-inclusive-sans text-[1.342vh] underline leading-[1.557vh] -tracking-[0.067vh]">
                    Services
                  </h3>
                  <ul className="space-y-[1.073vh] md:space-y-[0.477vh] font-inclusive-sans text-[1.342vh] leading-[1.557vh] -tracking-[0.075vh] font-stretch-normal">
                    <li>
                      <Link href={"/ai"} className="hover:underline">
                        AI
                      </Link>
                    </li>
                    <li>
                      <a href={"/blockchain"} className="hover:underline">
                        Blockchain
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Web & Software
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Research & Strategy
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legal Column */}
                <div>
                  <h3 className="font-bold mb-2 font-inclusive-sans text-[1.342vh] underline leading-[1.557vh] -tracking-[0.067vh]">
                    Legal
                  </h3>
                  <ul className="space-y-[1.073vh] md:space-y-[0.477vh] font-inclusive-sans text-[1.342vh] leading-[1.557vh] -tracking-[0.075vh] font-stretch-normal">
                    <li>
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Socials Column */}
                <div>
                  <h3 className="font-bold mb-2 font-inclusive-sans text-[1.342vh] underline leading-[1.557vh] -tracking-[0.067vh]">
                    Socials
                  </h3>
                  <ul className="space-y-[1.073vh] md:space-y-[0.477vh] font-inclusive-sans text-[1.342vh] leading-[1.557vh] -tracking-[0.075vh] font-stretch-normal">
                    <li>
                      <a href="#" className="hover:underline">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        TikTok
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-[90%] max-w-[104.027vh] mx-auto my-[3.356vh]">
              <Image
                src="/coullaxFooterImage.png"
                alt="logo"
                width={1550}
                height={197}
                className="cursor-pointer w-full h-auto md:w-[104.027vh] md:h-[13.221vh] mx-auto"
              />
            </div>

            {/* Copyright Bar */}
            <div className="bg-black text-[#e0ef29] text-center py-[1.275vh] ">
              <p className="text-[1.342vh] leading-[1.557vh] -tracking-[0.067vh] font-inclusive-sans font-medium">
                © 2025. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
