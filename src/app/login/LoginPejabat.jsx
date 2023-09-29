import LabelForm from "@/components/LabelForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPejabat = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  const getPejabatDesa = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users`
    );
    setUsers(response.data.data);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    users.map((user) => {
      if (user.username == username && user.password == password) {
        if (user.roleuser == "pejabatdesa") {
          localStorage.setItem("key", "pejabatdesa");
          alert("Anda berhasil login!");
          router.push("/");
        } else {
          alert("Anda bukan pejabat desa!");
        }
      } else {
        alert("Username/Password salah!");
      }
    });
  };

  useEffect(() => {
    getPejabatDesa();
  }, []);
  return (
    <form onSubmit={handleLogin} className="space-y-2" action="">
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
