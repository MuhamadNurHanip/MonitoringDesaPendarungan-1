import LabelForm from "@/components/LabelForm";

const AddAccount = () => {
  return (
    <section data-aos="fade-down-right" className="card">
      <h1 className="title-section">Tambah Akun Baru</h1>
      <form className="space-y-2" action="">
        <LabelForm name={"Nama Lengkap"} type={"text"}>
          Nama lengkap anda ...
        </LabelForm>
        <LabelForm name={"Password"} type={"password"}>
          Password anda ...
        </LabelForm>
        <LabelForm name={"Konfirmasi Password"} type={"password"}>
          Konfirmasi Password anda ...
        </LabelForm>
        <LabelForm name={"Role User"} option={true}>
          Pilih role user anda ...
        </LabelForm>
        <button className="button w-full font-semibold" type="submit">
          Tambahkan Akun
        </button>
      </form>
    </section>
  );
};

export default AddAccount;
