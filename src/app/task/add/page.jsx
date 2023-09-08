import Header from "@/components/Header";
import LabelForm from "@/components/LabelForm";

const AddTask = () => {
  return (
    <main>
      <Header page={"Tambah Program Kerja"} />
      <form
        data-aos="fade-down-right"
        className="card md:grid gap-3 md:grid-cols-2"
        action=""
      >
        <div className="space-y-2">
          <LabelForm name={"Nama Program Kerja"} type={"text"}>
            Nama program kerja anda...
          </LabelForm>
          <LabelForm name={"Deskripsi"} longText={true} type={"text"}>
            Deskripsi program kerja anda...
          </LabelForm>
          <LabelForm name={"Tujuan"} longText={true} type={"text"}>
            Tujuan program kerja anda...
          </LabelForm>
          <LabelForm name={"Sasaran"} type={"text"}>
            Sasaran program kerja anda...
          </LabelForm>
        </div>
        <div className="space-y-2">
          <LabelForm name={"Tanggal Rencana"} type={"text"}>
            Tanggal rencana program kerja anda...
          </LabelForm>
          <LabelForm name={"Penyelenggara"} type={"text"}>
            Penyelenggara program kerja anda...
          </LabelForm>
          <LabelForm name={"Sumber Dana"} option={true}>
            Sumber dana program kerja anda...
          </LabelForm>
          <LabelForm name={"Jumlah Anggaran"} type={"text"}>
            Julah anggaran program kerja anda...
          </LabelForm>
          <LabelForm name={"Tahun Anggaran"} type={"text"}>
            Tahun anggaran program kerja anda...
          </LabelForm>
        </div>
        <button
          className="button w-full font-semibold col-span-2"
          type="submit"
        >
          Edit Program Kerja
        </button>
      </form>
    </main>
  );
};

export default AddTask;
