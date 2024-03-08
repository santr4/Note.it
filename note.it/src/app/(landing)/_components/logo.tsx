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
    <div className="pl-3 md: flex flex-col items-center">
      <Image src="/cover.png" height="90" width="80" alt="logo" />
      <p className={cn(lobster.className)}>Manage Efficiently</p>
    </div>
  );
};
