import Image from "next/image";
import Link from "next/link";
import { Finish } from "@/components/Status";

const TableReport = () => {
  return (
    <section className="card space-y-2">
      <div className="flex justify-between">
        <Link className="button w-max" href={"/task/add"}>
          <p>Tambah Program Kerja</p>
        </Link>
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
            <tr>
              <th>1</th>
              <td className="max-w-[180px]">Program Pemberdayaan Perempuan</td>
              <td>12 Desember 2023</td>
              <td>APBN</td>
              <td>Rp.12.000.000</td>
              <td>Rp.12.000.000</td>
              <td>Rp.12.000.000</td>
              <td>
                <Finish />
              </td>
              <td className="max-w-[180px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                corrupti deserunt dolorum placeat officiis eaque, magnam sit
                nobis aut id excepturi veniam accusantium. Fugiat dolores error
                saepe asperiores, quidem repellendus dignissimos adipisci minus
                magni laboriosam quae, ipsum consequatur numquam sequi quia
                atque ratione maiores, labore animi nihil magnam corrupti enim.
              </td>
              <td className="max-w-[180px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                corrupti deserunt dolorum placeat officiis eaque, magnam sit
                nobis aut id excepturi veniam accusantium. Fugiat dolores error
                saepe asperiores, quidem repellendus dignissimos adipisci minus
                magni laboriosam quae, ipsum consequatur numquam sequi quia
                atque ratione maiores, labore animi nihil magnam corrupti enim.
              </td>
              <td className="max-w-[180px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                corrupti deserunt dolorum placeat officiis eaque, magnam sit
                nobis aut id excepturi veniam accusantium. Fugiat dolores error
                saepe asperiores, quidem repellendus dignissimos adipisci minus
                magni laboriosam quae, ipsum consequatur numquam sequi quia
                atque ratione maiores, labore animi nihil magnam corrupti enim.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableReport;
