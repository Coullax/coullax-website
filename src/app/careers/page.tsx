"use client";
import Footer from "@/components/Footer";
import HeaderNavBar from "@/components/Header";
import { Marquee } from "@/components/magicui/marquee";
import {ArrowUpRight } from "@phosphor-icons/react";

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Image1 from "../../../public/careersPage/image1.png"
import Image2 from "../../../public/careersPage/image2.png";

interface CarrouseImageItem {
    image: StaticImageData;
    width: number;
    height: number;
}

// interface JobPosting {
//     title: string;
//     description: string;
//     type: string;
//     location: string;
//     link?:string;
//   }
// interface SkillJobs {
//   name: string;
//   jobs: JobPosting[];
// }

// const skillJobs: SkillJobs[] = [
//     {
//       name: 'Software Engineering',
//       jobs: [
//         {
//           title: "Software Engineer Intern",
//           description: "We are hiring a software engineer intern for our team",
//           type: "Internship",
//           location: "On Site",
//           link:'https://rooster.jobs/jobs/446914?_gl=1*6oq610*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjU0NSRqNTYkbDAkaDE0NDA5MDkyOQ..&_ga=2.177795308.895242263.1747193804-1782052477.1734762457'
//         },
//         {
//           title: "Associate Tech Lead",
//           description: "We are hiring a Associate Tech Lead for our team",
//           type: "Full Time",
//           location: "On Site",
//           link:'https://rooster.jobs/jobs/446917?_gl=1*1a6cxe8*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjQ0OCRqNDMkbDAkaDE0NDA5MDkyOQ..&_ga=2.142711164.895242263.1747193804-1782052477.1734762457'
//         },
//         {
//           title: "Backend Developer",
//           description: "We are  looking for skilled Backend Developers!",
//           type: "Full Time",
//           location: "On Site",
//           link:'https://rooster.jobs/jobs/446916?_gl=1*cune2*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjczMSRqNTYkbDAkaDE0NDA5MDkyOQ..&_ga=2.241802443.895242263.1747193804-1782052477.1734762457'
//         },
//         {
//           title: "Mobile App Developer",
//           description: "We are looking for Mobile App Developers!",
//           type: "Full Time",
//           location: "On Site",
//           link:'https://rooster.jobs/jobs/446905?_gl=1*fg4nbj*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5Mjc4MSRqNiRsMCRoMTQ0MDkwOTI5&_ga=2.241802443.895242263.1747193804-1782052477.1734762457'
//         }
//       ]
//     },
//     {
//       name: 'Design',
//       jobs: [
//         {
//           title: "Video Editor",
//           description: "We are looking for a Video Editor who knows how to keep viewers hooked, especially on social media.",
//           type: "Full Time",
//           location: "on Site",
//           link:'https://rooster.jobs/jobs/447313?_gl=1*5lvids*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjgyNSRqNTIkbDAkaDE0NDA5MDkyOQ..&_ga=2.139483514.895242263.1747193804-1782052477.1734762457'
//         }
//       ]
//     },
//     {
//       name: 'Quality Assurance',
//       jobs: [
//         // {
//         //   title: "Quality Assurance",
//         //   description: "We are hiring a expert quality assurance for our team",
//         //   type: "Part Time",
//         //   location: "Remote"
//         // }
//       ]
//     },
//     {
//       name: 'Project Management',
//       jobs: [
//         // {
//         //   title: "Project Manager",
//         //   description: "We are hiring a expert project manager for our team",
//         //   type: "Full Time",
//         //   location: "on Site"
//         // }
//       ]
//     },
//     {
//       name: 'Data Science',
//       jobs: []  
//     },
//     {
//       name: 'Product Management',
//       jobs: [] 
//     },
//     {
//       name: 'User Experience Research',
//       jobs: [
//         // {
//         //   title: "User Experience Researcher",
//         //   description: "We are hiring a expert user experience for our team",
//         //   type: "Full Time",
//         //   location: "Remote"
//         // }
//       ]
//     },
//     {
//       name: 'Project Management Intern',
//       jobs: []
//     }
//   ];

  const jobListings = [
    {
      name: 'Software Engineer Intern',
      jobs: [
        {
          title: "Software Engineer Intern",
          description: "We are seeking a Software Engineer Intern to assist with development projects and learn from our team.",
          type: "Internship",
          location: "ON SITE",
          link: 'https://rooster.jobs/jobs/446914?_gl=1*6oq610*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjU0NSRqNTYkbDAkaDE0NDA5MDkyOQ..&_ga=2.177795308.895242263.1747193804-1782052477.1734762457'
        }
      ]
    },
    {
      name: 'Associate Tech Lead',
      jobs: [
        {
          title: "Associate Tech Lead",
          description: "We are looking for an Associate Tech Lead to guide technical projects and mentor team members.",
          type: "FULL TIME",
          location: "ON SITE",
          link: 'https://rooster.jobs/jobs/446917'
        }
      ]
    },
    {
      name: 'Mobile App Developer',
      jobs: [
        {
          title: "Mobile App Developer",
          description: "We are seeking a Mobile App Developer to create and maintain iOS/Android applications.",
          type: "FULL TIME",
          location: "ON SITE",
          link:'https://rooster.jobs/jobs/446905?_gl=1*fg4nbj*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5Mjc4MSRqNiRsMCRoMTQ0MDkwOTI5&_ga=2.241802443.895242263.1747193804-1782052477.1734762457'
        }
      ]
    },
    {
      name: 'Backend Developer',
      jobs: [
        {
          title: "Backend Developer",
          description: "We are looking for a Backend Developer to build and maintain server-side solutions.!",
          type: "FULL TIME",
          location: "ON SITE",
          link:'https://rooster.jobs/jobs/446916'
        }
      ]
    },
    {
      name: 'Creatives',
      jobs: [
        {
          title: "2D character Animator",
          description: "We are seeking a 2D Character Animator to create engaging character animations for our projects.",
          type: "Full Time",
          location: "on Site",
          link:'https://rooster.jobs/jobs/508232'
        }
      ]
    },
    {
      name: 'Design',
      jobs: [
        {
          title: "Video Editor",
          description: "We are looking for a Video Editor to create compelling social media content.",
          type: "Full Time",
          location: "on Site",
          link:'https://rooster.jobs/jobs/447313?_gl=1*5lvids*_gcl_au*MjE0NjU3NjA2NC4xNzQyNzg5MjE3*_ga*MTc4MjA1MjQ3Ny4xNzM0NzYyNDU3*_ga_2WG2Q8KFS3*czE3NDcyOTI0MzEkbzI0NCRnMSR0MTc0NzI5MjgyNSRqNTIkbDAkaDE0NDA5MDkyOQ..&_ga=2.139483514.895242263.1747193804-1782052477.1734762457'
        }
      ]
    },
  ];
  // jobListings.length = 0;

  // First define the card data structure
