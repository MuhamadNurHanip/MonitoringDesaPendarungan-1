import { prisma } from "@/lib/prismaclient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const id = await req.url.split("/")[6];
    const data = await prisma.proker.findUnique({ where: { id: Number(id) } });
    return NextResponse.json(
      { message: "GET Data by Id", data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const PATCH = async (req) => {
  try {
    const id = await req.url.split("/")[6];
    const data = await req.formData();
    const evaluasi = data.get("evaluasi");
    const hambatan = data.get("hambatan");
    const tanggalRealisasi = data.get("tanggalRealisasi");
    const jumlahRealisasi = Number(data.get("jumlahRealisasi"));
    const status = data.get("status");
    // const images = data.get("images");
    // images.map((item) => console.log(item));

    const response = await prisma.proker.update({
      where: { id: Number(id) },
      data: { evaluasi, hambatan, tanggalRealisasi, jumlahRealisasi, status },
    });
    return NextResponse.json(
      { message: "PATCH Data by Id", response },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const DELETE = async (req) => {
  try {
    const id = await req.url.split("/")[6];
    const response = await prisma.proker.delete({ where: { id: Number(id) } });
    return NextResponse.json(
      { message: "PATCH Data by Id", response },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};
