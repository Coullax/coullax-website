import Footer from '@/components/universal/Footer';
import HeaderNavBar from '@/components/universal/Header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Privacy Policy | Coullax',
    description: "Read Coullax’s Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and trust are important to us.",
    keywords: [
        "Coullax",
        "Privacy Policy",
        "Data Protection",
        "User Privacy",
        "Information Security",
        "GDPR",
        "Personal Data",
        "Privacy Commitment"
    ],
    openGraph: {
        title: "Privacy Policy | Coullax",
        description: "Learn how Coullax handles your personal information with transparency and care. Our privacy policy outlines the measures we take to ensure data security and compliance.",
        url: "https://www.coullax.com/privacy-policy",
        siteName: "Coullax",
        locale: "en_US",
        type: "website",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className=" w-full bg-[#fff]">
            <div className=" w-full">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <HeaderNavBar />
                </div>
            </div>


            <div className="w-full relative overflow-hidden">
                <div className=" w-[90%] max-w-[1200px] mx-auto mt-[50px] md:mt-[140px] ">
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=" text-black text-[32px] font-[600]">
                            Privacy Policy
                        </h1>
                        <div className='font-[400] text-[14px] mt-[50px] text-center'>
                            The purpose of this privacy policy is to inform online visitors with regards to the collecting, using, sharing, storing, <br />
                            and disclosing of personal information of the users of COULLAX.com (the “Website“). This policy is also applicable <br />
                            to, but not limited to, any applications, products, tokens, or services (the “Services“) that occur as a result of the<br />
                            use of the Website.<br /><br />
                        </div>
                    </div>


                </div>
            </div>




            <div className="w-full relative overflow-hidden">
                <div className=" w-[90%] max-w-[1200px] mx-auto">
                    <span className='font-[600] text-[20px]'>Third-Party Links:</span>
                    <div className='items-center'>
                        Our website may contain links to third-party websites, which have their own privacy policies.<br />
                        We are not responsible for the privacy practices of these websites.<br /><br /><br />
                    </div>


                    <span className='font-[600] text-[20px]'>Information We Collect:</span>
                    <div className='items-center'>
                        We may collect personal information such as your name, email address, phone number, and mailing address.<br />
                        We may also collect information about your company, industry, and job title.<br />
                        We may collect this information through our website, email communications, or other means of contact.<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>Use of Information:</span>
                    <div className='items-center'>
                        We use your personal information to provide consulting services, communicate with you about your project, and <br />
                        process payments.We may use your personal information to send you marketing materials, but you can opt-out <br />
                        of these communications at any time.<br />
                        We do not sell or rent your personal information to third parties.How we use your information<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>We use the information we collect in various ways, including to:</span>
                    <div className='items-center'>
                        Provide, operate, and maintain our website Improve, personalize, and expand our website<br />
                        Understand and analyze how you use our website Develop new products, services, features, and functionality<br />
                        Communicate with you, either directly or through one of our partners, including for customer service, to provide<br />
                        you with updates and other information relating to the website, and for marketing and promotional purposes<br />
                        Send you emails Find and prevent fraud<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>Log Files:</span>
                    <div className='items-center'>
                        COULLAX follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting<br />
                        companies do this and a part of hosting services’ analytics. The information collected by log files include internet <br />
                        protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, <br />
                        and possibly the number of clicks. These are not linked to any information that is personally identifiable. The <br />
                        purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, <br />
                        and gathering demographic information.<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>Cookies and Tracking:</span>
                    <div className='items-center'>
                        We may use cookies and other tracking technologies to improve your browsing experience and collect analytics <br />data.<br /><br />
                        You can disable cookies in your web browser, but this may affect the functionality of our website.<br /><br /><br />
                    </div>


                    <span className='font-[600] text-[20px]'>Third Party Privacy Policies:</span>
                    <div className='items-center'>
                        COULLAX’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the <br />
                        respective Privacy Policies of these third-party ad servers for more detailed information. It may include their <br />
                        practices and instructions about how to opt-out of certain options.<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>Refund Method:</span>
                    <div className='items-center'>
                        Refunds will be issued to the original payment method, unless otherwise specified<br />
                        within 7-14 business days of the refund request being approved<br />
                        The processing of personal data, such as the name, address, e-mail address, or telephone number of a data<br />
                        subject shall always be in line with the General Data Protection Regulation (GDPR), the California Consumer Privacy<br />
                        Act (CCPA), and in accordance with the country-specific data protection regulations applicable to COULLAX. By <br />
                        means of this data protection declaration, our enterprise would like to inform the general public of the nature, <br />
                        scope, and purpose of the personal data we collect, use and process, as well as the CCPA privacy rights available <br />
                        to California residents. Furthermore, data subjects are informed, by means of this data protection declaration, of <br />
                        the rights to which they are entitled under both GDPR and CCPA.<br /><br /><br />
                    </div>

                    <span className='font-[600] text-[20px]'>Collection of Data:</span>
                    <div className='items-center'>
                        The extent and type of information we receive from you depends on what you do when visiting the Site. If you visit <br />
                        our Site to read or download information, such as news items, case studies, or capability statements, much of the <br />
                        information we collect – such as the domain from which you access the Internet, the date and time you access the<br />
                        Site, and the Internet address of the website from which you linked directly to our Site – is statistical only and not<br />
                        personally identifiable. We use information about the number of visitors and their use of the Site in aggregate form <br />
                        to make our Site more useful and attractive to you.<br /><br /><br />
                    </div>


                    <span className='font-[600] text-[20px]'>Links to other websites:</span>
                    <div className='items-center'>
                        The extent and type of information we receive from you depends on what you do when visiting the Site. If you visit <br />
                        our Site to read or download information, such as news items, case studies, or capability statements, much of the <br />
                        information we collect – such as the domain from which you access the Internet, the date and time you access the<br />
                        Site, and the Internet address of the website from which you linked directly to our Site – is statistical only and not<br />
                        personally identifiable. We use information about the number of visitors and their use of the Site in aggregate form <br />
                        to make our Site more useful and attractive to you.<br /><br /><br />
                    </div>


                    <span className='font-[600] text-[20px]'>Children’s Information:</span>
                    <div className='items-center'>
                        Another part of our priority is adding protection for children while using the internet. We encourage parents and <br />
                        guardians to observe, participate in, and/or monitor and guide their online activity.<br /><br /><br />
                    </div>


                    <span className='font-[600] text-[20px]'>Children’s Information:</span>
                    <div className='items-center'>
                        Another part of our priority is adding protection for children while using the internet. We encourage parents and <br />
                        guardians to observe, participate in, and/or monitor and guide their online activity.<br /><br /><br />
                    </div>
                    <div className='items-center'>
                        COULLAX does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you<br />
                        think that your child provided this kind of information on our website, we strongly encourage you to contact us<br />
                        immediately and we will do our best efforts to promptly remove such information from our records.<br /><br /><br />
                    </div>


                </div>
            </div>







            <div className="w-full relative  overflow-hidden">

            </div>

            <Footer />
        </div>
    );
}