"use client";

import type { NextRequest } from "next/server";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Login(req: NextRequest) {
  const { data: session } = useSession();
  if (session) {
    redirect("/documents");
  }
  return (
    <div className="flex flex-col">
      <p className="font-bold mx-auto pt-5">Login Page</p>
      <div className="flex flex-row mx-auto pt-20 gap-x-5">
        <Button onClick={() => signIn("github")}>Sign in with Github</Button>
        <Button onClick={() => signIn("google")}>Sign in with Google</Button>
      </div>
    </div>
  );
}
