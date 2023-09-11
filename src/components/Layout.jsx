"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const path = usePathname().split("/")[1];
  if (path != "login")
    return (
      <div className="md:flex">
        <Navbar />
        <div className="w-full overflow-x-hidden md:h-screen py-20 md:py-3 bg-white text-black  md:overflow-y-scroll p-5">
          {children}
        </div>
      </div>
    );

  return <main className="h-screen">{children}</main>;
};

export default Layout;
