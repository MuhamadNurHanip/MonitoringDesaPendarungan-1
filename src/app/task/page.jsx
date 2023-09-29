import Header from "@/components/Header";
import TableProker from "./TableProker";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

const Task = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <Header page={"Program Kerja"} />
      <TableProker />
    </main>
  );
};

export default Task;
