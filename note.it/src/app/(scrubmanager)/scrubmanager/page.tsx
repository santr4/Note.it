"use client";
import { Navigation } from "@/components/sidebar";

const scrubManagerPage = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex justify-center px-10 mx-auto font-bold pt-5">
        Scrubbing Task Master ={">"} Capture, Organize, Remember.
      </div>
    </div>
  );
};

export default scrubManagerPage;
