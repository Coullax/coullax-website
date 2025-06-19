import Image from "next/image";
import React, { useRef } from "react";
import HeaderNavBar from "../Header";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Spline from "@splinetool/react-spline";
import BookCallBtn from "../BookCallBtn";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { Marquee } from "../magicui/marquee";

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
      <div
        ref={heroRef}
        className=" h-dvh flex flex-col items-center justify-center"
      >
        <HeaderNavBar
          navItemsStyles="text-white hover:text-white"
          logoColor="white"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" w-[90%] max-w-[104.027vhvh] mx-auto flex flex-col items-center justify-center"
        >
          <div className=" w-full flex flex-col items-center justify-center mt-[100px]">
            <Image
              src="/blockChain/blockchain.png"
              alt="AI Icon"
              width={104}
              height={62}
              className=" md:mb-[10px] lg:mb-[25.4px] w-auto h-[45px] md:h-[50px] lg:h-[62px]"
            />
            <h1 className=" w-full font-special-gothic-expanded-one text-[12px] md:text-[20px] lg:text-[30px] leading-[15px] md:leading-[23px] lg:leading-[34.8px] -tracking-[0.5px] lg:-tracking-[1.5px] uppercase text-center text-[#ff8410]">
              BLOCKCHAIN TECHNOLOGY
            </h1>
          </div>
          <div className=" w-full flex flex-col items-center justify-center my-[25px] md:my-[40px] lg:my-[50px] text-white">
            <h1 className=" font-special-gothic-expanded-one text-[22px] lg:text-[96px] md:text-[45px] text-center leading-[25px] md:leading-[50px] lg:leading-[111.4px] md:-tracking-[2px] lg:-tracking-[4.8px] uppercase">
              The Architecture of
              <br />
              Decentralized Thought
            </h1>
            <div className=" font-inclusive-sans text-[15px] md:text-[25px] lg:text-[36px] text-center leading-[18px] md:leading-[28px] lg:leading-[46.8px] uppercase py-[25px] md:py-[35px] lg:py-[47px]">
              Blockchain engineered to grow, <br></br>
              resilient, autonomous, unstoppable.
            </div>
            <BookCallBtn className=" bg-[#ff8410] text-black border-black hover:bg-transparent hover:scale-105 hover:text-[#ff8410] hover:border-[#ff8410] transition-all duration-300 ease-in-out" />
          </div>
        </motion.div>
      </div>

      <div className=" w-full h-[280px] md:h-[500px] lg:h-[650px] relative ">
        {" "}
        <motion.div
          style={{ y: smoothSplineY }}
          className=" h-[400px] md:h-[550px] lg:h-[650px] !bg-transparent w-full flex items-center z-20"
        >
          <Spline scene="https://prod.spline.design/u0qlA7Ea73234oc8/scene.splinecode" />
        </motion.div>
        <motion.div
          style={{ y: smoothImageY }}
          className=" absolute bottom-0 left-1/2 -translate-x-1/2 h-[440px] md:h-[550px] lg:h-[654px] w-[440px] md:w-[550px] lg:w-[654px] overflow-hidden"
        >
          <Image
            src="/blockChain/hero1.png"
            alt="AI Human"
            width={654}
            height={654}
            className=" h-[440px] lg:h-[654px] md:h-[550px] w-[440px] md:w-[550px] lg:w-[654px]"
          />
        </motion.div>
      </div>

      <VelocityScroll defaultVelocity={1.2} className="bg-white h-[80px] md:h-[120px] lg:h-[185.5px]" numRows={1}>
        <Image
          src="/blockChain/border1.png"
          alt="Scrolling Image"
          width={305}
          height={185.5}
          className="inline-block object-contain w-auto h-[80px] md:h-[120px] lg:h-[185.5px]"
        />
      </VelocityScroll>
    </div>
  );
};

export default Hero;
