"use client";
import { Navigation } from "@/components/sidebar";

const readingListPage = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex justify-center px-10 mx-auto pt-5 font-bold">
        Bookshelf Chronicles: My Reading Journey
      </div>
    </div>
  );
};

export default readingListPage;
