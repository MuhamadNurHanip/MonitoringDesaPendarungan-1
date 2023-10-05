"use client";

import { getYear } from "@/lib/getYear";
import { hitungPercent } from "@/lib/setPercent";
import axios from "axios";
import { useEffect, useState } from "react";

const Statistik = () => {
  const [jumlahProker, setJumlahProker] = useState({ jumlah: 0, persen: 0 });
  const [progressProker, setProgressProker] = useState({
    jumlah: 0,
    persen: 0,
  });
  const [finishProker, setFinishProker] = useState({ jumlah: 0, persen: 0 });
  const [loading, setLoading] = useState(true);

  const currentThisYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
  };

  const getStatistik = async () => {
    try {
      const data = (
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/proker`)
      ).data.data;
      let progress = 0;
      let finish = 0;
      data.map((item) => {
        if (getYear(item.tanggal) == currentThisYear()) {
          setJumlahProker({ jumlah: data.length, persen: 100 });
          if (item.status == "Progress") {
            progress++;
          } else if (item.status == "Selesai") {
            finish++;
          }
        }
      });
      setProgressProker({
        jumlah: progress,
        persen: hitungPercent(progress, data.length),
      });
      setFinishProker({
        jumlah: finish,
        persen: hitungPercent(finish, data.length),
      });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getStatistik();
  }, []);

  return (
    <section data-aos="fade-down-left" className="card my-3">
      <h1 className="title-section">Statistik Desa</h1>
      <div className={`${loading && "flex animate-pulse flex-col gap-3"}`}>
        {loading ? (
          <div className="h-2 w-28 rounded-full bg-slate-200"></div>
        ) : (
          <p>Program Kerja</p>
        )}
        {loading ? (
          <div className="h-2 w-40 rounded-full bg-slate-200"></div>
        ) : (
          <div className="flex items-center gap-3 my-1">
            <p className="text-lg font-bold">{jumlahProker.jumlah}</p>
            <progress
              className="progress progress-info w-56"
              value={jumlahProker.persen}
              max="100"
            ></progress>
          </div>
        )}
      </div>
      <div className={`${loading && "flex animate-pulse flex-col gap-3 mt-3"}`}>
        {loading ? (
          <div className="h-2 w-28 rounded-full bg-slate-200"></div>
        ) : (
          <p>Progress Program Kerja</p>
        )}
        {loading ? (
          <div className="h-2 w-40 rounded-full bg-slate-200"></div>
        ) : (
          <div className="flex items-center gap-3 my-1">
            <p className="text-lg font-bold">{progressProker.jumlah}</p>
            <progress
              className="progress progress-warning w-56"
              value={progressProker.persen}
              max="100"
            ></progress>
          </div>
        )}
      </div>
      <div className={`${loading && "flex animate-pulse flex-col gap-3 mt-3"}`}>
        {loading ? (
          <div className="h-2 w-28 rounded-full bg-slate-200"></div>
        ) : (
          <p>Program Kerja Selesai</p>
        )}
        {loading ? (
          <div className="h-2 w-40 rounded-full bg-slate-200"></div>
        ) : (
          <div className="flex items-center gap-3 my-1">
            <p className="text-lg font-bold">{finishProker.jumlah}</p>
            <progress
              className="progress progress-success w-56"
              value={finishProker.persen}
              max="100"
            ></progress>
          </div>
        )}
      </div>
    </section>
  );
};

export default Statistik;
