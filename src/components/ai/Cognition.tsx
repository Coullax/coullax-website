import React from "react";
import CognitionCoreTemplate from "../universal/CognitionCoreTemplate";
import { cn } from "@/lib/utils";

export default function Cognition() {
  const description = [
    { text: " the toolkit we use to build intelligent systems.", delay: 0 },
    { text: "from training models to understanding", delay: 0.2 },
    { text: "language and deploying AI into the real world.", delay: 0.4 },
  
  ];

  const items = [
    {
      image: "group_1",
      title: "Deep Learning Frameworks",
      description:
        "We use advanced frameworks like TensorFlow and PyTorch to build and train powerful AI models.",
    },
    {
      image: "group_2",
      title: "Natural Language Processing (NLP) Tools",
      description:
        "Tools designed to analyze, understand, and generate human language. They enable applications like chatbots, sentiment analysis, translation, and text summarization.",
    },
    {
      image: "group_3",
      title: "Data Manipulation and Analysis",
      description:
        "Toolkits for cleaning, transforming, and exploring datasets. These are essential for preparing data for machine learning and drawing insights from structured or unstructured information.",
    },
    {
      image: "group_4",
      title: "Cloud-Based Machine Learning Services",
      description:
        "Scalable platforms offered by cloud providers (like AWS, Azure, or Google Cloud) that allow users to build, train, and deploy machine learning models without managing infrastructure.",
    },
    {
      image: "group_5",
      title: "Model Deployment and Serving Platforms",
      description:
        "Systems that host trained AI models and provide APIs or endpoints for real-time inference, ensuring high availability, scalability, and performance in production environments.",
    },
    {
      image: "group_6",
      title: "AI-Assisted Coding Tools",
      description:
        "Intelligent coding assistants that help developers write, debug, and optimize code using machine learning, such as code completion, generation, or review features.",
    },
    {
      image: "group_7",
      title: "AI Model Fine-Tuning",
      description:
        "Techniques and tools used to adapt pre-trained models to specific tasks or datasets, improving accuracy and performance in targeted applications.",
    },
  ];
  return (
    <div className=" w-full bg-black relative lg:pt-[3.378vh] pt-[1.378vh] pb-[5.168vh]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          "opacity-25 dark:opacity-25 z-0"
        )}
      />
      <CognitionCoreTemplate
        description={description}
        cognitionCoreItems={items}
        titleText="cognition core"
        titleTextClassName="text-white w-full !text-center lg:!text-left text-[3.219vh] md:text-[5.508vh] font-special-gothic-expanded-one md:leading-[7.477vh] -tracking-[0.215vh] md:-tracking-[0.212vh] lg:leading-[7.477vh] uppercase"
        typingText="The pulse of artificial thought,<br> wired with intention and built to evolve."
        typingTextClassName="text-white text-[0.751vh] md:text-[1.271vh] lg:text-[1.007vh] w-full text-center lg:text-left leading-[0.966vh] md:leading-[1.309vh] font-silkscreen"
        animationColor="#E0EF29"
        cognitionCoreDescriptionStyle="text-white"
        cognitionCoreTitleStyle="text-[#e0ef29]"
        descriptionClassName="text-white w-full text-center lg:text-left text-[1.288vh] md:text-[1.864vh] lg:text-[2.685vh] uppercase font-inclusive-sans leading-[1.609vh] md:leading-[2.288vh] lg:leading-[3.49vh]"
        imagePath="/ai/cognition"
        imageType="svg"
      />
    </div>
  );
}
