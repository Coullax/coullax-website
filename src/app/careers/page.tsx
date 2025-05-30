"use client";
import Footer from "@/components/Footer";
import HeaderNavBar from "@/components/Header";
import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ArrowCircleRight, ArrowCircleUpRight } from "@phosphor-icons/react";

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
        // {
        //   title: "Software Engineer",
        //   description: "We are hiring a expert software engineer for our team",
        //   type: "Full Time",
        //   location: "Remote"
        // },
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
      width: 554,
      height: 318,
    },
    {
      image: Image2,
      width: 554,
      height: 318,
    }
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

            <div className="w-full relative overflow-hidden">
                <div className=" w-[90%] max-w-[1200px] mx-auto mt-[70px] md:mt-[140px] ">
                    <div
                        className="flex flex-row bg-[#6abb79] items-start gap-1.5 rounded-[100px] w-fit py-[5px] pl-[5px] pr-[14px]  justify-center">
                        <ArrowCircleRight size={32} />
                        <span
                            className="text-[20px] text-left text-[#1e201f] font-semibold">
                            We are Hiring
                        </span>
                    </div>
                    <h1 className=" text-black my-[24px] lg:my-[32px] leading-[47px] -tracking-[2.2px] text-[36px] lg:text-[45px] font-bold text-left">
                        Careers
                    </h1>
                    <div
                        className="text-left text-[20px] lg:text-[24px] text-[#575757] font-medium leading-[28px] max-w-[760px]">
                        Our mission is to enhance efficiency, security, and transparency
                        across industries. Making the world a smarter, more connected, and a
                        safer place.
                        <br/>
                        <br/>
                        To achieve this, we believe in the power of Artificial
                        intelligence&apos;s efficiency and Blockchain technology&apos;s
                        security and transparency
                    </div>
                    <div className=" mt-[24px] lg:mt-[32px]">
                        <Marquee pauseOnHover className="[--duration:20s] p-0">
                            {carrouseImageList.map((image: CarrouseImageItem, index: number) => (
                                <Image
                                    key={index}
                                    src={image.image}
                                    alt={`image${index}`}
                                    width={image.width}
                                    height={image.height}
                                    className=" rounded-[15px] bg-[#d9d9d9] mr-[32px]"
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>


            <div className="w-full relative overflow-hidden">
                <div className=" w-[90%] max-w-[1200px] mx-auto my-[70px] md:my-[140px] ">

                    <div className='flex flex-col '>
                        <div className='flex overflow-y-auto gap-[20px]'>
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSkillClick(index)}
                                    className={`flex shrink-0 justify-around rounded-[100px] text-[20px] font-[600] p-[15px] w-fit mb-4 cursor-pointer select-none ${skill.isActive ? 'bg-[#6abb79]' : 'bg-[#f1f6f1]'
                                        }`}
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>

                        <div >
                            {activeJobs.length > 0 ? (
                                 <div className='grid lg:grid-cols-3 mt-[90px] gap-[30px] md:grid-cols-2 grid-cols-1 justify-center items-center'>
                                {activeJobs.map((job, index) => (
                                    <div key={index} className='flex flex-col min-w-[380px] bg-[#f1f6f1] rounded-3xl p-6 min-h-[270px] '>
                                        <span className='text-2xl font-[600] mb-[16px]'>{job.title}</span>
                                        <div className='text-[16px] text-left font-normal mb-[30px]'>
                                            {job.description}
                                        </div>
                                        <div className='flex flex-row justify-start gap-[10px] mb-[30px]'>
                                            <div className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px] border-[2px] border-[#000] min-w-[70px] text-[14px] font-semibold'>
                                                {job.type}
                                            </div>
                                            <div className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px] border-[2px] border-[#000] text-[14px] min-w-[70px] font-semibold'>
                                                {job.location}
                                            </div>
                                        </div>
                                        <div className='flex justify-end'>
                                            <div className='flex flex-row justify-center items-center p-1 bg-[#000] min-w-[135px] rounded-[100px] gap-[8px]  cursor-pointer' onClick={() => window.open(job.link)}>
                                                <span className='text-[#ffffff] text-[16px] font-[600px] my-[5px] ml-[15px]' >Apply Now</span>
                                                <ArrowCircleUpRight size={32} color="#6abb78" className="mr-[5px]" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            ) : (
                                <div className="flex flex-col text-center text-2xl py-[17px] md:py-[57px] px-[20px] md:px-[220px] bg-[#f1f6f1] rounded-3xl mt-[40px] md:mt-[90px] ">
                                   <div className="text-[24px] font-bold text-[#575757] mb-[20px]">
                                   There are no open positions right now
                                    </div>
                                    <div className="text-[16px] font-normal">
                                    We kindly ask you to revisit our website at a later date to explore any available job openings that may be active at that time. Your interest is greatly appreciated!
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>



            <div
                className="w-full relative bg-gradient-to-t from-[#d1ecb1] to-[#fff] overflow-hidden mb-[40px] md:mb-[140px] pb-[85px]">
                <div className=" w-[90%] max-w-[1200px] mx-auto  ">
                    <div className="flex flex-col justify-center items-center gap-[54px] p-0">
                        <div className="w-full flex flex-col justify-between items-center">
                            <div
                                className=" flex flex-row justify-center items-center rounded-full py-[10px] px-[22px]">
                                <span className="w-full font-bold leading-[23px] text-[24px] text-[#000]">
                                    Our hiring process
                                </span>
                            </div>
                            <span
                                className="w-full mt-[45px] text-[20px] font-medium leading-[23px] text-center text-[#575757]">
                                Working with us is easy. We follow a clear, no fuss process 
                                <br/>
                                that keeps things moving fast and smooth, from first chat to 
                                <br/>
                                final delivery.
                            </span>
                        </div>
                        <Image
                            src='/HomePage/Arrow.png'
                            alt="image1"
                            width={1200}
                            height={10}
                            className="object-contain w-[346px]"
                        />

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
                            {processList.map((process: ProcessList, index: number) => (
                                <div
                                    key={index}
                                    className={` min-h-[230px]  md:min-h-[160px] ${process.backGround} ${process.textColor}  w-full flex flex-col justify-between items-start px-[25px] py-[24px] rounded-[25px]`}
                                >
                                    <span className="text-[24px] font-bold leading-[28px] -tracking-[1.2px] text-left">
                                        {process.title}
                                    </span>
                                    <span className=" w-[250px] md:w-[166px] text-[16px] leading-[19px] text-left">
                                        {process.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full relative  overflow-hidden mb-[80px]">
                <VelocityScroll
                    fontSize="text-4xl font-bold md:text-7xl md:leading-[5.5rem]"
                    defaultVelocity={0.5}
                    className="text-[#f1f6f1]"
                >
                    Efficiency. Security. Transparency.Efficiency. Security. Transparency.
                </VelocityScroll>
            </div>

            <Footer/>
        </div>
    );
}
