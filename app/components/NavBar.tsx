import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-300 p-4">
      <Link href={"/"} className="mr-5 ">
        Home
      </Link>
      <Link href={"/users"} className="mr-1">
        Users
      </Link>
    </div>
  );
};

export default NavBar;