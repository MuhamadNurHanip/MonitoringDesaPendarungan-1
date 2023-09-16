import { prisma } from "@/lib/prismaclient";
import { NextResponse } from "next/server";

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
    const data = await req.json();
    const response = await prisma.proker.update({
      where: { id: Number(id) },
      data,
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
