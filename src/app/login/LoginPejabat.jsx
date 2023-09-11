import LabelForm from "@/components/LabelForm";

const LoginPejabat = () => {
  return (
    <form className="space-y-2" action="">
      <LabelForm name={"Username"} type={"text"}>
        Masukkan username anda...
      </LabelForm>
      <LabelForm name={"Password"} type={"password"}>
        Masukkan password anda...
      </LabelForm>
      <button className="button w-full font-semibold" type="submit">
        Masuk sebagai Pejabat Desa
      </button>
    </form>
  );
};

export default LoginPejabat;
