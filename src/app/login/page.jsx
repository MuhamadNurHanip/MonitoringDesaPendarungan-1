import Image from "next/image";
import TypeLogin from "./TypeLogin";

const Login = () => {
  return (
    <div className="flex">
      <div className="hidden md:grid place-items-center bg-[url('/gallery/gallerylogin.jpg')] w-full">
        <div className="flex flex-col items-center gap-5">
          <Image
            src={"/logopendarungan.svg"}
            width={180}
            height={180}
            alt="Logo-Pendarungan"
          />
          <p className="font-extrabold text-2xl text-white">DESA PENDARUNGAN</p>
        </div>
      </div>
      <div className="w-full h-screen text-black bg-second-color grid place-items-center">
        <TypeLogin />
      </div>
    </div>
  );
};

export default Login;
