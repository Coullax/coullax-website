import Footer from '@/components/universal/Footer';
import HeaderNavBar from '@/components/universal/Header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Terms and Conditions | Coullax',
    description: "Review the terms and conditions governing the use of Coullax’s services, website, and digital products. Your access to and use of our services is conditioned on your acceptance of these terms.",
    keywords: [
        "Coullax",
        "Terms and Conditions",
        "User Agreement",
        "Service Terms",
        "Website Terms",
        "Legal Terms",
        "Policy",
        "Coullax Policies"
    ],
    openGraph: {
        title: "Terms and Conditions | Coullax",
        description: "Understand the legal terms that apply when you use Coullax's website or services. Our Terms and Conditions outline your rights, responsibilities, and limitations.",
        url: "https://www.coullax.com/terms-conditions",
        siteName: "Coullax",
        locale: "en_US",
        type: "website",
    },
};

export default function TermsandConditionsPage() {
    return (
        <div className=" w-full bg-[#fff]">
            <div className=" w-full">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <HeaderNavBar />
                </div>
            </div>


            <div className="w-full relative overflow-hidden">
                <div className=" w-[90%] max-w-[1200px] mx-auto mt-[100px] md:mt-[140px] ">
                    <div className='flex flex-col justify-center items-center'>
                    <h1 className=" text-black text-[32px] font-[600]">
                        Terms and Conditions
                    </h1>
                        <div className='font-[400] text-[14px] mt-[50px] items-center text-center'>
                            The following Terms of Services (The &quot;Agreement&quot;) apply to your uses of COULLAX, including any functions, content,<br /> and/or services offered on coullax.com (The “Website”).<br /><br />

                            Please read the Agreement carefully prior to starting use of the Website, because by using the website you <br />
                            expressly accept and agree to be bound and to abide by these Terms of Services.<br /><br />

                            This Agreement is effective as of MRACH 20, 2023. We expressly reserve the right to occasionally update these <br />
                            Terms without the notice to you. You acknowledge and agree that it is solely your responsibility to review this<br />
                            Website and this Agreement from time to time to familiarize yourself with potential modifications. Your continued <br />
                            use of this Website will consistently constitute acknowledgement of the updated Terms of this Agreement and <br />
                            agreement to these updated Terms.<br /><br />
                        </div>

                        <span className='text-[20px] font-[600]'>Code of conduct</span>
                    </div>


                </div>
            </div>



            
            <div className="w-full relative overflow-hidden">
                <div className=" w-[90%] max-w-[1200px] mx-auto">
                    <span className='font-[600] text-[20px]'>Payment and fees</span>
                    <div className='items-center font-[400]'>
                        Our consulting services are provided for a fee, which will be agreed upon between the Company and the client <br />
                        before the commencement of any work. All fees must be paid in full before any work begins, unless otherwise<br />
                        agreed in writing. The Company reserves the right to change its fees and pricing structure at any time.<br /><br /><br />
                    </div>


                    <span className='font-[600] text-[20px]'>Use of Our Website</span>
                    <div className='items-center'>
                        Our website is intended for informational purposes only. You may use our website for personal or commercial <br />
                        purposes, but you may not copy, modify, or distribute any content without our prior written consent.<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>Confidentiality</span>
                    <div className='items-center'>
                        Any information you provide to us through our website is subject to our privacy policy. We will keep your <br />
                        information confidential and will not share it with third parties unless required by law.<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>Intellectual Property</span>
                    <div className='items-center'>
                        All content on our website, including but not limited to text, graphics, logos, images, and software, is the property <br />
                        of our company and is protected by copyright and other intellectual property laws. You may not use any content<br />
                        on our website without our prior written consent.<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>Disclaimer of Warranties</span>
                    <div className='items-center'>
                        Our website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no representations or warranties of any <br />
                        kind, express or implied, as to the operation of our website or the information, content, materials, or products <br />
                        included on our website. You expressly agree that your use of our website is at your sole risk.<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>Limitation of Liability</span>
                    <div className='items-center'>
                        In no event shall our company be liable for any direct, indirect, incidental, special, or consequential damages <br />
                        arising out of or in connection with your use of our website or these terms of service.<br /><br /><br />
                    </div>


                    <span className='font-[600] text-[20px]'>Indemnification</span>
                    <div className='items-center'>
                        You agree to indemnify, defend, and hold harmless our company, its officers, directors, employees, agents, <br />
                        licensors, and suppliers from and against all claims, liabilities, expenses, damages, and losses, including <br />
                        reasonable attorneys&lsquo; fees, arising out of or in connection with your use of our website or your violation of these <br />terms of service.<br /><br /><br />
                    </div>
                    
                    <span className='font-[600] text-[20px]'>Governing Law and Jurisdiction</span>
                    <div className='items-center'>
                    These terms of service shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes <br/>
                    arising out of or in connection with these terms of service shall be resolved exclusively in the courts of Sri Lanka.<br/><br/><br/>
                    </div>

                    <span className='font-[600] text-[20px]'>Changes to Terms of Service</span>
                    <div className='items-center'>
                        We reserve the right to modify these terms of service at any time without prior notice. By continuing to use our <br />
                        website after we post any such changes, you accept the terms of service as modified.<br /><br />

                        If you have any questions or concerns about these terms of service, please contact us.<br /><br /><br />
                    </div>


                </div>
            </div>







            <div className="w-full relative  overflow-hidden">

            </div>

            <Footer />
        </div>


    );
}