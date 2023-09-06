import Image from "next/image";
import Link from "next/link";
import Action from "./Action";

const TableProker = () => {
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
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td className="max-w-[180px]">Program Pemberdayaan Perempuan</td>
              <td className="max-w-[120px]">Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <Action />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableProker;
