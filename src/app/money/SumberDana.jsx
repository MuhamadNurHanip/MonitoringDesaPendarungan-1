"use client";
import LabelForm from "@/components/LabelForm";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const SumberDana = () => {
  const [fund, setFund] = useState([]);
  const [edit, setEdit] = useState();
  const [valueEdit, setValueEdit] = useState();
  const { data } = useSession();

  const getFunds = async () => {
    const data = (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/funds`))
      .data.data;
    setFund(data);
  };

  const addFund = async (e) => {
    e.preventDefault();
    const nama = e.target[0].value;
    const add = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/funds`, {
      data: { nama },
    });
    if (!add) return alert("Add data failed!");
    getFunds();
    return alert("Add data success!");
  };

  const editFund = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/funds/${edit}`,
        { nama: valueEdit }
      );
      if (!data) return alert("Data gagal diubah!");
      getFunds();
      return alert("Data berhasil diubah!");
    } catch (error) {
      console.log("error.message");
    }
  };

  const deleteFund = async (id) => {
    try {
      const data = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/funds/${id}`
      );
      if (!data) return alert("Data gagal dihapus!");
      getFunds();
      return alert("Data berhasil dihapus!");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFunds();
  }, []);

  return (
    <section data-aos="fade-down-left" className="card w-full md:w-1/2">
      <h3 className="title-section">Sumber Dana</h3>
      <div>
        <ol className="list-decimal pl-3 font-medium">
          {fund.map((item) => (
            <li key={item.id}>
              <div className="flex justify-between items-center">
                <p>{item.nama}</p>
                {data?.user.roleuser == "admin" && (
                  <div className="flex gap-3">
                    <button
                      className="cursor-pointer outline-none"
                      onClick={() => {
                        setEdit(item.id);
                        setValueEdit(item.nama);
                        return window.edit.showModal();
                      }}
                    >
                      <Image
                        width={15}
                        height={15}
                        alt="edit-icon"
                        src={"/edit.svg"}
                      />
                    </button>
                    <button
                      onClick={() => {
                        const konfirmasi = confirm(
                          "Apakah anda yakin akan menghapus item in?"
                        );
                        if (konfirmasi) return deleteFund(item.id);
                      }}
                      className="cursor-pointer outline-none"
                    >
                      <Image
                        width={14}
                        height={14}
                        alt="trash-icon"
                        src={"/trash.svg"}
                      />
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
      {data?.user.roleuser == "admin" && (
        <button
          className="outline-none font-semibold mt-3 button"
          onClick={() => window.add.showModal()}
        >
          Tambah Sumber Dana
        </button>
      )}
      <dialog id="add" className="modal overflow-y-scroll">
        <div className="modal-box max-w-2xl mx-3 md:w-2/5 w-11/12 no-scrollbar bg-white">
          <form onSubmit={addFund} method="dialog" action="">
            <LabelForm name={"Nama Sumber Dana"} type={"text"}>
              Nama sumber dana
            </LabelForm>
            <button
              onClick={() => window.add.close()}
              className="button mt-3 w-full font-semibold"
              type="submit"
            >
              Tambah Sumber Dana
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop h-full">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="edit" className="modal overflow-y-scroll">
        <div className="modal-box max-w-2xl mx-3 md:w-2/5 w-11/12 no-scrollbar bg-white">
          <form onSubmit={editFund} action="">
            <LabelForm
              name={"Nama Sumber Dana"}
              value={valueEdit}
              onChange={(e) => setValueEdit(e.target.value)}
              type={"text"}
            >
              Nama sumber dana
            </LabelForm>
            <button
              onClick={() => window.edit.close()}
              className="button mt-3 w-full font-semibold"
              type="submit"
            >
              Edit Sumber Dana
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
