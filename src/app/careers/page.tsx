"use client";
import Footer from "@/components/Footer";
import HeaderNavBar from "@/components/Header";
import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ArrowCircleRight, ArrowCircleUpRight, ArrowUpRight } from "@phosphor-icons/react";

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Image1 from "../../../public/careersPage/image1.png"
import Image2 from "../../../public/careersPage/image2.png";

interface ProcessList {
    title: string;
    backGround: string;
    textColor: string;
    description: string;
}

interface CarrouseImageItem {
    image: StaticImageData;
    width: number;
    height: number;
}

interface JobPosting {
    title: string;
    description: string;
    type: string;
    location: string;
    link?:string;
  }
interface SkillJobs {
  name: string;
  jobs: JobPosting[];
}

const skillJobs: SkillJobs[] = [
    {
      name: 'Software Engineering',
      jobs: [
        {
          title: "Software Engineer Intern",
          description: "We are hiring a software engineer intern for our team",
          type: "Internship",
          location: "On Site",
          link:'https://rooster.jobs/jobs/446914?_gl=1*6oq610*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjU0NSRqNTYkbDAkaDE0NDA5MDkyOQ..&_ga=2.177795308.895242263.1747193804-1782052477.1734762457'
        },
        {
          title: "Associate Tech Lead",
          description: "We are hiring a Associate Tech Lead for our team",
          type: "Full Time",
          location: "On Site",
          link:'https://rooster.jobs/jobs/446917?_gl=1*1a6cxe8*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjQ0OCRqNDMkbDAkaDE0NDA5MDkyOQ..&_ga=2.142711164.895242263.1747193804-1782052477.1734762457'
        },
        {
          title: "Backend Developer",
          description: "We are  looking for skilled Backend Developers!",
          type: "Full Time",
          location: "On Site",
          link:'https://rooster.jobs/jobs/446916?_gl=1*cune2*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjczMSRqNTYkbDAkaDE0NDA5MDkyOQ..&_ga=2.241802443.895242263.1747193804-1782052477.1734762457'
        },
        {
          title: "Mobile App Developer",
          description: "We are looking for Mobile App Developers!",
          type: "Full Time",
          location: "On Site",
          link:'https://rooster.jobs/jobs/446905?_gl=1*fg4nbj*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5Mjc4MSRqNiRsMCRoMTQ0MDkwOTI5&_ga=2.241802443.895242263.1747193804-1782052477.1734762457'
        }
      ]
    },
    {
      name: 'Design',
      jobs: [
        {
          title: "Video Editor",
          description: "We are looking for a Video Editor who knows how to keep viewers hooked, especially on social media.",
          type: "Full Time",
          location: "on Site",
          link:'https://rooster.jobs/jobs/447313?_gl=1*5lvids*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjgyNSRqNTIkbDAkaDE0NDA5MDkyOQ..&_ga=2.139483514.895242263.1747193804-1782052477.1734762457'
        }
      ]
    },
    {
      name: 'Quality Assurance',
      jobs: [
        // {
        //   title: "Quality Assurance",
        //   description: "We are hiring a expert quality assurance for our team",
        //   type: "Part Time",
        //   location: "Remote"
        // }
      ]
    },
    {
      name: 'Project Management',
      jobs: [
        // {
        //   title: "Project Manager",
        //   description: "We are hiring a expert project manager for our team",
        //   type: "Full Time",
        //   location: "on Site"
        // }
      ]
    },
    {
      name: 'Data Science',
      jobs: []  
    },
    {
      name: 'Product Management',
      jobs: [] 
    },
    {
      name: 'User Experience Research',
      jobs: [
        // {
        //   title: "User Experience Researcher",
        //   description: "We are hiring a expert user experience for our team",
        //   type: "Full Time",
        //   location: "Remote"
        // }
      ]
    },
    {
      name: 'Project Management Intern',
      jobs: []
    }
  ];

  const jobListings = [
    {
      name: 'Product Design',
      jobs: [
        {
          title: "PRODUCT DESIGNER",
          description: "we are looking for a highly skilled product designer to join our dynamic team.",
          type: "FULL TIME",
          location: "ON SITE",
          link: 'https://example.com/product-designer'
        }
      ]
    },
    {
      name: 'Product Design',
      jobs: [
        {
          title: "PRODUCT DESIGNER",
          description: "we are looking for a highly skilled product designer to join our dynamic team.",
          type: "FULL TIME",
          location: "ON SITE",
          link: 'https://example.com/product-designer'
        }
      ]
    },
    {
      name: 'Product Design',
      jobs: [
        {
          title: "PRODUCT DESIGNER",
          description: "we are looking for a highly skilled product designer to join our dynamic team.",
          type: "FULL TIME",
          location: "ON SITE",
          link: 'https://example.com/product-designer'
        }
      ]
    },
  ];
  


