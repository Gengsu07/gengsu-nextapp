"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex bg-blue-950 text-white p-4 space-x-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"}>Sign In</Link>
      )}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href={"/api/auth/signout"} className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
