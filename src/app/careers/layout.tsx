import { ReactNode } from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Careers | Coullax',
  description: "Join Coullax and help shape the future of AI, Blockchain, and web technologies. We're building smart, secure, and scalable digital solutions with a passionate global team.",
  keywords: [
    "Coullax",
    "Careers at Coullax",
    "AI Jobs",
    "Blockchain Careers",
    "Tech Careers",
    "Join Coullax",
  ],
  openGraph: {
    title: "Careers at Coullax",
    description: "Be part of a team that's reimagining technology with AI, Blockchain, and web innovation. Discover career opportunities at Coullax.",
    url: "https://www.coullax.com/careers",
    siteName: "Coullax",
    locale: "en_US",
    type: "website",
  },
};

export default function CareersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}