"use client";
import LabelForm from "@/components/LabelForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

const LoginAdmin = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  const getAdmin = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users`
    );
    setUsers(response.data.data);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const signInData = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (signInData.error) {
      alert("Something wrong!");
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);
  return (
    <form onSubmit={handleLogin} className="space-y-2" action="">
      <LabelForm name={"Username"} type={"text"}>
        Masukkan username anda...
      </LabelForm>
      <LabelForm name={"Password"} type={"password"}>
        Masukkan password anda...
      </LabelForm>
      <button className="button w-full font-semibold" type="submit">
        Masuk sebagai Admin
      </button>
    </form>
  );
};

export default LoginAdmin;
