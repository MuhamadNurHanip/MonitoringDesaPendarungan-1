"use client";
import LabelForm from "@/components/LabelForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FormEdit = ({ id }) => {
  const router = useRouter();
  const [proker, setProker] = useState({});
  const [funds, setFunds] = useState([]);

  const getData = async () => {
    try {
      const response = (
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/proker/${id}`)
      ).data.data;
      setProker(response);
    } catch (error) {
      console.log(error.message);
    }
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

  const postProker = async (e) => {
    e.preventDefault();
    try {
      const { fundsId, jumlahAnggaran, tahunAnggaran } = proker;
      delete proker.id;
      delete proker.fundsId;
      delete proker.fundsName;
      const data = {
        ...proker,
        funds: { connect: { id: fundsId } },
        jumlahAnggaran: Number(jumlahAnggaran),
        tahunAnggaran: Number(tahunAnggaran),
      };

      const addTask = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/proker/${id}`,
        data
      );

      if (!addTask) return alert("Data gagal diubah!");
      setProker({});
      alert("Data berhasil diubah!");
      router.push("/task");
      return;
    } catch (error) {
      console.log(error.message);
    }
  };

  const status = (value) => {
    if (value == "Rencana") {
      console.log("Rencana");
      return 1;
    }
    if (value == "Progress") {
      console.log("Progress");
      return 2;
    }
    if (value == "Selesai") {
      console.log("Selesai");
      return 3;
    }
  };

  useEffect(() => {
    getData();
    getFunds();
  }, []);

  return (
    <form
      data-aos="fade-down-right"
      onSubmit={postProker}
      className="card md:grid gap-3 md:grid-cols-2"
      action=""
    >
      <div className="space-y-2">
        <LabelForm
          name={"Nama Program Kerja"}
          value={proker.judul}
          onChange={(e) => {
            const judul = e.target.value;
            setProker({ ...proker, judul });
          }}
          type={"text"}
        >
          Nama program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Deskripsi"}
          longText={true}
          value={proker.deskripsi}
          onChange={(e) => {
            const deskripsi = e.target.value;
            setProker({ ...proker, deskripsi });
          }}
          type={"text"}
        >
          Deskripsi program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Tujuan"}
          longText={true}
          value={proker.tujuan}
          onChange={(e) => {
            const tujuan = e.target.value;
            setProker({ ...proker, tujuan });
          }}
          type={"text"}
        >
          Tujuan program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Sasaran"}
          value={proker.sasaran}
          onChange={(e) => {
            const sasaran = e.target.value;
            setProker({ ...proker, sasaran });
          }}
          type={"text"}
        >
          Sasaran program kerja anda...
        </LabelForm>
      </div>
      <div className="space-y-2">
        <LabelForm
          name={"Tanggal Rencana"}
          value={proker.tanggal}
          onChange={(e) => {
            const tanggal = e.target.value;
            setProker({ ...proker, tanggal });
          }}
          type={"date"}
        >
          Tanggal rencana program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Penyelenggara"}
          value={proker.penyelenggara}
          onChange={(e) => {
            const penyelenggara = e.target.value;
            setProker({ ...proker, penyelenggara });
          }}
          type={"text"}
        >
          Penyelenggara program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Sumber Dana"}
          dataOption={funds}
          value={proker.fundsId}
          onChange={(e) => {
            const fundsId = e.target.value;
            setProker({ ...proker, fundsId });
          }}
          option={true}
        >
          Sumber dana program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Jumlah Anggaran"}
          value={proker.jumlahAnggaran}
          onChange={(e) => {
            const jumlahAnggaran = e.target.value;
            setProker({ ...proker, jumlahAnggaran });
          }}
          type={"number"}
        >
          Jumlah anggaran program kerja anda...
        </LabelForm>
        <LabelForm
          name={"Tahun Anggaran"}
          value={proker.tahunAnggaran}
          onChange={(e) => {
            const tahunAnggaran = e.target.value;
            setProker({ ...proker, tahunAnggaran });
          }}
          type={"number"}
        >
          Tahun anggaran program kerja anda...
        </LabelForm>
      </div>
      <button className="button w-full font-semibold col-span-2" type="submit">
        Edit Program Kerja
      </button>
    </form>
  );
};

export default FormEdit;
