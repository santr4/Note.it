"use client";

import type { NextRequest } from "next/server";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Login(req: NextRequest) {
  const { data: session } = useSession();
  if (session) {
    redirect("/documents");
  }
  return (
    <div>
      <p>This is a login page - public route</p>
      <button onClick={() => signIn("github")}>Sign in with Github</button>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}
