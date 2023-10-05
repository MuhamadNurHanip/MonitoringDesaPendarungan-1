import Header from "@/components/Header";
import FormEdit from "./FormEdit";

const EditTask = ({ params }) => {
  return (
    <main>
      <Header page={"Edit Program Kerja"} />
      <FormEdit id={params.id} />
    </main>
  );
};

export default EditTask;
