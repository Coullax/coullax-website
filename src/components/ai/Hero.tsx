/**
 * AI Hero Component
 *
 * Landing page hero section for the AI services page featuring animated content,
 * parallax scrolling effects, and responsive design. Includes header navigation,
 * main title with icon, call-to-action button, and animated background image.
 *
 * @component
 * @returns {JSX.Element} The rendered AI hero section
 */

import React, { useRef } from "react";
import HeaderNavBar from "../universal/Header";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import BookCallBtn from "../universal/BookCallBtn";

export default function Hero() {
  // Reference for the hero section container to track scroll progress
  const heroRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll animation setup
   * Tracks scroll progress within the hero section bounds
   */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /**
   * Parallax effect transforms
   * Creates smooth upward movement of the AI human image on scroll
   */
  const imageY = useTransform(scrollYProgress, [0.1, 0.5], [50, 0]);
  const smoothImageY = useSpring(imageY, { stiffness: 400, damping: 40 });
  return (
    <div className=" w-full h-dvh bg-[#effaff] relative overflow-hidden">
      {/* Header navigation component */}
      <HeaderNavBar />

      {/* Main hero content with fade-in animation */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" w-[90%] max-w-[104.027vh] mx-auto h-[70dvh] md:h-[65dvh] lg:h-[60dvh] flex flex-col items-center justify-center"
      >
        {/* AI Icon and service title section */}
        <div className=" w-full flex flex-col items-center justify-center mt-[13.423vh]">
          <Image
            src="/ai/aiIcon.svg"
            alt="AI Icon"
            width={68.2}
            height={54.4}
            className=" mb-[1.073vh] lg:mb-[1.705vh] w-auto h-[2.682vh] md:h-[3.39vh] lg:h-[3.651vh]"
          />
          <h1 className=" w-full font-special-gothic-expanded-one text-[1.609vh] md:text-[1.695vh] lg:text-[2.027vh] leading-[1.931vh] md:leading-[1.864vh] lg:leading-[2.336vh] -tracking-[0.021vh] md:-tracking-[0.068vh] lg:-tracking-[0.101vh] uppercase text-center">
            ARTIFICIAL INTELLIGENCE
          </h1>
        </div>

        {/* Main heading, description, and CTA section */}
        <div className=" w-full flex flex-col items-center justify-center my-[3.219vh] md:my-[2.966vh] lg:my-[3.356vh]">
          {/* Primary heading with responsive typography */}
          <h1 className=" font-special-gothic-expanded-one text-[2.682vh] md:text-[4.661vh] lg:text-[7.383vh] text-center leading-[3.004vh] md:leading-[5.085vh] lg:leading-[8.564vh] -tracking-[0.097vh] md:-tracking-[0.186vh] lg:-tracking-[0.372vh] uppercase">
            Systems That Learn,
            <br />
            Minds That Scale
          </h1>

          {/* Service description */}
          <div className=" font-inclusive-sans text-[1.288vh] md:text-[1.441vh] lg:text-[2.416vh] text-center leading-[3.141vh] uppercase py-[2.682vh] lg:py-[3.154vh]">
            we build/ integrate AI that thinks, learns, and evolves.
          </div>

          {/* Call-to-action button */}
          <BookCallBtn className=" bg-[#0505cb] text-white border-white hover:bg-transparent hover:scale-105 hover:text-[#0505cb] hover:border-[#0505cb] transition-all duration-300 ease-in-out" />
        </div>
      </motion.div>

      {/* Parallax AI human image with smooth scroll animation */}
      <motion.div
        style={{ y: smoothImageY }}
        className=" absolute bottom-0 left-1/2 -translate-x-1/2 h-[37.983vh] md:h-[43.136vh] lg:h-[47.584vh] w-[44.099vh] md:w-[52.712vh] lg:w-[55.168vh] overflow-hidden"
      >
        <Image
          src="/ai/aiHuman.webp"
          alt="AI Human"
          width={822}
          height={709}
          className=" h-[37.983vh] lg:h-[47.584vh] md:h-[43.136vh] w-[44.099vh] md:w-[52.712vh] lg:w-[55.168vh]"
        />
      </motion.div>

      {/* Bottom statistics scroll banner */}
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
  );
}
