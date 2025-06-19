"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Loading from "./loading";
import ContactUs from "@/components/landing/ContactUs";
import Hero from "@/components/landing/Hero";
import Summon from "@/components/landing/Summon";
import Forge from "@/components/landing/Forge";
import Ritual from "@/components/landing/Ritual";
import Primordial from "@/components/landing/Primordial";
import Artifact from "@/components/landing/Artifact";
// import dynamic from "next/dynamic";

// Dynamically import 3D components to prevent SSR issues
// const ModelViewer = dynamic(() => import("@/components/reactbits/ModelViewr"), { ssr: false });
// const Model = dynamic(() => import("@/components/car").then(mod => ({ default: mod.Model })), { ssr: false });
// const Gltf = dynamic(() => import("@react-three/drei").then(mod => ({ default: mod.Gltf })), { ssr: false });

export default function Home() {
  const [viewLoading, setViewLoading] = useState<boolean>(true);

  useEffect(() => {
    const viewLoadingScreen = sessionStorage.getItem("viewLoadingScreen");
    if (viewLoadingScreen === "true") {
      setViewLoading(true);
    } else {
      setViewLoading(false);
    }
  }, []);

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
          <Hero />

          {/* Forge Section */}
          <Forge />

          <VelocityScroll
            fontSize="font-normal text-[20px] md:text-[4.034vh] leading-[24px] md:leading-[4.678vh] font-special-gothic-expanded-one uppercase tracking-0 md:-tracking-[0.202vh] text-white py-[15px] md:py-[2.013vh]"
            defaultVelocity={0.2}
            className="bg-[#0505cb] "
            numRows={1}
          >
            AI, Machine Learning, Web3, Data science.Software.Research,
            Chatbot,DeFi,Dapp,AI, Machine Learning, Web3, Data science, Software
            , Research, Chatbot,DeFiDeFi
          </VelocityScroll>

          {/* Ritual Section */}
          <Ritual />

          {/* Primordial Section */}
          <Primordial />

          {/* Summon Section */}
          <Summon />

          <VelocityScroll
            className="bg-[#e0ef29] font-bold font-special-gothic-expanded-one"
            fontSize=" py-[15px] md:py-[2.027vh] text-[20px] md:text-[4.061vh] leading-[24px] md:leading-[4.709vh] tracking-0 md:-tracking-[0.203vh] uppercase"
            numRows={1}
          >
            JOIN THE BUILD.
          </VelocityScroll>

          {/* Artifact Section */}
          <Artifact />
          {/* <ModelViewer
            // url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
            url="/ToyCar.glb"
            width={400}
            height={400}
          /> */}

          {/* <Car */}
          {/* <Model /> */}
          {/* <Gltf scale={1.0} position={[0.3, -0.6, 1.1]} src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb" /> */}

          {/* Contact Us Section */}
          <ContactUs />

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
