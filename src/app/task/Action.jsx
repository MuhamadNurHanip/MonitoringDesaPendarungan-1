"use client";
import { Finish, Process, Rencana } from "@/components/Status";
import { setMoney } from "@/lib/setMoney";
import { setDate } from "@/lib/setDate";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";

const Action = ({ item, method }) => {
  const { data } = useSession();
  const deleteData = async () => {
    const konfirmasi = confirm(
      "Apakah anda yakin ingin menghapus item berikut?"
    );
    if (konfirmasi) {
      const deleteItem = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/proker/${item.id}`
      );
      if (!deleteItem) return alert("Delete data gagal! something wrong!");
      alert("Delete data berhasil");
      method();
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <button
          className="outline-none"
          onClick={() => document.getElementById("modal").showModal()}
        >
          <Image
            className="cursor-pointer"
            width={25}
            height={25}
            alt="view-icon"
            src={"/view.svg"}
          />
        </button>
        {data?.user.roleuser == "admin" && (
          <>
            <Link href={`/task/edit/${item.id}`}>
              <Image
                className="cursor-pointer"
                width={22}
                height={22}
                alt="edit-icon"
                src={"/edit.svg"}
              />
            </Link>
            <Image
              onClick={deleteData}
              className="cursor-pointer"
              width={18}
              height={18}
              alt="trash-icon"
              src={"/trash.svg"}
            />
          </>
        )}
      </div>
      <dialog id="modal" className="modal overflow-y-scroll">
        <div className="modal-box max-w-2xl mx-3 w-11/12 no-scrollbar bg-white">
          <div className="flex gap-3 my-3">
            <span className="block bg-black w-[3px] rounded-full"></span>
            <h1 className="font-bold text-lg">Detail Program Kerja</h1>
          </div>
          <h3 className="font-bold">Judul Program Kerja</h3>
          <p className="pb-2">{item.judul}</p>
          <h3 className="font-bold">Deskripsi Program Kerja</h3>
          <p className="pb-2">{item.deskripsi}</p>
          <h3 className="font-bold">Hambatan Program Kerja</h3>
          <p className="pb-2">{item.hambatan || "Belum ada"}</p>
          <h3 className="font-bold">Evaluasi Program Kerja</h3>
          <p className="pb-2">{item.evaluasi || "Belum ada"}</p>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-bold">Sumber Dana</h3>
              <p className="pb-2">{item.fundsName}</p>
            </div>
            <div>
              <h3 className="font-bold">Status Program Kerja</h3>
              {item.status == "Rencana" && <Rencana />}
              {item.status == "Progress" && <Process />}
              {item.status == "Selesai" && <Finish />}
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-bold">Jumlah Anggaran</h3>
              <p className="pb-2">{setMoney(item.jumlahAnggaran)}</p>
            </div>
            <div>
              <h3 className="font-bold">Jumlah Realisasi Anggaran</h3>
              <p className="pb-2">
                {item.jumlahRealisasi
                  ? setMoney(item.jumlahRealisasi)
                  : "Belum ada"}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-bold">Tanggal Pelaksanaan</h3>
              <p className="pb-2">{setDate(item.tanggal)}</p>
            </div>
            <div>
              <h3 className="font-bold">Realisasi Tanggal Pelaksanaan</h3>
              <p className="pb-2">
                {item.tanggalRealisasi
                  ? setDate(item.tanggalRealisasi)
                  : "Belum ada"}
              </p>
            </div>
          </div>
          <h3 className="font-bold">Dokumentasi Program Kerja</h3>
          <div className="flex gap-3 flex-wrap mt-2">
            <Image
              className="w-full md:w-48 h-24 rounded-lg object-cover"
              width={0}
              height={0}
              alt="Gallery-dokumentasi"
              src={"/gallery/gallery1.jpg"}
            />
            <Image
              className="w-full md:w-48 h-24 rounded-lg object-cover"
              width={0}
              height={0}
              alt="Gallery-dokumentasi"
              src={"/gallery/gallery1.jpg"}
            />
            <Image
              className="w-full md:w-48 h-24 rounded-lg object-cover"
              width={0}
              height={0}
              alt="Gallery-dokumentasi"
              src={"/gallery/gallery1.jpg"}
            />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop h-full">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Action;
