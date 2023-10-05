"use client";
import LabelForm from "@/components/LabelForm";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ManageAccount = () => {
  const [user, setUser] = useState([]);
  const { data } = useSession();
  const [option, setOption] = useState([
    { id: 1, nama: "Admin" },
    { id: 2, nama: "Pejabat Desa" },
  ]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const data = (await axios.get("http://localhost:3000/api/v1/users")).data
      .data;
    setUser(data);
    setLoading(false);
  };

  const addUser = async (e) => {
    e.preventDefault();
    const fullname = e.target[0].value;
    const username = e.target[1].value.toLowerCase();
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const roleuser = e.target[4].value == "1" ? "admin" : "pejabatdesa";
    if (password != confirmPassword) return alert("Password tidak sama!");

    const addData = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
      {
        fullname,
        username,
        password,
        roleuser,
      }
    );

    if (addData) {
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      e.target[4].value = "";
      getUser();
      return alert("Tambah user sukses!");
    } else {
      return alert("Tambah user gagal!");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (data?.user.roleuser != "admin") return;

  return (
    <>
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
          <LabelForm name={"Role User"} option={true} dataOption={option}>
            Pilih role user anda ...
          </LabelForm>
          <button className="button w-full font-semibold" type="submit">
            Tambahkan Akun
          </button>
        </form>
      </section>
      <section
        data-aos="fade-down-left"
        className="card md:order-last space-y-3"
      >
        <h1 className="title-section">Accounts</h1>
        {loading ? (
          <div className="flex animate-pulse gap-3 items-center">
            <div className="h-10 w-10 rounded-md bg-slate-200"></div>
            <div className="flex flex-col gap-3">
              <div className="h-2 w-20 rounded-md bg-slate-200"></div>
              <div className="h-2 w-24 rounded-md bg-slate-200"></div>
            </div>
          </div>
        ) : (
          user.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <Image
                    width={100}
                    height={0}
                    alt="profile"
                    src="/profiles/profile1.jpg"
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold">{item.fullname}</p>
                <p className="text-xs opacity-80">
                  {item.roleuser == "admin" ? "Admin" : "Pejabat Desa"}
                </p>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default ManageAccount;
