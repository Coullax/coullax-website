import { ReactNode } from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "AI Solutions | Coullax",
  description: "Explore our cutting-edge AI solutions for your business.",
  keywords: [
    "Coullax",
    "About Coullax",
    "Company Mission",
    "Innovative Technology",
  ],
  openGraph: {
    title: "AI Solutions | Coullax",
    description:
      "Discover Coullax's mission and our commitment to delivering secure, intelligent, and user-focused tech solutions.",
    url: "https://www.coullax.com/ai",
    siteName: "Coullax",
    locale: "en_US",
    type: "website",
  },
};

export default function AiLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}