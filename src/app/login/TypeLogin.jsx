"use client";

import LoginAdmin from "./LoginAdmin";
import { useState } from "react";
import LoginPejabat from "./LoginPejabat";

const TypeLogin = () => {
  const [typeLogin, setTypeLogin] = useState(null);
  return (
    <div className="w-11/12">
      <h1 className="font-bold text-2xl">Selamat Datang!</h1>
      <p>Silahkan masuk dengan akun anda...</p>
      <div className="flex gap-3 my-3">
        <button
          onClick={() => setTypeLogin("admin")}
          className={`${
            !typeLogin || typeLogin == "admin"
              ? "bg-primary-color text-white"
              : "bg-second-color text-primary-color"
          } p-2 text-xs rounded-md border border-primary-color font-semibold w-full`}
          type="button"
        >
          Admin
        </button>
        <button
          onClick={() => setTypeLogin("pejabat")}
          className={`${
            typeLogin == "pejabat"
              ? "bg-primary-color text-white"
              : "bg-second-color text-primary-color"
          } p-2 text-xs rounded-md border border-primary-color font-semibold w-full`}
          type="button"
        >
          Pejabat Desa
        </button>
      </div>
      {typeLogin == "admin" ? <LoginAdmin /> : <LoginPejabat />}
    </div>
  );
};

export default TypeLogin;
