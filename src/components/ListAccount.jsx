const ListAccount = () => {
  return (
    <section className="card md:order-last space-y-3">
      <h1 className="title-section">Accounts</h1>
      <div className="flex gap-3 items-center">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="profiles/profile1.jpg" />
          </div>
        </div>
        <div>
          <p className="font-semibold">Andi Irawan</p>
          <p className="text-xs opacity-80">Pejabat Desa</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="profiles/profile1.jpg" />
          </div>
        </div>
        <div>
          <p className="font-semibold">Andi Irawan</p>
          <p className="text-xs opacity-80">Pejabat Desa</p>
        </div>
      </div>
    </section>
  );
};

export default ListAccount;
