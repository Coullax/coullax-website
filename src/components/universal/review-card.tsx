import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  review: {
    name: string;
    profile: string;
    ratings: string;
    feedback: string;
  };
  index: number;
  vertical?: boolean;
  setOpenReviewModal?: (open: boolean) => void;
}

export default function ReviewCard({
  review,
  index,
  vertical = false,
  setOpenReviewModal = () => {},
}: ReviewCardProps) {
  return (
    <div
      key={index}
      className=" bg-[#f3f1e4] rounded-[20px] p-[15px] flex-shrink-0 inline-block w-[355px] lg:w-full"
    >
      <div className=" flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center gap-[10px]">
          <Image
            src={review.profile}
            alt="jossie Cotto"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className=" leading-[15px] text-[14px] font-semibold">
            {review.name}
          </p>
        </div>
        <div className="flex flex-row justify-start items-center gap-[5px]">
          <p className=" leading-[15px] text-[14px] font-semibold">
            {review.ratings}
          </p>
          <Star size={15} color="#eaa134" weight="fill" />
        </div>
      </div>
      <p
        className={` pt-[11px] text-[14px] leading-[16px] font-plus-jakarta-sans ${
          vertical ? "hidden lg:block" : ""
        }`}
      >
        {review.feedback}
      </p>
      <p
        className={` pt-[11px] text-[14px] leading-[16px] font-plus-jakarta-sans  ${
          vertical ? "block lg:hidden" : "hidden"
        }`}
      >
        {review.feedback.length > 60
          ? `${review.feedback.slice(0, 60)}... `
          : review.feedback}
        {review.feedback.length > 60 && (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setOpenReviewModal(true)}
          >
            Read more
          </span>
        )}
      </p>
    </div>
  );
}
