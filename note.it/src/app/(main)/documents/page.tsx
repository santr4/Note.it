"use client";

import { Navigation } from "@/app/(main)/_components/navigation";
import { QuickNote } from "@/app/(main)/_components/quicknote";
import TextareaComponent from "../_components/textarea";
import { Button1 } from "../_components/button1";
import Comments from "@/components/comment";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const DocumentsPage = () => {
  const { data: session } = useSession();
  if (session == null) {
    redirect("/login");
  }

  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex flex-col max-w-[1000px] px-12 mx-auto w-full border-0 border-red-500">
        <QuickNote />
        <TextareaComponent />
        <Button1 />
        <h1 className="pt-24 font-semibold underline">Comments</h1>
        <Comments />
      </div>
    </div>
  );
};

export default DocumentsPage;
