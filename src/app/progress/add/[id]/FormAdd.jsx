"use client";
import LabelForm from "@/components/LabelForm";
import { formatRupiah } from "@/lib/setMoney";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const FormAdd = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [tmpImg, setTmpImg] = useState([]);
  const [allData, setAllData] = useState({});
  const [option, setOption] = useState([
    { id: 1, nama: "Rencana" },
    { id: 2, nama: "Progress" },
    { id: 3, nama: "Selesai" },
  ]);

  const addProgress = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("evaluasi", allData.evaluasi);
    data.append("hambatan", allData.hambatan);
    data.append("tanggalRealisasi", allData.tanggalRealisasi);
    const anggaran = formatRupiah(`${allData.jumlahRealisasi}`).split(".");
    data.append("jumlahRealisasi", Number(anggaran.join("")));
    const status =
      (allData.status == "Rencana" && "Rencana") ||
      (allData.status == "Progress" && "Progress") ||
      (allData.status == "Selesai" && "Selesai") ||
      "Progress";
    data.append("status", status);
    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        data.append(`images_${i}`, images[i]);
      }
    } else {
      for (let i = 0; i < tmpImg.length; i++) {
        data.append(`images_${i}`, tmpImg[i]);
      }
    }
    const add = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/proker/progress/${id}`,
      data,
      { headers: "multipart/form-data" }
    );

    if (!add)
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Tambah progress gagal...",
      });
    setAllData({});
    setImages([]);
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Tambah progress berhasil...",
    });
    setLoading(false);
    router.push("/progress");
    return;
  };

  const handleFileSelected = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
    }
  };

  const getProkerById = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/proker/${id}`
    );
    console.log(response.data.data);
    setAllData(response.data.data);
    setTmpImg(response.data.data.dokumentasi?.split(";") || []);
  };

  useEffect(() => {
    getProkerById();
  }, []);

  return (
    <form
      data-aos="fade-down-right"
      encType="multipart/form-data"
      onSubmit={addProgress}
      className="card md:grid grid-cols-2 gap-3"
      action=""
    >
      <div className="space-y-2">
        <LabelForm
          longText={true}
          value={allData.evaluasi}
          onChange={(e) => setAllData({ ...allData, evaluasi: e.target.value })}
          name={"Evaluasi"}
        >
          Evaluasi program kerja
        </LabelForm>
        <LabelForm
          longText={true}
          value={allData.hambatan}
          onChange={(e) => setAllData({ ...allData, hambatan: e.target.value })}
          name={"Hambatan"}
        >
          Hambatan program kerja
        </LabelForm>
        <LabelForm
          name={"Tanggal Realisasi Pelaksanaan"}
          value={allData.tanggalRealisasi}
          onChange={(e) =>
            setAllData({ ...allData, tanggalRealisasi: e.target.value })
          }
          type={"date"}
        >
          00/00/0000
        </LabelForm>
        <LabelForm
          name={"Realisasi Anggaran"}
          onChange={(e) =>
            setAllData({
              ...allData,
              jumlahRealisasi: formatRupiah(e.target.value),
            })
          }
          value={formatRupiah(`${allData.jumlahRealisasi}`)}
          type={"text"}
        >
          Realisasi anggaran
        </LabelForm>
        <LabelForm
          name={"Status Program Kerja"}
          dataOption={option}
          option={true}
          onChange={(e) =>
            setAllData({
              ...allData,
              status:
                (allData.status == 1 && "Rencana") ||
                (allData.status == 2 && "Progress") ||
                (allData.status == 3 && "Selesai"),
            })
          }
          value={
            (allData.status == "Rencana" && 1) ||
            (allData.status == "Progress" && 2) ||
            (allData.status == "Selesai" && 3)
          }
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
            {images.length > 0 &&
              images?.map((image, index) => {
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
            {images.length < 1 &&
              tmpImg.map((item, index) => (
                <Image
                  key={index}
                  src={`/documentation/${item}`}
                  alt={item}
                  quality={100}
                  width={30}
                  height={80}
                  unoptimized
                  className="w-full rounded-md my-3"
                />
              ))}
          </div>
          <div className="button font-semibold text-center">
            <span>+ Tambahkan Media</span>
            <input
              className="hidden"
              onChange={(e) => handleFileSelected(e)}
              type="file"
              multiple
              accept="image/png, image/jpeg"
              name="image"
              id="image"
            />
          </div>
        </label>
      </div>
      <button
        className={`button font-semibold ${loading && "opacity-70"}`}
        disabled={loading}
        type="submit"
      >
        {loading ? "Loading..." : "Tambah Progress"}
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
