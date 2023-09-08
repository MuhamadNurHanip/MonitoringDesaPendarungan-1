import Image from "next/image";

const Gallery = () => {
  return (
    <section
      data-aos="fade-down"
      className="w-full md:h-80 flex flex-col md:flex-row gap-3 md:gap-3 p-3 rounded-lg shadow-custom my-3"
    >
      <div className="w-full md:w-1/2 space-y-3 h-full">
        <Image
          className="w-full rounded-md object-cover h-44 md:h-1/2"
          width={300}
          height={0}
          alt="Gallery-Image"
          src={"/gallery/gallery1.jpg"}
        />
        <Image
          className="w-full rounded-md object-cover h-44 md:h-1/2"
          width={300}
          height={0}
          alt="Gallery-Image"
          src={"/gallery/gallery1.jpg"}
        />
      </div>
      <Image
        className="rounded-md w-full md:w-1/2 object-cover h-44 md:h-full"
        width={300}
        height={0}
        alt="Gallery-Image"
        src={"/gallery/gallery1.jpg"}
      />
    </section>
  );
};

export default Gallery;
