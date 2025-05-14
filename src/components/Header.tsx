"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export default function HeaderNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Careers", link: "/careers" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navigationList} />
        <div className="flex items-center gap-4">
          {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
          <NavbarButton href="https://cal.com/coullax/30min" target="_blank">
            Book a call
          </NavbarButton>
          {/* <button className=" bg-[#e3ffe6] rounded-full flex justify-center p-[9px] ">
                        <div className=" bg-[#6abb79] border-[2px] rounded-full h-[24px] w-[24px] aspect-square flex justify-center items-center">
                            <ArrowRight className=" h-[15px] aspect-square" />
                        </div>
                        <span className=" ml-[6px] text-[20px] font-semibold leading-[23px] -tracking-[1px] pr-[5px]">
                            Book a call
                        </span>
                    </button> */}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navigationList.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            {/* <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full"
                        >
                            Login
                        </NavbarButton> */}

            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              href="https://cal.com/coullax/30min"
              target="_blank"
              variant="primary"
              className="w-full"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
