"use client";
import { Rouge_Script } from "next/font/google";
import { cn } from "@/lib/utils";

const font3 = Rouge_Script({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

export const QuickNote = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="flex text-stone-800 underline decoration-dashed w-auto justify-center pt-3">
        Let Your Voice Be Heard!
      </h1>
      <p
        className={cn(
          "flex justify-center pt-6 text-sky-800 font-bold text-2xl",
          font3.className
        )}
      >
        Use this template to write quick notes you can reference later and
        quickly create a rich document.
      </p>
    </div>
  );
};
