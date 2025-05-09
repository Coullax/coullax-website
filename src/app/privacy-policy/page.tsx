import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Privacy Policy | Coullax',
    description:    "Read Coullax’s Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and trust are important to us.",
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
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6 text-black">Privacy policy</h1>

        </div>
    );
}