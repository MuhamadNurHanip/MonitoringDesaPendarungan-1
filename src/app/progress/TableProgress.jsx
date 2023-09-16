"use client";
import Image from "next/image";
import Action from "./Action";
import { Process } from "@/components/Status";
import axios from "axios";
import { useEffect, useState } from "react";

const TableProgress = () => {
  const [proker, setProker] = useState([]);

  const getProker = async () => {
    try {
      const data = (
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/proker`)
      ).data.data;
      setProker(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProker();
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="card space-y-2"
    >
      <div className="flex md:justify-end">
        <button className="button w-max" type="button">
          Export Data
        </button>
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center">
        <label className="flex items-center gap-2" htmlFor="time">
          <span className="font-semibold">Waktu</span>
          <select
            className="bg-primary-color text-second-color rounded-md outline-none text-xs p-2"
            name="time"
            id="time"
          >
            <option value="2023">2023</option>
            <option value="2023">2023</option>
            <option value="2023">2023</option>
          </select>
        </label>
        <label
          className="flex gap-3 w-max text-xs rounded-md p-2 border border-primary-color"
          htmlFor="search"
        >
          <Image width={24} height={24} alt="Search-icon" src={"/search.svg"} />
          <input
            className="bg-second-color outline-none"
            placeholder="Cari program kerja"
            type="text"
            name="search"
            id="search"
          />
        </label>
      </div>
      <div className="overflow-x-auto rounded-t-md">
        <table className="table">
          <thead>
            <tr className="bg-primary-color/20 text-primary-color">
              <th>No</th>
              <th>Nama</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {proker.map((item, index) => {
              let no = 0;
              if (item.status == "Progress") {
                no++;
                return (
                  <tr key={index}>
                    <th>{no}</th>
                    <td className="max-w-[180px]">{item.judul}</td>
                    <td>
                      <Process />
                    </td>
                    <td>
                      <Action item={item} key={index} />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableProgress;
