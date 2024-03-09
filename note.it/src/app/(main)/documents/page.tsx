"use client";
import { Navigation } from "@/app/(main)/_components/navigation";
import { QuickNote } from "@/app/(main)/_components/quicknote";
import TextareaComponent from "../_components/textarea";

const DocumentsPage = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex flex-col max-w-[1000px] px-12 mx-auto w-full border-0 border-red-500">
        <QuickNote />
        <TextareaComponent />
      </div>
    </div>
  );
};

export default DocumentsPage;
