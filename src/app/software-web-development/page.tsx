import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Software and Web Development | Coullax',
    description:"Unlock digital success with Coullax’s end-to-end software and web development services. We specialize in scalable web applications, responsive design, and cutting-edge technologies tailored to your business needs.",
    keywords: [
        "Coullax",
        "Software Development",
        "Web Development",
        "Web Applications",
        "Responsive Design",
        "Frontend Development",
        "Backend Development",
        "Custom Software",
        "Next.js",
        "Node.js",
        "UI/UX Design"
    ],
    openGraph: {
        title: "Software and Web Development | Coullax",
        description:"Coullax delivers robust and innovative software and web solutions designed to help businesses grow. From frontend to backend, we build performance-driven digital experiences.",
        url: "https://www.coullax.com/software-web-development",
        siteName: "Coullax",
        locale: "en_US",
        type: "website",
    },
};

export default function SoftwareAndWebPage() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6 text-black">Software And Web Services</h1>
            <p className="text-lg">
                Leverage our Branding expertise to drive innovation and efficiency in your organization.
            </p>
            {/* Add more content, images, or components here */}
        </div>
    );
}