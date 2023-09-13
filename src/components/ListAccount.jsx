"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const ListAccount = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const data = (await axios.get("http://localhost:3000/api/v1/users")).data
      .data;
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section data-aos="fade-down-left" className="card md:order-last space-y-3">
      <h1 className="title-section">Accounts</h1>
      {user.map((item) => (
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
      ))}
    </section>
  );
};

export default ListAccount;
