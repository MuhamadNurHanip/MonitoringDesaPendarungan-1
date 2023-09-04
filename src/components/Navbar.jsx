import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-brand fixed top-0 w-full">
        <div className="w-11/12 p-3 flex gap-3 justify-center items-center mx-auto rounded-b-xl bg-primary-color">
          <Image width={30} height={30} src="/logopendarungan.svg" />
          <h1 className="font-bold text-xl">Desa Pendarungan</h1>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <ul className="flex justify-between w-11/12 rounded-t-xl mx-auto bg-primary-color p-3">
          <li className="p-2 rounded-lg bg-second-color">
            <Link href={"/"}>
              <Image src={"/homeblack-icon.svg"} width={24} height={24} />
              <h1 className="hidden">Dashboard</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link href={"/"}>
              <Image src={"/personwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden">Dashboard</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link href={"/"}>
              <Image src={"/taskwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden">Dashboard</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link href={"/"}>
              <Image src={"/chartwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden">Dashboard</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link href={"/"}>
              <Image src={"/bookwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden">Dashboard</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link href={"/"}>
              <Image src={"/moneywhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden">Dashboard</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link href={"/"}>
              <Image src={"/logoutwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden">Dashboard</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