export default function CareersPage() {
    const [skills, setSkills] = useState(
        skillJobs.map(skill => ({
          name: skill.name,
          isActive: false
        }))
      );

    // const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [activeJobs, setActiveJobs] = useState<JobPosting[]>(
      skillJobs.flatMap(skill => skill.jobs) // Initially show all jobs
    );
  const processList: ProcessList[] = [
    {
      title: "Your Resume",
      backGround: "bg-[#fff]",
      textColor: "text-[#000]",
      description: "We carefully examine your resume",
    },
    {
      title: "Assessment",
      backGround: "bg-[#fff]",
      textColor: "text-[#000]",
      description: "You face some technical assessments",
    },
    {
      title: "Interview",
      backGround: "bg-[#fff]",
      textColor: "text-[#000]",
      description: "You face for our interviews",
    },
    {
      title: "Join the family",
      backGround: "bg-[#6abb79]",
      textColor: "text-[#000]",
      description: "Congrats!",
    },
  ];

  const carrouseImageList: CarrouseImageItem[] = [
    {
      image: Image1,
      width: 782,
      height: 450,
    },
    {
      image: Image2,
      width: 782,
      height: 450,
    },
    {
      image: Image1,
      width: 782,
      height: 450,
    },

  ];

  const handleSkillClick = (clickedIndex: number) => {
    const newSkills = skills.map((skill, index) => ({
      ...skill,
      isActive: index === clickedIndex ? !skill.isActive : false
    }));
    
    setSkills(newSkills);
    
    const clickedSkill = newSkills[clickedIndex];
    if (clickedSkill.isActive) {
      // setSelectedSkill(clickedSkill.name);
      const foundSkill = skillJobs.find(skill => skill.name === clickedSkill.name);
      setActiveJobs(foundSkill ? foundSkill.jobs : []);
    } else {
      // setSelectedSkill(null);
      setActiveJobs(skillJobs.flatMap(skill => skill.jobs)); // Show all jobs when no skill selected
    }
  };


    return (
        <div className=" w-full pt-[50px] bg-[#fff]">
            <div className=" w-full">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <HeaderNavBar/>
                </div>
            </div>


            <div className="w-[90%] max-w-[1550px]  mx-auto flex justify-between mt-[100px]">
              <span className="text-[96px] uppercase font-special-gothic-expanded-one">The hand of<br></br> entity</span>
              <span className="text-[36px] uppercase font-special-gothic-expanded-one">careers</span>
            </div>

        <div className="w-[90%] max-w-[1550px]  mx-auto mt-[30px] text-left">
          <div className=" text-[15px] leading-[20px] uppercase font-silkscreen text-black">
          To build the unbuilt, we gather the rare, the restless, the aligne
          </div>

          <div className=" text-[40px] mt-[56px] uppercase font-inclusive-sans text-black">
          Coullax seeks thinkers, makers, and system breakers , <br></br>individuals drawn to the strange, the powerful, and <br></br>the unseen mechanics behind what we build. Whether <br></br>you wield code like language, design like ritual, or<br></br> strategy like signal alignment, there is a place for<br></br> you within the Forge.
          </div>

          <button className=" bg-[#e0ef29] min-w-[312px] py-[25px] px-[86px] text-[20px] text-center leading-[20px] -tracking-[1px] uppercase font-silkscreen text-[#030303] border border-dashed border-black mt-[50px] my-[100px]">
              SEND US YOUR RESUME
            </button>
        </div>

            <div className="w-full relative overflow-hidden">
                <div className="w-[90%] max-w-[1550px]  mx-auto mt-[100px] md:mt-[140px] ">
                    <h1 className=" text-black -tracking-[2.2px] text-[36px] lg:text-[45px] font-bold text-left">
                    AVAILABLE POSITIONS
                    </h1>
                    <div className="mt-[24px] lg:mt-[32px]">
                        <Marquee pauseOnHover className="[--duration:20s] p-0">
                            {carrouseImageList.map((image: CarrouseImageItem, index: number) => (
                                <Image
                                    key={index}
                                    src={image.image}
                                    alt={`image${index}`}
                                    width={image.width}
                                    height={image.height}
                                    className=" bg-[#d9d9d9]"
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>


        <div className="w-[90%] max-w-[1550px] mx-auto mt-[100px] mb-[100px]">
          <div className="grid grid-cols-3 gap-[50px]">
            {jobListings.map((category) =>
              category.jobs.map((job) => (
                <div key={job.title} className="flex flex-col p-[28px] border border-black hover:bg-black hover:text-white transition-colors duration-300 group">
                  <span className="font-special-gothic-expanded-one text-left text-[40px] group-hover:text-white -leading-[2]">
                    {job.title}
                  </span>
                  <div className="flex flex-row gap-[11.8px] mt-[30px]">
                    <div className="border border-black px-[11.8px] py-[6px] font-inclusive-sans text-[16px] group-hover:border-white group-hover:text-white font-[600]">
                      {job.type}
                    </div>
                    <div className="border border-black px-[11.8px] py-[6px] font-inclusive-sans text-[16px] group-hover:border-white group-hover:text-white font-[600]">
                      {job.location}
                    </div>
                  </div>
                  <div className="font-inclusive-sans text-[24px] mt-[30px] group-hover:text-white uppercase">
                    {job.description}
                  </div>
                  <a href={job.link}>
                    <button className="bg-[#e0ef29] w-[214px] py-[25px] px-[30px] text-[20px] text-center -tracking-[1px] uppercase font-silkscreen text-[#030303] border border-dashed border-black mt-[100px] group-hover:bg-white group-hover:text-black group-hover:border-white flex flex-row">
                      Apply Now
                      <ArrowUpRight size={22} />
                    </button>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>


        <div className="bg-black ">

  <div className="w-[90%] max-w-[1550px] mx-auto py-[100px]">
    {/* Header section */}
    <div className="flex justify-between ">
      <span className="text-[96px] uppercase font-special-gothic-expanded-one text-white">
        Rite of Entry
      </span>
      <span className="text-[36px] uppercase font-special-gothic-expanded-one text-white">
        hiring process
      </span>
    </div>

    {/* Content section */}
    <div className="mt-[30px] text-left">
      <div className="text-[15px] leading-[20px] uppercase font-silkscreen text-white">
        through signal, ritual, and intent — the few become part of the whole.
      </div>

      <div className="text-[40px] mt-[56px] uppercase font-inclusive-sans text-white">
        Joining Coullax is not a transaction — it is a transition. We don't merely review resumes; we decipher intent, resonance, and potential. Our process is built to uncover builders who think beyond the visible . individuals who feel the pulse of systems not yet formed.
      </div>

      <button className="bg-[#e0ef29] min-w-[312px] py-[25px] px-[30px] text-[20px] text-center leading-[20px] -tracking-[1px] uppercase font-silkscreen text-[#030303] border border-dashed border-black mt-[50px] my-[100px]">
        SEND US YOUR RESUME
      </button>
    </div>

    {/* Grid section */}
            <div className="grid grid-cols-4 gap-[25.4px]">
              <div className="border border-white flex flex-col py-[31.5px] px-[32.8px] hover:bg-[#e0ef29] group">
                <span className="font-special-gothic-expanded-one text-[40px] text-white group-hover:text-black">Your Resume</span>
                <span className="font-inclusive-sans text-[24px] text-white mt-[43px] group-hover:text-black">We carefully examine your resume</span>
              </div>

              <div className="border border-white flex flex-col py-[31.5px] px-[32.8px] hover:bg-[#e0ef29] group">
                <span className="font-special-gothic-expanded-one text-[40px] text-white group-hover:text-black">Assessment</span>
                <span className="font-inclusive-sans text-[24px] text-white mt-[43px] group-hover:text-black">You face our Technical Assesments</span>
              </div>

              <div className="border border-white flex flex-col py-[31.5px] px-[32.8px] hover:bg-[#e0ef29] group">
                <span className="font-special-gothic-expanded-one text-[40px] text-white group-hover:text-black">Interview</span>
                <span className="font-inclusive-sans text-[24px] text-white mt-[43px] group-hover:text-black">You face for our interviews</span>
              </div>

              <div className="border border-white flex flex-col py-[31.5px] px-[32.8px] hover:bg-[#e0ef29] group">
                <span className="font-special-gothic-expanded-one text-[40px] text-white group-hover:text-black">Join the forge</span>
                <span className="font-inclusive-sans text-[24px] text-white mt-[43px] group-hover:text-black">Congratse</span>
              </div>
            </div>


  </div>
</div>


  







            <Footer/>
        </div>
    );
}
