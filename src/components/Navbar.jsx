"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname().split("/")[1];
  return (
    <nav className="md:h-screen md:w-80 text-white bg-primary-color">
      <div className="nav-brand fixed z-50 top-0 w-full md:static">
        <div className="w-11/12 md:w-full p-3 flex md:flex-col gap-3 justify-center items-center mx-auto rounded-b-xl md:rounded-none bg-primary-color">
          <Image
            alt="icon-navbar"
            className="md:w-36"
            width={30}
            height={30}
            src="/logopendarungan.svg"
          />
          <h1 className="font-bold text-xl">Desa Pendarungan</h1>
        </div>
      </div>
      <div className="fixed z-50 bottom-0 w-full md:static">
        <ul className="flex justify-between md:flex-col md:justify-start md:gap-3 w-11/12 md:w-full h-full rounded-t-xl md:rounded-none mx-auto bg-primary-color p-3">
          <li
            className={`p-2 rounded-lg ${
              !path && "bg-second-color text-primary-color"
            }`}
          >
            <Link className="flex items-center gap-3" href={"/"}>
              {!path ? (
                <Image
                  alt="icon-navbar"
                  src={"/homeblack-icon.svg"}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  alt="icon-navbar"
                  src={"/homewhite-icon.svg"}
                  width={24}
                  height={24}
                />
              )}
              <h1 className="hidden font-bold md:block">Dashboard</h1>
            </Link>
          </li>
          <li
            className={`p-2 rounded-lg ${
              path == "accounts" ? "bg-second-color text-primary-color" : null
            }`}
          >
            <Link className="flex items-center gap-3" href={"/accounts"}>
              {path == "accounts" ? (
                <Image
                  alt="icon-navbar"
                  src={"/personblack-icon.svg"}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  alt="icon-navbar"
                  src={"/personwhite-icon.svg"}
                  width={24}
                  height={24}
                />
              )}
              <h1 className="hidden font-bold md:block">Accounts</h1>
            </Link>
          </li>
          <li
            className={`p-2 rounded-lg ${
              path == "task" ? "bg-second-color text-primary-color" : null
            }`}
          >
            <Link className="flex items-center gap-3" href={"/task"}>
              {path == "task" ? (
                <Image
                  alt="icon-navbar"
                  src={"/taskblack-icon.svg"}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  alt="icon-navbar"
                  src={"/taskwhite-icon.svg"}
                  width={24}
                  height={24}
                />
              )}
              <h1 className="hidden font-bold md:block">Program Kerja</h1>
            </Link>
          </li>
          <li
            className={`p-2 rounded-lg ${
              path == "progress" ? "bg-second-color text-primary-color" : null
            }`}
          >
            <Link className="flex items-center gap-3" href={"/progress"}>
              {path == "progress" ? (
                <Image
                  alt="icon-navbar"
                  src={"/chartblack-icon.svg"}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  alt="icon-navbar"
                  src={"/chartwhite-icon.svg"}
                  width={24}
                  height={24}
                />
              )}
              <h1 className="hidden font-bold md:block">Progress</h1>
            </Link>
          </li>
          <li
            className={`p-2 rounded-lg ${
              path == "report" ? "bg-second-color text-primary-color" : null
            }`}
          >
            <Link className="flex items-center gap-3" href={"/report"}>
              {path == "report" ? (
                <Image
                  alt="icon-navbar"
                  src={"/bookblack-icon.svg"}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  alt="icon-navbar"
                  src={"/bookwhite-icon.svg"}
                  width={24}
                  height={24}
                />
              )}
              <h1 className="hidden font-bold md:block">Laporan</h1>
            </Link>
          </li>
          <li
            className={`p-2 rounded-lg ${
              path == "money" ? "bg-second-color text-primary-color" : null
            }`}
          >
            <Link className="flex items-center gap-3" href={"/money"}>
              {path == "money" ? (
                <Image
                  alt="icon-navbar"
                  src={"/moneyblack-icon.svg"}
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  alt="icon-navbar"
                  src={"/moneywhite-icon.svg"}
                  width={24}
                  height={24}
                />
              )}
              <h1 className="hidden font-bold md:block">Pendanaan</h1>
            </Link>
          </li>
          <li
            className={`p-2 rounded-lg ${
              path == "logout" ? "bg-second-color text-primary-color" : null
            }`}
          >
            <Link className="flex items-center gap-3" href={"/logout"}>
              <Image
                alt="icon-navbar"
                src={"/logoutwhite-icon.svg"}
                width={24}
                height={24}
              />
              <h1 className="hidden font-bold md:block">Logout</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
