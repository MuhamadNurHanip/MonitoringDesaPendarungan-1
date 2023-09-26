"use client";
import LabelForm from "@/components/LabelForm";
import { formatRupiah } from "@/lib/setMoney";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormAdd = ({ id }) => {
  const router = useRouter();
  const [rupiah, setRupiah] = useState();
  const [images, setImages] = useState([]);
  const [option, setOption] = useState([
    { id: 1, nama: "Rencana" },
    { id: 2, nama: "Progress" },
    { id: 3, nama: "Selesai" },
  ]);

  const addProgress = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("evaluasi", e.target[0].value);
    data.append("hambatan", e.target[1].value);
    data.append("tanggalRealisasi", e.target[2].value);
    const anggaran = e.target[3].value.split(".");
    data.append("jumlahRealisasi", Number(anggaran.join("")));
    const status =
      (e.target[4].value == 1 && "Rencana") ||
      (e.target[4].value == 2 && "Progress") ||
      (e.target[4].value == 3 && "Selesai") ||
      "Progress";
    data.append("status", status);
    // data.append("images", images);
    // const bytes = await images.buffer();
    // const buffer = Buffer.from(images[0]);
    // await writeFile("/public/documentation/kajsdjkasd.jpg", buffer);
    // console.log(buffer);
    const add = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/proker/${id}`,
      data,
      { headers: "multipart/form-data" }
      // { evaluasi, hambatan, tanggalRealisasi, jumlahRealisasi, status }
    );

    if (!add) return alert("Add progress failed! something wrong");
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    e.target[4].value = "";
    setImages([]);
    alert("Add progress success!");
    router.push("/progress");
    return;
  };

  const handleFileSelected = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0].filepath);
      const files = Array.from(e.target.files);
      setImages(files);
    }
  };

  return (
    <form
      data-aos="fade-down-right"
      encType="multipart/form-data"
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
          <div className="grid grid-cols-2 gap-3">
            {images?.map((image, index) => {
              const src = URL.createObjectURL(image);
              return (
                <Image
                  key={index}
                  src={src}
                  alt={image.name}
                  width={30}
                  height={80}
                  className="w-full rounded-md my-3"
                />
              );
            })}
          </div>
          <div className="button font-semibold text-center">
            <span>+ Tambahkan Media</span>
            <input
              className="hidden"
              onChange={(e) => handleFileSelected(e)}
              type="file"
              accept="image/png, image/jpeg"
              multiple
              name="image"
              id="image"
            />
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
