"use client";

import Image from "next/image";

export default function Footer() {


  return (
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
                  <a href="terms-conditions" className="hover:text-gray-300 text-sm">
                    Terms and Conditions
                  </a>
                  <a href="privacy-policy" className="hover:text-gray-300 text-sm">
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
  );
}
