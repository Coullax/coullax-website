"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    // <div className="w-full relative  overflow-hidden bg-[#1e201f]">
    //         <div className=" w-[90%] max-w-[1200px] mx-auto mt-[65px] mb-[50px] ">
    //           <div className=" text-white py-4 flex flex-col lg:flex-row justify-between items-center px-6 space-y-8 lg:space-y-0">
    //             <div className="flex space-x-4 ">
    //               <Image
    //                 src="/logo-light.png"
    //                 alt="logo"
    //                 width={197}
    //                 height={33}
    //                 className="cursor-pointer"
    //               />
    //             </div>
    //             <div className="flex space-x-6">
    //               <a href="terms-conditions" className="hover:text-gray-300 text-sm">
    //                 Terms and Conditions
    //               </a>
    //               <a href="privacy-policy" className="hover:text-gray-300 text-sm">
    //                 Privacy Policy
    //               </a>
    //               <a href="#" className="hover:text-gray-300 text-sm">
    //                 About Coullax
    //               </a>
    //             </div>
    //             <div className="flex space-x-4 text-white">
    //               <a href="#" className="hover:text-gray-300 rounded-full">
    //                 <Image
    //                   src="/socialmedia-logo/ig.png"
    //                   alt="logo"
    //                   width={34}
    //                   height={34}
    //                   className="cursor-pointer"
    //                 />
    //               </a>
    //               <a href="#" className="hover:text-gray-300 rounded-full">
    //                 <Image
    //                   src="/socialmedia-logo/fb.png"
    //                   alt="logo"
    //                   width={34}
    //                   height={34}
    //                   className="cursor-pointer"
    //                 />
    //               </a>
    //               <a href="#" className="hover:text-gray-300 rounded-full">
    //                 <Image
    //                   src="/socialmedia-logo/x.png"
    //                   alt="logo"
    //                   width={34}
    //                   height={34}
    //                   className="cursor-pointer"
    //                 />
    //               </a>
    //               <a href="#" className="hover:text-gray-300 rounded-full">
    //                 <Image
    //                   src="/socialmedia-logo/tiktok.png"
    //                   alt="logo"
    //                   width={34}
    //                   height={34}
    //                   className="cursor-pointer"
    //                 />
    //               </a>
    //               <a href="#" className="hover:text-gray-300 rounded-full">
    //                 <Image
    //                   src="/socialmedia-logo/linkedin.png"
    //                   alt="logo"
    //                   width={34}
    //                   height={34}
    //                   className="cursor-pointer"
    //                 />
    //               </a>
    //             </div>
    //           </div>

    //           <div className="flex justify-center items-center text-xs text-white font-normal leading-[1.16] tracking-[normal] text-center mt-[40px]">
    //             &copy; 2024 Coullax All Rights Reserved
    //           </div>
    //         </div>
    //       </div>
    <footer className="bg-[#e0ef29] text-black pt-[3.356vh]">
      <div className="w-[90%] max-w-[104.027vh] mx-auto pt-[2.013vh] flex justify-between items-start flex-wrap">
        {/* Mission Statement */}
        <div>
          <p className="text-[1.007vh] font-silkscreen uppercase">
            Our Mission Is To Enhance Efficiency,<br /> Security, And Transparency
            Across<br /> Industries. Making The World A Smarter,<br /> More Connected, And A
            Safer Place.<br /><br /> To Achieve This, We Believe In The Power<br /> Of Artificial
            Intelligence&apos;s Efficiency<br /> And Blockchain Technology&apos;s
            Security<br /> And Transparency.
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="flex flex-col-4 md:flex-row gap-[41.2px] w-fit">
          {/* Home Column */}
          <div>
            <h3 className="font-bold mb-2 font-inclusive-sans text-[1.342vh] underline leading-[1.557vh] -tracking-[0.067vh]">
              Home
            </h3>
            <ul className="space-y-[0.477vh] font-inclusive-sans text-[1.342vh] leading-[1.557vh] -tracking-[0.7px] font-stretch-normal">
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
            <ul className="space-y-[0.477vh] font-inclusive-sans text-[1.342vh] leading-[1.557vh] -tracking-[0.7px] font-stretch-normal">
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
            <ul className="space-y-[0.477vh] font-inclusive-sans text-[1.342vh] leading-[1.557vh] -tracking-[0.7px] font-stretch-normal">
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
            <ul className="space-y-[0.477vh] font-inclusive-sans text-[1.342vh] leading-[1.557vh] -tracking-[0.7px] font-stretch-normal">
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
          className="cursor-pointer w-[104.027vh] h-[13.221vh] mx-auto"
        />
      </div>

      {/* Copyright Bar */}
      <div className="bg-black text-[#e0ef29] text-center py-[1.275vh] ">
        <p className="text-[1.342vh] leading-[1.557vh] -tracking-[0.067vh] font-inclusive-sans font-medium">
          © 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
