import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Branding | Coullax',
    description:"Elevate your brand with Coullax’s creative and strategic branding solutions. We craft memorable identities, impactful visuals, and cohesive brand experiences that resonate with your audience.",
    keywords: [
        "Coullax",
        "Branding",
        "Brand Identity",
        "Logo Design",
        "Visual Identity",
        "Creative Agency",
        "UI/UX Design",
        "Brand Strategy"
    ],
    openGraph: {
        title: "Branding | Coullax",
        description:"Partner with Coullax to build a powerful and authentic brand presence. From logos to complete visual systems, we help you stand out and connect with your audience.",
        url: "https://www.coullax.com/branding",
        siteName: "Coullax",
        locale: "en_US",
        type: "website",
    },
};

export default function BrandingPage() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6 text-black">Branding Services</h1>
            <p className="text-lg">
                Leverage our Branding expertise to drive innovation and efficiency in your organization.
            </p>
            {/* Add more content, images, or components here */}
        </div>
    );
}