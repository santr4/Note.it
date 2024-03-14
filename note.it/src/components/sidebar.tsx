import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BookIcon from "@mui/icons-material/Book";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Face2Icon from "@mui/icons-material/Face2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  //   const { data: session } = useSession();
  //   if (session === null) {
  //     redirect("/login");
  //   }
  return (
    <>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4 flex flex-row">
          <DashboardIcon />
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900 px-2">
            Dashboard
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <div
            role="button"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <EditNoteIcon />
            </div>
            <Link href="/documents">Quick Note</Link>
          </div>
          <div
            role="button"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <ListAltIcon />
            </div>
            <Link href="/todo">To-do list</Link>
          </div>
          <div
            role="button"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <BookIcon />
            </div>
            <Link href="/readinglist">Reading List </Link>
            <div className="grid place-items-center ml-auto justify-self-end">
              <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full">
                <span className="">14</span>
              </div>
            </div>
          </div>
          <div
            role="button"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <SaveAsIcon />
            </div>
            <Link href="/scrubmanager">Scrub Manager</Link>
          </div>
          {/* <div
            role="button"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <button onClick={() => signOut()}>Sign out</button>
          </div> */}
          <div className="pt-96 mt-40 flex flex-row">
            <Avatar>
              <AvatarImage src="https://github.com/santr4.png" />
              <AvatarFallback>Aaranyak Santra</AvatarFallback>
            </Avatar>
            <div className="px-3 flex flex-col">
              <p className="font-mono font-bold text-yellow-500">
                Aaranyak Santra
              </p>
              <p className="text-teal-300">@santr4</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
