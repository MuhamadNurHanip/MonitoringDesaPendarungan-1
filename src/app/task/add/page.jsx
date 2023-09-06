import Header from "@/components/Header";
import LabelForm from "@/components/LabelForm";

const AddTask = () => {
  return (
    <main>
      <Header page={"Tambah Program Kerja"} />
      <div className="card">
        <form className="space-y-2" action="">
          <LabelForm name={"Nama Program Kerja"} type={"text"}>
            Nama program kerja anda...
          </LabelForm>
          <LabelForm name={"Deskripsi"} longText={true} type={"text"}>
            Deskripsi program kerja anda...
          </LabelForm>
          <LabelForm name={"Tujuan"} longText={true} type={"text"}>
            Tujuan program kerja anda...
          </LabelForm>
          <LabelForm name={"Sasaran"} longText={true} type={"text"}>
            Sasaran program kerja anda...
          </LabelForm>
          <LabelForm name={"Tanggal Rencana"} type={"text"}>
            Tanggal rencana program kerja anda...
          </LabelForm>
          <LabelForm name={"Penyelenggara"} type={"text"}>
            Penyelenggara program kerja anda...
          </LabelForm>
          <LabelForm name={"Sumber Dana"} type={"text"}>
            Sumber dana program kerja anda...
          </LabelForm>
          <LabelForm name={"Jumlah Anggaran"} type={"text"}>
            Julah anggaran program kerja anda...
          </LabelForm>
          <LabelForm name={"Tahun Anggaran"} type={"text"}>
            Tahun anggaran program kerja anda...
          </LabelForm>
          <button className="button w-full" type="submit">
            Tambahkan Program Kerja
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddTask;
