"use client";

import { Navigation } from "@/components/sidebar";
import SavedNotes from "@/app/(savednotes)/_components/savednotes";

const savedNotesPage = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex">
        <Navigation />
      </div>
      <div className="flex flex-col mx-auto pl-96 pt-7 font-bold">
        <p className="text-2xl pl-6 ml-6">Your Notes</p>
        <div className="pt-28">
          <SavedNotes />
        </div>
      </div>
    </div>
  );
};

export default savedNotesPage;
