import Image from "next/image";

const Money = () => {
  return (
    <section className="w-full">
      <h1 className="font-extrabold text-xl mb-3">Dana Desa Pendarungan</h1>
      <div className="space-y-2">
        <div className="flex items-center gap-3 shadow-custom p-2 rounded-md">
          <Image
            className="row-span-2"
            width={35}
            height={35}
            src={"/jumlah.svg"}
          />
          <div>
            <p className="text-xs">Jumlah Dana</p>
            <h5 className="font-bold">Rp. 17.000.000</h5>
          </div>
        </div>
        <div className="flex items-center gap-3 shadow-custom p-2 rounded-md">
          <Image
            className="row-span-2"
            width={35}
            height={35}
            src={"/realisasi.svg"}
          />
          <div>
            <p className="text-xs">Realisasi Dana</p>
            <h5 className="font-bold">Rp. 17.000.000</h5>
          </div>
        </div>
        <div className="flex items-center gap-3 shadow-custom p-2 rounded-md">
          <Image
            className="row-span-2 ml-2"
            width={25}
            height={25}
            src={"/sumber.svg"}
          />
          <div>
            <p className="text-xs">Sumber Dana</p>
            <h5 className="font-bold">12</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Money;
