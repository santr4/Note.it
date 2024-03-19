"use client";
import { Navigation } from "@/components/sidebar";

const savedNotesPage = () => {
  return (
    <div className="flex w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex justify-center mx-auto pt-7 font-bold">
        Your Notes
      </div>
    </div>
  );
};

export default savedNotesPage;
