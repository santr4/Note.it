"use client";
import { Navigation } from "@/app/(main)/_components/navigation";
import { QuickNote } from "@/app/(main)/_components/quicknote";

const MainLayout = () => {
  return (
    <div className="flex flex-row">
      <Navigation />
      <QuickNote />
    </div>
  );
};

export default MainLayout;
