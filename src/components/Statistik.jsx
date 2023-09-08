const Statistik = () => {
  return (
    <section data-aos="fade-down-left" className="card my-3">
      <h1 className="title-section">Statistik Desa</h1>
      <div>
        <p>Program Kerja</p>
        <div className="flex items-center gap-3 my-1">
          <p className="text-lg font-bold">23</p>
          <progress
            className="progress progress-info w-56"
            value="100"
            max="100"
          ></progress>
        </div>
      </div>
      <div>
        <p>Progress Program Kerja</p>
        <div className="flex items-center gap-3 my-1">
          <p className="text-lg font-bold">15</p>
          <progress
            className="progress progress-warning w-56"
            value="60"
            max="100"
          ></progress>
        </div>
      </div>
      <div>
        <p>Program Kerja Selesai</p>
        <div className="flex items-center gap-3 my-1">
          <p className="text-lg font-bold">3</p>
          <progress
            className="progress progress-success w-56"
            value="20"
            max="100"
          ></progress>
        </div>
      </div>
    </section>
  );
};

export default Statistik;
