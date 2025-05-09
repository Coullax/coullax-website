import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'About Us | Coullax',
    description: "Learn more about Coullax, our mission, and how we provide top-tier AI, Blockchain, and Web Development services to transform businesses.",
    keywords: [
        "Coullax",
        "About Coullax",
        "Company Mission",
        "Innovative Technology",
      ],
      openGraph: {
        title: "About Us | Coullax",
        description: "Discover Coullax's mission and our commitment to delivering secure, intelligent, and user-focused tech solutions.",
        url: "https://www.coullax.com/aboutus",
        siteName: "Coullax",
        locale: "en_US",
        type: "website",
      },
};

export default function AboutUsPage() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6 text-black">About Us</h1>
            <p className="text-lg">
                Leverage our AI expertise to drive innovation and efficiency in your organization.
            </p>
            {/* Add more content, images, or components here */}
        </div>
    );
}