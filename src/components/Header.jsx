const Header = ({ page }) => {
  return (
    <header data-aos="fade-down">
      <p>Selamat Pagi, Malik!</p>
      <div className="flex gap-3 my-3">
        <span className="block bg-black w-[3px] rounded-full"></span>
        <h1 className="font-bold">{page}</h1>
      </div>
    </header>
  );
};

export default Header;
