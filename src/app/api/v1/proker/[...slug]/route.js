import { prisma } from "@/lib/prismaclient";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

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
    } else if (method == "editdata") {
      const data = await req.json();
      const response = await prisma.proker.update({
        where: { id: Number(id) },
        data,
      });
      return NextResponse.json(
        { message: "PATCH Data by Id", response },
        { status: 200 }
      );
    } else {
      const data = await req.formData();
      const dataLength = [...data.entries()].length;
      const evaluasi = data.get("evaluasi");
      const hambatan = data.get("hambatan");
      const tanggalRealisasi = data.get("tanggalRealisasi");
      const jumlahRealisasi = Number(data.get("jumlahRealisasi"));
      const status = data.get("status");
      let dokumentasi = "";
      for (let i = 0; i < dataLength - 5; i++) {
        const images = data.get(`images_${i}`);
        if (typeof images == "string") {
          if (i != 0) {
            dokumentasi += `;${images}`;
          } else {
            dokumentasi += images;
          }
        } else {
          const bytes = await images.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const ext = images.name.split(".");
          const fileName =
            ext[0].toLowerCase() +
            Math.floor(Math.random() * 10) +
            "." +
            ext[1];
          if (i == dataLength - 6) {
            dokumentasi += `${fileName}`;
          } else {
            dokumentasi += `${fileName};`;
          }
          const path = join("./public/documentation", fileName);
          await writeFile(path, buffer);
        }
      }
      const response = await prisma.proker.update({
        where: { id: Number(id) },
        data: {
          evaluasi,
          hambatan,
          tanggalRealisasi,
          jumlahRealisasi,
          status,
          dokumentasi: dokumentasi || null,
        },
      });
      return NextResponse.json(
        { message: "PATCH Data by Id", response },
        { status: 201 }
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
