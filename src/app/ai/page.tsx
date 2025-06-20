"use client";
import ContactUs from "@/components/landing/ContactUs";
import Footer from "@/components/universal/Footer";
import React from "react";
import Hero from "@/components/ai/Hero";
import Construct from "@/components/ai/Construct";
import Cognition from "@/components/ai/Cognition";
import RitualAi from "@/components/ai/RitualAi";

export default function AIPage() {
  return (
    <div className=" w-full">
      <Hero />
      <RitualAi />
      <Cognition />
      <Construct />
      <ContactUs />
      <Footer />
    </div>
  );
}
