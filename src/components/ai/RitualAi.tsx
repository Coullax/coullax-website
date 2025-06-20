/**
 * RitualAi Component
 *
 * A comprehensive AI services page component that showcases the AI development process.
 * Features a multi-step process flow, interactive flowing menu, and animated text scrolling.
 *
 * @component
 * @returns {JSX.Element} The rendered AI services page
 */

import React from "react";
import RitualSection from "../universal/RitualSection";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import FlowingMenu from "@/components/ui/flowing-menu";

const RitualAi = () => {
  /**
   * Demo items representing the AI development process steps
   * Each item contains navigation link, descriptive text, placeholder image, and step index
   */
  const demoItems = [
    {
      link: "#",
      text: "Ideation & Use Case Definition",
      image: "https://picsum.photos/600/400?random=1",
      ind: "1",
    },
    {
      link: "#",
      text: "Technical & Economic Design",
      image: "https://picsum.photos/600/400?random=2",
      ind: "2",
    },
    {
      link: "#",
      text: "Platform & Technology Selection",
      image: "https://picsum.photos/600/400?random=3",
      ind: "3",
    },
    {
      link: "#",
      text: "Development phase",
      image: "https://picsum.photos/600/400?random=4",
      ind: "4",
    },
    {
      link: "#",
      text: "Testing & Security Audit",
      image: "https://picsum.photos/600/400?random=4",
      ind: "5",
    },
    {
      link: "#",
      text: "Deployment & Launch",
      image: "https://picsum.photos/600/400?random=4",
      ind: "6",
    },
    {
      link: "#",
      text: "Maintenance & Governance",
      image: "https://picsum.photos/600/400?random=4",
      ind: "7",
    },
  ];

  /**
   * Text content for the cognition section
   * Describes the AI development philosophy and approach
   */
  const cognitionText = [
    "Our AI process is about more than just",
    "automation.  it's about building intelligence",
    "that adapts, learns, and grows over time.",
    "From the first idea to the final product, we",
    "train models to understand patterns, make",
    "decisions, and evolve with purpose.",
  ];

  /**
   * Velocity scroll text content
   * Brief tagline for AI capabilities
   */
  const velocityText = "Instruct | infer| Integrate";
  return (
    <div className="w-full bg-white">
      {/* Main ritual section with AI development process steps */}
      <RitualSection
        demoItems={demoItems}
        typingText="Fed with data, trained with intent — the mind begins to see beyond the static."
        splitTextStyle="text-black"
        backgroundcolor="bg-white"
        TypingTextColor="text-black"
        cognitionTextColor="text-black"
        cognitionText={cognitionText}
      />

      {/* Interactive flowing menu showcasing AI development steps */}
      <div className="w-[90%] max-w-[104.027vh] mx-auto">
        <FlowingMenu
          items={demoItems}
          marqueeBackgroundColor="#0505cb"
          spanTextColor="#e0ef29"
          roundedDivBackgroundColor="#e0ef29"
          roundedDivTextColor="#0505cb"
        />
      </div>

      {/* Animated velocity scroll with AI tagline */}
      <div className="w-full">
        <VelocityScroll
          defaultVelocity={1}
          className=" font-special-gothic-expanded-one text-[#e0ef29] text-center bg-[#0505cb]"
          fontSize="lg:text-[13.872vh] md:text-[8.872vh] text-[5.872vh] uppercase lg:-tracking-[0.676vh] -tracking-[0.076vh]"
          numRows={1}
        >
          {velocityText}
        </VelocityScroll>
      </div>
    </div>
  );
};

export default RitualAi;
