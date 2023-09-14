import { prisma } from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export const PATCH = async (req) => {
  try {
    const data = await req.json();
    const id = await req.url.split("/")[6];
    await prisma.funds.update({ where: { id: Number(id) }, data });
    return NextResponse.json(
      { message: "Edit Data Success!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const DELETE = async (req) => {
  try {
    const id = await req.url.split("/")[6];
    await prisma.funds.delete({ where: { id: Number(id) } });
    return NextResponse.json(
      { message: "Delete data success!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};
