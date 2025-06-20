import Image from "next/image";
import React, { useRef } from "react";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Spline from "@splinetool/react-spline";
import BookCallBtn from "../universal/BookCallBtn";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
// import SplitText from "../reactbits/splitText";
import HeaderNavBar from "../universal/Header";
import ParallaxStarsBackground from "../ParallaxStarsBackground";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0.1, 0.5], [450, 0]);
  const splineY = useTransform(scrollYProgress, [0.1, 0.5], [-230, -370]);

  const smoothImageY = useSpring(imageY, { stiffness: 400, damping: 40 });
  const smoothSplineY = useSpring(splineY, { stiffness: 400, damping: 40 });

  return (
    <div className="w-full relative overflow-hidden bg-[radial-gradient(circle_at_50%_350%,#ffbf82,#df730e_75%,#000_85%)]">
      <ParallaxStarsBackground
        smallStarsCount={1400}
        mediumStarsCount={400}
        bigStarsCount={150}
      />
      <div
        ref={heroRef}
        className=" h-[75dvh] md:h-dvh flex flex-col items-center justify-center"
      >
        <HeaderNavBar
          navItemsStyles="text-white hover:text-white"
          logoColor="white"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" w-[90%] max-w-[104.027vhvh] mx-auto flex flex-col items-center justify-center z-10"
        >
          <div className=" w-full flex flex-col items-center justify-center mt-[6.757vh]">
            <Image
              src="/blockChain/blockchain.png"
              alt="AI Icon"
              width={104}
              height={62}
              className=" md:mb-[0.847vh] lg:mb-[1.716vh] w-auto h-[4.828vh] md:h-[4.237vh] lg:h-[4.189vh]"
            />
            <h1 className=" w-full font-special-gothic-expanded-one text-[1.288vh] md:text-[1.695vh] lg:text-[2.027vh] leading-[1.609vh] md:leading-[1.949vh] lg:leading-[2.351vh] -tracking-[0.042vh] lg:-tracking-[0.101vh] uppercase text-center text-[#ff8410]">
              BLOCKCHAIN TECHNOLOGY
            </h1>
          </div>
          <div className=" w-full z-10 flex flex-col items-center justify-center my-[2.682vh] md:my-[3.39vh] lg:my-[3.378vh] text-white">
            <h1 className="font-special-gothic-expanded-one text-[2.682vh] lg:text-[6.486vh] md:text-[3.814vh] text-center leading-[2.682vh] md:leading-[4.237vh] lg:leading-[7.527vh] md:-tracking-[0.169h] lg:-tracking-[0.324vh] uppercase text-white">
              The Architecture of
            </h1>
            <h1 className="font-special-gothic-expanded-one text-[2.682vh] lg:text-[6.486vh] md:text-[3.814vh] text-center leading-[2.682vh] md:leading-[4.237vh] lg:leading-[7.527vh] md:-tracking-[0.169h] lg:-tracking-[0.324vh] uppercase text-white">
              Decentralized Thought
            </h1>

            <div className=" font-inclusive-sans text-[1.609vh] md:text-[2.119vh] lg:text-[2.432vh] text-center leading-[1.931vh] md:leading-[2.373vh] lg:leading-[3.162vh] uppercase py-[2.682vh] md:py-[2.966vh] lg:py-[3.176vh]">
              Blockchain engineered to grow, <br></br>
              resilient, autonomous, unstoppable.
            </div>
            <BookCallBtn className=" bg-[#ff8410] text-black border-black hover:bg-transparent hover:scale-105 hover:text-[#ff8410] hover:border-[#ff8410] transition-all duration-300 ease-in-out" />
          </div>
        </motion.div>
      </div>

      <div className=" w-full mt-[16.094vh] md:mt-0 h-[30.043vh] md:h-[42.373vh] lg:h-[43.919vh] relative ">
        {" "}
        <motion.div
          style={{ y: smoothSplineY }}
          className=" h-[42.918vh] md:h-[46.61vh] lg:h-[43.919vh] !bg-transparent w-[200%] -ml-[50%] flex items-center z-20"
        >
          <Spline scene="https://prod.spline.design/u0qlA7Ea73234oc8/scene.splinecode" />
        </motion.div>
        <motion.div
          style={{ y: smoothImageY }}
          className=" absolute bottom-0 left-1/2 -translate-x-1/2 h-[47.21vh] md:h-[46.61vh] lg:h-[44.189vh] w-[47.21vh] md:w-[46.61vh] lg:w-[44.189vh] overflow-hidden"
        >
          <Image
            src="/blockChain/hero1.png"
            alt="AI Human"
            width={654}
            height={654}
            className=" h-[47.21vh] lg:h-[44.189vh] md:h-[46.61vh] w-[47.21vh] md:w-[46.61vh] lg:w-[44.189vh]"
          />
        </motion.div>
      </div>

      <VelocityScroll
        defaultVelocity={1.2}
        className="bg-white h-[8.584vh] md:h-[10.169vh] lg:h-[12.534vh]"
        numRows={1}
      >
        <Image
          src="/blockChain/border1.png"
          alt="Scrolling Image"
          width={305}
          height={185.5}
          className="inline-block object-contain w-auto h-[8.584vh] md:h-[10.169vh] lg:h-[12.534vh]"
        />
      </VelocityScroll>
    </div>
  );
};

export default Hero;
