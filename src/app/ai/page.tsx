import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'AI Solutions | Coullax',
  description: "Explore our cutting-edge AI solutions for your business.",
  keywords: [
      "Coullax",
      "About Coullax",
      "Company Mission",
      "Innovative Technology",
    ],
    openGraph: {
      title: "AI Solutions | Coullax",
      description: "Discover Coullax's mission and our commitment to delivering secure, intelligent, and user-focused tech solutions.",
      url: "https://www.coullax.com/ai",
      siteName: "Coullax",
      locale: "en_US",
      type: "website",
    },
};

export default function AIPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6 text-black">AI Services</h1>
      <p className="text-lg">
        Leverage our AI expertise to drive innovation and efficiency in your organization.
      </p>
      {/* Add more content, images, or components here */}
    </div>
  );
}