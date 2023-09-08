import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import ListAccount from "@/components/ListAccount";
import Money from "@/components/Money";
import Statistik from "@/components/Statistik";

const Home = () => {
  return (
    <main>
      <Header page={"Dashboard"} />
      <div
        data-aos="fade-down"
        className="flex flex-col md:flex-row gap-3 justify-between"
      >
        <Money />
        <Statistik />
      </div>
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <ListAccount />
        <Gallery />
      </div>
    </main>
  );
};

export default Home;
