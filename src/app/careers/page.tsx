"use client";
import Footer from "@/components/Footer";
import HeaderNavBar from "@/components/Header";
import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ArrowCircleRight, ArrowCircleUpRight } from "@phosphor-icons/react";

import Image, { StaticImageData } from 'next/image';
import React from 'react';
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

export default function CareersPage() {
    const skills = [
        { name: 'Software Engineering', isActive: false },
        { name: 'Design', isActive: false },
        { name: 'Quality Assurance', isActive: false },
        { name: 'Project Management', isActive: false },
        { name: 'User Experience Research', isActive: true },
        { name: 'User Experience Research', isActive: true },
        { name: 'User Experience Research', isActive: true },

    ];
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
                        className="flex flex-row bg-[#6abb79] items-start gap-1.5 rounded-[100px] w-fit py-[5px] pl-[5px] pr-[14px]">
                        <ArrowCircleRight size={24}/>
                        <span
                            className="text-[20px] leading-[23px] -tracking-[1px] text-left text-[#1e201f] font-semibold">
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
                        <div className='flex overflow-y-auto gap-[20px] hide-scrollbar'>
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`flex shrink-0 justify-around rounded-[100px] text-[20px] font-[600] p-[15px] bg-[#f1f6f1] w-fit1`}
                                >
                                    {skill.name}
                                </div>
                            ))}


                        </div>


                        <div
                            className='grid lg:grid-cols-3 mt-[90px] gap-[30px] md:grid-cols-2 grid-cols-1 justify-center items-center'>

                            <div className='flex flex-col min-w-[380px] bg-[#f1f6f1] rounded-3xl p-6 '>
                                <span className='text-2xl font-[600] mb-[16px]'>Product Designer</span>
                                <div className='text-[16px] w-[240px] text-left font-normal mb-[30px]'>
                                    We are hiring a expert product designer for our team
                                </div>
                                <div className='flex flex-row justify-start gap-[10px] mb-[30px]'>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]   min-w-[70px] text-[14px] font-semibold'>Full
                                        Time
                                    </div>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]  text-[14px] min-w-[70px] font-semibold'>on
                                        Site
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div
                                        className='flex flex-row justify-center items-center p-1 bg-[#000] min-w-[135px] rounded-[100px] cursor-pointer gap-[4px]'>
                                        <span className='text-[#ffffff] text-[16px] font-[600px]  my-[5px]'>Apply Now</span>
                                        <ArrowCircleUpRight size={32} color="#6abb78"/>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col min-w-[380px] bg-[#f1f6f1] rounded-3xl p-6 '>
                                <span className='text-2xl font-[600] mb-[16px]'>Product Designer</span>
                                <div className='text-[16px] w-[240px] text-left font-normal mb-[30px]'>
                                    We are hiring a expert product designer for our team
                                </div>
                                <div className='flex flex-row justify-start gap-[10px] mb-[30px]'>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]   min-w-[70px] text-[14px] font-semibold'>Full
                                        Time
                                    </div>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]  text-[14px] min-w-[70px] font-semibold'>on
                                        Site
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div
                                        className='flex flex-row justify-center items-center p-1 bg-[#000] min-w-[135px] rounded-[100px] cursor-pointer gap-[4px]'>
                                        <span className='text-[#ffffff] text-[16px] font-[600px]  my-[5px]'>Apply Now</span>
                                        <ArrowCircleUpRight size={32} color="#6abb78" />
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col min-w-[380px] bg-[#f1f6f1] rounded-3xl p-6 '>
                                <span className='text-2xl font-[600] mb-[16px]'>Product Designer</span>
                                <div className='text-[16px] w-[240px] text-left font-normal mb-[30px]'>
                                    We are hiring a expert product designer for our team
                                </div>
                                <div className='flex flex-row justify-start gap-[10px] mb-[30px]'>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]   min-w-[70px] text-[14px] font-semibold'>Full
                                        Time
                                    </div>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]  text-[14px] min-w-[70px] font-semibold'>on
                                        Site
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div
                                        className='flex flex-row justify-center items-center p-1 bg-[#000] min-w-[135px] rounded-[100px] cursor-pointer gap-[4px]'>
                                        <span className='text-[#ffffff] text-[16px] font-[600px]  my-[5px]'>Apply Now</span>
                                        <ArrowCircleUpRight size={32} color="#6abb78" />
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col min-w-[380px] bg-[#f1f6f1] rounded-3xl p-6 '>
                                <span className='text-2xl font-[600] mb-[16px]'>Product Designer</span>
                                <div className='text-[16px] w-[240px] text-left font-normal mb-[30px]'>
                                    We are hiring a expert product designer for our team
                                </div>
                                <div className='flex flex-row justify-start gap-[10px] mb-[30px]'>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]   min-w-[70px] text-[14px] font-semibold'>Full
                                        Time
                                    </div>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]  text-[14px] min-w-[70px] font-semibold'>on
                                        Site
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div
                                        className='flex flex-row justify-center items-center p-1 bg-[#000] min-w-[135px] rounded-[100px] cursor-pointer gap-[4px]'>
                                        <span className='text-[#ffffff] text-[16px] font-[600px]  my-[5px]'>Apply Now</span>
                                        <ArrowCircleUpRight size={32} color="#6abb78" />
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col min-w-[380px] bg-[#f1f6f1] rounded-3xl p-6 '>
                                <span className='text-2xl font-[600] mb-[16px]'>Product Designer</span>
                                <div className='text-[16px] w-[240px] text-left font-normal mb-[30px]'>
                                    We are hiring a expert product designer for our team
                                </div>
                                <div className='flex flex-row justify-start gap-[10px] mb-[30px]'>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]   min-w-[70px] text-[14px] font-semibold'>Full
                                        Time
                                    </div>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]  text-[14px] min-w-[70px] font-semibold'>on
                                        Site
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div
                                        className='flex flex-row justify-center items-center p-1 bg-[#000] min-w-[135px] rounded-[100px] cursor-pointer gap-[4px]'>
                                        <span className='text-[#ffffff] text-[16px] font-[600px]  my-[5px]'>Apply Now</span>
                                        <ArrowCircleUpRight size={32} color="#6abb78" />
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col min-w-[380px] bg-[#f1f6f1] rounded-3xl p-6 '>
                                <span className='text-2xl font-[600] mb-[16px]'>Product Designer</span>
                                <div className='text-[16px] w-[240px] text-left font-normal mb-[30px]'>
                                    We are hiring a expert product designer for our team
                                </div>
                                <div className='flex flex-row justify-start gap-[10px] mb-[30px]'>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]   min-w-[70px] text-[14px] font-semibold'>Full
                                        Time
                                    </div>
                                    <div
                                        className='flex flex-row justify-center items-center gap-[4.8px] px-[10px] py-[5px] rounded-[50px]  border-[2px] border-[#000]  text-[14px] min-w-[70px] font-semibold'>on
                                        Site
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div
                                        className='flex flex-row justify-center items-center p-1 bg-[#000] min-w-[135px] rounded-[100px] cursor-pointer gap-[4px]'>
                                        <span className='text-[#ffffff] text-[16px] font-[600px]  my-[5px]'>Apply Now</span>
                                        <ArrowCircleUpRight size={32} color="#6abb78" />
                                    </div>
                                </div>
                            </div>

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
