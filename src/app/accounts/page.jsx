import Header from "@/components/Header";
import AddAccount from "./AddAccount";
import ListAccount from "@/components/ListAccount";

const Accounts = () => {
  return (
    <main>
      <Header page={"Manajemen Akun"} />
      <div className="flex flex-col gap-3 md:flex-row">
        <AddAccount />
        <ListAccount />
      </div>
    </main>
  );
};

export default Accounts;
