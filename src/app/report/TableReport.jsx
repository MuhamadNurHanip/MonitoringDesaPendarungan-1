"use client";
import { Finish, Process, Rencana } from "@/components/Status";
import TableLoading from "@/components/TableLoading";
import { getYear } from "@/lib/getYear";
import { setDate } from "@/lib/setDate";
import { setMoney } from "@/lib/setMoney";
import axios from "axios";
import { useEffect, useState } from "react";

const TableReport = () => {
  const [proker, setProker] = useState([]);
  const [status, setStatus] = useState("Rencana");
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(2023);

  const getProker = async () => {
    try {
      const data = (
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/proker`)
      ).data.data;
      setProker(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  let no = 1;

  useEffect(() => {
    getProker();
    console.log(proker);
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="card space-y-2"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <label className="flex items-center gap-2" htmlFor="time">
            <span className="font-semibold">Waktu</span>
            <select
              onChange={(e) => {
                setYear(e.target.value);
              }}
              className="bg-primary-color text-second-color rounded-md outline-none text-xs p-2"
              name="time"
              id="time"
            >
              <option value="2021" selected={year == 2021}>
                2021
              </option>
              <option value="2022" selected={year == 2022}>
                2022
              </option>
              <option value="2023" selected={year == 2023}>
                2023
              </option>
            </select>
          </label>
          <label className="flex items-center gap-2" htmlFor="time">
            <span className="font-semibold">Status</span>
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="bg-primary-color text-second-color rounded-md outline-none text-xs p-2"
              name="time"
              id="time"
            >
              <option value="Rencana">Rencana</option>
              <option value="Progress">Proses</option>
              <option value="Selesai">Selesai</option>
            </select>
          </label>
        </div>
        <button className="button w-max" type="button">
          Export Data
        </button>
      </div>
      <div className="overflow-x-auto rounded-t-md">
        {loading ? (
          <TableLoading />
        ) : (
          <table className="table table-auto w-max">
            <thead>
              <tr className="bg-primary-color/20 text-primary-color">
                <th>No</th>
                <th className="min-w-max max-w-[480px]">Nama</th>
                <th>Tanggal</th>
                <th>Sumber Dana</th>
                <th>Rencana Anggaran</th>
                <th>Realisasi Anggaran</th>
                <th>Sisa Dana</th>
                <th>Status</th>
                <th>Deskripsi</th>
                <th>Hambatan</th>
                <th>Evaluasi</th>
              </tr>
            </thead>
            <tbody>
              {proker.map((item) => {
                if (item.status == status && getYear(item.tanggal) == year) {
                  return (
                    <tr key={item.id}>
                      <th>{no++}</th>
                      <td>{item.judul}</td>
                      <td className="min-w-max">{setDate(item.tanggal)}</td>
                      <td>{item.fundsName}</td>
                      <td>{setMoney(item.jumlahAnggaran)}</td>
                      <td>
                        {item.realisasiAnggaran
                          ? setMoney(item.realisasiAnggaran)
                          : "Belum ada"}
                      </td>
                      <td>
                        {item.jumlahAnggaran - item.realisasiAnggaran
                          ? setMoney(
                              item.jumlahAnggaran - item.realisasiAnggaran
                            )
                          : "Belum ada"}
                      </td>
                      <td>
                        {item.status == "Rencana" && <Rencana />}
                        {item.status == "Progress" && <Process />}
                        {item.status == "Selesai" && <Finish />}
                      </td>
                      <td className="max-w-[430px]">{item.deskripsi}</td>
                      <td className="max-w-[430px]">
                        {item.hambatan || "Belum ada"}
                      </td>
                      <td className="max-w-[430px]">
                        {item.evaluasi || "Belum ada"}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        )}
        {no == 1 && !loading ? (
          <h1 className="text-center font-bold my-3">Tidak ada data!</h1>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default TableReport;
