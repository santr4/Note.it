"use client";

import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Switch } from "@/components/ui/switch";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div className={cn("md:flex", scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="mt-3.5 md:ml-auto md:justify-end justify-between gap-5 m-5 space-x-3">
        <Button variant="ghost" size="sm" className="ring-2">
          <Link href="http://localhost:3000/login">LogIn</Link>
        </Button>
        <Button variant="ghost" size="sm" className="ring-2">
          <Link href="#">AboutUs</Link>
        </Button>
      </div>
    </div>
  );
};
