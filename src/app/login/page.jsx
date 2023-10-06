import Image from "next/image";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <div className="flex">
      <div className="w-full md:w-[678px] h-screen text-black bg-second-color grid place-items-center">
        <FormLogin />
      </div>
      <div className="hidden md:grid place-items-center bg-cover bg-[url('/gallery/gallerylogin.jpg')] w-full">
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
    </div>
  );
};

export default Login;
