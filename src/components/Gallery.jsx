const { default: Image } = require("next/image");

const Gallery = () => {
  return (
    <section className="w-full md:h-80 flex flex-col md:flex-row gap-3 md:gap-3 p-3 rounded-lg shadow-custom my-3">
      <div className="w-full md:w-1/2 space-y-3 h-full">
        <img
          className="w-full rounded-md object-cover h-44 md:h-1/2"
          width={0}
          height={0}
          alt="Gallery-Image"
          src={"/gallery/gallery1.jpg"}
        />
        <img
          className="w-full rounded-md object-cover h-44 md:h-1/2"
          width={0}
          height={0}
          alt="Gallery-Image"
          src={"/gallery/gallery1.jpg"}
        />
      </div>
      <img
        className="rounded-md w-full md:w-1/2 object-cover h-44 md:h-full"
        width={0}
        height={0}
        alt="Gallery-Image"
        src={"/gallery/gallery1.jpg"}
      />
    </section>
  );
};

export default Gallery;
