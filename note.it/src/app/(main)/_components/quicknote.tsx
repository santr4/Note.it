"use client";
import { Merriweather, Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
// import TotalAvatars from "@/components/avatargroup";
import DatePickerDemo from "./datapicker";

const font3 = Merriweather({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

const font4 = Barlow({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

export const QuickNote = () => {
  return (
    <div className="w-full flex flex-col">
      <h1
        className={cn(
          "flex flex-row text-stone-800 underline decoration-dashed w-auto justify-center pt-3 font-bold text-2xl",
          font4.className
        )}
      >
        Let Your Voice Be Heard
      </h1>
      <p
        className={cn(
          "flex justify-center pt-6 font-bold pb-5",
          font3.className
        )}
      >
        Use this template to write quick notes you can reference later and
        quickly create a rich document.
      </p>
    </div>
  );
};
