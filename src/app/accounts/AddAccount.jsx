"use client";
import LabelForm from "@/components/LabelForm";
import axios from "axios";
import { useState } from "react";

const AddAccount = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const data = (await axios.get("http://localhost:3000/api/v1/users")).data
      .data;
    setUser(data);
  };

  const addUser = async (e) => {
    e.preventDefault();
    const fullname = e.target[0].value;
    const username = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const roleuser = e.target[4].value;
    console.log(roleuser);
    if (password != confirmPassword) return alert("Password tidak sama!");

    const addData = await axios.post("http://localhost:3000/api/v1/users", {
      fullname,
      username,
      password,
      roleuser,
    });

    if (addData) {
      getUser();
      e.target[0].value;
      e.target[1].value;
      e.target[2].value;
      e.target[3].value;
      e.target[4].value;
      return alert("Tambah user sukses!");
    } else {
      return alert("Tambah user gagal!");
    }
  };
  return (
    <section data-aos="fade-down-right" className="card">
      <h1 className="title-section">Tambah Akun Baru</h1>
      <form onSubmit={addUser} className="space-y-2" action="">
        <LabelForm name={"Nama Lengkap"} type={"text"}>
          Nama lengkap anda ...
        </LabelForm>
        <LabelForm name={"Username"} type={"text"}>
          Username anda ...
        </LabelForm>
        <LabelForm name={"Password"} type={"password"}>
          Password anda ...
        </LabelForm>
        <LabelForm name={"Konfirmasi Password"} type={"password"}>
          Konfirmasi Password anda ...
        </LabelForm>
        <LabelForm name={"Role User"} option={true}>
          Pilih role user anda ...
        </LabelForm>
        <button className="button w-full font-semibold" type="submit">
          Tambahkan Akun
        </button>
      </form>
    </section>
  );
};

export default AddAccount;
