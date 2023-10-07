import { prisma } from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const method = params.slug[0];
    const id = params.slug[1];
    console.log(method, id);
    if (method == "addprogress") {
      const request = await req.json();
      const response = await prisma.proker.update({
        where: { id: Number(id) },
        data: { status: request.status },
      });
      return NextResponse.json(
        { message: "PATCH Data by Id", response },
        { status: 200 }
      );
    } else {
      const data = await req.formData();
      const evaluasi = data.get("evaluasi");
      const hambatan = data.get("hambatan");
      const tanggalRealisasi = data.get("tanggalRealisasi");
      const jumlahRealisasi = Number(data.get("jumlahRealisasi"));
      const status = data.get("status");
      // const images = data.get("images");
      // console.log(images);
      // images.map((item) => console.log(item));

      const response = await prisma.proker.update({
        where: { id: Number(id) },
        data: { evaluasi, hambatan, tanggalRealisasi, jumlahRealisasi, status },
      });
      console.log(method, id);
      return NextResponse.json(
        { message: "PATCH Data by Id", response },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error.message);
  }
};
