import LabelForm from "@/components/LabelForm";

const AddAccount = () => {
  return (
    <section className="card">
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
        <LabelForm name={"Role User"} type={"text"}>
          Pilih role user anda ...
        </LabelForm>
      </form>
    </section>
  );
};

export default AddAccount;
