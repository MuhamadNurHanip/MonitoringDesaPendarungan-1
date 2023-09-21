import LabelForm from "@/components/LabelForm";

const SetProgress = ({ option, onChange }) => {
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
            onChange={onChange}
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
          <button className="button w-full mt-5" type="button">
            Tambah Progress Program Kerja
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
