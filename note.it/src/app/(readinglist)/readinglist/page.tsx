"use client";
import { Navigation } from "@/components/sidebar";
import ReadingList from "@/app/(readinglist)/_components/readinglist";

const readingListPage = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex flex-col justify-start px-10 mx-auto pt-5">
        <div className="pt-5 font-bold text-2xl">
          Bookshelf Chronicles: My Reading Journey
        </div>
        <div className="pt-40">
          <ReadingList />
        </div>
      </div>
    </div>
  );
};

export default readingListPage;
