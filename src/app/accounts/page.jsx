import Header from "@/components/Header";
import ManageAccount from "./ManageAccount";

const Accounts = () => {
  return (
    <main>
      <Header page={"Manajemen Akun"} />
      <div className="flex flex-col gap-3 md:flex-row">
        <ManageAccount />
      </div>
    </main>
  );
};

export default Accounts;
