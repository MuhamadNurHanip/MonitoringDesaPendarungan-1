"use client";
import { Rencana } from "@/components/Status";
import Image from "next/image";
import Link from "next/link";

const Action = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <button
          className="outline-none"
          onClick={() => window.modal.showModal()}
        >
          <Image
            className="cursor-pointer"
            width={25}
            height={25}
            alt="view-icon"
            src={"/view.svg"}
          />
        </button>
        <Link href={"/task/edit"}>
          <Image
            className="cursor-pointer"
            width={22}
            height={22}
            alt="edit-icon"
            src={"/edit.svg"}
          />
        </Link>
        <Image
          className="cursor-pointer"
          width={18}
          height={18}
          alt="trash-icon"
          src={"/trash.svg"}
        />
      </div>
      <dialog id="modal" className="modal overflow-y-scroll">
        <div className="modal-box max-w-2xl mx-3 w-11/12 no-scrollbar bg-white">
          <div className="flex gap-3 my-3">
            <span className="block bg-black w-[3px] rounded-full"></span>
            <h1 className="font-bold text-lg">Detail Program Kerja</h1>
          </div>
          <h3 className="font-bold">Judul Program Kerja</h3>
          <p className="pb-2">Program Lingkungan Bersih</p>
          <h3 className="font-bold">Deskripsi Program Kerja</h3>
          <p className="pb-2">
            Mengadakan kampanye pembersihan rutin di sekitar desa, termasuk
            pengumpulan sampah dan daur ulang. Memasang tempat sampah yang
            strategis dan memberikan edukasi kepada penduduk tentang pemilahan
            sampah. Menanam pohon dan tanaman hias di sekitar desa untuk
            meningkatkan keindahan dan kesejukan lingkungan.
          </p>
          <h3 className="font-bold">Hambatan Program Kerja</h3>
          <p className="pb-2">Kurangnya kesadaran Masyarakat</p>
          <h3 className="font-bold">Evaluasi Program Kerja</h3>
          <p className="pb-2">
            Pemerintah desa perlu melakukan sosialisasi mengenai kesadaran
            lingkungan desa
          </p>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-bold">Sumber Dana</h3>
              <p className="pb-2">Kementrian Keuangan</p>
            </div>
            <div>
              <h3 className="font-bold">Status Program Kerja</h3>
              <Rencana />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-bold">Jumlah Anggaran</h3>
              <p className="pb-2">Rp. 20.000.000</p>
            </div>
            <div>
              <h3 className="font-bold">Jumlah Realisasi Anggaran</h3>
              <p className="pb-2">Rp. 20.000.000</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-bold">Tanggal Pelaksanaan</h3>
              <p className="pb-2">12/12/2023</p>
            </div>
            <div>
              <h3 className="font-bold">Realisasi Tanggal Pelaksanaan</h3>
              <p className="pb-2">12/12/2023</p>
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
