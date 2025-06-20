import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans, Kode_Mono, Silkscreen, Inclusive_Sans } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import { AudioProvider } from "@/components/AudioPlayer";
import localfont from "next/font/local";
import { Suspense } from "react";
import Loading from "./loading";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"],
  variable: "--font-kode-mono",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
});

const inclusiveSans = Inclusive_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inclusive-sans",
});

const specialGothicExpandedOne = localfont({
  src: [
    {
      path: '../../public/fonts/SpecialGothicExpandedOne-Regular.ttf',
      weight: "400",
    },
  ],
  variable: "--font-special-gothic-expanded-one",
});


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Coullax | Igniting Innovation through AI and Blockchain Mastery",
  description:
    "Our mission is to enhance efficiency, security, and transparency across industries. Making the world a smarter, more connected, and a safer place. To achieve this, we believe in the power of Artificial intelligence's efficiency and Blockchain technology's security and transparency.",
  keywords: ["Blockchain", "Web3", "Defi Development", "AI", "AI Solutions", "Web Development", "UI/UX Design", "Branding", "Coullax", "AI chatbot", "AI Assistant", "Blockchain Solutions",
    "Smart Contract Development",
    "Web3 Development",
    "Decentralized Applications",
    "Software Development",
    "Web Development",
    "Web Applications",
    "Responsive Design",
    "Frontend Development",
    "Backend Development",
    "Custom Software",
    "Next.js",
    "Node.js",
    "UI/UX Design"],
  authors: [{ name: "Coullax", url: "https://www.coullax.com" }],
  creator: "Coullax",
  publisher: "Coullax",
  metadataBase: new URL("https://www.coullax.com"),
  openGraph: {
    title: "Coullax | Blockchain, AI and Web Development Solutions",
    description:
      "Our mission is to enhance efficiency, security, and transparency across industries. Making the world a smarter, more connected, and a safer place. To achieve this, we believe in the power of Artificial intelligence's efficiency and Blockchain technology's security and transparency.",
    url: "https://www.coullax.com",
    siteName: "coullax",
    images: [
      {
        url: "/og-image.png",
        alt: "coullax Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning={true}
    >
      <head>
        {/* <Script src="http://localhost:3000/embed.js" strategy="lazyOnload" /> */}

        {/* <script 
  src="http://localhost:3000/api/widget" 
  data-api-url="http://localhost:3000/api/chat"
  data-color="#000" 
  data-position="bottom-right"
  data-message="Hi, I'm your Goddiva Assistant 👗"
  data-goddiva-widget
  data-company="Goddiva"
  async>
</script> */}
      </head>
      <body
        className={`flex-grow overflow-x-hidden ${plusJakartaSans.variable} ${kodeMono.variable} ${silkscreen.variable} ${inclusiveSans.variable} ${specialGothicExpandedOne.variable}`} 
        suppressHydrationWarning={true}
      >
        <AudioProvider>
          <Suspense fallback={<Loading/>} >
         
          {children}
           </Suspense>
        </AudioProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
