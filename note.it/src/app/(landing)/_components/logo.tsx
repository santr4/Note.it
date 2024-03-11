import Image from "next/image";
import { Lobster } from "next/font/google";
import { cn } from "@/lib/utils";

const lobster = Lobster({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

export const Logo = () => {
  return (
    <div className="pl-3 md: flex flex-col items-center pt-1">
      <Image src="/cover.png" height="150" width="90" alt="logo" />
    </div>
  );
};
