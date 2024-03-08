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
    <div className="p-3 md: flex items-center">
      <Image
        src="/175637400_padded_logo.png"
        height="40"
        width="40"
        alt="logo"
      />
      <p className={cn("m-1", lobster.className)}>Note.it</p>
    </div>
  );
};
