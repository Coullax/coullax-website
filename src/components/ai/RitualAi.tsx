import React from 'react'
import RitualSection from '../universal/RitualSection'
import { VelocityScroll } from '../magicui/scroll-based-velocity';
import FlowingMenu from "@/components/ui/flowing-menu";

const RitualAi = () => {
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
  const cognitionText = [
    "Our AI process is about more than just",
    "automation.  it’s about building intelligence",
    "that adapts, learns, and grows over time.",
    "From the first idea to the final product, we",
    "train models to understand patterns, make",
    "decisions, and evolve with purpose.",
  ];
  const velocityText = "Instruct | infer| Integrate";

  return (
    <div className='w-full bg-white'>
      <RitualSection
        demoItems={demoItems}
        typingText="Fed with data, trained with intent — the mind begins to see beyond the static."
        splitTextStyle="text-black"
        backgroundcolor="bg-white"
        TypingTextColor="text-black"
        cognitionTextColor="text-black"
        cognitionText={cognitionText}
        
      />

      <div className="w-[90%] max-w-[104.027vh] mx-auto">
        <FlowingMenu
          items={demoItems}
          marqueeBackgroundColor="#0505cb"
          spanTextColor="#e0ef29"
          roundedDivBackgroundColor="#e0ef29"
          roundedDivTextColor="#0505cb"
        />
      </div>

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
  )
}

export default RitualAi