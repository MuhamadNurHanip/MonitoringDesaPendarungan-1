"use client";
import LabelForm from "@/components/LabelForm";
import Image from "next/image";

const SumberDana = () => {
  return (
    <section data-aos="fade-down-left" className="card">
      <h3 className="title-section">Sumber Dana</h3>
      <div>
        <ol className="list-decimal pl-3 font-medium">
          <li>
            <div className="flex justify-between items-center">
              <p>Kementrian Keuangan</p>
              <div className="flex gap-3">
                <button
                  className="cursor-pointer outline-none"
                  onClick={() => window.modal.showModal()}
                >
                  <Image
                    width={20}
                    height={20}
                    alt="edit-icon"
                    src={"/edit.svg"}
                  />
                </button>
                <Image
                  width={18}
                  height={18}
                  alt="trash-icon"
                  src={"/trash.svg"}
                />
              </div>
            </div>
          </li>
        </ol>
      </div>
      <button
        className="outline-none font-semibold mt-3 button"
        onClick={() => window.modal.showModal()}
      >
        Tambah Sumber Dana
      </button>
      <dialog id="modal" className="modal overflow-y-scroll">
        <div className="modal-box max-w-2xl mx-3 md:w-2/5 w-11/12 no-scrollbar bg-white">
          <form action="">
            <LabelForm name={"Nama Sumber Dana"} type={"text"}>
              Nama sumber dana
            </LabelForm>
            <button className="button mt-3 w-full font-semibold" type="submit">
              Tambah Sumber Dana
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop h-full">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default SumberDana;
