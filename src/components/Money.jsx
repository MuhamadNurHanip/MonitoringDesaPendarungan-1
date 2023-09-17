"use client";
import { setMoney } from "@/lib/setMoney";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Money = () => {
  const [sumberDana, setSumberDana] = useState(0);
  const [jumlahDana, setJumlahDana] = useState(0);
  const [jumlahRealisasi, setJumlahRealisasi] = useState(0);

  const getSumberDana = async () => {
    try {
      const data = (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/funds`))
        .data.data;
      setSumberDana(data.length);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getJumlahDana = async () => {
    try {
      const data = (
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/proker`)
      ).data.data;
      data.map((item) => {
        setJumlahDana(jumlahDana + item.jumlahAnggaran);
        setJumlahRealisasi(jumlahRealisasi + item.jumlahRealisasi);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSumberDana();
    getJumlahDana();
  }, []);

  return (
    <section data-aos="fade-down-right" className="w-full">
      <h1 className="font-extrabold text-xl mb-3">Dana Desa Pendarungan</h1>
      <div className="space-y-2">
        <div className="flex items-center gap-3 shadow-custom p-2 rounded-md">
          <Image
            alt="icon-money"
            className="row-span-2"
            width={35}
            height={35}
            src={"/jumlah.svg"}
          />
          <div>
            <p className="text-xs">Jumlah Dana</p>
            <p className="font-bold">{setMoney(jumlahDana)}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shadow-custom p-2 rounded-md">
          <Image
            alt="icon-money"
            className="row-span-2"
            width={35}
            height={35}
            src={"/realisasi.svg"}
          />
          <div>
            <p className="text-xs">Realisasi Dana</p>
            <p className="font-bold">{setMoney(jumlahRealisasi)}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shadow-custom p-2 rounded-md">
          <Image
            alt="icon-money"
            className="row-span-2 ml-2"
            width={25}
            height={25}
            src={"/sumber.svg"}
          />
          <div>
            <p className="text-xs">Sumber Dana</p>
            <p className="font-bold">{sumberDana}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Money;
