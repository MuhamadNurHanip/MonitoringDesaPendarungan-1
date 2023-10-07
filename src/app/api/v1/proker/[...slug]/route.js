import { prisma } from "@/lib/prismaclient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const id = params.slug[0];
    const data = await prisma.proker.findUnique({ where: { id: Number(id) } });
    return NextResponse.json(
      { message: "GET Data by Id", data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const method = params.slug[0];
    const id = params.slug[1];
    const request = await req.json();

    if (method == "addprogress") {
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
      return NextResponse.json(
        { message: "PATCH Data by Id" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const id = params.slug[0];
    const response = await prisma.proker.delete({ where: { id: Number(id) } });
    return NextResponse.json(
      { message: "PATCH Data by Id", response },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};
