"use client";
import axios from "axios";
import { useState } from "react";

const SetProgress = ({ option, getProker }) => {
  const [idItem, setIdItem] = useState();
  const [loading, setLoading] = useState(false);

  const addProgress = async () => {
    try {
      setLoading(true);
      const add = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/proker/addprogress/${idItem}`,
        { status: "Progress" }
      );
      if (add) alert("Data berhasil ditambahkan ke progress!");
      getProker();
      setLoading(false);
      return;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <label htmlFor="my_modal_7" className="button w-max cursor-pointer">
        Tambah Progress Program Kerja
      </label>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  bg-second-color text-black">
          <select
            required
            onChange={(e) => setIdItem(e.target.value)}
            className="p-2 placeholder:text-xs w-full outline-none border border-primary-color text-primary-color bg-second-color rounded-md"
            name="Progress Program Kerja"
            id="Progress Program Kerja"
          >
            <option defaultChecked>Pilih Progress Program Kerja</option>
            {option.map((item) => {
              if (item.status == "Rencana")
                return (
                  <option key={item.id} value={item.id}>
                    {item.judul}
                  </option>
                );
            })}
          </select>
          <button
            onClick={() => addProgress()}
            className={`button w-full mt-5 ${loading && "opacity-60"}`}
            type="button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Tambah Progress Program Kerja"}
          </button>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default SetProgress;
