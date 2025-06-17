'use client';
import { cn } from "@/lib/utils";
import React from "react";

export default function BookCallBtn({
  className = "",
}: {
  className?: string;
}) {
  const handleBookCallClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("https://cal.com/coullax/30min", "_blank");
  };

  return (
    <button
      onClick={handleBookCallClick}
      className={cn(
        "cursor-pointer bg-[#e0ef29] hover:bg-transparent hover:scale-105 min-w-[20.94vh] py-[1.678vh] px-[5.772vh] text-[1.342vh] text-center leading-[1.315vh] -tracking-[0.067vh] uppercase font-silkscreen text-[#030303] border-2 border-dashed border-black",
        className,
      )}
    >
      BOOK A CALL
    </button>
  );
}
