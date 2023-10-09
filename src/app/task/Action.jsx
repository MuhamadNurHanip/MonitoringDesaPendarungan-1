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
      method();
      return (
        <div className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      );
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <button
          className="outline-none"
          onClick={() =>
            document.getElementById(`modal_${item.id}`).showModal()
          }
        >
          <Image
            className="cursor-pointer"
            width={18}
            height={18}
            alt="view-icon"
            src={"/view.svg"}
          />
        </button>
        {data?.user.roleuser == "admin" && (
          <>
            <Link href={`/task/edit/${item.id}`}>
              <Image
                className="cursor-pointer"
                width={15}
                height={15}
                alt="edit-icon"
                src={"/edit.svg"}
              />
            </Link>
            <Image
              onClick={deleteData}
              className="cursor-pointer"
              width={14}
              height={14}
              alt="trash-icon"
              src={"/trash.svg"}
            />
          </>
        )}
      </div>
      <dialog id={`modal_${item.id}`} className="modal overflow-y-scroll">
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
            {item.dokumentasi?.split(";").map((item, index) => (
              <Image
                key={index}
                className="w-full md:w-48 h-24 rounded-lg object-cover"
                width={0}
                height={0}
                alt={item}
                unoptimized
                src={`/documentation/${item}`}
              />
            ))}
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
