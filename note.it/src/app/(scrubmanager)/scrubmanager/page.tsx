"use client";
import { Navigation } from "@/components/sidebar";
import KanbanBoard from "@/app/(scrubmanager)/_components/KanbanBoard";

const scrubManagerPage = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex flex-col justify-start px-10 mx-auto font-bold pt-9">
        <div className="text-2xl">
          Scrubbing Task Master ={">"} Capture, Organize, Remember.
        </div>
        <div className="pt-60">
          <KanbanBoard />
        </div>
      </div>
    </div>
  );
};

export default scrubManagerPage;
