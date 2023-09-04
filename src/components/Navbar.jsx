import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="md:h-screen md:w-80 text-white bg-primary-color">
      <div className="nav-brand fixed top-0 w-full md:static">
        <div className="w-11/12 md:w-full p-3 flex md:flex-col gap-3 justify-center items-center mx-auto rounded-b-xl md:rounded-none bg-primary-color">
          <Image
            className="md:w-36"
            width={30}
            height={30}
            src="/logopendarungan.svg"
          />
          <h1 className="font-bold text-xl">Desa Pendarungan</h1>
        </div>
      </div>
      <div className="fixed bottom-0 w-full md:static">
        <ul className="flex justify-between md:flex-col md:justify-start md:gap-3 w-11/12 md:w-full h-full rounded-t-xl md:rounded-none mx-auto bg-primary-color p-3">
          <li className="p-2 rounded-lg bg-second-color">
            <Link className="flex items-center gap-3" href={"/"}>
              <Image src={"/homeblack-icon.svg"} width={24} height={24} />
              <h1 className="hidden font-bold md:block  text-primary-color">
                Dashboard
              </h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link className="flex items-center gap-3" href={"/"}>
              <Image src={"/personwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden font-bold md:block">Accounts</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link className="flex items-center gap-3" href={"/"}>
              <Image src={"/taskwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden font-bold md:block">Program Kerja</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link className="flex items-center gap-3" href={"/"}>
              <Image src={"/chartwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden font-bold md:block">Progress</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link className="flex items-center gap-3" href={"/"}>
              <Image src={"/bookwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden font-bold md:block">Laporan</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link className="flex items-center gap-3" href={"/"}>
              <Image src={"/moneywhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden font-bold md:block">Pendanaan</h1>
            </Link>
          </li>
          <li className="p-2 rounded-lg ">
            <Link className="flex items-center gap-3" href={"/"}>
              <Image src={"/logoutwhite-icon.svg"} width={24} height={24} />
              <h1 className="hidden font-bold md:block">Logout</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
