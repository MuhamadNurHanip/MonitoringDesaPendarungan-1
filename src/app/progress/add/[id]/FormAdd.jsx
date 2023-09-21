"use client";
import LabelForm from "@/components/LabelForm";
import { formatRupiah } from "@/lib/setMoney";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormAdd = ({ id }) => {
  const router = useRouter();
  const [rupiah, setRupiah] = useState();
  const [option, setOption] = useState([
    { id: 1, nama: "Rencana" },
    { id: 2, nama: "Progress" },
    { id: 3, nama: "Selesai" },
  ]);

  const addProgress = async (e) => {
    e.preventDefault();
    const evaluasi = e.target[0].value;
    const hambatan = e.target[1].value;
    const tanggalRealisasi = e.target[2].value;
    const anggaran = e.target[3].value.split(".");
    const jumlahRealisasi = Number(anggaran.join(""));
    const status =
      (e.target[4].value == 1 && "Rencana") ||
      (e.target[4].value == 2 && "Progress") ||
      (e.target[4].value == 3 && "Selesai") ||
      "Progress";

    const add = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/proker/${id}`,
      { evaluasi, hambatan, tanggalRealisasi, jumlahRealisasi, status }
    );

    if (!add) return alert("Add progress failed! something wrong");
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    e.target[4].value = "";
    alert("Add progress success!");
    router.push("/progress");
    return;
  };

  return (
    <form
      data-aos="fade-down-right"
      onSubmit={addProgress}
      className="card md:grid grid-cols-2 gap-3"
      action=""
    >
      <div className="space-y-2">
        <LabelForm longText={true} name={"Evaluasi"}>
          Evaluasi program kerja
        </LabelForm>
        <LabelForm longText={true} name={"Hambatan"}>
          Hambatan program kerja
        </LabelForm>
        <LabelForm name={"Tanggal Realisasi Pelaksanaan"} type={"date"}>
          00/00/0000
        </LabelForm>
        <LabelForm
          name={"Realisasi Anggaran"}
          onChange={(e) => setRupiah(formatRupiah(e.target.value))}
          value={rupiah}
          type={"text"}
        >
          Realisasi anggaran
        </LabelForm>
        <LabelForm
          name={"Status Program Kerja"}
          dataOption={option}
          option={true}
        >
          Status Program Kerja
        </LabelForm>
      </div>
      <div>
        <label className="flex flex-col" htmlFor="image">
          <span className="font-medium">
            Dokumentasi Kegiatan Program Kerja
          </span>
          <div className="button font-semibold text-center">
            <span>+ Tambahkan Media</span>
            <input className="hidden" type="file" name="image" id="image" />
          </div>
        </label>
      </div>
      <button className="button font-semibold" type="submit">
        Tambah Progress
      </button>
      <Link
        href={"/progress"}
        className="p-3 bg-rose-500 text-second-color text-center rounded-md text-xs w-full md:w-1/2 font-semibold col-span-2"
        type="submit"
      >
        Batalkan Tambah Progress
      </Link>
    </form>
  );
};

export default FormAdd;
