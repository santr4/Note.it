"use client";
import { Rubik_Storm, Satisfy } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Satisfy({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

const font1 = Rubik_Storm({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

const Heading = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="flex font-bold text-center justify-center">
        <div className="flex flex-row text-lg">
          Welcome to{" "}
          <div className={cn("px-1 text-red-600", font1.className)}>
            Note.it
          </div>
        </div>
      </h1>
      <p className={cn("flex underline decoration-double", font.className)}>
        Organize your thoughts, Manage your tasks, Effortlessly.
      </p>
    </div>
  );
};

export default Heading;
