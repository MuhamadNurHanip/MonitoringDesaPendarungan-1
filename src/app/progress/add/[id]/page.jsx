import Header from "@/components/Header";
import FormAdd from "./FormAdd";

const AddProgress = ({ params }) => {
  return (
    <main>
      <Header page={"Tambah Progress Kerja"} />
      <FormAdd id={params.id} />
    </main>
  );
};

export default AddProgress;
