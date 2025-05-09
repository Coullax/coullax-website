import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Terms and Conditions | Coullax',
    description:"Review the terms and conditions governing the use of Coullax’s services, website, and digital products. Your access to and use of our services is conditioned on your acceptance of these terms.",
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
        description:"Understand the legal terms that apply when you use Coullax's website or services. Our Terms and Conditions outline your rights, responsibilities, and limitations.",
        url: "https://www.coullax.com/terms-conditions",
        siteName: "Coullax",
        locale: "en_US",
        type: "website",
    },
};

export default function TermsandConditionsPage() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6 text-black">Terms and Conditions</h1>
            <p className="text-lg">
                Leverage our Branding expertise to drive innovation and efficiency in your organization.
            </p>
            {/* Add more content, images, or components here */}
        </div>
    );
}