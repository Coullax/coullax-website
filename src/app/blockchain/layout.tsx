import { ReactNode } from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Blockchain Solutions | Coullax',
  description: "Explore Coullax's innovative blockchain solutions designed to enhance security, transparency, and efficiency across industries. We specialize in smart contract development, decentralized applications, and Web3 integration.",
  keywords: [
      "Coullax",
      "Blockchain Coullax",
      "Blockchain Solutions",
      "Smart Contract Development",
      "Web3 Development",
      "Decentralized Applications",
  ],
  openGraph: {
      title: "Blockchain Solutions | Coullax",
      description:       "Discover how Coullax delivers secure and scalable blockchain technologies, from smart contracts to complete decentralized systems tailored for your business needs.",
      url: "https://www.coullax.com/blockchain",
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