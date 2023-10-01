import { getServerSession } from "next-auth";
import User from "./User";
import authOptions from "@/lib/auth";

const Header = async ({ page }) => {
  const session = await getServerSession(authOptions);
  return (
    <header data-aos="fade-down">
      <p>Selamat Pagi, !</p>
      <User />
      <p>{JSON.stringify(session)}</p>
      <div className="flex gap-3 my-3">
        <span className="block bg-black w-[3px] rounded-full"></span>
        <h1 className="font-bold">{page}</h1>
      </div>
    </header>
  );
};

export default Header;
