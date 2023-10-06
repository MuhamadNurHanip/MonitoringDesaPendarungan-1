import Image from "next/image";

const Search = ({ search }) => {
  return (
    <label
      className="flex gap-3 w-max text-xs rounded-md p-2 border border-primary-color"
      htmlFor="search"
    >
      <Image width={16} height={16} alt="Search-icon" src={"/search.svg"} />
      <input
        className="bg-second-color outline-none"
        placeholder="Cari program kerja"
        type="text"
        name="search"
        onChange={(e) => search(e.target.value)}
        id="search"
      />
    </label>
  );
};

export default Search;
