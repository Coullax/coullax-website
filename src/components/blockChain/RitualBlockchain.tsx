import React from 'react'
import RitualSection from '../universal/RitualSection'
import { VelocityScroll } from '../magicui/scroll-based-velocity';
import FlowingMenu from "@/components/ui/flowing-menu";

const RitualBlockchain = () => {
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
      text: "Model Selection & Design",
      image: "https://picsum.photos/600/400?random=3",
      ind: "3",
    },
    {
      link: "#",
      text: "Training & Evaluation",
      image: "https://picsum.photos/600/400?random=4",
      ind: "4",
    },
    {
      link: "#",
      text: "Fine-Tuning",
      image: "https://picsum.photos/600/400?random=4",
      ind: "5",
    },
    {
      link: "#",
      text: "Deployment",
      image: "https://picsum.photos/600/400?random=4",
      ind: "6",
    },
    {
      link: "#",
      text: "Monitoring & Support",
      image: "https://picsum.photos/600/400?random=4",
      ind: "7",
    },
  ];
  const cognitionText = [
    "Our blockchain process is more than",
    "decentralization. It's about architecting",
    "systems that self verify, adapt, and persist.",
    "From genesis block to scalable",
    "infrastructure, we engineer protocols",
    "that encode trust, evolve with consensus,",
    "and endure with intention."
  ];
  const velocityText = "resilient | autonomous | unstoppable";

  return (
    <div className='w-full bg-black'>
      <RitualSection
        demoItems={demoItems}
        typingText="Fed with data, trained with intent — the mind begins to see beyond the static."
        splitTextStyle="text-white"
        backgroundcolor="bg-black"
        TypingTextColor="text-white"
        cognitionTextColor="text-white"
        cognitionText={cognitionText}
      />

      <div className="w-[90%] max-w-[104.027vh] mx-auto bg-">
        <FlowingMenu
          items={demoItems}
          marqueeBackgroundColor="#ff8410"
          spanTextColor="#000000"
          roundedDivBackgroundColor="#000000"
          roundedDivTextColor="#ffffff"
        />
      </div>

      <div className="w-full">
        <VelocityScroll
          defaultVelocity={1}
          className=" font-special-gothic-expanded-one text-[#ff8410] text-center bg-black"
          fontSize="lg:text-[13.872vh] md:text-[8.872vh] text-[5.872vh] uppercase lg:-tracking-[0.676vh] -tracking-[0.076vh]"
          numRows={1}
        >
          {velocityText}
        </VelocityScroll>
      </div>
    </div>
  )
}

export default RitualBlockchain