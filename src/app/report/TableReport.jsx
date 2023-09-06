import Image from "next/image";
import Link from "next/link";
import { Finish } from "@/components/Status";

const TableReport = () => {
  return (
    <section className="card space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
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
          <label className="flex items-center gap-2" htmlFor="time">
            <span className="font-semibold">Status</span>
            <select
              className="bg-primary-color text-second-color rounded-md outline-none text-xs p-2"
              name="time"
              id="time"
            >
              <option value="2023">Rencana</option>
              <option value="2023">Proses</option>
              <option value="2023">Selesai</option>
            </select>
          </label>
        </div>
        <button className="button w-max" type="button">
          Export Data
        </button>
      </div>
      <div className="overflow-x-auto rounded-t-md">
        <table className="table">
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
            <tr>
              <th>1</th>
              <td>Program Pemberdayaan Perempuan</td>
              <td className="min-w-max">12 Desember 2023</td>
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
