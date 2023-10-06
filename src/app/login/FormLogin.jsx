"use client";
import LabelForm from "@/components/LabelForm";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const signInData = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (signInData.error) {
      setLoading(false);
      alert("Something wrong!");
    } else {
      router.push("/");
      setLoading(false);
    }
  };
  return (
    <div className="w-11/12">
      <h1 className="font-bold text-2xl">Selamat Datang!</h1>
      <p>Silahkan masuk dengan akun anda...</p>
      <form onSubmit={handleLogin} className="space-y-2 mt-5" action="">
        <LabelForm name={"Username"} type={"text"}>
          Masukkan username anda...
        </LabelForm>
        <LabelForm name={"Password"} type={"password"}>
          Masukkan password anda...
        </LabelForm>
        <button
          className={`button w-full font-semibold ${loading && "opacity-75"}`}
          disabled={loading}
          type="submit"
        >
          {loading ? "Loading..." : "Masuk sekarang"}
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
