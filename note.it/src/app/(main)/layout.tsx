"use client";
// import { Navigation } from "@/app/(main)/_components/navigation";
// import { QuickNote } from "@/app/(main)/_components/quicknote";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex justify-items-center">
      <ChakraProvider>
        <main>{children}</main>
      </ChakraProvider>
    </div>
  );
};

export default MainLayout;
