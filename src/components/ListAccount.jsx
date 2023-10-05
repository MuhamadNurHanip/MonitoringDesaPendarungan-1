"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const ListAccount = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const data = (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`))
      .data.data;
    setUser(data);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section data-aos="fade-down-left" className="card md:order-last space-y-3">
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
  );
};

export default ListAccount;
