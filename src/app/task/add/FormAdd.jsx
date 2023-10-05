"use client";
import LabelForm from "@/components/LabelForm";
import { formatRupiah } from "@/lib/setMoney";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FormAdd = () => {
  const [funds, setFunds] = useState([]);
  const [rupiah, setRupiah] = useState();
  const router = useRouter();

  const addTask = async (e) => {
    e.preventDefault();
    const judul = e.target[0].value;
    const deskripsi = e.target[1].value;
    const tujuan = e.target[2].value;
    const sasaran = e.target[3].value;
    const tanggal = e.target[4].value;
    const penyelenggara = e.target[5].value;
    const fundsId = Number(e.target[6].value);
    const anggaran = e.target[7].value.split(".");
    const jumlahAnggaran = Number(anggaran.join(""));
    const tahunAnggaran = Number(e.target[8].value);

    const data = {
      judul,
      deskripsi,
      tujuan,
      sasaran,
      tanggal,
      penyelenggara,
      funds: { connect: { id: fundsId } },
      jumlahAnggaran,
      tahunAnggaran,
    };

    const addTask = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/proker`,
      data
    );

    if (!addTask) return alert("Data gagal ditambahkan!");

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    e.target[4].value = "";
    e.target[5].value = "";
    e.target[6].value = "";
    e.target[7].value = "";
    e.target[8].value = "";

    alert("Data berhasil ditambahkan!");
    router.push("/task");
    return;
  };

  const getFunds = async () => {
    try {
      const data = (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/funds`))
        .data.data;
      setFunds(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFunds();
  }, []);

  return (
    <form
      onSubmit={addTask}
      data-aos="fade-down-right"
      className="card md:grid gap-3 md:grid-cols-2"
      action=""
    >
      <div className="space-y-2">
        <LabelForm name={"Nama Program Kerja"} required={true} type={"text"}>
          Nama program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Deskripsi"}
          longText={true}
          required={true}
          type={"text"}
        >
          Deskripsi program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Tujuan"}
          longText={true}
          required={true}
          type={"text"}
        >
          Tujuan program kerja anda...
        </LabelForm>
        <LabelForm name={"Sasaran"} required={true} type={"text"}>
          Sasaran program kerja anda...
        </LabelForm>
      </div>
      <div className="space-y-2">
        <LabelForm name={"Tanggal Rencana"} required={true} type={"date"}>
          Tanggal rencana program kerja anda...
        </LabelForm>
        <LabelForm name={"Penyelenggara"} required={true} type={"text"}>
          Penyelenggara program kerja anda...
        </LabelForm>
        <LabelForm name={"Sumber Dana"} dataOption={funds} option={true}>
          Sumber dana program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Jumlah Anggaran"}
          onChange={(e) => setRupiah(formatRupiah(e.target.value))}
          value={rupiah}
          required={true}
          type={"text"}
        >
          Jumlah anggaran program kerja anda...
        </LabelForm>
        <LabelForm name={"Tahun Anggaran"} required={true} type={"number"}>
          Tahun anggaran program kerja anda...
        </LabelForm>
      </div>
      <button
        className="button w-full font-semibold col-span-2"
        required={true}
        type="submit"
      >
        Tambah Program Kerja
      </button>
    </form>
  );
};

export default FormAdd;