const recruitmentSteps = [
  {
    title: "Your Resume",
    description: "We carefully examine your resume",
  },
  {
    title: "Assessment",
    description: "You face our Technical Assessments"
  },
  {
    title: "Interview",
    description: <>You face for<br/>our interviews</>
  },
  {
    title: "Join the forge",
    description: <div className="mt-[32px]">Congrats!</div>
  }
];
  


export default function CareersPage() {
    // const [skills, setSkills] = useState(
    //     skillJobs.map(skill => ({
    //       name: skill.name,
    //       isActive: false
    //     }))
    //   );

    // const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    // const [activeJobs, setActiveJobs] = useState<JobPosting[]>(
    //   skillJobs.flatMap(skill => skill.jobs) // Initially show all jobs
    // );
  // const processList: ProcessList[] = [
  //   {
  //     title: "Your Resume",
  //     backGround: "bg-[#fff]",
  //     textColor: "text-[#000]",
  //     description: "We carefully examine your resume",
  //   },
  //   {
  //     title: "Assessment",
  //     backGround: "bg-[#fff]",
  //     textColor: "text-[#000]",
  //     description: "You face some technical assessments",
  //   },
  //   {
  //     title: "Interview",
  //     backGround: "bg-[#fff]",
  //     textColor: "text-[#000]",
  //     description: "You face for our interviews",
  //   },
  //   {
  //     title: "Join the family",
  //     backGround: "bg-[#6abb79]",
  //     textColor: "text-[#000]",
  //     description: "Congrats!",
  //   },
  // ];

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



    return (
        <div className=" w-full pt-[50px] bg-[#fff]">
            <div className="w-full">
                <div className="w-[90%] max-w-[1550px] mx-auto">
                    <HeaderNavBar/>
                </div>
            </div>


            <div className="w-[90%] max-w-[1550px] mx-auto flex justify-between lg:mt-[200px] mt-[100px]">
              <span className="text-[26px] lg:text-[66px] md:text-[46px] uppercase font-special-gothic-expanded-one lg:-tracking-[4.8px]">The hand of<br></br> entity</span>
              <span className=" lg:text-[36px] text-[16px]  md:text-[26px] uppercase font-special-gothic-expanded-one">careers</span>
            </div>

        <div className="w-[90%] max-w-[1550px]  mx-auto mt-[30px] text-left">
          <div className="lg:text-[15px]  text-[13px]  leading-[20px] uppercase font-silkscreen text-black">
            To build the unbuilt, we gather the rare, the restless, the aligne
          </div>

          <div className="text-[20px] md:text-[40px] mt-[56px] uppercase font-inclusive-sans text-black">
            Coullax seeks thinkers, makers, and system breakers , <br></br>individuals drawn to the strange, the powerful, and <br></br>the unseen mechanics behind what we build. Whether <br></br>you wield code like language, design like ritual, or<br></br> strategy like signal alignment, there is a place for<br></br> you within the Forge.
          </div>

          <button className=" bg-[#e0ef29] min-w-[312px] lg:py-[25px] py-[15px] lg:px-[30px] px-[10px] text-[20px] text-center leading-[20px] -tracking-[1px] uppercase font-silkscreen text-[#030303] border-dashed border-black mt-[20px] lg:mt-[50px] my-[50px] lg:my-[100px] border-3 hover:bg-transparent hover:text-[#000000] hover:border-[#000000]  cursor-pointer transition-all duration-300 hover:scale-105">
            SEND US YOUR RESUME
          </button>
        </div>

            <div className="w-full relative overflow-hidden">
                <div className="w-[90%] max-w-[1550px]  mx-auto mt-[50px] lg:mt-[100px] ">
                    <h1 className=" text-black text-[35px] lg:text-[45px] font-normal text-left font-special-gothic-expanded-one -tracking-[2.25px]">
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


        <div className="w-[90%] max-w-[1550px] mx-auto lg:mt-[100px] lg:mb-[100px]  mt-[50px] mb-[50px]">
          {jobListings.length === 0 ? (
            <div className="flex flex-col  border border-black">
              <div className="font-silkscreen text-[15px] text-center my-[37px]">
                There are no open positions right now <br></br><br></br>
                We kindly ask you to revisit our website at a later date to explore any available job openings<br></br>
                that may be active at that time. Your interest is greatly appreciated!
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[50px]">
              {jobListings.map((category) =>
                category.jobs.map((job) => (
                  <div key={job.title} className="flex flex-col py-[27.7px] px-[28.8px] border border-black hover:bg-black hover:text-white transition-colors duration-300 group">
                    <span className="font-special-gothic-expanded-one text-left lg:text-[40px] text-[20px] group-hover:text-white -leading-[2] uppercase">
                      {job.title}
                    </span>
                    <div className="flex flex-row gap-[11.8px] lg:mt-[30px] mt-[20px]">
                      <div className="border-3 border-black px-[11.8px] py-[6px] font-inclusive-sans lg:text-[16px] text-[10px] group-hover:border-white group-hover:text-white font-[600] uppercase">
                        {job.type}
                      </div>
                      <div className="border-3 border-black px-[11.8px] py-[6px] font-inclusive-sans lg:text-[16px] text-[10px] group-hover:border-white group-hover:text-white font-[600] uppercase">
                        {job.location}
                      </div>
                    </div>
                    <div className="font-inclusive-sans text-[18px] lg:mt-[30px] mt-[15px] group-hover:text-white uppercase lg:mb-[100px] mb-[50px]">
                      {job.description}
                    </div>
                    <div className="mt-auto">
                      <button className="bg-[#e0ef29] lg:py-[25px] py-[15px] lg:px-[30px] px-[15px] lg:text-[20px] text-[15px] text-center -tracking-[1px] uppercase font-silkscreen text-[#030303] border-3 border-dashed border-black group-hover:bg-white group-hover:text-black group-hover:border-black flex items-center gap-2  transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => job.link && window.open(job.link, '_blank')}>
                        Apply Now
                        <ArrowUpRight size={22} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>


        <div className="bg-black ">

          <div className="w-[90%] max-w-[1550px] mx-auto py-[100px]">
            {/* Header section */}
            <div className="flex justify-between ">
              <span className="lg:text-[96px] md:text-[66px] text-[36px] uppercase font-special-gothic-expanded-one text-white lg:-tracking-[4.8px] -tracking-[0.8px]">
                Rite of Entry
              </span>
              <span className="lg:text-[36px] text-[20px] uppercase font-special-gothic-expanded-one text-white">
                hiring process
              </span>
            </div>

            {/* Content section */}
            <div className="mt-[30px] text-left">
              <div className="lg:text-[15px]  text-[12px] leading-[20px] uppercase font-silkscreen text-white">
                through signal, ritual, and intent — the few become part of the whole.
              </div>

              <div className="lg:text-[40px] text-[20px] mt-[36px] lg:mt-[56px] uppercase font-inclusive-sans text-white">
                Joining Coullax is not a transaction — it is a<br></br>transition. We don&apos;t merely review resumes; we<br></br>decipher intent, resonance, and potential. Our<br></br>process is built to uncover builders who think<br></br> beyond the visible . individuals who feel the pulse<br></br> of systems not yet formed.
              </div>

              <button className="bg-[#e0ef29] min-w-[312px]  lg:py-[25px] py-[15px] lg:px-[30px] px-[10px] lg:text-[20px] text-[15px] text-center  -tracking-[1px] uppercase font-silkscreen text-[#030303]  border-dashed border-black mt-[50px] my-[100px] border-2 hover:bg-transparent hover:text-[#e0ef29] hover:border-[#e0ef29] hover:scale-105  transition-all duration-300 cursor-pointer">
                SEND US YOUR RESUME
              </button>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[25.4px]">
              {recruitmentSteps.map((step, index) => (
                <div
                  key={index}
                  className="border border-white flex flex-col py-[31.5px] px-[32.8px] hover:bg-[#e0ef29] group"
                >
                  <span className="font-special-gothic-expanded-one lg:text-[40px] text-[30px] text-white group-hover:text-black lg:-tracking-[2px] -tracking-[1px]">
                    {step.title}
                  </span>
                  <span className="font-inclusive-sans text-[24px] text-white mt-[43px] group-hover:text-black uppercase -tracking-[0.2px]">
                    {step.description}
                  </span>
                </div>
              ))}
            </div>


          </div>
        </div>

            <Footer/>
        </div>
    );
}
