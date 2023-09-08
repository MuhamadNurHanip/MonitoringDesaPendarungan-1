import Header from "@/components/Header";
import LabelForm from "@/components/LabelForm";

const AddProgress = () => {
  return (
    <main>
      <Header page={"Tambah Progress Kerja"} />
      <form
        data-aos="fade-down-right"
        className="card md:grid grid-cols-2 gap-3"
        action=""
      >
        <div className="space-y-2">
          <LabelForm longText={true} name={"Evaluasi"}>
            Evaluasi program kerja
          </LabelForm>
          <LabelForm longText={true} name={"Hambatan"}>
            Hambatan program kerja
          </LabelForm>
          <LabelForm name={"Tanggal Realisasi Pelaksanaan"} type={"date"}>
            00/00/0000
          </LabelForm>
          <LabelForm name={"Realisasi Anggaran"} type={"number"}>
            Realisasi anggaran
          </LabelForm>
          <LabelForm name={"Status Program Kerja"} option={true}>
            Status Program Kerja
          </LabelForm>
        </div>
        <div>
          <label className="flex flex-col" htmlFor="image">
            <span className="font-medium">
              Dokumentasi Kegiatan Program Kerja
            </span>
            <div className="button font-semibold text-center">
              <span>+ Tambahkan Media</span>
              <input className="hidden" type="file" name="image" id="image" />
            </div>
          </label>
        </div>
        <button className="button font-semibold" type="submit">
          Tambah Progress
        </button>
      </form>
    </main>
  );
};

export default AddProgress;
