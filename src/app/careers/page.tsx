"use client";
import Footer from '@/components/Footer';
import HeaderNavBar from '@/components/Header';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import { ArrowCircleRight } from "@phosphor-icons/react";

import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

// export const metadata: Metadata = {
//     title: 'Careers | Coullax',
//     description: "Join Coullax and help shape the future of AI, Blockchain, and web technologies. We're building smart, secure, and scalable digital solutions with a passionate global team.",
//     keywords: [
//         "Coullax",
//         "Careers at Coullax",
//         "AI Jobs",
//         "Blockchain Careers",
//         "Tech Careers",
//         "Join Coullax",
//     ],
//     openGraph: {
//         title: "Careers at Coullax",
//         description: "Be part of a team that's reimagining technology with AI, Blockchain, and web innovation. Discover career opportunities at Coullax.",
//         url: "https://www.coullax.com/careers",
//         siteName: "Coullax",
//         locale: "en_US",
//         type: "website",
//     },
// };
export default function CareersPage() {
    const processList = [
        {
            title: "Your Resume",
            backGround: "bg-[#fff]",
            textColor: "text-[#000]",
            description:
                "We carefully examine your resume",
        },
        {
            title: "Assessment",
            backGround: "bg-[#fff]",
            textColor: "text-[#000]",
            description:
                "You face some technical assessments",
        },
        {
            title: "Interview",
            backGround: "bg-[#fff]",
            textColor: "text-[#000]",
            description:
                "You face for our interviews",
        },
        {
            title: "Join the family",
            backGround: "bg-[#6abb79]",
            textColor: "text-[#000]",
            description:
                'Congrats!',
        },
    ];

    return (
        <div className=" w-full pt-[50px] bg-[#fffef1]">
            <div className=" w-full">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <HeaderNavBar />
                </div>
            </div>

            <div className="w-full relative overflow-hidden">
                <div className=" w-[90%] max-w-[1200px] mx-auto my-[70px] md:my-[140px] ">

                    <div className='flex flex-row bg-[#6abb79] items-start gap-1.5 rounded-[100px] w-[190px] pl-[5px]'>
                        <ArrowCircleRight size={32}/>
                        <span className='text-[20px] text-left text-[#1e201f] font-[600]'>We are Hiring</span>
                    </div>
                    <h1 className="text-4xl mb-6 text-black my-[32px] text-[45px] font-bold text-left">Careers</h1>
                    <div className="text-left text-[24px] font-[600] max-w-[760px]">
                        Our mission is to enhance efficiency, security, and transparency across industries. Making the world a smarter, more connected, and a safer place.
                        <br></br><br></br>
                        To achieve this, we believe in the power of Artificial intelligence’s
                         efficiency and Blockchain technology’s security and transparency
                    </div>



                </div>
            </div>

            <div className="w-full relative bg-gradient-to-t from-[#d1ecb1] to-[#fffef1] overflow-hidden mb-[40px] md:mb-[140px] pb-[85px]">
                <div className=" w-[90%] max-w-[1200px] mx-auto  ">
                    <div className="flex flex-col justify-center items-center gap-[54px] p-0">
                        <div className="w-full flex flex-col justify-between items-center">
                            <div className=" flex flex-row justify-center items-center rounded-full py-[10px] px-[22px]">
                                <span className="w-full font-bold leading-[23px] text-[24px] text-[#000]">
                                    Our hiring process
                                </span>
                            </div>
                            <span className="w-full mt-[45px] text-[20px] font-medium leading-[23px] text-center text-[#575757]">
                                Working with us is easy. We follow a clear, no fuss process 
                                <br />
                                that keeps things moving fast and smooth, from first chat to 
                                <br />
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
                            {processList.map((process, index) => (
                                <div
                                    key={index}
                                    className={` min-h-[230px]  md:min-h-[288px] ${process.backGround} ${process.textColor}  w-full flex flex-col justify-between items-start px-[25px] py-[24px] rounded-[25px]`}
                                >
                                    <span className="text-[36px] font-bold leading-[42px] -tracking-[1.8px] text-left">
                                        {process.title}
                                    </span>
                                    <span className=" w-[250px] md:w-[170px] text-[16px] leading-[19px] text-left">
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
                    className="text-[#eeeddf]"
                >
                    Efficiency. Security. Transparency.Efficiency. Security. Transparency.
                </VelocityScroll>
            </div>


            <Footer />
        </div>
    );
}