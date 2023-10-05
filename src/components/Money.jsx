"use client";
import { getYear } from "@/lib/getYear";
import { setMoney } from "@/lib/setMoney";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Money = () => {
  const [sumberDana, setSumberDana] = useState(0);
  const [jumlahDana, setJumlahDana] = useState(0);
  const [jumlahRealisasi, setJumlahRealisasi] = useState(0);
  const [loading, setLoading] = useState(true);

  const getSumberDana = async () => {
    try {
      const data = (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/funds`))
        .data.data;
      setSumberDana(data.length);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const currentThisYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
  };

  const getJumlahDana = async () => {
    try {
      const data = (
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/proker`)
      ).data.data;
      data.map((item) => {
        if (getYear(item.tanggal) == currentThisYear()) {
          setJumlahDana((prev) => prev + item.jumlahAnggaran);
          setJumlahRealisasi((prev) => prev + item.jumlahRealisasi);
        }
      });
      setLoading(false);
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
        <div
          className={`flex ${
            loading && "animate-pulse"
          } items-center gap-3 shadow-custom p-2 rounded-md`}
        >
          {loading ? (
            <div className="w-10 h-10 rounded-md bg-slate-200 animate-pulse"></div>
          ) : (
            <Image
              alt="icon-money"
              className="row-span-2"
              width={35}
              height={35}
              src={"/jumlah.svg"}
            />
          )}
          <div className={`flex flex-col ${loading && "gap-3"}`}>
            {loading ? (
              <div className="h-2 w-16 rounded-full bg-slate-200 animate-pulse"></div>
            ) : (
              <p className="text-xs">Jumlah Dana</p>
            )}
            {loading ? (
              <div className="h-2 w-52 rounded-full bg-slate-200 animate-pulse"></div>
            ) : (
              <p className="font-bold">{setMoney(jumlahDana)}</p>
            )}
          </div>
        </div>
        <div
          className={`flex ${
            loading && "animate-pulse"
          } items-center gap-3 shadow-custom p-2 rounded-md`}
        >
          {loading ? (
            <div className="w-10 h-10 rounded-md bg-slate-200 animate-pulse"></div>
          ) : (
            <Image
              alt="icon-money"
              className="row-span-2"
              width={35}
              height={35}
              src={"/realisasi.svg"}
            />
          )}
          <div className={`flex flex-col ${loading && "gap-3"}`}>
            {loading ? (
              <div className="h-2 w-16 rounded-full bg-slate-200 animate-pulse"></div>
            ) : (
              <p className="text-xs">Realisasi Dana</p>
            )}
            {loading ? (
              <div className="h-2 w-52 rounded-full bg-slate-200 animate-pulse"></div>
            ) : (
              <p className="font-bold">{setMoney(jumlahRealisasi)}</p>
            )}
          </div>
        </div>
        <div
          className={`flex ${
            loading && "animate-pulse"
          } items-center gap-3 shadow-custom p-2 rounded-md`}
        >
          {loading ? (
            <div className="w-10 h-10 rounded-md bg-slate-200 animate-pulse"></div>
          ) : (
            <Image
              alt="icon-money"
              className="row-span-2 ml-2"
              width={25}
              height={25}
              src={"/sumber.svg"}
            />
          )}
          <div className={`flex flex-col ${loading && "gap-3"}`}>
            {loading ? (
              <div className="h-2 w-16 rounded-full bg-slate-200 animate-pulse"></div>
            ) : (
              <p className="text-xs">Sumber Dana</p>
            )}
            {loading ? (
              <div className="h-2 w-52 rounded-full bg-slate-200 animate-pulse"></div>
            ) : (
              <p className="font-bold">{sumberDana}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Money;
